import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'app-todos',
  styleUrl: 'app-todos.scss',
  shadow: true
})
export class AppTodos {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
