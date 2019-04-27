import { Component, OnInit } from '@angular/core';

import { LoginPage, LoginFormState } from './login.component';
import { AuthService } from '@ezquiz/common/services/auth.service';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';

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

  constructor(private authService: AuthService, private router: Router) {
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

    console.log('this.router: ', this.router);
    const page = extractPage(this.router.url);
    this.formState = { ...this.formState, ...{ page } };
  }

  updateState(update: Partial<LoginFormState>) {
    console.log('----------------------------------- ', update);
    this.formState = { ...this.formState, ...update };
  }

  private redirect(this: LoginContainer) {
    this.router.navigateByUrl('/quiz');
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

    console.log('LOGIN:::: ', this.formState);
    this.authService
      .login(this.formState.email, this.formState.password)
      .pipe(tap(v => console.log('TAPPPP: ', v)))
      .subscribe(this.redirect, handleError.bind(this));
  }

  signup() {
    function handleError(this: LoginContainer, error: any) {
      this.formState = {
        email: '',
        password: '',
        error: true,
        page: this.formState.page
      };
    }

    console.log('signup:::: ', this.formState);
    this.authService
      .signup(this.formState.email, this.formState.password)
      .pipe(tap(v => console.log('TAPPPP: ', v)))
      .subscribe(this.redirect, handleError.bind(this));
  }
}
