import { Component, h, State } from '@stencil/core';

@Component({
  tag: 'app-home',
  styleUrl: 'app-home.scss',
  shadow: true
})
export class AppHome {
  @State() users: Users = [];

  handleUserClick(id: number){
    console.log(id)
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
      <div class="app-home">
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
