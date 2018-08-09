import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../../models';
import { UserService } from '../../services';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  userData: any;

  @Input() user1;
  @Output() editProfile = new EventEmitter<any>();

  user = {
    id: localStorage.getItem('currentUser'),
    firstName: 'Janus',
    lastName: 'Nic',
  };

  constructor(private _userService: UserService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {

    // console.log(this.user.id);

    this._userService.getById(parseInt(localStorage.getItem('currentUser'), 10))
      .subscribe( res => {
        //
        console.log(res);
          this.userData = res;
        // this.user.firstName = res.username;
      });

  }
}
