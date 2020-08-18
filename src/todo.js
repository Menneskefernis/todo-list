const uniqid = require('uniqid');

const todo = (title, description, dueDate, completed=false) => {
  const id = uniqid();
  //let done = false;

  //const setCompleted = (boolean) => {
  //  done = boolean
  //}
//
  //const completed = () => {
  //  return done;
  //}

  const toJSON = () => {
    return {
      title,
      description,
      dueDate,
      done    
    };
  }

  return {title, description, dueDate, id, completed};
}

export default todo;