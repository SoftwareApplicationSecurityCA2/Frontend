import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Register } from '../../interfaces/register';
import { Login } from '../../interfaces/login';
import { User } from '../../interfaces/user';
import { Observable } from 'rxjs';
import { Session } from '../../interfaces/session';
import { Post } from '../../interfaces/post';
import { Feedback } from '../../components/feedback/feedback.component';

@Injectable({
  providedIn: 'root',
})
export class DatabaseService {
  private baseUrl = 'https://localhost:7155/api/';

  private http = inject(HttpClient);

  constructor() {}

  getAllUsers() {
    return this.http.get(this.baseUrl + 'Users');
  }

  // Auth
  Login(login: Login): Observable<Session> {
    return this.http.post<Session>(`${this.baseUrl}Auth/login`, login);
  }

  register(userData: Register): Observable<any> {
    return this.http.post(`${this.baseUrl}Auth/register`, userData);
  }

  logout(sessionId: string): Observable<any> {
    const url = `${this.baseUrl}Auth/logout`;
    return this.http.post(url, { SessionId: sessionId });
  }

  // Posts
  GetAllPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(`${this.baseUrl}Post`);
  }

  CreatePost(post: Post): Observable<Post> {
    return this.http.post<Post>(`${this.baseUrl}Post`, post);
  }

  submitFeedback(feedback: Feedback): Observable<any> {
    return this.http.post(`${this.baseUrl}Feedback`, feedback);
  }
}
