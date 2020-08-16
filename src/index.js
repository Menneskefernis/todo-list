import todo from './todo';
import elements from './base';
import project from './project';
import Projects from './projectsHandler';
import {ProjectsView, TodosView, DetailsView, AddTodoView} from './viewHandler';

const ProjectController = (() => {
  const addProject = (e) => {
    e.preventDefault();
    const projectName = ProjectsView.getFormInput();
    const proj = project(projectName);
    Projects.add(proj);
    
    ProjectsView.render(Projects.get());
    openProject(proj);
    elements.addProjectForm.reset();
  }
  
  const openProject = (input) => {
    let project;
    input.target ? project = findProjectOnEvent(input) : project = input;
    
    Projects.setActive(project);
    ProjectsView.select(project);
    TodosView.render(project.getTodos());
    TodoController.closeTodo();
  }
  
  const findProjectOnEvent = e => {
    const target = e.target;
    if (!target.matches('.project, .project *')) return; 
      
    const id = target.closest('li').dataset.id;
    return Projects.find(id);
  }
  
  const deleteProject = (e) => {
    const target = e.target;
    if (!target.matches('.del-project-btn, .del-project-btn *')) return;
    const id = target.closest('li').dataset.id;
    
    Projects.remove(id);
    ProjectsView.render(Projects.get());
    TodosView.render();
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
      openTodo(element);
    }
  }
  
  const openTodo = (element) => {
    TodosView.setActive(element);
    const id = element.dataset.id;
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
  
    TodosView.render(proj.getTodos());
    elements.addTodoForm.reset();
  }
  
  const deleteTodo = (e) => {
    const target = e.target;
    if (!target.matches('.del-todo-btn, .del-todo-btn *')) return;
    
    const id = target.closest('li').dataset.id;
    const project = Projects.getActive();
    project.removeTodo(id);
    TodosView.render(project.getTodos());
    closeTodo();
  }
  
  const changePriority = (e) => {
    const target = e.target;
    if (!target.matches('.fa-caret-up, .fa-caret-down')) return;
      const id = target.closest('li').dataset.id;
      const project = Projects.getActive();
  
      project.setTodoPriority(id, getDirection(target));
      TodosView.render(project.getTodos());
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
    todo.completed() ? todo.setCompleted(false) : todo.setCompleted(true);
  
    TodosView.toggleChecked(id);
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
    TodosView.render(activeProject.getTodos());
  }
  return {editTodo, saveEdit};
})();


const Init = () => {
  const item1 = todo(
    'Make a note',
    'I have to remember to make a note of something important',
    'Monday'
  );

  const item2 = todo(
    'Make another note',
    'This is a less important todo',
    '2020-05-03'
  );

  const item3 = todo(
    'This is third todo',
    'Drink a beer and relax',
    'Every day'
  );
  
  const proj1 = project('My First Project');
  const proj2 = project('My Second Project');

  proj1.addTodo(item1);
  proj1.addTodo(item2);

  proj2.addTodo(item3);

  Projects.add(proj1);
  Projects.add(proj2);
  ProjectsView.render(Projects.get());

  Projects.setActive(proj1);
  ProjectsView.select(proj1);
  TodosView.render(proj1.getTodos());
};

Init();

elements.addProjectBtn.addEventListener('click', ProjectController.addProject);
elements.projectList.addEventListener('click', ProjectController.openProject);
elements.projectList.addEventListener('click', ProjectController.deleteProject);
elements.todoList.addEventListener('click', TodoController.toggleOpen);
elements.todoList.addEventListener('click', TodoController.deleteTodo);
elements.todoList.addEventListener('click', TodoController.changePriority);
elements.todoList.addEventListener('click', TodoController.toggleCompleted);
elements.addTodoBtn.addEventListener('click', TodoController.addTodo);
elements.closeDetailsBtn.addEventListener('click', TodoController.closeTodo);
elements.detailsList.addEventListener('click', DetailsController.editTodo);
elements.detailsList.addEventListener('click', DetailsController.saveEdit);
