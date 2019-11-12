import { Component, h, Prop, State } from '@stencil/core';
import { MatchResults } from '@stencil/router';

@Component({
  tag: 'app-user',
  styleUrl: 'app-user.scss',
  shadow: true
})
export class AppUser {
  @Prop() match: MatchResults;
  @State() user: User;

  constructor() {
    this.handleFormChange = this.handleFormChange.bind(this);
    this.handleUpdateClick = this.handleUpdateClick.bind(this);
  }

  handleFormChange(event: Event): void {
    const el = event.target as HTMLInputElement;
    this.user[el.name] = el.value;
  }

  handleUpdateClick(): void {
    fetch(`http://localhost:4000/users/${this.match.params.id}`, {
      method: 'PUT',
      headers: {'content-type': 'application/json'},
      body: JSON.stringify(this.user)
    })
  }

  handleSayNameClick(name: string, username: string){
    alert(`${name} ${username}!'`);
  }

  componentWillLoad() {
    fetch(`http://localhost:4000/users/${this.match.params.id}`)
      .then((response: Response) => response.json())
      .then(response => {
        this.user = response;
      });
  }

  render() {
    if (this.user) {
      return (
        <div class="app-user">
          <stencil-route-link url={`/user/${this.match.params.id}/todos`}>
            <button type="button" class="button button-todo">Show Todo List</button>
          </stencil-route-link>
          <h4 class="title">User Detail</h4>
          <form noValidate onInput={this.handleFormChange}>
            <div class="form-group">
              <label htmlFor="name" class="form-label">Name</label>
              <input id="name" type="text" class="form-input" name="name" value={this.user.name}
              />
              {!this.user.name &&
                <div class="alert alert-danger">
                    Name is required
                </div>
              }
            </div>
            <div class="form-group">
              <label htmlFor="email" class="form-label">Email</label>
              <input id="email" type="text" class="form-input" name="email" value={this.user.email} />
            </div>
            <div class="form-group">
              <label htmlFor="username" class="form-label">Username</label>
              <input id="username" type="text" class="form-input" name="username" value={this.user.username} />
            </div>
            <div class="form-group">
              <label htmlFor="phone" class="form-label">Phone</label>
              <input id="phone" type="text" class="form-input" name="phone" value={this.user.phone}
              />
            </div>
            <button
              type="button"
              class="button-update"
              onClick={this.handleUpdateClick}
              disabled={!this.user.name}>
                Update User
            </button>
            <button
              type="button"
              class="button-alert"
              onClick={() => this.handleSayNameClick(this.user.name, this.user.username)}
            >
              Click Me
            </button>
          </form>
        </div>
      );
    }
  }
}
