import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { User } from '../models';

@Injectable({
    providedIn: 'root'
  })
export class UserService {
    protected apiUrl = 'http://localhost:3000';

    private _options = { headers: new HttpHeaders({ 'Content-Type': 'application/json', 'charset': 'utf-8'}) };

    constructor(private http: HttpClient) { }

    public getAll() {
        return this.http.get<User[]>(`${this.apiUrl}/users`);
    }

    public getById(id: number) {
        return this.http.get(`${this.apiUrl}/users/${id}`);
    }

    public create(user: User) {
        return this.http
          .post(`${this.apiUrl}/users`, JSON.stringify(user), this._options);
      }

    public update(user: User) {
        return this.http
          .put(`${this.apiUrl}/users/${user.id}`, JSON.stringify(user), this._options);
    }

    public register(user: User) {
        return this.http.post(`${this.apiUrl}/users/register`, JSON.stringify(user), this._options);
    }

    public delete(id: number) {
        return this.http.delete(`${this.apiUrl}/users/${id}`);
    }
}
