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

/***/ "./src/base.js":
/*!*********************!*\
  !*** ./src/base.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst elements = {\n  projectList: document.getElementById('project-list'),\n  addProjectForm: document.getElementById('add-project'),\n  addProjectInput: document.querySelector('#add-project input'),\n  addProjectBtn: document.querySelector('#add-project button')\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (elements);\n\n//# sourceURL=webpack:///./src/base.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base */ \"./src/base.js\");\n/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project */ \"./src/project.js\");\n/* harmony import */ var _projectsController__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./projectsController */ \"./src/projectsController.js\");\n/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./view */ \"./src/view.js\");\n\n\n\n\n\nconst addProject = (e) => {\n  e.preventDefault();\n  const projectName = _base__WEBPACK_IMPORTED_MODULE_0__[\"default\"].addProjectInput.value;\n  _projectsController__WEBPACK_IMPORTED_MODULE_2__[\"default\"].add(Object(_project__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(projectName));\n  Object(_view__WEBPACK_IMPORTED_MODULE_3__[\"renderProjects\"])(_projectsController__WEBPACK_IMPORTED_MODULE_2__[\"default\"].get());\n  _base__WEBPACK_IMPORTED_MODULE_0__[\"default\"].addProjectForm.reset();\n}\n\nconst Init = () => {\n  _projectsController__WEBPACK_IMPORTED_MODULE_2__[\"default\"].add(Object(_project__WEBPACK_IMPORTED_MODULE_1__[\"default\"])('My First Project'));\n  Object(_view__WEBPACK_IMPORTED_MODULE_3__[\"renderProjects\"])(_projectsController__WEBPACK_IMPORTED_MODULE_2__[\"default\"].get());\n};\n\nInit();\n\n_base__WEBPACK_IMPORTED_MODULE_0__[\"default\"].addProjectBtn.addEventListener('click', addProject);\n\n\n//const something = todo(\n//                    'Make a note',\n//                    'I have to remember to make a note of something important',\n//                    'Monday',\n//                    1,\n//                    'This is a top priority',\n//                    false\n//                  );\n//\n//console.log(something.dueDate)\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst project = (title) => {\n  const todos = [];\n\n  const addTodo = (todo) => {\n    todos.shift(todo);\n  }\n\n  return {title, addTodo};\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (project);\n\n//# sourceURL=webpack:///./src/project.js?");

/***/ }),

/***/ "./src/projectsController.js":
/*!***********************************!*\
  !*** ./src/projectsController.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst Projects = (() => {\n  const projects = [];\n\n  const add = (project) => {\n    projects.unshift(project);\n  }\n\n  const get = () => {\n    return projects;\n  }\n\n  return {add, get};\n})();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Projects);\n\n//# sourceURL=webpack:///./src/projectsController.js?");

/***/ }),

/***/ "./src/view.js":
/*!*********************!*\
  !*** ./src/view.js ***!
  \*********************/
/*! exports provided: renderProjects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"renderProjects\", function() { return renderProjects; });\n/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base */ \"./src/base.js\");\n\n\nconst renderProjects = (projects) => {\n  _base__WEBPACK_IMPORTED_MODULE_0__[\"default\"].projectList.innerHTML = '';\n  projects.forEach(project => {\n    renderProject(project);\n  });\n}\n\nconst renderProject = project => {\n  const markup = `\n    <li>\n      <h3>${project.title}</h3>\n    </li>\n  `;\n\n  _base__WEBPACK_IMPORTED_MODULE_0__[\"default\"].projectList.insertAdjacentHTML('afterbegin', markup);\n}\n\n\n\n//# sourceURL=webpack:///./src/view.js?");

/***/ })

/******/ });