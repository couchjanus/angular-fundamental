import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {routes} from '../config/routes/auth';
// const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
