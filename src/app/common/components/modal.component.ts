import { Component } from '@angular/core';

@Component({
  selector: 'ezq-modal',
  template: `
    <div class="content">
      <ng-content></ng-content>
    </div>
  `,
  styles: [
    `
      :host {
        display: flex;
        justify-content: center;
        align-items: center;

        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;

        background-color: rgba(0, 0, 0, 0.5);
      }

      .content {
        position: absolute;
        top: 10px;
        bottom: 10px;
        left: 10px;
        right: 10px;

        background-color: white;
        overflow: auto;
        overflow-x: hidden;
        padding: 1rem;
        border-radius: 0.4rem;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.15);
      }
    `
  ]
})
export class ModalComponent {}
