import { Injectable } from '@angular/core';
import { 
    Router,
    CanActivate,
    ActivatedRouteSnapshot,
    RouterStateSnapshot
  } from '@angular/router';

import decode from 'jwt-decode';

import { AuthService } from '../services';


@Injectable({ providedIn: 'root' })

export class RoleGuard implements CanActivate {

    constructor(public auth: AuthService, public router: Router) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {

      // this will be passed from the route config
      // on the data property
      const expectedRole = route.data.expectedRole;

      const token = localStorage.getItem('id_token');

      // decode the token to get its payload
      const tokenPayload = decode(token);
      if (
        !this.auth.isAuthenticated() ||
        tokenPayload.role !== expectedRole
      ) {
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
