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
/***/ (function(module, exports) {

throw new Error("Module build failed: SyntaxError: F:\\webpack\\webpackTest\\2.webpack-babel编译\\.babelrc: Error while parsing config - JSON5: invalid end of input at 12:5\n    at syntaxError (F:\\webpack\\webpackTest\\2.webpack-babel编译\\node_modules\\json5\\lib\\parse.js:1083:17)\n    at invalidEOF (F:\\webpack\\webpackTest\\2.webpack-babel编译\\node_modules\\json5\\lib\\parse.js:1032:12)\n    at Object.start (F:\\webpack\\webpackTest\\2.webpack-babel编译\\node_modules\\json5\\lib\\parse.js:821:19)\n    at Object.parse (F:\\webpack\\webpackTest\\2.webpack-babel编译\\node_modules\\json5\\lib\\parse.js:32:32)\n    at readConfigJSON5 (F:\\webpack\\webpackTest\\2.webpack-babel编译\\node_modules\\@babel\\core\\lib\\config\\files\\configuration.js:248:31)\n    at F:\\webpack\\webpackTest\\2.webpack-babel编译\\node_modules\\@babel\\core\\lib\\config\\files\\utils.js:29:12\n    at cachedFunction (F:\\webpack\\webpackTest\\2.webpack-babel编译\\node_modules\\@babel\\core\\lib\\config\\caching.js:33:19)\n    at readConfig (F:\\webpack\\webpackTest\\2.webpack-babel编译\\node_modules\\@babel\\core\\lib\\config\\files\\configuration.js:176:8)\n    at config.reduce (F:\\webpack\\webpackTest\\2.webpack-babel编译\\node_modules\\@babel\\core\\lib\\config\\files\\configuration.js:105:24)\n    at Array.reduce (<anonymous>)\n    at findRelativeConfig (F:\\webpack\\webpackTest\\2.webpack-babel编译\\node_modules\\@babel\\core\\lib\\config\\files\\configuration.js:102:56)\n    at buildRootChain (F:\\webpack\\webpackTest\\2.webpack-babel编译\\node_modules\\@babel\\core\\lib\\config\\config-chain.js:113:39)\n    at loadPrivatePartialConfig (F:\\webpack\\webpackTest\\2.webpack-babel编译\\node_modules\\@babel\\core\\lib\\config\\partial.js:85:55)\n    at loadFullConfig (F:\\webpack\\webpackTest\\2.webpack-babel编译\\node_modules\\@babel\\core\\lib\\config\\full.js:43:39)\n    at transformSync (F:\\webpack\\webpackTest\\2.webpack-babel编译\\node_modules\\@babel\\core\\lib\\transform.js:41:38)\n    at Object.transform (F:\\webpack\\webpackTest\\2.webpack-babel编译\\node_modules\\@babel\\core\\lib\\transform.js:22:38)\n    at transpile (F:\\webpack\\webpackTest\\2.webpack-babel编译\\node_modules\\babel-loader\\lib\\index.js:55:20)\n    at Object.module.exports (F:\\webpack\\webpackTest\\2.webpack-babel编译\\node_modules\\babel-loader\\lib\\index.js:179:20)");

/***/ })
/******/ ]);