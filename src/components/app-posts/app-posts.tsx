import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'app-posts',
  styleUrl: 'app-posts.css',
  shadow: true
})
export class AppPosts {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
