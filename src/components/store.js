import { observable } from "mobx";

class TodoStore {
  @observable todos = [];

  add(task) {
    this.todos.push({
      task: task,
      id: new Date(),
      completed: false
    });
  }
}

const store = new TodoStore();

export default store;
