import { Routes } from '@angular/router';
import {
  HomeComponent,
  AboutComponent,
  NotFoundComponent
 } from '../';

// import { BlogModule } from '../blog/blog.module';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutComponent},
    {
      path: 'blog',
      // loadChildren: () => BlogModule
      // lazy loaded
      loadChildren: '../blog/blog.module#BlogModule'
    },
    {
      path: 'shop',
      // lazy loaded
      loadChildren: '../shop/shop.module#ShopModule'
    },
    { path: '**', component: NotFoundComponent },
];
