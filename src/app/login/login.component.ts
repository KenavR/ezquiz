import { Component, Input } from '@angular/core';
export enum LoginPage {
  SIGNUP,
  SIGNIN
}

@Component({
  selector: 'ezq-login',
  template: `
    <ezq-page title="Signin">
      <section class="content">
        <input placeholder="E-Mail" />
        <input placeholder="Password" type="password" />
      </section>

      <section>
        <span class="switch">Switch to SignUp</span>
        <button>Signin</button>
      </section>
    </ezq-page>
  `,
  styles: [
    `
      section {
        display: flex;
        flex-direction: column;
        padding: 1rem;
        margin-top: 1rem;
      }

      input {
        border: none;
        border-bottom: 1px solid rgba(0, 0, 0, 0.15);
        padding: 0.5rem 1rem;
        margin-bottom: 1rem;
        outline: none;
      }

      input:focus {
        border-color: goldenrod;
      }

      .switch {
        text-align: center;
        margin-bottom: 1rem;
        color: goldenrod;
      }

      input,
      button {
        font-size: 1.2rem;
      }

      button {
        background-color: goldenrod;
        color: white;
        border-radius: 0.4rem;
        border: none;
        padding: 0.5rem 0;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.15);
        outline: none;
      }
    `
  ]
})
export class LoginComponent {
  @Input() page: LoginPage;
}
