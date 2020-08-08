import elements from './base';

const renderProjects = (projects) => {
  elements.projectList.innerHTML = '';
  projects.forEach(project => {
    renderProject(project);
  });
}

const renderProject = project => {
  const markup = `
    <li>
      <h3>${project.title}</h3>
    </li>
  `;

  elements.projectList.insertAdjacentHTML('afterbegin', markup);
}

export {renderProjects};