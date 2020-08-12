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

  const findTodo = id => {
    return todos.find(todo => todo.id === id);
  }

  return {title, id, getTodos, addTodo, findTodo};
}

export default project;