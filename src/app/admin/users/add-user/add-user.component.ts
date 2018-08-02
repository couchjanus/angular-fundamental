import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { Router } from '@angular/router';

// import { UserService } from '../../../services';

import { first } from 'rxjs/operators';

import { AlertService, UserService } from '../../../services';

import { EmailValidatorDirective } from '../../../directives';
// import {throwError} from 'rxjs';  // Angular 6/RxJS 6

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})

export class AddUserComponent implements OnInit {

  userForm: FormGroup;
  loading = false;
  constructor(private _userService: UserService, private fb: FormBuilder, private router: Router, private _alertService: AlertService) {}
  
  ngOnInit() {
    this.userForm = this.fb.group({
      id: [],
      name: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(12)]],
      email: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      isAdmin: [false],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      createdAt: Date.now()
    });
  }

  onSubmit() {
    this.loading = true;

    this._userService.create(this.userForm.value)
      .pipe(first())
      .subscribe( data => {
        this._alertService.success('New User Add successful', true);
        this.router.navigate(['/admin/users']);
      },
      error => {
          this._alertService.error(error);
          this.loading = false;
      });
    }

}
