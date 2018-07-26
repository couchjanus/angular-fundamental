import { Component, OnInit,  ViewChild } from '@angular/core';
import {MatPaginator, MatSort} from '@angular/material';

import { Post } from '../../models/post';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  posts: Post[] = [];

  getAll() {
    this._postService.getAll().then(posts => this.posts = posts);
  }

  constructor(private _postService: PostService) {
  }

  ngOnInit() {
    this.getAll();
  }
}
