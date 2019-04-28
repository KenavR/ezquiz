import { Injectable } from '@angular/core';
import { Observable, of, from, isObservable } from 'rxjs';
import {
  AngularFirestore,
  AngularFirestoreCollection
} from '@angular/fire/firestore';
import { map, flatMap } from 'rxjs/operators';

import { EzquizCommonModule } from '../ezquiz-common.module';

import { EzqUser } from '@ezquiz/models';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: EzquizCommonModule
})
export class UserService {
  usersCollection: AngularFirestoreCollection<EzqUser>;
  user$: Observable<EzqUser>;

  constructor(private db: AngularFirestore, private authService: AuthService) {
    this.usersCollection = db.collection('users');

    this.saveUser = this.saveUser.bind(this);
  }

  public authenticate(): Observable<boolean> {
    return of(true);
  }

  public getUser(): Observable<EzqUser> {
    if (!isObservable(this.user$)) {
      this.user$ = this.authService.getAuthState().pipe(
        map(state => state.email),
        flatMap(email =>
          this.usersCollection.doc<EzqUser>(email).valueChanges()
        )
      );
    }

    return this.user$;
  }

  public saveUser(user: EzqUser): Observable<string> {
    return from(this.usersCollection.doc(user.email).set(user)).pipe(
      map(_ => user.email)
    );
  }
}
