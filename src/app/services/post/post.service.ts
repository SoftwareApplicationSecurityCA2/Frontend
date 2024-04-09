import { Injectable, WritableSignal, inject, signal } from '@angular/core';
import { Post } from '../../interfaces/post';
import { DatabaseService } from '../database/database.service';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private databaseService = inject(DatabaseService);

  posts: BehaviorSubject<Post[]> = new BehaviorSubject<Post[]>([]);

  constructor() { }

  fetchPosts(){
    this.databaseService.GetAllPosts().subscribe((posts: Post[]) => {
      this.setPosts(posts);
    });
  }

  setPosts(posts: Post[]){
    this.posts.next(posts);
  }

  getAllPosts(){
    return this.posts.asObservable();
  }


  createPost(post: Post){
    return this.databaseService.CreatePost(post);
  }


}
