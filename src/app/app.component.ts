import { Component, OnInit } from '@angular/core';
import { InitializationService } from './common';

@Component({
  selector: 'ezq-app',
  template: `
    <router-outlet></router-outlet>
  `,
  styles: [``]
})
export class AppComponent implements OnInit {
  constructor(private initializationService: InitializationService) {}

  ngOnInit(): void {
    this.initializationService
      .init()
      .subscribe(res => console.log('subscribed: ', res));
  }
}
