const Projects = (() => {
  const projects = [];

  const add = (project) => {
    projects.unshift(project);
  }

  const get = () => {
    return projects;
  }

  const find = (id) => {
    const project = projects.find(project => project.id === id);
    return project;
  }

  return {add, get, find};
})();

export default Projects;