const Projects = (() => {
  const projects = [];
  let activeProject;

  const add = project => {
    projects.unshift(project);
  }

  const get = () => {
    return projects;
  }

  const find = id => {
    const project = projects.find(project => project.id === id);
    return project;
  }

  const setActive = project => {
    activeProject = project;
  }

  const getActive = () => {
    return activeProject;
  }

  return {add, get, find, setActive, getActive};
})();

export default Projects;