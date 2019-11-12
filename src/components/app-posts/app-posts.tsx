import { Component, h, State } from '@stencil/core';

@Component({
  tag: 'app-posts',
  styleUrl: 'app-posts.scss',
  shadow: true
})
export class AppPosts {
  @State() posts: Posts = [];

  componentWillLoad() {
    fetch('http://localhost:4000/posts')
      .then((response: Response) => response.json())
      .then(response => {
        this.posts = response;
      });
  }

  render() {
    return (
      <div class="app-posts">
        {this.posts.map((post) =>
          (<div key={post.id} class="card-post">
            <h4 class="card-title">{post.title}</h4>
            <p class="card-text">{post.body}</p>
            <stencil-route-link url={`/user/${post.userId}`}>
              Go to user
            </stencil-route-link>
          </div>)
        )}
      </div>
    );
  }
}
