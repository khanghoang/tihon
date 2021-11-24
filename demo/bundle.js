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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index_js__ = __webpack_require__(1);


// need to test with string, like "hello world"
const App = Object(__WEBPACK_IMPORTED_MODULE_0__index_js__["a" /* createElement */])(
  'span',
  null,
  '"Hello world!!!"'
);

Object(__WEBPACK_IMPORTED_MODULE_0__index_js__["b" /* render */])(App, document.getElementById('rootId'));

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_render__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_render___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__src_render__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_createElement__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_createElement___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__src_createElement__);
/* harmony reexport (binding) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_0__src_render__, "render")) __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__src_render__["render"]; });
/* harmony reexport (binding) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_1__src_createElement__, "createElement")) __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__src_createElement__["createElement"]; });





/***/ }),
/* 2 */
/***/ (function(module, exports) {

function render(el, rootDOM) {
  const { type, props = { children: [] } } = el;
  const domEl = type === "TEXT_ELEMENT" ? document.createTextNode("") : document.createElement(type);
  const isAttribute = name => name !== "children";
  Object.keys(props).filter(isAttribute).forEach(propName => domEl[propName] = props[propName]);

  const childrenElements = props.children;
  childrenElements.forEach(childEl => render(childEl, domEl));

  rootDOM.appendChild(domEl);
}

module.exports = {
  render
};

/***/ }),
/* 3 */
/***/ (function(module, exports) {

function createElement(type, config, ...args) {

  const props = Object.assign({}, config);
  const children = args.length > 0 ? [].concat(...args) : [];

  props.children = children.filter(a => a).map(child => child instanceof Object ? child : createElement('TEXT_ELEMENT', { nodeValue: child }));

  return {
    type,
    props
  };
}

module.exports = {
  createElement
};

/***/ })
/******/ ]);