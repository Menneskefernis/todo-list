import todo from './todo';
import elements from './base';
import project from './project';
import Projects from './projectsHandler';
import {ProjectsView, TodosView, DetailsView, AddTodoView, Popup} from './viewHandler';

const ProjectController = (() => {
  const addProject = (e) => {
    e.preventDefault();
    const projectName = ProjectsView.getFormInput();
    const proj = project(projectName);
    Projects.add(proj);
    
    ProjectsView.render(Projects.get());
    openProject(proj);
    elements.addProjectForm.reset();
    Projects.saveToLocalStorage();
  }
  
  const openProject = (input) => {
    let project;
    input.target ? project = findProjectOnEvent(input) : project = input;
    
    Projects.setActive(project);
    ProjectsView.select(project);
    
    TodosView.render(project.todos);
    TodoController.closeTodo();
  }
  
  const findProjectOnEvent = e => {
    const target = e.target;
    if (!target.matches('.project, .project *')) return; 
      
    const id = target.closest('li').dataset.id;
    return Projects.find(id);
  }
  
  const deleteProject = (target) => {
    if (!target.matches('.del-project-btn, .del-project-btn *')) return;
    const id = target.closest('li').dataset.id;
    
    Projects.remove(id);
    ProjectsView.render(Projects.get());
    TodosView.render();
    Projects.saveToLocalStorage();
  }

  return {addProject, deleteProject, openProject};
})();

const TodoController = (() => {
  const toggleOpen = (e) => {
    const target = e.target;

    if (target.matches('.del-todo-btn, .del-todo-btn *, .fa-caret-up, .fa-caret-down, .checkmark, .checkmark *')) return;
    if (!target.matches('.todo, .todo *')) return;
    
    const element = target.closest('li');
    if (element.classList.contains('active')) {
      closeTodo();
      return true;
    } else {
      const id = element.dataset.id;
      openTodo(id);
    }
  }
  
  const openTodo = (id) => {
    TodosView.setActive(id);
    
    const activeProject = Projects.getActive();
    const todo = activeProject.findTodo(id);
    
    activeProject.setActiveTodo(todo);
    DetailsView.showDetails(todo);
  }
  
  const closeTodo = () => {
    DetailsView.hideDetails();
    TodosView.clearActiveTodo();
  }
  
  const addTodo = (e) => {
    e.preventDefault();
    const inputValues = AddTodoView.getFormInput();
    const proj = Projects.getActive();
    
    proj.addTodo(
      todo(
        inputValues.title.value,
        inputValues.description.value,
        inputValues['due-date'].value
      )
    );
  
    TodosView.render(proj.todos);
    elements.addTodoForm.reset();
    Projects.saveToLocalStorage();
  }
  
  const deleteTodo = (target) => {
    if (!target.matches('.del-todo-btn, .del-todo-btn *')) return;
    
    const id = target.closest('li').dataset.id;
    const project = Projects.getActive();
    project.removeTodo(id);
    TodosView.render(project.todos);
    closeTodo();
    Projects.saveToLocalStorage();
  }
  
  const changePriority = (e) => {
    const target = e.target;
    if (!target.matches('.fa-caret-up, .fa-caret-down')) return;
      const id = target.closest('li').dataset.id;
      const project = Projects.getActive();
  
      project.setTodoPriority(id, getDirection(target));
      TodosView.render(project.todos);
      Projects.saveToLocalStorage();
  }
  
  const getDirection = (target) => {
    if (target.classList.contains('fa-caret-up')) {
      return 'up';
    } else {
      return 'down';
    }
  }
  
  const toggleCompleted = (e) => {
    const target = e.target;
    
    if (!target.matches('.checkmark, .checkmark *')) return;
    const id = target.closest('li').dataset.id;
    const todo = Projects.getActive().findTodo(id);
    todo.completed ? todo.completed = false : todo.completed = true;
  
    TodosView.toggleChecked(id);
    Projects.saveToLocalStorage();
  }

  return {addTodo, closeTodo, toggleOpen, deleteTodo, changePriority, toggleCompleted}
})();

const DetailsController = (() => {
  const editTodo = (e) => {
    if (e.target.id !== 'edit-btn') return;
    const todo = Projects.getActive().getActiveTodo();
    DetailsView.editDetails(todo);
  }

  const saveEdit = (e) => {
    e.preventDefault();
    if (e.target.id !== 'save-edit-btn') return;
    const inputValues = DetailsView.getFormInput();
    const activeProject = Projects.getActive();
    const todo = activeProject.getActiveTodo();
    
    todo.title = inputValues['edit-title'].value;
    todo.dueDate = inputValues['edit-due-date'].value;
    todo.description = inputValues['edit-description'].value;
    
    DetailsView.showDetails(todo);
    TodosView.render(activeProject.todos);
    TodosView.setActive(todo.id);
    Projects.saveToLocalStorage();
  }
  return {editTodo, saveEdit};
})();

const PopupController = (() => {
  let target;
  const openPopup = (e) => {
    target = e.target;
    if (!target.matches('.del-project-btn, .del-project-btn *, .del-todo-btn, .del-todo-btn *')) return;
    target.closest('ul').id === 'project-list' ? Popup.open('project') : Popup.open('to-do');
  }

  const handleDeletion = () => {
    Popup.close();
    target.closest('ul').id === 'project-list' ? ProjectController.deleteProject(target) : TodoController.deleteTodo(target);
  }
  return {openPopup, handleDeletion};
})();


const LoadingController = (() => {
  const firstTimeSetup = () => {
    const proj1 = project('My First Project');
    Projects.add(proj1);
    ProjectsView.render(Projects.get());
    Projects.setActive(proj1);
    ProjectsView.select(proj1);
    TodosView.render(proj1.todos);
  }
  
  const loadProjects = (projects) => {
    projects.forEach(projectItem => {
      
      const proj = Projects.add(project(projectItem.title));
      proj.id = projectItem.id;
      projectItem.todos.forEach(todoItem => {
        
        proj.addTodo(
          todo(
            todoItem.title,
            todoItem.description,
            todoItem.dueDate,
            todoItem.completed
          )
        );
        
      })
  
    });
    ProjectsView.render(Projects.get());
  }
  
  const init = () => {
    const projects = Projects.getFromLocalStorage();
    !projects ? firstTimeSetup() : loadProjects(projects);
    ProjectController.openProject(Projects.get()[0]);
  };
  return {init};
})();

elements.addProjectBtn.addEventListener('click', ProjectController.addProject);
elements.projectList.addEventListener('click', ProjectController.openProject);
elements.projectList.addEventListener('click', PopupController.openPopup);
elements.todoList.addEventListener('click', TodoController.toggleOpen);
elements.todoList.addEventListener('click', PopupController.openPopup);
elements.todoList.addEventListener('click', TodoController.changePriority);
elements.todoList.addEventListener('click', TodoController.toggleCompleted);
elements.addTodoBtn.addEventListener('click', TodoController.addTodo);
elements.closeDetailsBtn.addEventListener('click', TodoController.closeTodo);
elements.detailsList.addEventListener('click', DetailsController.editTodo);
elements.detailsList.addEventListener('click', DetailsController.saveEdit);
elements.deleteNoBtn.addEventListener('click', Popup.close);
elements.deleteYesBtn.addEventListener('click', PopupController.handleDeletion);

LoadingController.init();
window.onload = Projects.getFromLocalStorage();
