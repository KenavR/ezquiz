import { Component, OnInit } from '@angular/core';

import { LoginPage, LoginFormState } from './login.component';
import { AuthService } from '@ezquiz/common/services/auth.service';
import { tap, map, flatMap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { EzqUser } from '@ezquiz/models';

import emojis from '../../data/emojis';
import { UserService } from '@ezquiz/common';

@Component({
  selector: 'ezq-login-container',
  template: `
    <ezq-login
      [state]="formState"
      (state-changed)="updateState($event)"
      (login)="login()"
      (signup)="signup()"
    ></ezq-login>
  `,
  styles: []
})
export class LoginContainer implements OnInit {
  private formState: LoginFormState = {
    email: '',
    password: '',
    error: false,
    page: LoginPage.LOGIN
  };

  constructor(
    private authService: AuthService,
    private userService: UserService,
    private router: Router
  ) {
    this.redirect = this.redirect.bind(this);
  }

  ngOnInit(): void {
    function extractPage(url: string) {
      switch (url) {
        case '/login':
          return LoginPage.LOGIN;
        case '/signup':
          return LoginPage.SIGN_UP;
        default:
          return LoginPage.LOGIN;
      }
    }

    const page = extractPage(this.router.url);
    this.formState = { ...this.formState, ...{ page } };
  }

  updateState(update: Partial<LoginFormState>) {
    this.formState = { ...this.formState, ...update };
  }

  private redirect(this: LoginContainer, path: string) {
    this.router.navigateByUrl(path);
  }

  login() {
    function handleError(this: LoginContainer, error: any) {
      this.formState = {
        email: '',
        password: '',
        error: true,
        page: this.formState.page
      };
    }

    this.authService
      .login(this.formState.email, this.formState.password)
      .subscribe(this.redirect.bind(this, '/quiz'), handleError.bind(this));
  }

  signup() {
    function handleError(this: LoginContainer, error: any) {
      console.error('Error while signing up: ', error);
      this.formState = {
        email: '',
        password: '',
        error: true,
        page: this.formState.page
      };
    }

    function getNewUser(credentials: firebase.auth.UserCredential): EzqUser {
      const email = credentials.user.email;
      const emoji = emojis[Math.floor(Math.random() * emojis.length)];

      return {
        username: email.split('@')[0],
        email,
        credit: 0,
        emoji
      };
    }

    this.authService
      .signup(this.formState.email, this.formState.password)
      .pipe(
        map(getNewUser),
        flatMap(this.userService.saveUser)
      )
      .subscribe(this.redirect.bind(this, '/settings'), handleError.bind(this));
  }
}
