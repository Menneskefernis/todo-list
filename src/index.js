import todo from './todo';
import elements from './base';
import project from './project';
import Projects from './projectsHandler';
import {ProjectsView, TodosView} from './viewHandler';

const addProject = (e) => {
  e.preventDefault();
  const projectName = ProjectsView.getFormInput();
  const proj = project(projectName);
  Projects.add(proj);
  
  ProjectsView.render(Projects.get());
  elements.addProjectForm.reset();
}

const openProject = (e) => {
  const target = e.target;
  if (target.matches('.project, .project *')) {    

    const id = target.closest('li').dataset.id;
    const project = Projects.find(id);
    console.log(document.querySelector(`[data-id='${id}']`)); // Her

    Projects.setActive(project);
    ProjectsView.setActiveProject(target.closest('li'));
    TodosView.render(project.getTodos());
  }
}

const openTodo = (e) => {
  const target = e.target;
  if (target.matches('.todo, .todo *')) {
    TodosView.setActiveTodo(target.closest('li'));
  }
}

const addTodo = (e) => {
  e.preventDefault();
  const inputValues = TodosView.getFormInput();
  const proj = Projects.getActive();
  
  proj.addTodo(
    todo(
      inputValues['title'].value,
      'Some description that is necessary',
      inputValues['due-date'].value
    )
  );

  TodosView.render(proj.getTodos());
  elements.addTodoForm.reset();
}



const Init = () => {
  const item1 = todo(
    'Make a note',
    'I have to remember to make a note of something important',
    'Monday'
  );

  const item2 = todo(
    'Make another note',
    'This is a less important todo',
    'Friday'
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
  TodosView.render(proj1.getTodos());
};

Init();

elements.addProjectBtn.addEventListener('click', addProject);
elements.projectList.addEventListener('click', openProject);
elements.todoList.addEventListener('click', openTodo);
elements.addTodoBtn.addEventListener('click', addTodo);