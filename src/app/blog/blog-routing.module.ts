import { NgModule } from '@angular/core';
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostComponent } from './post/post.component';
import { PostDetailsComponent } from './post-details/post-details.component';

const routes: Routes = [
  {
    path: '',
    component: PostComponent,
  },
  // HERE: route for PostDetailsComponent
  // map '/posts/:id' to post details component
  {
    path: ':id',
    component: PostDetailsComponent,
  },
];

// const routes: Routes = [
//   {
//     path: 'blog',
//     component: PostComponent,
//   },
//   {
//     path: 'blog/:id',
//     component: PostDetailsComponent,
//   },

// ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogRoutingModule { }

// export const routing: ModuleWithProviders = RouterModule.forChild(routes);
