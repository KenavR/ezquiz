import { Component, OnInit } from '@angular/core';
import { InitializationService } from './common';
import { take } from 'rxjs/operators';

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
      .pipe(take(1))
      .subscribe(_ => console.log('Data has been imported into FB: '));
  }
}
