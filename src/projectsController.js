const Projects = (() => {
  const projects = [];

  const add = (project) => {
    projects.unshift(project);
  }

  const get = () => {
    return projects;
  }

  return {add, get};
})();

export default Projects;