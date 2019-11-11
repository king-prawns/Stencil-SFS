import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'app-root',
  shadow: true
})
export class AppRoot {

  @Prop() test = 'qq'

  render() {
    return (
      <div>
        <app-header />
        <main>
          <stencil-router>
            <stencil-route-switch scrollTopOffset={0}>
              <stencil-route url='/' component='app-home' exact={true} />
              <stencil-route url='/posts' component='app-posts' />
              <stencil-route url='/user/:id' component='app-profile' />
              <stencil-route url='/user/:id/todos' component='app-todos' />
            </stencil-route-switch>
          </stencil-router>
        </main>
      </div>
    );
  }
}
