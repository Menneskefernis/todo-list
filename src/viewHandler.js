import elements from './base';

const ProjectsView = (() => {
  const render = (projects) => {
    elements.projectList.innerHTML = '';
    projects.forEach(project => renderProject(project));
  }
  
  const renderProject = project => {
    const markup = `
      <li class="project" data-id="${project.id}">
        <h3>${project.title}</h3>
        <div class="del-project-btn">
          <i class="far fa-times-circle"></i>
        </div>
      </li>
    `;
    elements.projectList.insertAdjacentHTML('afterbegin', markup);
  }

  const select = (project) => {
    const projectNodes = Array.from(elements.projectList.children);
    
    projectNodes.forEach(node => node.classList.remove('active'));
    const projectNode = document.querySelector(`[data-id='${project.id}']`);
    projectNode.classList.add('active');
  }

  const getFormInput = () => {
    return elements.addProjectInput.value;
  }

  return {render, getFormInput, select};
})();


const TodosView = (() => {
  
  const render = (todos = '') => {
    if (todos === '') {
      elements.todoList.innerHTML = '';
    } else if (todos.length <= 0) {
      renderDefault();
    } else {
      elements.todoList.innerHTML = '';
      todos.forEach(todo => {
        renderTodo(todo, checkPriority(todos, todo));
      }); 
    }
  }

  const checkPriority = (todos, todo) => {
    if (todos[0] === todo && todos[todos.length - 1] === todo) return null;
    if (todos[0] === todo) {
      return 'last';
    } else if (todos[todos.length - 1] === todo) {
      return 'first';
    }
  }

  const renderDefault = () => {
    const markup = `
      <div id="default">
        <p>Go ahead!</p>
        <p>Add a thing to-do from the form to the right.</p>
      </div>
    `;
    elements.todoList.innerHTML = markup;
  }
  
  const renderTodo = (todo, priority) => {
    const markup = `
      <li class="todo" data-id="${todo.id}">
         
        ${insertCarets(priority)}
        
        <div>
          <h4>${todo.title}</h4>
          <p>Duedate: <em>${todo.dueDate}</em></p>
        </div>
        <div class="checkmark">
          <i class="far fa-square "></i>
        </div>
        <!--<input class="checkmark" type="checkbox">-->
        <div class="del-todo-btn">
          <i class="fas fa-times"></i>
        </div>
      </li>
    `;
    elements.todoList.insertAdjacentHTML('afterbegin', markup);
  }

  const insertCarets = (priority) => {
    const carets = `
      ${priority === 'first' ? "" : `<i class="fas fa-caret-up"></i>`}
      ${priority === 'last' ? "" : `<i class="fas fa-caret-down"></i>`} 
    `;

    if (priority === null) {
      return ''
    } else {
      return carets;
    }
  }

  const setCheckmark = (element) => {
    const todoNode = element.closest('li');
    todoNode.classList.toggle('completed');
    todoNode.classList.contains('completed') ? element.innerHTML = '<i class="far fa-check-square"></i>' : element.innerHTML = '<i class="far fa-square "></i>';
  }

  const setActive = (element) => {
    clearActiveTodo();
    element.classList.add('active');
  }

  const clearActiveTodo = () => {
    const todoNodes = Array.from(elements.todoList.children);
    todoNodes.forEach(node => node.classList.remove('active'));
  }

  const getFormInput = () => {
    return elements.addTodoForm;
  }

  return {render, setActive, clearActiveTodo, getFormInput, setCheckmark};
})();


const DetailsView = (() => {
  const showDetails = (todo) => {
    elements.detailsOverlay.classList.add('overlay');
    renderDetails(todo);
  }

  const renderDetails = todo => {
    const markup = `
      <div>
        <h5>Title:</h5>
        <p>${todo.title}</p>
      </div>
      <div>
        <h5>Description:</h5>
        <p>${todo.description}</p>
      </div>
      <div>
        <h5>Due date:</h5>
        <p>${todo.dueDate}</p>
      </div>
    `;
    elements.detailsList.innerHTML = markup;
  }

  const hideDetails = () => {
    elements.detailsOverlay.classList.remove('overlay');
  }

  return {showDetails, hideDetails};
})();

export {ProjectsView, TodosView, DetailsView};