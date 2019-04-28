import { Component, Input } from '@angular/core';
import { EzqUser } from '@ezquiz/common';

@Component({
  selector: 'ezq-main-header',
  template: `
    <header>
      <div class="username">
        <a [routerLink]="['/settings']" routerLinkActive="active">
          <span class="emoji">{{ !loading ? user.emoji : '⏳' }}</span>
          <span>{{ !loading ? user.username : '----' }}</span>
        </a>
      </div>

      <div>
        <span class="emoji">💰</span>
        <span>{{ !loading ? user.credit : '----' }}</span>
      </div>
    </header>
  `,
  styles: [
    `
      header {
        display: flex;
        align-items: center;
        height: 3rem;
        padding: 0 1rem;

        background: #2f175e;
      }

      .username {
        flex: 1;
      }

      span {
        color: white;
        text-shadow: 0 -1px 1px black;
      }

      span.emoji {
        margin-right: 0.5rem;
      }

      header > *,
      a {
        display: flex;
        align-items: center;
        height: 100%;
      }
      a {
      }
    `
  ]
})
export class MainHeaderComponent {
  @Input() user: EzqUser;
  @Input() loading = false;
}
