import { Component, h, Prop, State } from '@stencil/core';
import { MatchResults } from '@stencil/router';

@Component({
  tag: 'app-todos',
  styleUrl: 'app-todos.scss',
  shadow: true
})
export class AppTodos {
  @Prop() match: MatchResults;
  @State() todos: Todos = [];
  @State() completed: number;

  componentWillLoad() {
    fetch(`http://localhost:4000/users/${this.match.params.id}/todos`)
      .then((response: Response) => response.json())
      .then(response => {
        this.todos = response;
        this.completed = response.filter(t => t.completed).length;
      });
  }

  render() {
    return (
      <div class="app-todos">
        <stencil-route-link url={`/user/${this.match.params.id}`}>
          <button type="button">Back to user</button>
        </stencil-route-link>
        <h4 class="title">TODO: {this.completed}/{this.todos.length}</h4>
        {this.todos.map((todo) =>
          (<div key={todo.id} class="todo">
            <input id={`todo_${todo.id}`} type="checkbox" class="todo-input" disabled checked={todo.completed} />
            <label htmlFor={`todo_${todo.id}`} class="todo-label">
            {todo.title}
            </label>
          </div>)
        )}
      </div>
    );
  }

}
