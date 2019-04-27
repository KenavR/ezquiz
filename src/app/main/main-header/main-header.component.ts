import { Component, Input } from '@angular/core';
import { User } from '@ezquiz/common';

@Component({
  selector: 'ezq-main-header',
  template: `
    <header>
      <div class="username">
        👿<span>{{ !loading ? user.username : '----' }}</span>
      </div>
      <div>
        💰<span>{{ !loading ? user.credit : '----' }}</span>
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
        margin-left: 0.5rem;
        color: white;
        text-shadow: 0 -1px 1px black;
      }
    `
  ]
})
export class MainHeaderComponent {
  @Input() user: User;
  @Input() loading = false;
}
