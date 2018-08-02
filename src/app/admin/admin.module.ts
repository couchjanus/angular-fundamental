import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { AdminRoutingModule } from './admin-routing.module';
import { SharedModule } from '../shared/shared.module';


import { DashboardComponent } from './dashboard/dashboard.component';
import { LayoutComponent } from './layout/layout.component';
import { ErrorComponent } from './error/error.component';

import { AdminHeaderComponent } from './layout/header/header.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { BreadcrumbComponent } from './layout/breadcrumb/breadcrumb.component';
import { SettingsComponent } from './layout/settings/settings.component';
import { PostsComponent } from './posts/posts.component';
import { AddPostComponent } from './posts/add-post/add-post.component';
import { CatalogComponent } from './catalog/catalog.component';
import { CategoryComponent } from './catalog/category/category.component';
import { AddCategoryComponent } from './catalog/category/add-category/add-category.component';
import { EditCategoryComponent } from './catalog/category/edit-category/edit-category.component';
import { DestroyCategoryComponent } from './catalog/category/destroy-category/destroy-category.component';
import { UsersComponent } from './users/users.component';
import { AddUserComponent } from './users/add-user/add-user.component';
import { EditUserComponent } from './users/edit-user/edit-user.component';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule,

    SharedModule,
  ],
  declarations: [
    DashboardComponent,
    LayoutComponent,
    ErrorComponent,
    AdminHeaderComponent,
    SidebarComponent,
    BreadcrumbComponent,
    SettingsComponent,
    PostsComponent,
    AddPostComponent,
    CatalogComponent,
    CategoryComponent,
    AddCategoryComponent,
    EditCategoryComponent,
    DestroyCategoryComponent,
    UsersComponent,
    AddUserComponent,
    EditUserComponent]
})
export class AdminModule { }
