import { Component, h, getAssetPath } from '@stencil/core';

@Component({
  tag: 'nav-bar',
  styleUrl: 'nav-bar.scss',
  shadow: true,
  assetsDirs: ['nav-bar-assets']
})
export class NavBar {

  render() {
    return (
      <nav>
        <a>
          <img src={getAssetPath('./nav-bar-assets/brand.png')} alt="sfs"/>
        </a>
        <div class="links">
          <stencil-route-link url="/" activeClass="active" exact={true}>
            User List
          </stencil-route-link>
          <stencil-route-link url="/posts" activeClass="active">
            Post List
          </stencil-route-link>
        </div>
      </nav>
    );
  }

}
