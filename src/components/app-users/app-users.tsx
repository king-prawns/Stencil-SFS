import { Component, h, Prop, State } from '@stencil/core';
import { RouterHistory } from '@stencil/router';

@Component({
  tag: 'app-users',
  styleUrl: 'app-users.scss',
  shadow: true
})
export class AppUsers {
  @Prop() history: RouterHistory;
  @State() users: Users = [];

  handleUserClick(id: number){
    this.history.push(`/user/${id}`);
  }

  componentWillLoad() {
    fetch('http://localhost:4000/users')
      .then((response: Response) => response.json())
      .then(response => {
        this.users = response;
        console.log(this.users)
      });
  }

  render() {
    return (
      <div class="app-users">
        <table class="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {this.users.map((user) =>
              (<tr key={user.id} onClick={() => this.handleUserClick(user.id)}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
              </tr>)
            )}
          </tbody>
        </table>
      </div>
    );
  }
}
