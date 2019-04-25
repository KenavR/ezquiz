import { Component, OnInit } from '@angular/core';
import { UserService } from '@ezquiz/common/services';
import { Observable } from 'rxjs';
import { User } from '@ezquiz/common';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'ezq-main-header-container',
  template: `
    <ezq-main-header
      [user]="user$ | async"
      [loading]="loading"
    ></ezq-main-header>
  `,
  styles: []
})
export class MainHeaderContainer implements OnInit {
  user$: Observable<User>;
  loading = false;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.loading = true;
    this.user$ = this.userService.loadUser().pipe(tap(this.toggleLoading));
  }

  private toggleLoading() {
    this.loading = !this.loading;
  }
}
