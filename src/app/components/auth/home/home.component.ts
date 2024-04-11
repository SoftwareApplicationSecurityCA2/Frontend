import { Component, OnInit, computed, effect, inject } from '@angular/core';
import { AuthService } from '../../../services/auth/auth.service';
import { SessionService } from '../../../services/session/session.service';
import { Router } from '@angular/router';
import { PostService } from '../../../services/post/post.service';
import { Post } from '../../../interfaces/post';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';
import { CreatePostComponent } from '../../create-post/create-post.component';
import { DatabaseService } from '../../../services/database/database.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, CreatePostComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  private AuthService = inject(AuthService);
  private SessionService = inject(SessionService);
  private postService = inject(PostService);
  private databaseService = inject(DatabaseService);
  private Router = inject(Router);
  private subscriptions: Subscription = new Subscription();
  public posts: Post[] = [];

  constructor() {
    this.postService.fetchPosts();
  }

  ngOnInit(): void {
    this.subscriptions.add(
      this.postService.getAllPosts().subscribe((posts: Post[]) => {
        console.log(posts);
        this.posts = posts;
      })
    );
  }

 
}