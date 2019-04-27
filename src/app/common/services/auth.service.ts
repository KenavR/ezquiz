import { Injectable } from '@angular/core';
import { Observable, of, from } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';
import { first, map } from 'rxjs/operators';
import { EzquizCommonModule } from '../ezquiz-common.module';

@Injectable({
  providedIn: EzquizCommonModule
})
export class AuthService {
  private;

  constructor(private fbAuth: AngularFireAuth) {}

  login(
    email: string,
    password: string
  ): Observable<firebase.auth.UserCredential> {
    return from(this.fbAuth.auth.signInWithEmailAndPassword(email, password));
  }

  signup(
    email: string,
    password: string
  ): Observable<firebase.auth.UserCredential> {
    return from(
      this.fbAuth.auth.createUserWithEmailAndPassword(email, password)
    );
  }

  isAuthenticated(): Observable<boolean> {
    return this.fbAuth.authState.pipe(
      first(),
      map(user => !!user)
    );
  }
}
