import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Observable, Subject, BehaviorSubject } from 'rxjs';
import { tap, single, map, filter, flatMap, take } from 'rxjs/operators';

import { UserService, EzqUser } from '@ezquiz/common';
import { AuthService } from '@ezquiz/common';
import { Router } from '@angular/router';

@Component({
  selector: 'ezq-user-settings-container',
  template: `
    <ezq-user-settings
      [settings]="settings$ | async"
      [loading]="loading"
      (settingsChanged)="updateSettings($event)"
      (save)="save()"
      (back)="location.back()"
      (logout)="logout()"
    ></ezq-user-settings>
  `
})
export class UserSettingsContainer implements OnInit {
  settings$: Subject<EzqUser>;
  loading = false;

  constructor(
    private location: Location,
    private router: Router,

    private userService: UserService,
    private authService: AuthService
  ) {
    this.logout = this.logout.bind(this);
  }

  ngOnInit(): void {
    this.loading = true;
    this.userService
      .getUser()
      .pipe(
        take(1),
        filter(user => !!user),
        tap(val => (this.settings$ = new BehaviorSubject(val))),
        tap(this.setLoading.bind(this, false))
      )
      .subscribe();
  }

  private setLoading(isLoading: boolean) {
    this.loading = isLoading;
  }

  updateSettings(settings: EzqUser) {
    this.settings$.next(settings);
  }

  save() {
    this.settings$
      .pipe(
        take(1),
        flatMap(this.userService.saveUser)
      )
      .subscribe(() => this.router.navigateByUrl('/quiz'), console.error);
  }

  logout() {
    this.authService
      .logout()
      .subscribe(() => this.router.navigateByUrl('/login'), console.error);
  }
}
