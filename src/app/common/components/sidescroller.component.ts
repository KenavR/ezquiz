import { Component } from '@angular/core';

@Component({
  selector: 'ezq-sidescroller',
  template: `
    <ng-content></ng-content>
  `,
  styles: [
    `
      :host {
        display: flex;
        padding: 0.5rem 1rem;
        overflow: auto;
      }
    `
  ]
})
export class SidescrollerComponent {}
