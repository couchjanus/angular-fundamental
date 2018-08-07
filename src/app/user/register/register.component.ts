import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { first } from 'rxjs/operators';
import { UsernameValidator, PasswordValidator } from '../../validators';
import { AlertService, UserService } from '../../services';

import { EmailValidatorDirective } from '../../directives';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  matching_passwords_group: any;
  loading = false;
  submitted = false;

  create_validation_messages = {
    'username': [
      { type: 'required', message: 'Username is required' },
      { type: 'minlength', message: 'Username must be at least 5 characters long' },
      { type: 'maxlength', message: 'Username cannot be more than 25 characters long' },
      { type: 'pattern', message: 'Your username must contain only numbers and letters' },
      { type: 'validUsername', message: 'Your username has already been taken' }
    ],
    'email': [
      { type: 'required', message: 'Email is required' },
      { type: 'pattern', message: 'Enter a valid email' }
    ],
    'confirm_password': [
      { type: 'required', message: 'Confirm password is required' },
      { type: 'areEqual', message: 'Password mismatch' }
    ],
    'password': [
      { type: 'required', message: 'Password is required' },
      { type: 'minlength', message: 'Password must be at least 6 characters long' },
      { type: 'pattern', message: 'Your password must contain at least one uppercase, one lowercase, and one number' }
    ],
    'terms': [
      { type: 'pattern', message: 'You must accept terms and conditions' }
    ]
  };

  constructor(
    private _fb: FormBuilder,
    private router: Router,
    private _userService: UserService,
    private _alertService: AlertService) { }

    ngOnInit() {
        this.matching_passwords_group = new FormGroup({
            password: new FormControl('', Validators.compose([
               Validators.minLength(5),
               Validators.required,
               Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$')
            ])),
            confirm_password: new FormControl('', Validators.required)
          }, (formGroup: FormGroup) => {
             return PasswordValidator.areEqual(formGroup);
          });
        this.registerForm = this._fb.group({
            id: [],
            username: new FormControl('', Validators.compose([
            UsernameValidator.validUsername,
            Validators.maxLength(25),
            Validators.minLength(5),
            Validators.pattern('^(?=.*[a-zA-Z])(?=.*[0-9])[a-zA-Z0-9]+$'),
            Validators.required
            ])),
            email: new FormControl('', Validators.compose([
            Validators.required,
            Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
            ])),
            isAdmin: new FormControl(false),
            firstName: new FormControl('', Validators.required),
            lastName: new FormControl('', Validators.required),
            createdAt: new FormControl(Date.now()),
            matching_passwords: this.matching_passwords_group
        });
  }

  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
        return;
    }

    this.loading = true;
    this._userService.register(this.registerForm.value)
        .pipe(first())
        .subscribe(
            data => {
                this._alertService.success('Registration successful', true);
                this.router.navigate(['/auth/login']);
            },
            error => {
                this._alertService.error(error);
                this.loading = false;
            });
  }

}
