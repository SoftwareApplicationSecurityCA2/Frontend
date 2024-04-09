import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { SessionService } from '../../services/session/session.service';
import { PostService } from '../../services/post/post.service';

@Component({
  selector: 'app-create-post',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './create-post.component.html',
  styleUrl: './create-post.component.scss'
})
export class CreatePostComponent {
  private SessionService = inject(SessionService)
  private PostService = inject(PostService);  

  private FormBuilder = inject(FormBuilder);

  PostForm: FormGroup;

  constructor() {
    this.PostForm = this.FormBuilder.group({
      content: ['', [Validators.required]]
    });
   }

   get content(){
      return this.PostForm.get('content');
   }


  makePost(){

    let post = {
      content: this.content!.value,
      userId: this.SessionService.getUserID()!
    }

    this.PostService.createPost(post).subscribe((data) => {
      this.PostService.fetchPosts();
    });


  }

}
