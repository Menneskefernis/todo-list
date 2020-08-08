import elements from './base';
import project from './project';
import Projects from './projectsController';
import {renderProjects} from './view';

const addProject = (e) => {
  e.preventDefault();
  const projectName = elements.addProjectInput.value;
  Projects.add(project(projectName));
  renderProjects(Projects.get());
  elements.addProjectForm.reset();
}

const Init = () => {
  Projects.add(project('My First Project'));
  renderProjects(Projects.get());
};

Init();

elements.addProjectBtn.addEventListener('click', addProject);


//const something = todo(
//                    'Make a note',
//                    'I have to remember to make a note of something important',
//                    'Monday',
//                    1,
//                    'This is a top priority',
//                    false
//                  );
//
//console.log(something.dueDate)