const uniqid = require('uniqid');

const project = (title) => {
  const todos = [];
  const id = uniqid();
  let activeTodo;

  const addTodo = (todo) => {
    todos.unshift(todo);
  }

  const removeTodo = (id) => {
    todos.splice(findTodoIndex(id), 1);
  }

  const getTodos = () => {
    return todos;
  }

  const findTodo = id => {
    return todos.find(todo => todo.id === id);
  }

  const setActiveTodo = (todo) => {
    activeTodo = todo;
  }

  const getActiveTodo = () => {
    return activeTodo;
  }

  const setTodoPriority = (id, direction) => {
    const index = findTodoIndex(id);
    const todo = todos.splice(index, 1)[0];
    direction === 'up' ? todos.splice(index + 1, 0, todo) : todos.splice(index - 1, 0, todo);
  }

  const findTodoIndex = (id) => {
    return todos.findIndex(todo => todo.id === id);
  }

  return {title, id, todos, getTodos, addTodo, findTodo, removeTodo, setTodoPriority, setActiveTodo, getActiveTodo};
}

export default project;