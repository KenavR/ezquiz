import { Input, Component } from '@angular/core';

@Component({
  selector: 'ezq-card',
  template: `
    <div [style.backgroundImage]="'url(' + image + ')'">
      <ng-content></ng-content>
      <span>{{ title }}</span>
    </div>
  `,
  styles: [
    `
      div {
        display: flex;
        border-radius: 0.4rem;
        background-color: goldenrod;
        padding: 1rem;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.15);
        min-width: 7.5rem;
        min-height: 4.2rem;
      }

      span {
        align-self: flex-end;
        color: white;
        text-shadow: 0 2px 4px rgba(0, 0, 0, 0.15);
        font-size: 0.9rem;
      }
    `
  ]
})
export class CardComponent {
  @Input() image?: string;
  @Input() title: string;
}
