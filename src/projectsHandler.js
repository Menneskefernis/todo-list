import project from "./project";

const Projects = (() => {
  const projects = [];
  let activeProject;

  const add = project => {
    projects.unshift(project);
  }

  const remove = id => {
    const index = projects.findIndex(project => project.id === id);
    projects.splice(index, 1);
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

  return {add, remove, get, find, setActive, getActive};
})();

export default Projects;