import { Component, h, getAssetPath } from '@stencil/core';

@Component({
  tag: 'app-header',
  styleUrl: 'app-header.scss',
  shadow: true,
  assetsDirs: ['app-header-assets']
})
export class AppHeader {

  render() {
    return (
      <header>
        <div class="title">
          <img src={getAssetPath('./app-header-assets/icon.png')} alt="stencil"/>
          <h1>Stencil-SFS</h1>
        </div>
        <nav-bar />
      </header>
    );
  }

}
