import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, tap, shareReplay } from 'rxjs/operators';

import { BehaviorSubject, Observable } from 'rxjs';
import * as moment from 'moment';
import { JwtHelperService } from '@auth0/angular-jwt';


@Injectable({ providedIn: 'root' })
export class AuthService {

  protected apiUrl = 'http://127.0.0.1:3000';

  constructor(private _http: HttpClient, public jwtHelper: JwtHelperService) {}

  isLoginSubject = new BehaviorSubject<boolean>(this.hasToken());

  public isAuthenticated(): boolean {

    const token = localStorage.getItem('id_token');

    // Check whether the token is expired and return
    // true or false
    return !this.jwtHelper.isTokenExpired(token);
  }

  /**
    * if we have token the user is loggedIn
    * @returns {boolean}
    */
  private hasToken(): boolean {
    console.log(this.isExpiration());
    return this.isExpiration();
    // return !!localStorage.getItem('currentUser');
  }

  private getExpiration() {
    const expiration = localStorage.getItem('expires_at');
    const expiresAt = JSON.parse(expiration);
    // console.log(moment(expiresAt));
    return moment(expiresAt);
  }
  private isExpiration() {
      return moment().isBefore(this.getExpiration());
  }

  /**
    *
    * @returns {Observable<T>}
   */
  public isLoggedIn(): Observable<boolean> {
     return this.isLoginSubject.asObservable();
  }


  // isLoggedOut() {
  //     return !this.isLoggedIn();
  // }

  /**
    *  Login the user then tell all the subscribers about the new status
   */
  public signIn(email: string, password: string) {
    return this._http.post<any>(`${this.apiUrl}/login`, {email: email, password: password})
      .pipe(
        tap((res) => {
          const expiresAt = moment().add(res.expiresIn, 'second');
          localStorage.setItem('id_token', res.token);
          localStorage.setItem('currentUser', res.id);
          localStorage.setItem('expires_at', JSON.stringify(expiresAt.valueOf()));
        })
      );
        // .pipe(map((user: any) => {
        //     // login successful if there's a jwt token in the response
        //     if (user && user.token) {
        //         // store user details and jwt token in local storage to keep user logged in between page refreshes
        //         localStorage.setItem('currentUser', JSON.stringify({ id: user.id, email: user.email, token: user.token }));
        //         this.authState = true;
        //         this.isLoginSubject.next(true);
        //     }
        //     return user;
        // }));
  }

/**
* Выйдите из системы, затем сообщите всем подписчикам о новом статусе
**/

   /**
    * Log out the user then tell all the subscribers about the new status
    */

  public logout(): void {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
    localStorage.removeItem('id_token');
    localStorage.removeItem('expires_at');
    this.isLoginSubject.next(false);
  }


}
