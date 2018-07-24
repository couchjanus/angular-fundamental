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
  // posts: Post[] = [
  //   { id: 0, title: 'Hello World', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. ', picture: 'cat1.jpg', created_at: Date.now() },
  //   { id: 1, title: 'Hello Post', content: 'Obcaecati, delectus molestiae consequuntur nobis voluptatem', picture: 'cat2.jpg', created_at: Date.now() },
  //   { id: 2, title: 'Hello Interface', content: 'Odit ea, deleniti aperiam repudiandae reprehenderit debitis.', picture: 'cat3.jpg', created_at: Date.now() }
  // ];
  // constructor() { }
  // ngOnInit() { }
  
  posts: Post[] = [];
  //   constructor(private postService: PostService) {
  //   this.postService = postService;
  //   this.posts = this.postService.getAll()
  // }

  // constructor(private postService: PostService) {
  //   this.posts = postService.getAll();
  // }

  constructor(private _postService: PostService) { }

  ngOnInit() {
    this.posts = this._postService.getAll();
  }

  // getAll() {
  //   this._postService.getAll().then(posts => this.posts = posts);
  //   // this._postService.getAllSlowly().then(posts => this.posts = posts);
  // }

  // ngOnInit() {
  //   this.getAll();
  // }

}
