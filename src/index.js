import todo from './todo';
import elements from './base';
import project from './project';
import Projects from './projectsHandler';
import {renderProjects, renderTodos} from './viewHandler';

const addProject = (e) => {
  e.preventDefault();
  const projectName = elements.addProjectInput.value;
  Projects.add(project(projectName));
  renderProjects(Projects.get());
  elements.addProjectForm.reset();
}

const openProject = (e) => {
  const target = e.target;
  if (target.matches('.project, .project *')) {
    const id = target.closest('li').dataset.id;
    const todos = Projects.find(id).getTodos();
    renderTodos(todos);
  }
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
  renderProjects(Projects.get());
};

Init();

elements.addProjectBtn.addEventListener('click', addProject);
elements.projectList.addEventListener('click', openProject);