import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { Post, PostService } from './post.service';


describe('PostService', () => {
  let service: PostService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [PostService]
    });
    service = TestBed.inject(PostService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should retrieve posts from the API', () => {
    const mockPosts: Post[] = [
      { userId: 1, id: 1, title: 'Post 1', body: 'Body 1' },
      { userId: 1, id: 2, title: 'Post 2', body: 'Body 2' }
    ];

    service.getPosts().subscribe(posts => {
      expect(posts.length).toBe(2);
      expect(posts).toEqual(mockPosts);
    });

    const request = httpMock.expectOne(service.REST_API);
    expect(request.request.method).toBe('POST');

    request.flush(mockPosts);
  });

  it('should retrieve a specific post by ID from the API', () => {
    const postId = 1;
    const mockPost: Post = { userId: 1, id: 1, title: 'Post 1', body: 'Body 1' };

    service.getPostById(postId).subscribe(post => {
      expect(post).toEqual(mockPost);
    });

    const request = httpMock.expectOne(`${service.REST_API}/${postId}`);
    expect(request.request.method).toBe('GET');

    request.flush(mockPost);
  });

  it('should create a new post via the API', () => {
    const newPost: Post = { userId: 1, id: 3, title: 'New Post', body: 'New Body' };

    service.createPost(newPost).subscribe(post => {
      expect(post).toEqual(newPost);
    });

    const request = httpMock.expectOne(service.REST_API);
    expect(request.request.method).toBe('POST');

    request.flush(newPost);
  });

  it('should update an existing post via the API', () => {
    const postId = 1;
    const updatedPost: Post = { userId: 1, id: postId, title: 'Updated Post', body: 'Updated Body' };

    service.updatePost(postId, updatedPost).subscribe(post => {
      expect(post).toEqual(updatedPost);
    });

    const request = httpMock.expectOne(`${service.REST_API}/${postId}`);
    expect(request.request.method).toBe('PUT');

    request.flush(updatedPost);
  });

  // it('should delete an existing post via the API', () => {
  //   const postId = 1;

  //   service.deletePost(postId).subscribe(response => {
  //     expect(response).toEqual(undefined);
  //   });

  //   const request = httpMock.expectOne(`${service.REST_API}/${postId}`);
  //   expect(request.request.method).toBe('DELETE');

  //   request.flush({});
  // });
});
