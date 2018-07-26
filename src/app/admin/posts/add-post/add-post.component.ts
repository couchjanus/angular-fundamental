import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { PostService } from '../../../services/post.service';
import { Post } from '../../../models/post';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css'],
  providers: [PostService]
})
export class AddPostComponent implements OnInit {

  @Input()
  posts: Post[] = [];

  postForm: FormGroup;

  constructor(private _postService: PostService, private _formBuilder: FormBuilder) { }

  createForm() {
    this.postForm = this._formBuilder.group({
      title: ['', Validators.required ],
      content: '',
    });
  }

  ngOnInit() {
    this.createForm();
  }

  // onAddProduct(product) {
  //   this.dataService
  //     .addProduct(product)
  //     .subscribe(
  //       (newProduct) => {
  //         this.products = this.products.concat(newProduct);
  //       }
  //     );
  // }

}
