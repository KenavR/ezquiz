import { Input, Component } from '@angular/core';

@Component({
  selector: 'ezq-card',
  template: `
    <div
      [style.backgroundImage]="'url(' + image + ')'"
      [style.color]="image ? '#eee' : '#333'"
    >
      <ng-content></ng-content>
      <span>{{ title }}</span>
    </div>
  `,
  styles: [
    `
      div {
        display: flex;
        border-radius: 0.4rem;
        background-color: white;
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        padding: 1rem;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.15);
        width: 10rem;
        height: 5.625rem;
      }

      span {
        align-self: flex-end;
        text-shadow: 0 1px 2px rgba(0, 0, 0, 0.15);
        font-size: 0.9rem;
        font-weight: bold;
      }
    `
  ]
})
export class CardComponent {
  @Input() image?: string;
  @Input() title: string;
}
