import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {routes} from '../config/routes/admin';

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
