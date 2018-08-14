import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
// Подключаем маршрутизацию
import { ShopRoutingModule } from './shop-routing.module';
import {
  ProductsComponent,
  ProductCardComponent,
  ProductQuantityComponent,
  ShoppingCartComponent,
  CheckOutComponent,
  OrdersComponent,
  OrderSuccessComponent
 } from './';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ShopRoutingModule,
  ],
  declarations: [
    ProductsComponent,
    ProductCardComponent,
    ProductQuantityComponent,
    ShoppingCartComponent,
    CheckOutComponent,
    OrdersComponent,
    OrderSuccessComponent
  ]
})
export class ShopModule { }
