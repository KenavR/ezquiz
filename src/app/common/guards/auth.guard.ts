import { Injectable } from '@angular/core';
import {
  CanActivate,
  CanActivateChild,
  Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router';
import { AuthService } from '../services/auth.service';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { EzquizCommonModule } from '../ezquiz-common.module';

@Injectable({
  providedIn: EzquizCommonModule
})
export class AuthGuard implements CanActivate, CanActivateChild {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    function redirect(this: AuthGuard, isSignedIn: boolean) {
      if (!isSignedIn) {
        this.router.navigateByUrl('/login');
      }
    }

    return this.authService.isAuthenticated().pipe(tap(redirect.bind(this)));
  }

  canActivateChild(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    return this.canActivate(route, state);
  }
}
