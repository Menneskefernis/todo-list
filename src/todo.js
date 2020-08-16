const uniqid = require('uniqid');

const todo = (title, description, dueDate) => {
  const id = uniqid();
  let done = false;

  const setCompleted = (boolean) => {
    done = boolean
  }

  const completed = () => {
    return done;
  }

  return {title, description, dueDate, id, setCompleted, completed};
}

export default todo;