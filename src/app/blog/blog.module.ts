import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogRoutingModule } from './blog-routing.module';
import { PostComponent } from './post/post.component';
import { PostListComponent } from './post-list/post-list.component';
import { PostDetailsComponent } from './post-details/post-details.component';
import { SharedModule } from '../shared/shared.module';
// import { routing } from './blog-routing.module';


@NgModule({
  imports: [
    CommonModule,
    BlogRoutingModule,
    SharedModule
    // [routing]
  ],
  declarations: [PostComponent, PostListComponent, PostDetailsComponent]
})
export class BlogModule { }
