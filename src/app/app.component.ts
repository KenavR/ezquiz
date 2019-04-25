import { Component } from '@angular/core';

@Component({
  selector: 'ezq-app',
  template: `
    <!--The content below is only a placeholder and can be replaced.-->
    <ezq-main-header-container></ezq-main-header-container>

    <router-outlet></router-outlet>
  `,
  styles: [``]
})
export class AppComponent {
  title = 'ezquiz';
}
