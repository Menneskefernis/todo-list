const uniqid = require('uniqid');

const project = (title) => {
  const todos = [];
  const id = uniqid();

  const addTodo = (todo) => {
    todos.unshift(todo);
  }

  const removeTodo = (id) => {
    const index = todos.findIndex(todo => todo.id === id);
    todos.splice(index, 1);
  }

  const getTodos = () => {
    return todos;
  }

  const findTodo = id => {
    return todos.find(todo => todo.id === id);
  }

  return {title, id, getTodos, addTodo, findTodo, removeTodo};
}

export default project;