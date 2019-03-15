import React from "react";
import store from "./store";
import { observer } from "mobx-react";

@observer
export default class Todos extends React.Component {
  render() {
    return (
      <ul>
        {store.todos.map(todo => (
          <li>{todo.task}</li>
        ))}
      </ul>
    );
  }
}
