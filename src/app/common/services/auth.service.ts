import { Injectable } from '@angular/core';
import { Observable, from, isObservable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';
import { first, map, single } from 'rxjs/operators';
import { EzquizCommonModule } from '../ezquiz-common.module';
import { User } from 'firebase';

@Injectable({
  providedIn: EzquizCommonModule
})
export class AuthService {
  private authState$: Observable<User | null>;

  constructor(private fbAuth: AngularFireAuth) {}

  login(
    email: string,
    password: string
  ): Observable<firebase.auth.UserCredential> {
    return from(
      this.fbAuth.auth.signInWithEmailAndPassword(email, password)
    ).pipe(single());
  }

  signup(
    email: string,
    password: string
  ): Observable<firebase.auth.UserCredential> {
    return from(
      this.fbAuth.auth.createUserWithEmailAndPassword(email, password)
    ).pipe(single());
  }

  logout() {
    return from(this.fbAuth.auth.signOut()).pipe(single());
  }

  isAuthenticated(): Observable<boolean> {
    return this.fbAuth.authState.pipe(
      first(),
      map(user => !!user)
    );
  }

  getAuthState(): Observable<User | null> {
    if (!isObservable(this.authState$)) {
      this.authState$ = this.fbAuth.authState;
    }
    return this.authState$;
  }
}
