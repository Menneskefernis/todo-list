/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// shim for using process in browser\nvar process = module.exports = {};\n\n// cached from whatever global is present so that test runners that stub it\n// don't break things.  But we need to wrap it in a try catch in case it is\n// wrapped in strict mode code which doesn't define any globals.  It's inside a\n// function because try/catches deoptimize in certain engines.\n\nvar cachedSetTimeout;\nvar cachedClearTimeout;\n\nfunction defaultSetTimout() {\n    throw new Error('setTimeout has not been defined');\n}\nfunction defaultClearTimeout () {\n    throw new Error('clearTimeout has not been defined');\n}\n(function () {\n    try {\n        if (typeof setTimeout === 'function') {\n            cachedSetTimeout = setTimeout;\n        } else {\n            cachedSetTimeout = defaultSetTimout;\n        }\n    } catch (e) {\n        cachedSetTimeout = defaultSetTimout;\n    }\n    try {\n        if (typeof clearTimeout === 'function') {\n            cachedClearTimeout = clearTimeout;\n        } else {\n            cachedClearTimeout = defaultClearTimeout;\n        }\n    } catch (e) {\n        cachedClearTimeout = defaultClearTimeout;\n    }\n} ())\nfunction runTimeout(fun) {\n    if (cachedSetTimeout === setTimeout) {\n        //normal enviroments in sane situations\n        return setTimeout(fun, 0);\n    }\n    // if setTimeout wasn't available but was latter defined\n    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {\n        cachedSetTimeout = setTimeout;\n        return setTimeout(fun, 0);\n    }\n    try {\n        // when when somebody has screwed with setTimeout but no I.E. maddness\n        return cachedSetTimeout(fun, 0);\n    } catch(e){\n        try {\n            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally\n            return cachedSetTimeout.call(null, fun, 0);\n        } catch(e){\n            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error\n            return cachedSetTimeout.call(this, fun, 0);\n        }\n    }\n\n\n}\nfunction runClearTimeout(marker) {\n    if (cachedClearTimeout === clearTimeout) {\n        //normal enviroments in sane situations\n        return clearTimeout(marker);\n    }\n    // if clearTimeout wasn't available but was latter defined\n    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {\n        cachedClearTimeout = clearTimeout;\n        return clearTimeout(marker);\n    }\n    try {\n        // when when somebody has screwed with setTimeout but no I.E. maddness\n        return cachedClearTimeout(marker);\n    } catch (e){\n        try {\n            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally\n            return cachedClearTimeout.call(null, marker);\n        } catch (e){\n            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.\n            // Some versions of I.E. have different rules for clearTimeout vs setTimeout\n            return cachedClearTimeout.call(this, marker);\n        }\n    }\n\n\n\n}\nvar queue = [];\nvar draining = false;\nvar currentQueue;\nvar queueIndex = -1;\n\nfunction cleanUpNextTick() {\n    if (!draining || !currentQueue) {\n        return;\n    }\n    draining = false;\n    if (currentQueue.length) {\n        queue = currentQueue.concat(queue);\n    } else {\n        queueIndex = -1;\n    }\n    if (queue.length) {\n        drainQueue();\n    }\n}\n\nfunction drainQueue() {\n    if (draining) {\n        return;\n    }\n    var timeout = runTimeout(cleanUpNextTick);\n    draining = true;\n\n    var len = queue.length;\n    while(len) {\n        currentQueue = queue;\n        queue = [];\n        while (++queueIndex < len) {\n            if (currentQueue) {\n                currentQueue[queueIndex].run();\n            }\n        }\n        queueIndex = -1;\n        len = queue.length;\n    }\n    currentQueue = null;\n    draining = false;\n    runClearTimeout(timeout);\n}\n\nprocess.nextTick = function (fun) {\n    var args = new Array(arguments.length - 1);\n    if (arguments.length > 1) {\n        for (var i = 1; i < arguments.length; i++) {\n            args[i - 1] = arguments[i];\n        }\n    }\n    queue.push(new Item(fun, args));\n    if (queue.length === 1 && !draining) {\n        runTimeout(drainQueue);\n    }\n};\n\n// v8 likes predictible objects\nfunction Item(fun, array) {\n    this.fun = fun;\n    this.array = array;\n}\nItem.prototype.run = function () {\n    this.fun.apply(null, this.array);\n};\nprocess.title = 'browser';\nprocess.browser = true;\nprocess.env = {};\nprocess.argv = [];\nprocess.version = ''; // empty string to avoid regexp issues\nprocess.versions = {};\n\nfunction noop() {}\n\nprocess.on = noop;\nprocess.addListener = noop;\nprocess.once = noop;\nprocess.off = noop;\nprocess.removeListener = noop;\nprocess.removeAllListeners = noop;\nprocess.emit = noop;\nprocess.prependListener = noop;\nprocess.prependOnceListener = noop;\n\nprocess.listeners = function (name) { return [] }\n\nprocess.binding = function (name) {\n    throw new Error('process.binding is not supported');\n};\n\nprocess.cwd = function () { return '/' };\nprocess.chdir = function (dir) {\n    throw new Error('process.chdir is not supported');\n};\nprocess.umask = function() { return 0; };\n\n\n//# sourceURL=webpack:///./node_modules/process/browser.js?");

/***/ }),

/***/ "./node_modules/uniqid/index.js":
/*!**************************************!*\
  !*** ./node_modules/uniqid/index.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/* WEBPACK VAR INJECTION */(function(process) {/* \n(The MIT License)\nCopyright (c) 2014-2019 Halász Ádám <mail@adamhalasz.com>\nPermission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the \"Software\"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:\nThe above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.\nTHE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.\n*/\n\n//  Unique Hexatridecimal ID Generator\n// ================================================\n\n//  Dependencies\n// ================================================\nvar pid = process && process.pid ? process.pid.toString(36) : '' ;\nvar address = '';\nif(false){ var i, mac, networkInterfaces; } \n\n//  Exports\n// ================================================\nmodule.exports = module.exports.default = function(prefix, suffix){ return (prefix ? prefix : '') + address + pid + now().toString(36) + (suffix ? suffix : ''); }\nmodule.exports.process = function(prefix, suffix){ return (prefix ? prefix : '') + pid + now().toString(36) + (suffix ? suffix : ''); }\nmodule.exports.time    = function(prefix, suffix){ return (prefix ? prefix : '') + now().toString(36) + (suffix ? suffix : ''); }\n\n//  Helpers\n// ================================================\nfunction now(){\n    var time = Date.now();\n    var last = now.last || time;\n    return now.last = time > last ? time : last + 1;\n}\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../process/browser.js */ \"./node_modules/process/browser.js\")))\n\n//# sourceURL=webpack:///./node_modules/uniqid/index.js?");

/***/ }),

/***/ "./src/base.js":
/*!*********************!*\
  !*** ./src/base.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst elements = {\n  projectList: document.getElementById('project-list'),\n  addProjectForm: document.querySelector('#add-project form'),\n  addProjectInput: document.querySelector('#add-project input'),\n  addProjectBtn: document.querySelector('#add-project button'),\n  todoList: document.getElementById('todo-list'),\n  addTodoForm: document.getElementById('add-todo-form'),\n  titleInput: document.getElementById('title'),\n  dueDateInput: document.getElementById('due-date'),\n  addTodoBtn: document.querySelector('#add button'),\n  detailsOverlay: document.getElementById('details'),\n  detailsList: document.getElementById('details-list'),\n  closeDetailsBtn: document.getElementById('close-details-btn')\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (elements);\n\n//# sourceURL=webpack:///./src/base.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo */ \"./src/todo.js\");\n/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./base */ \"./src/base.js\");\n/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./project */ \"./src/project.js\");\n/* harmony import */ var _projectsHandler__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./projectsHandler */ \"./src/projectsHandler.js\");\n/* harmony import */ var _viewHandler__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./viewHandler */ \"./src/viewHandler.js\");\n\n\n\n\n\n\nconst addProject = (e) => {\n  e.preventDefault();\n  const projectName = _viewHandler__WEBPACK_IMPORTED_MODULE_4__[\"ProjectsView\"].getFormInput();\n  const proj = Object(_project__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(projectName);\n  _projectsHandler__WEBPACK_IMPORTED_MODULE_3__[\"default\"].add(proj);\n  \n  _viewHandler__WEBPACK_IMPORTED_MODULE_4__[\"ProjectsView\"].render(_projectsHandler__WEBPACK_IMPORTED_MODULE_3__[\"default\"].get());\n  openProject(proj);\n  _base__WEBPACK_IMPORTED_MODULE_1__[\"default\"].addProjectForm.reset();\n}\n\nconst openProject = (input) => {\n  let project;\n  input.target ? project = findProjectOnEvent(input) : project = input;\n  \n  _projectsHandler__WEBPACK_IMPORTED_MODULE_3__[\"default\"].setActive(project);\n  _viewHandler__WEBPACK_IMPORTED_MODULE_4__[\"ProjectsView\"].select(project);\n  _viewHandler__WEBPACK_IMPORTED_MODULE_4__[\"TodosView\"].render(project.getTodos());\n  closeTodo();\n}\n\nconst findProjectOnEvent = e => {\n  const target = e.target;\n  if (!target.matches('.project, .project *')) return; \n    \n  const id = target.closest('li').dataset.id;\n  return _projectsHandler__WEBPACK_IMPORTED_MODULE_3__[\"default\"].find(id);\n}\n\nconst deleteProject = (e) => {\n  const target = e.target;\n  if (!target.matches('.del-project-btn, .del-project-btn *')) return;\n  const id = target.closest('li').dataset.id;\n  \n  _projectsHandler__WEBPACK_IMPORTED_MODULE_3__[\"default\"].remove(id);\n  _viewHandler__WEBPACK_IMPORTED_MODULE_4__[\"ProjectsView\"].render(_projectsHandler__WEBPACK_IMPORTED_MODULE_3__[\"default\"].get());\n  _viewHandler__WEBPACK_IMPORTED_MODULE_4__[\"TodosView\"].render();\n  //openProject(Projects.get()[0]);\n}\n\n\nconst toggleTodo = (e) => {\n  const target = e.target;\n  if (target.matches('.del-todo-btn, .del-todo-btn *, .fa-caret-up, .fa-caret-down, .checkmark')) return;\n  if (!target.matches('.todo, .todo *')) return;\n  \n  const element = target.closest('li');\n  if (element.classList.contains('active')) {\n    closeTodo();\n    return true;\n  } else {\n    openTodo(element);\n  }\n}\n\nconst openTodo = (element) => {\n  _viewHandler__WEBPACK_IMPORTED_MODULE_4__[\"TodosView\"].setActive(element);\n  const id = element.dataset.id;\n  const todo = _projectsHandler__WEBPACK_IMPORTED_MODULE_3__[\"default\"].getActive().findTodo(id);\n  _viewHandler__WEBPACK_IMPORTED_MODULE_4__[\"DetailsView\"].showDetails(todo);\n}\n\nconst closeTodo = () => {\n  _viewHandler__WEBPACK_IMPORTED_MODULE_4__[\"DetailsView\"].hideDetails();\n  _viewHandler__WEBPACK_IMPORTED_MODULE_4__[\"TodosView\"].clearActiveTodo();\n}\n\nconst addTodo = (e) => {\n  e.preventDefault();\n  const inputValues = _viewHandler__WEBPACK_IMPORTED_MODULE_4__[\"TodosView\"].getFormInput();\n  const proj = _projectsHandler__WEBPACK_IMPORTED_MODULE_3__[\"default\"].getActive();\n  \n  proj.addTodo(\n    Object(_todo__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\n      inputValues.title.value,\n      inputValues.description.value,\n      inputValues['due-date'].value\n    )\n  );\n\n  _viewHandler__WEBPACK_IMPORTED_MODULE_4__[\"TodosView\"].render(proj.getTodos());\n  _base__WEBPACK_IMPORTED_MODULE_1__[\"default\"].addTodoForm.reset();\n}\n\nconst deleteTodo = (e) => {\n  const target = e.target;\n  if (!target.matches('.del-todo-btn, .del-todo-btn *')) return;\n  \n  const id = target.closest('li').dataset.id;\n  const project = _projectsHandler__WEBPACK_IMPORTED_MODULE_3__[\"default\"].getActive();\n  project.removeTodo(id);\n  _viewHandler__WEBPACK_IMPORTED_MODULE_4__[\"TodosView\"].render(project.getTodos());\n}\n\nconst changePriority = (e) => {\n  const target = e.target;\n  if (target.matches('.fa-caret-up, .fa-caret-down')) {\n    let direction;\n    target.classList.contains('fa-caret-up') ? direction = 'up' : direction = 'down';\n\n    const id = target.closest('li').dataset.id;\n    const project = _projectsHandler__WEBPACK_IMPORTED_MODULE_3__[\"default\"].getActive();\n\n    project.setTodoPriority(id, direction);\n    _viewHandler__WEBPACK_IMPORTED_MODULE_4__[\"TodosView\"].render(project.getTodos());\n  }\n}\n\nconst Init = () => {\n  const item1 = Object(_todo__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\n    'Make a note',\n    'I have to remember to make a note of something important',\n    'Monday'\n  );\n\n  const item2 = Object(_todo__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\n    'Make another note',\n    'This is a less important todo',\n    'Friday'\n  );\n\n  const item3 = Object(_todo__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\n    'This is third todo',\n    'Drink a beer and relax',\n    'Every day'\n  );\n  \n  const proj1 = Object(_project__WEBPACK_IMPORTED_MODULE_2__[\"default\"])('My First Project');\n  const proj2 = Object(_project__WEBPACK_IMPORTED_MODULE_2__[\"default\"])('My Second Project');\n\n  proj1.addTodo(item1);\n  proj1.addTodo(item2);\n\n  proj2.addTodo(item3);\n\n  _projectsHandler__WEBPACK_IMPORTED_MODULE_3__[\"default\"].add(proj1);\n  _projectsHandler__WEBPACK_IMPORTED_MODULE_3__[\"default\"].add(proj2);\n  _viewHandler__WEBPACK_IMPORTED_MODULE_4__[\"ProjectsView\"].render(_projectsHandler__WEBPACK_IMPORTED_MODULE_3__[\"default\"].get());\n\n  _projectsHandler__WEBPACK_IMPORTED_MODULE_3__[\"default\"].setActive(proj1);\n  _viewHandler__WEBPACK_IMPORTED_MODULE_4__[\"ProjectsView\"].select(proj1);\n  _viewHandler__WEBPACK_IMPORTED_MODULE_4__[\"TodosView\"].render(proj1.getTodos());\n};\n\nInit();\n\n_base__WEBPACK_IMPORTED_MODULE_1__[\"default\"].addProjectBtn.addEventListener('click', addProject);\n_base__WEBPACK_IMPORTED_MODULE_1__[\"default\"].projectList.addEventListener('click', openProject);\n_base__WEBPACK_IMPORTED_MODULE_1__[\"default\"].projectList.addEventListener('click', deleteProject);\n_base__WEBPACK_IMPORTED_MODULE_1__[\"default\"].todoList.addEventListener('click', toggleTodo);\n_base__WEBPACK_IMPORTED_MODULE_1__[\"default\"].todoList.addEventListener('click', deleteTodo);\n_base__WEBPACK_IMPORTED_MODULE_1__[\"default\"].todoList.addEventListener('click', changePriority);\n_base__WEBPACK_IMPORTED_MODULE_1__[\"default\"].addTodoBtn.addEventListener('click', addTodo);\n_base__WEBPACK_IMPORTED_MODULE_1__[\"default\"].closeDetailsBtn.addEventListener('click', closeTodo);\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst uniqid = __webpack_require__(/*! uniqid */ \"./node_modules/uniqid/index.js\");\n\nconst project = (title) => {\n  const todos = [];\n  const id = uniqid();\n\n  const addTodo = (todo) => {\n    todos.unshift(todo);\n  }\n\n  const removeTodo = (id) => {\n    todos.splice(findTodoIndex(id), 1);\n  }\n\n  const getTodos = () => {\n    return todos;\n  }\n\n  const findTodo = id => {\n    return todos.find(todo => todo.id === id);\n  }\n\n  const setTodoPriority = (id, direction) => {\n    const index = findTodoIndex(id);\n    const todo = todos.splice(index, 1)[0];\n    direction === 'up' ? todos.splice(index + 1, 0, todo) : todos.splice(index - 1, 0, todo);\n  }\n\n  const findTodoIndex = (id) => {\n    return todos.findIndex(todo => todo.id === id);\n  }\n\n  return {title, id, getTodos, addTodo, findTodo, removeTodo, setTodoPriority};\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (project);\n\n//# sourceURL=webpack:///./src/project.js?");

/***/ }),

/***/ "./src/projectsHandler.js":
/*!********************************!*\
  !*** ./src/projectsHandler.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project */ \"./src/project.js\");\n\n\nconst Projects = (() => {\n  const projects = [];\n  let activeProject;\n\n  const add = project => {\n    projects.unshift(project);\n  }\n\n  const remove = id => {\n    const index = projects.findIndex(project => project.id === id);\n    projects.splice(index, 1);\n  }\n\n  const get = () => {\n    return projects;\n  }\n\n  const find = id => {\n    const project = projects.find(project => project.id === id);\n    return project;\n  }\n\n  const setActive = project => {\n    activeProject = project;\n  }\n\n  const getActive = () => {\n    return activeProject;\n  }\n\n  return {add, remove, get, find, setActive, getActive};\n})();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Projects);\n\n//# sourceURL=webpack:///./src/projectsHandler.js?");

/***/ }),

/***/ "./src/todo.js":
/*!*********************!*\
  !*** ./src/todo.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst uniqid = __webpack_require__(/*! uniqid */ \"./node_modules/uniqid/index.js\");\n\nconst todo = (title, description, dueDate) => {\n  const id = uniqid();\n  return {title, description, dueDate, id};\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (todo);\n\n//# sourceURL=webpack:///./src/todo.js?");

/***/ }),

/***/ "./src/viewHandler.js":
/*!****************************!*\
  !*** ./src/viewHandler.js ***!
  \****************************/
/*! exports provided: ProjectsView, TodosView, DetailsView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ProjectsView\", function() { return ProjectsView; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"TodosView\", function() { return TodosView; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"DetailsView\", function() { return DetailsView; });\n/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base */ \"./src/base.js\");\n\n\nconst ProjectsView = (() => {\n  const render = (projects) => {\n    _base__WEBPACK_IMPORTED_MODULE_0__[\"default\"].projectList.innerHTML = '';\n    projects.forEach(project => renderProject(project));\n  }\n  \n  const renderProject = project => {\n    const markup = `\n      <li class=\"project\" data-id=\"${project.id}\">\n        <h3>${project.title}</h3>\n        <div class=\"del-project-btn\">\n          <i class=\"far fa-times-circle\"></i>\n        </div>\n      </li>\n    `;\n    _base__WEBPACK_IMPORTED_MODULE_0__[\"default\"].projectList.insertAdjacentHTML('afterbegin', markup);\n  }\n\n  const select = (project) => {\n    const projectNodes = Array.from(_base__WEBPACK_IMPORTED_MODULE_0__[\"default\"].projectList.children);\n    \n    projectNodes.forEach(node => node.classList.remove('active'));\n    const projectNode = document.querySelector(`[data-id='${project.id}']`);\n    projectNode.classList.add('active');\n  }\n\n  const getFormInput = () => {\n    return _base__WEBPACK_IMPORTED_MODULE_0__[\"default\"].addProjectInput.value;\n  }\n\n  return {render, getFormInput, select};\n})();\n\n\nconst TodosView = (() => {\n  \n  const render = (todos = '') => {\n    if (todos === '') {\n      _base__WEBPACK_IMPORTED_MODULE_0__[\"default\"].todoList.innerHTML = '';\n    } else if (todos.length <= 0) {\n      renderDefault();\n    } else {\n      _base__WEBPACK_IMPORTED_MODULE_0__[\"default\"].todoList.innerHTML = '';\n      todos.forEach(todo => {\n        renderTodo(todo, checkPriority(todos, todo));\n      }); \n    }\n  }\n\n  const checkPriority = (todos, todo) => {\n    if (todos[0] === todo && todos[todos.length - 1] === todo) return null;\n    if (todos[0] === todo) {\n      return 'last';\n    } else if (todos[todos.length - 1] === todo) {\n      return 'first';\n    }\n  }\n\n  const renderDefault = () => {\n    const markup = `\n      <div id=\"default\">\n        <p>Go ahead!</p>\n        <p>Add a thing to-do from the form to the right.</p>\n      </div>\n    `;\n    _base__WEBPACK_IMPORTED_MODULE_0__[\"default\"].todoList.innerHTML = markup;\n  }\n  \n  const renderTodo = (todo, priority) => {\n    const carets = `\n      ${priority === 'first' ? \"\" : `<i class=\"fas fa-caret-up\"></i>`}\n      ${priority === 'last' ? \"\" : `<i class=\"fas fa-caret-down\"></i>`} \n    `;\n    \n    const markup = `\n      <li class=\"todo\" data-id=\"${todo.id}\">\n         \n        ${priority === null ? '' : carets}\n        \n        <div>\n          <h4>${todo.title}</h4>\n          <p>Duedate: <em>${todo.dueDate}</em></p>\n        </div>\n        <i class=\"far fa-square checkmark\"></i>\n        <div class=\"del-todo-btn\">\n          <i class=\"fas fa-times\"></i>\n        </div>\n      </li>\n    `;\n    _base__WEBPACK_IMPORTED_MODULE_0__[\"default\"].todoList.insertAdjacentHTML('afterbegin', markup);\n  }\n\n\n\n  const setActive = (element) => {\n    clearActiveTodo();\n    element.classList.add('active');\n  }\n\n  const clearActiveTodo = () => {\n    const todoNodes = Array.from(_base__WEBPACK_IMPORTED_MODULE_0__[\"default\"].todoList.children);\n    todoNodes.forEach(node => node.classList.remove('active'));\n  }\n\n  const getFormInput = () => {\n    return _base__WEBPACK_IMPORTED_MODULE_0__[\"default\"].addTodoForm;\n  }\n\n  return {render, setActive, clearActiveTodo, getFormInput};\n})();\n\n\nconst DetailsView = (() => {\n  const showDetails = (todo) => {\n    _base__WEBPACK_IMPORTED_MODULE_0__[\"default\"].detailsOverlay.classList.add('overlay');\n    renderDetails(todo);\n  }\n\n  const renderDetails = todo => {\n    const markup = `\n      <div>\n        <h5>Title:</h5>\n        <p>${todo.title}</p>\n      </div>\n      <div>\n        <h5>Description:</h5>\n        <p>${todo.description}</p>\n      </div>\n      <div>\n        <h5>Due date:</h5>\n        <p>${todo.dueDate}</p>\n      </div>\n    `;\n    _base__WEBPACK_IMPORTED_MODULE_0__[\"default\"].detailsList.innerHTML = markup;\n  }\n\n  const hideDetails = () => {\n    _base__WEBPACK_IMPORTED_MODULE_0__[\"default\"].detailsOverlay.classList.remove('overlay');\n  }\n\n  return {showDetails, hideDetails};\n})();\n\n\n\n//# sourceURL=webpack:///./src/viewHandler.js?");

/***/ })

/******/ });