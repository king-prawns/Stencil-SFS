import { Component, h, getAssetPath } from '@stencil/core';

@Component({
  tag: 'nav-bar',
  styleUrl: 'nav-bar.scss',
  shadow: true,
  assetsDirs: ['nav-bar-assets']
})
export class NavBar {

  changeLanguage (lang: string) {
    console.log(lang)
  }

  render() {
    return (
      <nav>
        <a>
          <img src={getAssetPath('./nav-bar-assets/brand.png')} alt="sfs"/>
        </a>
        <div class="links">
          <stencil-route-link url="/">
            'USER_LIST'
          </stencil-route-link>
          <stencil-route-link url="/posts">
            'POST_LIST'
          </stencil-route-link>
        </div>
        <div>
          <button type="button" onClick={() => this.changeLanguage('it')}>'BUTTON_LANG_IT')</button>
          <button type="button" onClick={() => this.changeLanguage('en')}>'BUTTON_LANG_EN'</button>
        </div>
      </nav>
    );
  }

}
