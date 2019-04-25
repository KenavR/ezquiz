import { Input, Component } from '@angular/core';

@Component({
  selector: 'ezq-page',
  template: `
    <header>
      <span>{{ title }}</span>
    </header>
    <main>
      <ng-content></ng-content>
    </main>
  `,
  styles: [
    `
      header {
        display: flex;
        align-items: center;
        height: 3rem;
        padding: 0 1rem;

        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.15);
      }
    `
  ]
})
export class PageComponent {
  @Input() title: string;
}
