import { Component, OnInit } from '@angular/core';
import { Post } from '../post';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css'],
  // providers: [PostService],
})
export class PostListComponent implements OnInit {

  posts: Post[] = [];

  constructor(private _postService: PostService) { }

  getAll() {
    this._postService.getAll().then(posts => this.posts = posts);
  }

  ngOnInit() {
    this.getAll();
  }

}
