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

/***/ "./src/components/global-data.json":
/*!*****************************************!*\
  !*** ./src/components/global-data.json ***!
  \*****************************************/
/*! exports provided: author, keywords, default */
/***/ (function(module) {

eval("module.exports = {\"author\":\"Resolute.AI\",\"keywords\":[\"enterprise search\",\"scientific data\",\"deep learning\",\"technology transfer\"]};\n\n//# sourceURL=webpack:///./src/components/global-data.json?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_global_data_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/global-data.json */ \"./src/components/global-data.json\");\nvar _components_global_data_json__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./components/global-data.json */ \"./src/components/global-data.json\", 1);\n/* harmony import */ var _layouts_default_hbs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./layouts/default.hbs */ \"./src/layouts/default.hbs\");\n/* harmony import */ var _layouts_default_hbs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_layouts_default_hbs__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _pages_index_hbs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/index.hbs */ \"./src/pages/index.hbs\");\n/* harmony import */ var _pages_index_hbs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_pages_index_hbs__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _pages_api_hbs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/api.hbs */ \"./src/pages/api.hbs\");\n/* harmony import */ var _pages_api_hbs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_pages_api_hbs__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _pages_request_demo_hbs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/request-demo.hbs */ \"./src/pages/request-demo.hbs\");\n/* harmony import */ var _pages_request_demo_hbs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_pages_request_demo_hbs__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _pages_sign_in_hbs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/sign-in.hbs */ \"./src/pages/sign-in.hbs\");\n/* harmony import */ var _pages_sign_in_hbs__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_pages_sign_in_hbs__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _pages_solutions_hbs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/solutions.hbs */ \"./src/pages/solutions.hbs\");\n/* harmony import */ var _pages_solutions_hbs__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_pages_solutions_hbs__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _pages_how_it_works_hbs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/how-it-works.hbs */ \"./src/pages/how-it-works.hbs\");\n/* harmony import */ var _pages_how_it_works_hbs__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_pages_how_it_works_hbs__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _pages_about_hbs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/about.hbs */ \"./src/pages/about.hbs\");\n/* harmony import */ var _pages_about_hbs__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_pages_about_hbs__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _scripts_toggleFixedOverlay_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./scripts/toggleFixedOverlay.js */ \"./src/scripts/toggleFixedOverlay.js\");\n/* harmony import */ var _scripts_selectArticle_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./scripts/selectArticle.js */ \"./src/scripts/selectArticle.js\");\n/* harmony import */ var _scripts_toggleBurger_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./scripts/toggleBurger.js */ \"./src/scripts/toggleBurger.js\");\n/* harmony import */ var _scripts_submitForm_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./scripts/submitForm.js */ \"./src/scripts/submitForm.js\");\n/* harmony import */ var _scripts_navBarBG_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./scripts/navBarBG.js */ \"./src/scripts/navBarBG.js\");\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nwindow.toggleFixedOverlay = _scripts_toggleFixedOverlay_js__WEBPACK_IMPORTED_MODULE_9__[\"default\"];\nwindow.selectArticle = _scripts_selectArticle_js__WEBPACK_IMPORTED_MODULE_10__[\"default\"];\nwindow.toggleBurger = _scripts_toggleBurger_js__WEBPACK_IMPORTED_MODULE_11__[\"default\"];\nwindow.submitForm = _scripts_submitForm_js__WEBPACK_IMPORTED_MODULE_12__[\"default\"];\nwindow.onload = _scripts_navBarBG_js__WEBPACK_IMPORTED_MODULE_13__[\"default\"];\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/layouts/default.hbs":
/*!*********************************!*\
  !*** ./src/layouts/default.hbs ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// This will allow webpack to watch the files and re-run respective plugins for Assemble\n\n//# sourceURL=webpack:///./src/layouts/default.hbs?");

/***/ }),

/***/ "./src/pages/about.hbs":
/*!*****************************!*\
  !*** ./src/pages/about.hbs ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// This will allow webpack to watch the files and re-run respective plugins for Assemble\n\n//# sourceURL=webpack:///./src/pages/about.hbs?");

/***/ }),

/***/ "./src/pages/api.hbs":
/*!***************************!*\
  !*** ./src/pages/api.hbs ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// This will allow webpack to watch the files and re-run respective plugins for Assemble\n\n//# sourceURL=webpack:///./src/pages/api.hbs?");

/***/ }),

/***/ "./src/pages/how-it-works.hbs":
/*!************************************!*\
  !*** ./src/pages/how-it-works.hbs ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// This will allow webpack to watch the files and re-run respective plugins for Assemble\n\n//# sourceURL=webpack:///./src/pages/how-it-works.hbs?");

/***/ }),

/***/ "./src/pages/index.hbs":
/*!*****************************!*\
  !*** ./src/pages/index.hbs ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// This will allow webpack to watch the files and re-run respective plugins for Assemble\n\n//# sourceURL=webpack:///./src/pages/index.hbs?");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return selectArticle; });\nconst getCarouselElements = className => ({\n  selections: document.querySelectorAll(\".selection-name.\" + className),\n  images: document.querySelectorAll(\".article.\" + className + \" img\"),\n  articles: document.querySelectorAll(\".article.\" + className)\n});\n\nconst replayGif = img => {\n  if (img) {\n    img.src = img.src;\n  }\n};\n\nfunction selectArticle(id, className) {\n  if (typeof id !== \"string\") {\n    return;\n  }\n\n  const {\n    images,\n    articles,\n    selections\n  } = getCarouselElements(className);\n  let selectedArticleIndex;\n  let activeArticleIndex;\n\n  for (let i = 0; i < articles.length; i++) {\n    const article = articles[i];\n\n    if (article.id === id) {\n      selectedArticleIndex = i;\n    }\n\n    if (article.classList.contains(\"active\")) {\n      activeArticleIndex = i;\n    }\n  }\n\n  if (activeArticleIndex === selectArticle) {\n    return;\n  }\n\n  const activeArticle = articles[activeArticleIndex];\n  const activeSelection = selections[activeArticleIndex];\n  const selectedArticle = articles[selectedArticleIndex];\n  const selectedArticleImg = images[selectedArticleIndex];\n  const selectedSelection = selections[selectedArticleIndex];\n\n  const activateSelected = () => {\n    replayGif(selectedArticleImg);\n    selectedArticle.classList.add(\"active\");\n    selectedSelection.classList.add(\"active\");\n\n    if (!activeArticle) {\n      return;\n    }\n\n    activeArticle.removeEventListener(\"transitionend\", deactivate);\n    activeSelection.removeEventListener(\"transitionend\", deactivate);\n  };\n\n  if (!activeArticle) {\n    return activateSelected();\n  }\n\n  const deactivate = () => {\n    activeArticle.classList.remove(\"visible\");\n    selectedArticle.classList.add(\"visible\");\n    window.setTimeout(activateSelected, 0);\n  };\n\n  activeArticle.addEventListener(\"transitionend\", deactivate);\n  activeArticle.classList.remove(\"active\");\n  activeSelection.classList.remove(\"active\");\n}\n\n//# sourceURL=webpack:///./src/scripts/selectArticle.js?");

/***/ }),

/***/ "./src/scripts/submitForm.js":
/*!***********************************!*\
  !*** ./src/scripts/submitForm.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return submitForm; });\nconst gAppUrl = \"https://script.google.com/macros/s/AKfycbwwDNKosChRyi4ikXL9HFyuPZgwgTcmzyY6yVQXMiDdJo6AyhS9/exec\";\n\nfunction getValidPayload(formId) {\n  const inputArr = document.querySelectorAll(\"#\" + formId + \" input\");\n  const inputs = [];\n  let validationResult = true;\n\n  for (let index = 0; index < inputArr.length; index++) {\n    const input = inputArr[index];\n\n    if (input.name) {\n      const value = encodeURIComponent(input.value || \"none\");\n      const param = encodeURIComponent(input.name) + \"=\" + value;\n\n      if (input.required && value === \"none\") {\n        input.focus();\n        return {\n          valid: false\n        };\n      }\n\n      inputs.push(param);\n    }\n  }\n\n  return {\n    valid: true,\n    payload: inputs.join(\"&\")\n  };\n}\n\nfunction setWaitingStyleAndDisable(formId) {\n  const submitButton = document.querySelector(\"#\" + formId + \" .submit-button\");\n  submitButton.setAttribute(\"disabled\", true);\n  submitButton.value = \"SENDING..\";\n}\n\nfunction postToGoogleApp(payload, formId) {\n  const xhr = new XMLHttpRequest();\n\n  if (!xhr) {\n    return;\n  }\n\n  xhr.open(\"POST\", gAppUrl);\n  xhr.setRequestHeader(\"Content-Type\", \"application/x-www-form-urlencoded\");\n\n  xhr.onreadystatechange = () => {\n    if (xhr.readyState === 4 && xhr.status === 200) {\n      setSentValue(formId);\n    }\n  };\n\n  xhr.send(payload);\n}\n\nfunction setSentValue(formId) {\n  const submitButton = document.querySelector(\"#\" + formId + \" .submit-button\");\n  submitButton.value = \"SENT\";\n  const sentOverlay = document.querySelector(\"#\" + formId + \" .sent-overlay\");\n\n  if (sentOverlay) {\n    setTimeout(() => {\n      sentOverlay.classList.add(\"visible\");\n    }, 10);\n    sentOverlay.classList.remove(\"hidden\");\n  }\n}\n\nfunction submitForm(formId) {\n  const status = getValidPayload(formId);\n\n  if (!status.valid) {\n    return;\n  }\n\n  setWaitingStyleAndDisable(formId);\n  postToGoogleApp(status.payload, formId);\n}\n\n//# sourceURL=webpack:///./src/scripts/submitForm.js?");

/***/ }),

/***/ "./src/scripts/toggleBurger.js":
/*!*************************************!*\
  !*** ./src/scripts/toggleBurger.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return toggleBurger; });\nfunction toggleBurger() {\n  const navBar = document.getElementById(\"navbar\"); // const burger = document.getElementById(\"navbar-burger\");\n  // const links = document.getElementById(\"navbar-links\");\n\n  if (navBar.classList.contains(\"active\")) {\n    navBar.classList.remove(\"active\"); // burger.classList.remove(\"active\");\n    // links.classList.remove(\"active\");\n\n    return;\n  }\n\n  navBar.classList.add(\"active\"); // burger.classList.add(\"active\");\n  // links.classList.add(\"active\");\n}\n\n//# sourceURL=webpack:///./src/scripts/toggleBurger.js?");

/***/ }),

/***/ "./src/scripts/toggleFixedOverlay.js":
/*!*******************************************!*\
  !*** ./src/scripts/toggleFixedOverlay.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return toggleFixedOverlay; });\nconst asNumber = h => typeof h === \"number\" ? h : Number(h.replace(\"px\", \"\"));\n\nfunction toggleFixedOverlay(id, page, fixedHeight) {\n  var elemId = id || \"fixed-overlay-container\";\n  var fixedDemoRequest = document.getElementById(elemId);\n  var isInvisible = fixedDemoRequest.classList.contains(\"invisible\");\n\n  if (isInvisible) {\n    // do not use fixed side request on smartphones\n    if (document.body.clientWidth < 560) {\n      var subdir = \"/\" + (page || \"request-demo\");\n      window.location.href = window.location.origin + subdir;\n      return;\n    }\n\n    window.setTimeout(function () {\n      fixedDemoRequest.classList.remove(\"hidden\");\n    }, 1);\n    fixedDemoRequest.classList.remove(\"invisible\");\n  } else {\n    fixedDemoRequest.addEventListener(\"transitionend\", oneTimeMakeInvisible);\n    fixedDemoRequest.classList.add(\"hidden\");\n  }\n\n  function oneTimeMakeInvisible() {\n    fixedDemoRequest.removeEventListener(\"transitionend\", oneTimeMakeInvisible);\n    fixedDemoRequest.classList.add(\"invisible\");\n  }\n}\n\n//# sourceURL=webpack:///./src/scripts/toggleFixedOverlay.js?");

/***/ })

/******/ });