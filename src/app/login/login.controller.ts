import { Component, OnInit } from '@angular/core';

import { LoginService } from './login.service';
import { LoginPage } from './login.component';

@Component({
  selector: 'ezq-login-container',
  template: `
    <ezq-login [page]="page"></ezq-login>
  `,
  styles: []
})
export class LoginContainer implements OnInit {
  page: LoginPage = LoginPage.SIGNIN;

  constructor(private loginService: LoginService) {}

  ngOnInit(): void {}
}
