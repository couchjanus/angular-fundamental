import { Routes } from '@angular/router';
import { DashboardComponent } from '../../admin/dashboard/dashboard.component';
import { LayoutComponent } from '../../admin/layout/layout.component';
import { ErrorComponent } from '../../admin/error/error.component';
import { PostsComponent } from '../../admin/posts/posts.component';
import { AddPostComponent } from '../../admin/posts/add-post/add-post.component';

import { CategoryComponent } from '../../admin/catalog/category/category.component';

import { AddCategoryComponent } from '../../admin/catalog/category/add-category/add-category.component';

import { EditCategoryComponent } from '../../admin/catalog/category/edit-category/edit-category.component';

import { UsersComponent, AddUserComponent, EditUserComponent } from '../../admin';


export const routes: Routes = [
    {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
    },
    {
        path: '',
        component: LayoutComponent,
        children : [
            { path: 'dashboard', component: DashboardComponent },
            { path: 'posts', component: PostsComponent },
            { path: 'post/create', component: AddPostComponent },
            { path: 'categories', component: CategoryComponent },
            { path: 'categories/create', component: AddCategoryComponent },
            { path: 'categories/edit/:id', component: EditCategoryComponent },
            { path: 'users', component: UsersComponent },
            { path: 'users/create', component: AddUserComponent },
            { path: 'users/edit/:id', component: EditUserComponent },
        ]
    },
    {
        path: 'error',
        component: ErrorComponent
    },
];
