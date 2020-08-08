const project = (title) => {
  const todos = [];

  const addTodo = (todo) => {
    todos.shift(todo);
  }

  return {title, addTodo};
}

export default project;