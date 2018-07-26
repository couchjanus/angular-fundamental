import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';

@Component({
  selector: 'app-admin-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AdminHeaderComponent implements OnInit {

  @Input('sidenav') sidenav: any;
  @Input('sidebar') sidebar: any;

  removeMessage: Boolean = false;
  themes;
  displaySearch : Boolean = false;

  constructor() { }
  
  ngOnInit() {
  
  }

}
