import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertService, AuthService } from '../../services';
import { Router, ActivatedRoute } from '@angular/router';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginForm: FormGroup;

  public isBusy = false;
  public hasFailed = false;
  public showInputErrors = false;

  public loading = false;
  public submitted = false;
  public returnUrl: string;
  public error = '';

  // @Output() loggedIn = new EventEmitter<boolean>();

  constructor(
    private _auth: AuthService,
    private _fb: FormBuilder,
    private _alertService: AlertService,
    private _router: Router,
    private _route: ActivatedRoute,
  ) {}


  ngOnInit() {
    this.loginForm = this._fb.group({
        username: ['', Validators.required],
        password: ['', Validators.required]
    });

    // reset login status
    this._auth.logout();

    // get return url from route parameters or default to '/'
    this.returnUrl = this._route.snapshot.queryParams['returnUrl'] || '/';
  }

  // convenience getter for easy access to form fields
  get f() { return this.loginForm.controls; }

  onSubmit() {
    this.submitted = true;

    // Make sure form values are valid
    // stop here if form is invalid
    if (this.loginForm.invalid) {
      this.showInputErrors = true;
      return;
    }

    // Reset status
    this.isBusy = true;
    this.hasFailed = false;

    this.loading = true;
    // this.loggedIn.emit(true);
    this._auth.signIn(this.f.username.value, this.f.password.value)
        .pipe(first())
        .subscribe(
            data => {
              this._alertService.success('Login successful', true);
              this._router.navigate([this.returnUrl]);
            },
            error => {
                this.error = error;
                this.loading = false;
                this.isBusy = false;
                this.hasFailed = true;
                this._alertService.error(error);
            });
  }
}
