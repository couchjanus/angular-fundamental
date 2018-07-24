import { Injectable } from '@angular/core';
import { Post } from '../blog/post';
import { POSTS } from './mock/posts';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor() { }

  getAll(): Post[] {
    return [
      { id: 0, title: 'Hello World', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. ', picture: 'cat1.jpg', created_at: Date.now() },
      { id: 1, title: 'Hello Post', content: 'Obcaecati, delectus molestiae consequuntur nobis voluptatem', picture: 'cat2.jpg', created_at: Date.now() },
      { id: 2, title: 'Hello Interface', content: 'Odit ea, deleniti aperiam repudiandae reprehenderit debitis.', picture: 'cat3.jpg', created_at: Date.now() }
    ];
  }

  // getAll() {
  //   // return POSTS;
  //   return Promise.resolve(POSTS);
  // }

  // getAllSlowly() {
  //   return new Promise<Post[]>(resolve =>
  //     setTimeout(() => resolve(POSTS), 2000) // 2 seconds
  //   );
  // }

  //  New method also uses POSTS variable
  get(id: number): Post {
    return POSTS.find(p => p.id === id);
  }
}
