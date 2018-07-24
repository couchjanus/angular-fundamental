import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PostService } from '../../services/post.service';
import { Post } from '../post';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {
  post: Post;
  sub: any;
  constructor(private _postService: PostService,
    private route: ActivatedRoute,
    private _router: Router) {
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      const id = Number.parseInt(params['id']);
      this.post = this._postService.get(id);
    });
  }

  gotoPostsList() {
    const link = ['/blog'];
    this._router.navigate(link);
  }
}
