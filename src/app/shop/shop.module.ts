import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// Подключаем маршрутизацию
import { ShopRoutingModule } from './shop-routing.module';

@NgModule({
  imports: [
    CommonModule,
    ShopRoutingModule
  ],
  declarations: []
})
export class ShopModule { }
