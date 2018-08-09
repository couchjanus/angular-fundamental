import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {

  userForm: FormGroup;

  @Input() prop1: string;
  @Input() user;
  @Output() saveUser = new EventEmitter<any>();

  constructor(private fb: FormBuilder) {
    this.userForm = this.fb.group({
      id: '',
      username: '',
      firdtName: '',
      lastName: '',
    });
  }

  ngOnInit() {
    this.userForm.setValue({
      id: this.user.id || -1,
      username: this.user.username || '',
      firdtName: this.user.firdtName || '',
      lastName: this.user.lastName || '',
    });
  }
  onuserFormSubmit() {
    const dataModel = this.userForm.value;
    this.saveUser.emit(dataModel);
  }

}
