import { Routes } from '@angular/router';

import { ProductsComponent, ShoppingCartComponent, CheckOutComponent, OrderSuccessComponent, OrdersComponent } from '../../shop';

import { AuthGuard } from '../../guards';

export const routes: Routes = [
    { path: '', component: ProductsComponent },
    { path: 'products', component: ProductsComponent },
    { path: 'products/:category', component: ProductsComponent },
    { path: 'shopping-cart', component: ShoppingCartComponent },
    { path: 'check-out', component: CheckOutComponent, canActivate: [AuthGuard] },
    { path: 'order-success', component: OrderSuccessComponent, canActivate: [AuthGuard] },
    { path: 'my-orders', component: OrdersComponent, canActivate: [AuthGuard] },
];
