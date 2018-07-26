import { Injectable } from '@angular/core';
import { Post } from '../blog/post';
import { POSTS } from './mock/posts';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor() { }

  getAll() {
    return Promise.resolve(POSTS);
  }

  //  New method also uses POSTS variable
  get(id: number): Post {
    return POSTS.find(p => p.id === id);
  }
}
