import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from '../../admin/dashboard/dashboard.component';
import { LayoutComponent } from '../../admin/layout/layout.component';
import { ErrorComponent } from '../../admin/error/error.component';
import { PostsComponent } from '../../admin/posts/posts.component';
import { AddPostComponent } from '../../admin/posts/add-post/add-post.component';
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
        ]
    },
    {
        path: 'error',
        component: ErrorComponent
    },
];
