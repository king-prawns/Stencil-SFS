import { Component, Prop, h } from '@stencil/core';
import { MatchResults } from '@stencil/router';

@Component({
  tag: 'app-profile',
  styleUrl: 'app-profile.css',
  shadow: true
})
export class AppProfile {
  @Prop() match: MatchResults;

  normalize(id: string): string {
    if (id) {
      return id.substr(0, 1).toUpperCase() + id.substr(1).toLowerCase();
    }
    return '';
  }

  render() {
    if (this.match && this.match.params.id) {
      return (
        <div class="app-profile">
          <p>
            Hello! My name is {this.normalize(this.match.params.id)}. My name was passed in
            through a route param!
          </p>
        </div>
      );
    }
  }
}
