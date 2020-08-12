const uniqid = require('uniqid');

const todo = (title, description, dueDate) => {
  const id = uniqid();
  return {title, description, dueDate, id};
}

export default todo;