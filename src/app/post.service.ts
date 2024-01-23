import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

@Injectable({
  providedIn: 'root',
})
export class PostService {
  REST_API: string = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) {}

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(this.REST_API);
  }

  getPostById(postId: number): Observable<Post> {
    const url = `${this.REST_API}/${postId}`;
    return this.http.get<Post>(url);
  }

  createPost(post: Post): Observable<Post> {
    return this.http.post<Post>(this.REST_API, post);
  }

  updatePost(postId: number, updatedPost: Post): Observable<Post> {
    const url = `${this.REST_API}/${postId}`;
    return this.http.put<Post>(url, updatedPost);
  }

  deletePost(postId: number): Observable<void> {
    const url = `${this.REST_API}/${postId}`;
    return this.http.delete<void>(url);
  }
}
