import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { single, delay } from 'rxjs/operators';
import { User } from '@ezquiz/common';

@Injectable()
export class UserService {
  public authenticate(): Observable<boolean> {
    return of(true);
  }

  public loadUser(): Observable<User> {
    return of({ id: 'ksldahjfi', username: 'KenavR', credit: 2388 }).pipe(
      delay(3000),
      single()
    );
  }
}
