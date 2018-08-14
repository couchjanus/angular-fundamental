import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {routes} from '../config/routes/shop';

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class ShopRoutingModule { }
