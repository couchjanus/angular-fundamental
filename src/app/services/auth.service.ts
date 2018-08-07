import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

// import { SessionService } from './session.service';

@Injectable({ providedIn: 'root' })
export class AuthService {
  // constructor(private _http: HttpClient, private _session: SessionService) { }

  private authState: any;

  constructor(private _http: HttpClient) { }

  protected apiUrl = 'http://127.0.0.1:3000';

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


  public signIn(username: string, password: string) {
    return this._http.post<any>(`${this.apiUrl}/login`, { username: username, password: password })
        .pipe(map((user: any) => {
            // login successful if there's a jwt token in the response
            if (user && user.token) {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('currentUser', JSON.stringify({ username, token: user.token }));
                this.authState = true;
            }
            return user;
        }));
  }

  public get authenticated(): boolean {
    return this.authState !== null;
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
    this.authState = false;
  }
}
