import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { BehaviorSubject, Observable } from 'rxjs';

// import { SessionService } from './session.service';

@Injectable({ providedIn: 'root' })
export class AuthService {
  // constructor(private _http: HttpClient, private _session: SessionService) { }

  private authState: any;

  protected apiUrl = 'http://127.0.0.1:3000';

  constructor(private _http: HttpClient) {}

  isLoginSubject = new BehaviorSubject<boolean>(this.hasToken());

  /**
    *
    * @returns {Observable<T>}
   */
  public isLoggedIn(): Observable<boolean> {
     return this.isLoginSubject.asObservable();
  }

  /**
    *  Login the user then tell all the subscribers about the new status
   */
  public signIn(username: string, password: string) {
    return this._http.post<any>(`${this.apiUrl}/login`, { username: username, password: password })
        .pipe(map((user: any) => {
            // login successful if there's a jwt token in the response
            if (user && user.token) {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('currentUser', JSON.stringify({ username: user.username, token: user.token }));
                this.authState = true;
                this.isLoginSubject.next(true);
            }
            return user;
        }));
  }

   /**
    * Log out the user then tell all the subscribers about the new status
    */

   public logout(): void {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
    this.authState = false;
    this.isLoginSubject.next(false);
  }
   /**
    * if we have token the user is loggedIn
    * @returns {boolean}
    */
  private hasToken(): boolean {
     return !!localStorage.getItem('currentUser');
   }

  // public isSignedIn() {
  //   return !!this.session.accessToken;
  // }

  // public signOut() {
  //   this.session.destroy();
  // }

  // public signIn(accessToken: string, name: string) {
  //   if ((!accessToken) || (!name)) {
  //     return;
  //   }
  //   this.session.accessToken = accessToken;
  //   this.session.name = name;
  // }

  public get authenticated(): boolean {
    return this.authState !== null;
  }
}
