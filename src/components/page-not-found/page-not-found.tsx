import { Component, h } from '@stencil/core';

@Component({
  tag: 'page-not-found',
  styleUrl: 'page-not-found.scss',
  shadow: true
})
export class PageNotFound {

  render() {
    return (
      <div class="page-not-found">
        <h2 class="title">Page not Found</h2>
        <stencil-route-link url="/">
          <button type="button">Back to Homepage</button>
        </stencil-route-link>
      </div>
    );
  }

}
