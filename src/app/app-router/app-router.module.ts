import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
  HomeComponent,
  AboutComponent,
  NotFoundComponent,
  GalleryComponent
 } from '../';

import { BlogModule } from '../blog/blog.module';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent},
  { path: 'gallery', component: GalleryComponent},
  {
    path: 'blog',
    loadChildren: () => BlogModule
    // lazy loaded
    // loadChildren: '../blog/blog.module#BlogModule'
  },
  {
    path: 'shop',
    // lazy loaded
    loadChildren: '../shop/shop.module#ShopModule'
  },
  {
    path: 'admin',
    loadChildren: '../admin/admin.module#AdminModule'
  },
  {
    path: 'auth',
    loadChildren: '../user/user.module#UserModule'
  },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRouterModule { }
