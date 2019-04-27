import { Component, Input, Output, EventEmitter } from '@angular/core';

export enum LoginPage {
  LOGIN,
  SIGN_UP
}

export interface LoginFormState {
  email: string;
  password: string;
  error: boolean;
  page: LoginPage;
}

@Component({
  selector: 'ezq-login',
  template: `
    <header>LOGO</header>

    <div class="error" *ngIf="state.error">
      <span>ℹ</span>️
      <span>Incorrect username or password.</span>
      <span (click)="update(false, 'error')">❌</span>
    </div>
    <main>
      <div class="menu">
        <!--// signup to user config-->
        <a routerLink="/login" routerLinkActive="active">Log In</a>
        <a routerLink="/signup" routerLinkActive="active">Sign Up</a>
      </div>
      <section class="content">
        <form>
          <input
            #email
            placeholder="E-Mail"
            autocomplete="email"
            [value]="state.email"
            (keyup)="update(email.value, 'email')"
          />
          <input
            #password
            placeholder="Password"
            autocomplete="password"
            [value]="state.password"
            (keyup)="update(password.value, 'password')"
            type="password"
          />
        </form>
      </section>
    </main>
    <footer>
      <button (click)="handleClick()" [ngClass]="{ signup: isSignUpPage() }">
        {{ getButtonText() }}
      </button>
    </footer>
  `,
  styles: [
    `
      :host {
        display: flex;
        flex-direction: column;
        height: 100%;
      }

      header {
        flex-basis: 15%;
        flex: 1;
      }
      footer {
        flex-basis: 10%;
      }

      section {
        display: flex;
        flex-direction: column;
        padding: 1rem;
        margin-top: 1rem;
      }

      .menu {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 3rem;
      }

      .menu a {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;
        flex: 1;
        border-bottom: 1px solid rgba(0, 0, 0, 0.15);
        text-decoration: none;
        color: rgba(0, 0, 0, 0.3);
        text-shadow: 0 0 1px rgba(0, 0, 0, 0.15);
        font-weight: bold;
      }

      .menu .active {
        border-width: 2px;
        border-color: rgba(0, 0, 0, 0.5);
        color: rgba(0, 0, 0, 0.5);
      }

      main {
        background-color: white;

        box-shadow: 0 -2px 4px rgba(0, 0, 0, 0.15);
      }

      input {
        border: none;
        border: 1px solid rgba(0, 0, 0, 0.15);
        box-shadow: 0 0 1px rgba(0, 0, 0, 0.15);
        border-radius: 0.4rem;
        padding: 1rem;
        margin-bottom: 1rem;
        outline: none;
        width: 100%;
        box-sizing: border-box;
      }

      input:focus {
        border-color: #2e175e;
      }

      .switch {
        text-align: center;
        margin-bottom: 1rem;
        color: goldenrod;
      }

      button {
        background-color: #2e175e;
        width: 100%;
        height: 100%;
        color: white;
        border: none;
        padding: 0.5rem 0;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.15);
        outline: none;
        text-transform: uppercase;
        letter-spacing: 3px;
        font-size: 1.2rem;
      }

      button.signup {
        background-color: #519170;
      }

      .error {
        display: flex;
        background-color: darkred;
        box-shadow: 0 -2px 4px rgba(0, 0, 0, 0.15);
        padding: 0.5rem 1rem;
        text-align: center;
        color: rgba(255, 255, 255, 0.5);
      }

      .error span:nth-of-type(2) {
        flex: 1;
      }
    `
  ]
})
export class LoginComponent {
  @Input() state: LoginFormState;
  // tslint:disable-next-line:no-output-rename
  @Output('state-changed') stateChanged = new EventEmitter<
    Partial<LoginFormState>
  >();
  @Output() login = new EventEmitter<void>();
  @Output() signup = new EventEmitter<void>();

  constructor() {}

  update(value: string, key: string) {
    this.stateChanged.emit({ [key]: value });
  }

  handleClick() {
    switch (this.state.page) {
      case LoginPage.LOGIN:
        return this.login.emit();
      case LoginPage.SIGN_UP:
        return this.signup.emit();
      default:
        return this.login.emit();
    }
  }

  getButtonText(): string {
    switch (this.state.page) {
      case LoginPage.LOGIN:
        return 'Log In';
      case LoginPage.SIGN_UP:
        return 'Sign Up';
      default:
        return 'Log In';
    }
  }

  isSignUpPage() {
    return this.state.page === LoginPage.SIGN_UP;
  }
}
