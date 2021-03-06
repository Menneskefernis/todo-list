const elements = {
  projectList: document.getElementById('project-list'),
  addProjectForm: document.querySelector('#add-project form'),
  addProjectInput: document.querySelector('#add-project input'),
  addProjectBtn: document.querySelector('#add-project button'),
  todoList: document.getElementById('todo-list'),
  addTodoForm: document.getElementById('add-todo-form'),
  titleInput: document.getElementById('title'),
  dueDateInput: document.getElementById('due-date'),
  addTodoBtn: document.querySelector('#add button'),
  detailsOverlay: document.getElementById('details'),
  detailsList: document.getElementById('details-list'),
  closeDetailsBtn: document.getElementById('close-details-btn'),
  popup: document.getElementById('overlay'),
  popupText: document.getElementById('popup-text'),
  deleteNoBtn: document.getElementById('delete-no'),
  deleteYesBtn: document.getElementById('delete-yes')
}

export default elements;