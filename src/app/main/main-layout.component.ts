import { Component } from '@angular/core';

@Component({
  selector: 'ezq-layout',
  template: `
    <ezq-main-header-container></ezq-main-header-container>
    <main>
      <ng-content></ng-content>
    </main>
  `,
  styles: [
    `
      :host {
        display: flex;
        flex-direction: column;
        height: inherit;
      }

      main {
        overflow-x: hidden;
        overflow-y: auto;
        width: 100%;
        flex: 1;
      }
    `
  ]
})
export class MainLayoutComponent {
  constructor() {}
}
