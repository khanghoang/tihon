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
/******/ 	return __webpack_require__(__webpack_require__.s = "./app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../index.js":
/*!*******************!*\
  !*** ../index.js ***!
  \*******************/
/*! exports provided: render, createElement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _src_render__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/render */ \"../src/render.js\");\n/* harmony import */ var _src_render__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_src_render__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _src_render__WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony import */ var _src_createElement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/createElement */ \"../src/createElement.js\");\n/* harmony import */ var _src_createElement__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_src_createElement__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"createElement\", function() { return _src_createElement__WEBPACK_IMPORTED_MODULE_1__[\"createElement\"]; });\n\n\n\n\n\n//# sourceURL=webpack:///../index.js?");

/***/ }),

/***/ "../src/createElement.js":
/*!*******************************!*\
  !*** ../src/createElement.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function createElement(type, config, ...args) {\n  const props = Object.assign({}, config);\n  const children = args.length > 0 ? [].concat(...args) : [];\n  props.children = children.filter(a => a).map(child => child instanceof Object ? child : createElement('TEXT_ELEMENT', {\n    nodeValue: child\n  }));\n  return {\n    type,\n    props\n  };\n}\n\nmodule.exports = {\n  createElement\n};\n\n//# sourceURL=webpack:///../src/createElement.js?");

/***/ }),

/***/ "../src/render.js":
/*!************************!*\
  !*** ../src/render.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function render(el, rootDOM) {\n  const {\n    type,\n    props = {\n      children: []\n    }\n  } = el;\n  const domEl = type === \"TEXT_ELEMENT\" ? document.createTextNode(\"\") : document.createElement(type);\n\n  const isAttribute = name => name !== \"children\";\n\n  Object.keys(props).filter(isAttribute).forEach(propName => domEl[propName] = props[propName]);\n  const childrenElements = props.children;\n  childrenElements.forEach(childEl => render(childEl, domEl));\n  rootDOM.appendChild(domEl);\n}\n\nmodule.exports = {\n  render\n};\n\n//# sourceURL=webpack:///../src/render.js?");

/***/ }),

/***/ "./app.js":
/*!****************!*\
  !*** ./app.js ***!
  \****************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../index.js */ \"../index.js\");\n // need to test with string, like \"hello world\"\n\nvar App = Object(_index_js__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(\"span\", null, \"\\\"Hello world!!!\\\"\");\nObject(_index_js__WEBPACK_IMPORTED_MODULE_0__[\"render\"])(App, document.getElementById('rootId'));\n\n//# sourceURL=webpack:///./app.js?");

/***/ })

/******/ });