import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { AuthService } from '../services';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {

    constructor(public auth: AuthService, private router: Router) { }

    // canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    //     if (localStorage.getItem('currentUser')) {
    //         // logged in so return true
    //         return true;
    //     }

    //     // not logged in so redirect to login page with the return url
    //     this.router.navigate(['/auth/login'], { queryParams: { returnUrl: state.url }});
    //     return false;
    // }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        if (!this.auth.isAuthenticated()) {
          this.router.navigate(['/auth/login'], {
                queryParams: {
                    return: state.url
                }
            });
          return false;
        }
        return true;
    }
}
