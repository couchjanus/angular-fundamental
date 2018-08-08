import { Component } from '@angular/core';
import { AuthService } from '../../../services';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  isLoggedIn: Observable<boolean>;

constructor(private _authService: AuthService ) {
    this.isLoggedIn = this._authService.isLoggedIn();
  }
}
