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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _partials_global_data_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./partials/global-data.json */ \"./src/partials/global-data.json\");\nvar _partials_global_data_json__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./partials/global-data.json */ \"./src/partials/global-data.json\", 1);\n/* harmony import */ var _layouts_default_hbs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./layouts/default.hbs */ \"./src/layouts/default.hbs\");\n/* harmony import */ var _layouts_default_hbs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_layouts_default_hbs__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _pages_index_hbs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/index.hbs */ \"./src/pages/index.hbs\");\n/* harmony import */ var _pages_index_hbs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_pages_index_hbs__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _pages_about_us_hbs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/about-us.hbs */ \"./src/pages/about-us.hbs\");\n/* harmony import */ var _pages_about_us_hbs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_pages_about_us_hbs__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _pages_api_hbs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/api.hbs */ \"./src/pages/api.hbs\");\n/* harmony import */ var _pages_api_hbs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_pages_api_hbs__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _pages_blog_hbs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/blog.hbs */ \"./src/pages/blog.hbs\");\n/* harmony import */ var _pages_blog_hbs__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_pages_blog_hbs__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _pages_contact_us_hbs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/contact-us.hbs */ \"./src/pages/contact-us.hbs\");\n/* harmony import */ var _pages_contact_us_hbs__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_pages_contact_us_hbs__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _pages_request_demo_hbs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/request-demo.hbs */ \"./src/pages/request-demo.hbs\");\n/* harmony import */ var _pages_request_demo_hbs__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_pages_request_demo_hbs__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _pages_sign_in_hbs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/sign-in.hbs */ \"./src/pages/sign-in.hbs\");\n/* harmony import */ var _pages_sign_in_hbs__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_pages_sign_in_hbs__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _pages_solutions_hbs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/solutions.hbs */ \"./src/pages/solutions.hbs\");\n/* harmony import */ var _pages_solutions_hbs__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_pages_solutions_hbs__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _pages_products_hbs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/products.hbs */ \"./src/pages/products.hbs\");\n/* harmony import */ var _pages_products_hbs__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_pages_products_hbs__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var _scripts_selectArticle_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./scripts/selectArticle.js */ \"./src/scripts/selectArticle.js\");\n/* harmony import */ var _scripts_toggleBurger_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./scripts/toggleBurger.js */ \"./src/scripts/toggleBurger.js\");\n/* harmony import */ var _scripts_navBarBG_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./scripts/navBarBG.js */ \"./src/scripts/navBarBG.js\");\n// callscreen.us entry point\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nwindow.selectArticle = _scripts_selectArticle_js__WEBPACK_IMPORTED_MODULE_11__[\"default\"];\nwindow.toggleBurger = _scripts_toggleBurger_js__WEBPACK_IMPORTED_MODULE_12__[\"default\"];\nwindow.onload = _scripts_navBarBG_js__WEBPACK_IMPORTED_MODULE_13__[\"default\"];\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/layouts/default.hbs":
/*!*********************************!*\
  !*** ./src/layouts/default.hbs ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// This will allow webpack to watch the files and re-run respective plugins for Assemble\n\n//# sourceURL=webpack:///./src/layouts/default.hbs?");

/***/ }),

/***/ "./src/pages/about-us.hbs":
/*!********************************!*\
  !*** ./src/pages/about-us.hbs ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// This will allow webpack to watch the files and re-run respective plugins for Assemble\n\n//# sourceURL=webpack:///./src/pages/about-us.hbs?");

/***/ }),

/***/ "./src/pages/api.hbs":
/*!***************************!*\
  !*** ./src/pages/api.hbs ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// This will allow webpack to watch the files and re-run respective plugins for Assemble\n\n//# sourceURL=webpack:///./src/pages/api.hbs?");

/***/ }),

/***/ "./src/pages/blog.hbs":
/*!****************************!*\
  !*** ./src/pages/blog.hbs ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// This will allow webpack to watch the files and re-run respective plugins for Assemble\n\n//# sourceURL=webpack:///./src/pages/blog.hbs?");

/***/ }),

/***/ "./src/pages/contact-us.hbs":
/*!**********************************!*\
  !*** ./src/pages/contact-us.hbs ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// This will allow webpack to watch the files and re-run respective plugins for Assemble\n\n//# sourceURL=webpack:///./src/pages/contact-us.hbs?");

/***/ }),

/***/ "./src/pages/index.hbs":
/*!*****************************!*\
  !*** ./src/pages/index.hbs ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// This will allow webpack to watch the files and re-run respective plugins for Assemble\n\n//# sourceURL=webpack:///./src/pages/index.hbs?");

/***/ }),

/***/ "./src/pages/products.hbs":
/*!********************************!*\
  !*** ./src/pages/products.hbs ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// This will allow webpack to watch the files and re-run respective plugins for Assemble\n\n//# sourceURL=webpack:///./src/pages/products.hbs?");

/***/ }),

/***/ "./src/pages/request-demo.hbs":
/*!************************************!*\
  !*** ./src/pages/request-demo.hbs ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// This will allow webpack to watch the files and re-run respective plugins for Assemble\n\n//# sourceURL=webpack:///./src/pages/request-demo.hbs?");

/***/ }),

/***/ "./src/pages/sign-in.hbs":
/*!*******************************!*\
  !*** ./src/pages/sign-in.hbs ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// This will allow webpack to watch the files and re-run respective plugins for Assemble\n\n//# sourceURL=webpack:///./src/pages/sign-in.hbs?");

/***/ }),

/***/ "./src/pages/solutions.hbs":
/*!*********************************!*\
  !*** ./src/pages/solutions.hbs ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// This will allow webpack to watch the files and re-run respective plugins for Assemble\n\n//# sourceURL=webpack:///./src/pages/solutions.hbs?");

/***/ }),

/***/ "./src/partials/global-data.json":
/*!***************************************!*\
  !*** ./src/partials/global-data.json ***!
  \***************************************/
/*! exports provided: author, keywords, default */
/***/ (function(module) {

eval("module.exports = {\"author\":\"Resolute Innovation\",\"keywords\":[\"enterprise search\",\"scientific data\",\"deep learning\",\"technology transfer\"]};\n\n//# sourceURL=webpack:///./src/partials/global-data.json?");

/***/ }),

/***/ "./src/scripts/navBarBG.js":
/*!*********************************!*\
  !*** ./src/scripts/navBarBG.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return addScrollListener; });\nlet navBar = document.getElementById(\"navbar-header\");\n\nfunction setNavBarBgColor() {\n  const navBarHasBackground = navBar.classList.contains(\"has-bg\");\n  const scrollPosition = Math.max(document.documentElement.scrollTop, document.body.scrollTop);\n\n  if (scrollPosition < 20 && navBarHasBackground) {\n    navBar.classList.remove(\"has-bg\");\n  } else if (scrollPosition > 25 && !navBarHasBackground) {\n    navBar.classList.add(\"has-bg\");\n  }\n}\n\nfunction addScrollListener() {\n  navBar = document.getElementById(\"navbar-header\");\n\n  if (navBar.classList.contains(\"clear\")) {\n    document.body.onscroll = setNavBarBgColor;\n    setNavBarBgColor();\n  }\n}\n\n//# sourceURL=webpack:///./src/scripts/navBarBG.js?");

/***/ }),

/***/ "./src/scripts/selectArticle.js":
/*!**************************************!*\
  !*** ./src/scripts/selectArticle.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return selectArticle; });\nfunction selectArticle(id, className) {\n  if (typeof id !== \"string\") {\n    return;\n  }\n\n  const articles = document.querySelectorAll(\".article.\" + className);\n  let selectedArticleIndex;\n  let activeArticleIndex;\n\n  for (let i = 0; i < articles.length; i++) {\n    const article = articles[i];\n\n    if (article.id === id) {\n      selectedArticleIndex = i;\n    }\n\n    if (article.classList.contains(\"active\")) {\n      activeArticleIndex = i;\n    }\n  }\n\n  if (activeArticleIndex === selectArticle) {\n    return;\n  }\n\n  const activeArticle = articles[activeArticleIndex];\n  const selectedArticle = articles[selectedArticleIndex];\n  const selections = document.querySelectorAll(\".selection-name.\" + className);\n  const activeSelection = selections[activeArticleIndex];\n  const selectedSelection = selections[selectedArticleIndex];\n\n  const activateSelected = () => {\n    selectedArticle.classList.add(\"active\");\n    selectedSelection.classList.add(\"active\");\n\n    if (!activeArticle) {\n      return;\n    }\n\n    activeArticle.removeEventListener(\"transitionend\", deactivate);\n    activeSelection.removeEventListener(\"transitionend\", deactivate);\n  };\n\n  if (!activeArticle) {\n    return activateSelected();\n  }\n\n  const deactivate = () => {\n    activeArticle.classList.remove(\"visible\");\n    selectedArticle.classList.add(\"visible\");\n    window.setTimeout(activateSelected, 0);\n  };\n\n  activeArticle.addEventListener(\"transitionend\", deactivate);\n  activeArticle.classList.remove(\"active\");\n  activeSelection.classList.remove(\"active\");\n}\n\n//# sourceURL=webpack:///./src/scripts/selectArticle.js?");

/***/ }),

/***/ "./src/scripts/toggleBurger.js":
/*!*************************************!*\
  !*** ./src/scripts/toggleBurger.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return toggleBurger; });\nfunction toggleBurger() {\n  const navBar = document.getElementById(\"navbar\"); // const burger = document.getElementById(\"navbar-burger\");\n  // const links = document.getElementById(\"navbar-links\");\n\n  if (navBar.classList.contains(\"active\")) {\n    navBar.classList.remove(\"active\"); // burger.classList.remove(\"active\");\n    // links.classList.remove(\"active\");\n\n    return;\n  }\n\n  navBar.classList.add(\"active\"); // burger.classList.add(\"active\");\n  // links.classList.add(\"active\");\n}\n\n//# sourceURL=webpack:///./src/scripts/toggleBurger.js?");

/***/ })

/******/ });