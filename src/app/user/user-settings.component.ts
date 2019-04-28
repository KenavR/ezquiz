import { Component, Input, Output, EventEmitter } from '@angular/core';
import { EzqUser } from '@ezquiz/models';

@Component({
  selector: 'ezq-user-settings',
  template: `
    <header>
      <div (click)="back.emit()">back</div>
      <h3>User Profile</h3>
      <div (click)="logout.emit()">Logout</div>
    </header>

    <main>
      <div *ngIf="loading">loading...</div>

      <form *ngIf="!loading">
        <ezq-emoji-selector
          [emoji]="settings.emoji"
          (emojiChanged)="updateEmoji($event)"
        ></ezq-emoji-selector>
        <label for="username">Username</label>
        <input
          #username
          placeholder="Username"
          autocomplete="username"
          [value]="settings.username || ''"
          (keyup)="update(username.value, 'username')"
          name="username"
          class="field"
        />
        <label for="firstname">Firstname</label>
        <input
          #firstname
          placeholder="Firstname"
          autocomplete="firstname"
          [value]="settings.firstname || ''"
          (keyup)="update(firstname.value, 'firstname')"
          name="firstname"
          class="field"
        />
        <label for="lastname">Lastname</label>
        <input
          #lastname
          placeholder="Lastname"
          autocomplete="lastname"
          [value]="settings.lastname || ''"
          (keyup)="update(lastname.value, 'lastname')"
          name="lastname"
          class="field"
        />
      </form>
    </main>

    <footer>
      <div (click)="back.emit()">Cancel</div>
      <button (click)="save.emit()">
        save
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
        display: flex;
        align-items: center;

        height: 3rem;
        color: #2e175e;
      }

      header h3 {
        flex: 1;
        margin: 0;
        text-align: center;
        color: #2f175e;
        text-shadow: 0 0 1px rgba(0, 0, 0, 0.15);
        font-weight: 100;
      }

      header div {
        text-transform: uppercase;
        font-size: 0.8rem;
        margin: 1rem;
      }

      main {
        background-color: white;
        padding: 1rem;
        box-shadow: 0 -2px 4px rgba(0, 0, 0, 0.15);
        flex: 1;
      }

      label {
        display: block;
        margin: 0.5rem 1rem;
      }

      footer {
        text-align: center;
        background-color: white;
      }

      footer div {
        margin: 2rem 0;
        font-size: 1.2rem;
        color: #2e175e;
      }

      footer div:hover {
        cursor: pointer;
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
        height: 5rem;
      }
    `
  ]
})
export class UserSettingsComponent {
  @Input() settings: EzqUser;
  @Input() loading: boolean;
  @Output() save = new EventEmitter<void>();
  @Output() settingsChanged = new EventEmitter<EzqUser>();
  @Output() back = new EventEmitter<void>();
  @Output() logout = new EventEmitter<void>();

  constructor() {}
  update(value: string, key: string) {
    this.settingsChanged.emit({ ...this.settings, [key]: value });
  }

  updateEmoji(emoji: string) {
    this.update(emoji, 'emoji');
  }
}
