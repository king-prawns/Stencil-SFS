import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'app-root',
  styleUrl: 'app-root.scss',
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
              <stencil-route url='/' component='app-users' exact={true} />
              <stencil-route url='/posts' component='app-posts' exact={true} />
              <stencil-route url='/user/:id' component='app-user' exact={true} />
              <stencil-route url='/user/:id/todos' component='app-todos' exact={true} />
              <stencil-route component="page-not-found" />
            </stencil-route-switch>
          </stencil-router>
        </main>
      </div>
    );
  }
}
