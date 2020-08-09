const uniqid = require('uniqid');

const project = (title) => {
  const todos = [];
  const id = uniqid();

  const addTodo = (todo) => {
    todos.unshift(todo);
  }

  const getTodos = () => {
    return todos;
  }

  return {title, id, getTodos, addTodo};
}

export default project;