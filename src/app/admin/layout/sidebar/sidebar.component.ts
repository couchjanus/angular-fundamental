import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SidebarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  hideSubmenu($event) {
    $('mat-list-item').removeClass('open');
  }

}
