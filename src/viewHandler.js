import elements from './base';

const renderProjects = (projects) => {
  elements.projectList.innerHTML = '';
  projects.forEach(project => renderProject(project));
}

const renderProject = project => {
  const markup = `
    <li class="project" data-id="${project.id}">
      <h3>${project.title}</h3>
    </li>
  `;
  elements.projectList.insertAdjacentHTML('afterbegin', markup);
}

const renderTodos = todos => {
  elements.todoList.innerHTML = '';
  todos.forEach(todo => renderTodo(todo));
}

const renderTodo = todo => {
  const markup = `
    <li class="todo">
      <div>
        <h4>${todo.title}</h4>
        <p>Duedate: <em>${todo.dueDate}</em></p>
      </div>
      <input type="checkbox">
    </li>
  `;
  elements.todoList.insertAdjacentHTML('afterbegin', markup);
}

const setTodoActive = (element) => {
  const todoNodes = Array.from(elements.todoList.children);
  
  todoNodes.forEach(node => node.classList.remove('active'));
  element.classList.add('active');
}

export {renderProjects, renderTodos, setTodoActive};