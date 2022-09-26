import { Component } from "react";
import { connect } from "react-redux";
import { addTodo, removeTodo, toggleTodo } from "./store";

import "./styles.css";

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hello Redux Todo</h1>
        <NewTodo />
        <TodoList />
      </div>
    );
  }
}

class _NewTodo extends Component {
  render() {
    const dispatch = this.props.dispatch;

    const handleSubmit = (event) => {
      event.preventDefault();
      dispatch(addTodo(event.target.title.value));
      event.target.reset();
    };

    return (
      <form onSubmit={handleSubmit}>
        <input type="text" name="title" placeholder="new todo" />
        <input type="submit" value="Add Todo" />
      </form>
    );
  }
}

const NewTodo = connect()(_NewTodo);

class _TodoList extends Component {
  render() {
    const { todos, toggleTodo, removeTodo } = this.props;

    return (
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => toggleTodo(todo.id)}
            />{" "}
            {todo.title}{" "}
            <button onClick={() => removeTodo(todo.id)}>delete</button>
          </li>
        ))}
      </ul>
    );
  }
}

const mapStateToProps = (state) => ({ todos: state });

const TodoList = connect(mapStateToProps, {
  removeTodo,
  toggleTodo
})(_TodoList);
