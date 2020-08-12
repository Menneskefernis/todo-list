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
eval("__webpack_require__.r(__webpack_exports__);\nconst elements = {\r\n  projectList: document.getElementById('project-list'),\r\n  addProjectForm: document.getElementById('add-project'),\r\n  addProjectInput: document.querySelector('#add-project input'),\r\n  addProjectBtn: document.querySelector('#add-project button'),\r\n  todoList: document.getElementById('todo-list'),\r\n  addTodoForm: document.getElementById('add-todo-form'),\r\n  titleInput: document.getElementById('title'),\r\n  dueDateInput: document.getElementById('due-date'),\r\n  addTodoBtn: document.querySelector('#add button')\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (elements);\n\n//# sourceURL=webpack:///./src/base.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo */ \"./src/todo.js\");\n/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./base */ \"./src/base.js\");\n/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./project */ \"./src/project.js\");\n/* harmony import */ var _projectsHandler__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./projectsHandler */ \"./src/projectsHandler.js\");\n/* harmony import */ var _viewHandler__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./viewHandler */ \"./src/viewHandler.js\");\n\r\n\r\n\r\n\r\n\r\n\r\nconst addProject = (e) => {\r\n  e.preventDefault();\r\n  const projectName = _viewHandler__WEBPACK_IMPORTED_MODULE_4__[\"ProjectsView\"].getFormInput();\r\n  const proj = Object(_project__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(projectName);\r\n  _projectsHandler__WEBPACK_IMPORTED_MODULE_3__[\"default\"].add(proj);\r\n  \r\n  _viewHandler__WEBPACK_IMPORTED_MODULE_4__[\"ProjectsView\"].render(_projectsHandler__WEBPACK_IMPORTED_MODULE_3__[\"default\"].get());\r\n  openProject(proj);\r\n  _base__WEBPACK_IMPORTED_MODULE_1__[\"default\"].addProjectForm.reset();\r\n}\r\n\r\nconst openProject = (input) => {\r\n  let project;\r\n  input.target ? project = findProjectOnEvent(input) : project = input;\r\n  \r\n  _projectsHandler__WEBPACK_IMPORTED_MODULE_3__[\"default\"].setActive(project);\r\n  _viewHandler__WEBPACK_IMPORTED_MODULE_4__[\"ProjectsView\"].select(project);\r\n  _viewHandler__WEBPACK_IMPORTED_MODULE_4__[\"TodosView\"].render(project.getTodos());\r\n}\r\n\r\nconst findProjectOnEvent = e => {\r\n  const target = e.target;\r\n  console.log('fail')\r\n  if (target.matches('.project, .project *')) {    \r\n\r\n    const id = target.closest('li').dataset.id;\r\n    return _projectsHandler__WEBPACK_IMPORTED_MODULE_3__[\"default\"].find(id);\r\n  }\r\n}\r\n\r\n\r\nconst openTodo = (e) => {\r\n  const target = e.target;\r\n  if (target.matches('.todo, .todo *')) {\r\n    _viewHandler__WEBPACK_IMPORTED_MODULE_4__[\"TodosView\"].setActiveTodo(target.closest('li'));\r\n  }\r\n}\r\n\r\nconst addTodo = (e) => {\r\n  e.preventDefault();\r\n  const inputValues = _viewHandler__WEBPACK_IMPORTED_MODULE_4__[\"TodosView\"].getFormInput();\r\n  const proj = _projectsHandler__WEBPACK_IMPORTED_MODULE_3__[\"default\"].getActive();\r\n  \r\n  proj.addTodo(\r\n    Object(_todo__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\r\n      inputValues['title'].value,\r\n      'Some description that is necessary',\r\n      inputValues['due-date'].value\r\n    )\r\n  );\r\n\r\n  _viewHandler__WEBPACK_IMPORTED_MODULE_4__[\"TodosView\"].render(proj.getTodos());\r\n  _base__WEBPACK_IMPORTED_MODULE_1__[\"default\"].addTodoForm.reset();\r\n}\r\n\r\n\r\n\r\nconst Init = () => {\r\n  const item1 = Object(_todo__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\r\n    'Make a note',\r\n    'I have to remember to make a note of something important',\r\n    'Monday'\r\n  );\r\n\r\n  const item2 = Object(_todo__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\r\n    'Make another note',\r\n    'This is a less important todo',\r\n    'Friday'\r\n  );\r\n\r\n  const item3 = Object(_todo__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\r\n    'This is third todo',\r\n    'Drink a beer and relax',\r\n    'Every day'\r\n  );\r\n  \r\n  const proj1 = Object(_project__WEBPACK_IMPORTED_MODULE_2__[\"default\"])('My First Project');\r\n  const proj2 = Object(_project__WEBPACK_IMPORTED_MODULE_2__[\"default\"])('My Second Project');\r\n\r\n  proj1.addTodo(item1);\r\n  proj1.addTodo(item2);\r\n\r\n  proj2.addTodo(item3);\r\n\r\n  _projectsHandler__WEBPACK_IMPORTED_MODULE_3__[\"default\"].add(proj1);\r\n  _projectsHandler__WEBPACK_IMPORTED_MODULE_3__[\"default\"].add(proj2);\r\n  _viewHandler__WEBPACK_IMPORTED_MODULE_4__[\"ProjectsView\"].render(_projectsHandler__WEBPACK_IMPORTED_MODULE_3__[\"default\"].get());\r\n\r\n  _projectsHandler__WEBPACK_IMPORTED_MODULE_3__[\"default\"].setActive(proj1);\r\n  _viewHandler__WEBPACK_IMPORTED_MODULE_4__[\"TodosView\"].render(proj1.getTodos());\r\n};\r\n\r\nInit();\r\n\r\n_base__WEBPACK_IMPORTED_MODULE_1__[\"default\"].addProjectBtn.addEventListener('click', addProject);\r\n_base__WEBPACK_IMPORTED_MODULE_1__[\"default\"].projectList.addEventListener('click', openProject);\r\n_base__WEBPACK_IMPORTED_MODULE_1__[\"default\"].todoList.addEventListener('click', openTodo);\r\n_base__WEBPACK_IMPORTED_MODULE_1__[\"default\"].addTodoBtn.addEventListener('click', addTodo);\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst uniqid = __webpack_require__(/*! uniqid */ \"./node_modules/uniqid/index.js\");\r\n\r\nconst project = (title) => {\r\n  const todos = [];\r\n  const id = uniqid();\r\n\r\n  const addTodo = (todo) => {\r\n    todos.unshift(todo);\r\n  }\r\n\r\n  const getTodos = () => {\r\n    return todos;\r\n  }\r\n\r\n  return {title, id, getTodos, addTodo};\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (project);\n\n//# sourceURL=webpack:///./src/project.js?");

/***/ }),

/***/ "./src/projectsHandler.js":
/*!********************************!*\
  !*** ./src/projectsHandler.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst Projects = (() => {\r\n  const projects = [];\r\n  let activeProject;\r\n\r\n  const add = project => {\r\n    projects.unshift(project);\r\n  }\r\n\r\n  const get = () => {\r\n    return projects;\r\n  }\r\n\r\n  const find = id => {\r\n    const project = projects.find(project => project.id === id);\r\n    return project;\r\n  }\r\n\r\n  const setActive = project => {\r\n    activeProject = project;\r\n  }\r\n\r\n  const getActive = () => {\r\n    return activeProject;\r\n  }\r\n\r\n  return {add, get, find, setActive, getActive};\r\n})();\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (Projects);\n\n//# sourceURL=webpack:///./src/projectsHandler.js?");

/***/ }),

/***/ "./src/todo.js":
/*!*********************!*\
  !*** ./src/todo.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst todo = (title, description, dueDate) => {\r\n  return {title, description, dueDate};\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (todo);\n\n//# sourceURL=webpack:///./src/todo.js?");

/***/ }),

/***/ "./src/viewHandler.js":
/*!****************************!*\
  !*** ./src/viewHandler.js ***!
  \****************************/
/*! exports provided: ProjectsView, TodosView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ProjectsView\", function() { return ProjectsView; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"TodosView\", function() { return TodosView; });\n/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base */ \"./src/base.js\");\n\r\n\r\nconst ProjectsView = (() => {\r\n  const render = (projects) => {\r\n    _base__WEBPACK_IMPORTED_MODULE_0__[\"default\"].projectList.innerHTML = '';\r\n    projects.forEach(project => renderProject(project));\r\n  }\r\n  \r\n  const renderProject = project => {\r\n    const markup = `\r\n      <li class=\"project\" data-id=\"${project.id}\">\r\n        <h3>${project.title}</h3>\r\n      </li>\r\n    `;\r\n    _base__WEBPACK_IMPORTED_MODULE_0__[\"default\"].projectList.insertAdjacentHTML('afterbegin', markup);\r\n  }\r\n\r\n  const select = (project) => {\r\n    const projectNodes = Array.from(_base__WEBPACK_IMPORTED_MODULE_0__[\"default\"].projectList.children);\r\n    \r\n    projectNodes.forEach(node => node.classList.remove('active'));\r\n    const projectNode = document.querySelector(`[data-id='${project.id}']`);\r\n    projectNode.classList.add('active');\r\n  }\r\n\r\n  const getFormInput = () => {\r\n    return _base__WEBPACK_IMPORTED_MODULE_0__[\"default\"].addProjectInput.value;\r\n  }\r\n\r\n  return {render, getFormInput, select};\r\n})();\r\n\r\n\r\nconst TodosView = (() => {\r\n  const render = todos => {\r\n    _base__WEBPACK_IMPORTED_MODULE_0__[\"default\"].todoList.innerHTML = '';\r\n    todos.forEach(todo => renderTodo(todo));\r\n  }\r\n  \r\n  const renderTodo = todo => {\r\n    const markup = `\r\n      <li class=\"todo\">\r\n        <div>\r\n          <h4>${todo.title}</h4>\r\n          <p>Duedate: <em>${todo.dueDate}</em></p>\r\n        </div>\r\n        <input type=\"checkbox\">\r\n      </li>\r\n    `;\r\n    _base__WEBPACK_IMPORTED_MODULE_0__[\"default\"].todoList.insertAdjacentHTML('afterbegin', markup);\r\n  }\r\n\r\n  const setActiveTodo = (element) => {\r\n    const todoNodes = Array.from(_base__WEBPACK_IMPORTED_MODULE_0__[\"default\"].todoList.children);\r\n    \r\n    todoNodes.forEach(node => node.classList.remove('active'));\r\n    element.classList.add('active');\r\n  }\r\n\r\n  const getFormInput = () => {\r\n    return _base__WEBPACK_IMPORTED_MODULE_0__[\"default\"].addTodoForm;\r\n  }\r\n\r\n  return {render, setActiveTodo, getFormInput};\r\n})();\r\n\r\n\n\n//# sourceURL=webpack:///./src/viewHandler.js?");

/***/ })

/******/ });