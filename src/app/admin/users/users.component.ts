import { Component, OnInit,  ViewChild } from '@angular/core';

import { User } from '../../models';
import { UserService } from '../../services';

import { HttpErrorResponse } from '@angular/common/http';

import {MatPaginator, MatSort} from '@angular/material';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: User[] = [];

  constructor(private _userService: UserService) { }

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  delete(user: User): void {
    this._userService.delete(user.id)
      .subscribe( data => {
        this.users = this.users.filter(u => u !== user);
      });
  }

  ngOnInit() {
    this._userService
      .getAll()
      .subscribe((data: User[]) => {
        this.users = data;
      },
      (err: HttpErrorResponse) => {
        if (err.error instanceof Error) {
          console.log('Client-side error occured.');
        } else {
          console.log('Server-side error occured.');
        }
      }
    );
  }

}
