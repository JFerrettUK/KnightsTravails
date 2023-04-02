/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _makeBoard_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./makeBoard.js */ \"./src/makeBoard.js\");\n/* harmony import */ var _placeKnight_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./placeKnight.js */ \"./src/placeKnight.js\");\n\n\n\n//build a function knightMoves that shows the shortest possible \n(0,_makeBoard_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n(0,_placeKnight_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(a1)\n\n//# sourceURL=webpack://knightstravails/./src/index.js?");

/***/ }),

/***/ "./src/makeBoard.js":
/*!**************************!*\
  !*** ./src/makeBoard.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ makeBoard)\n/* harmony export */ });\nfunction makeBoard() {\n    function makeWhiteRow(no) {\n        for (let i = 0; i < 8; i++) {\n            const chessSquare = document.createElement(\"div\");\n            chessSquare.innerText = (i+10).toString(36) + no;\n            if(i % 2==0) chessSquare.className = \"chessSquareWhite\";\n            else chessSquare.className = \"chessSquareBlack\";\n            chessSquare.id = (i+10).toString(36) + no;\n            document.getElementById(\"chessBoard\").appendChild(chessSquare);\n        }\n    }\n    function makeBlackRow(no) {\n        for (let i = 0; i < 8; i++) {\n            const chessSquare = document.createElement(\"div\");\n            chessSquare.innerText = (i+10).toString(36) + no;\n            if(i % 2==0) chessSquare.className = \"chessSquareBlack\";\n            else chessSquare.className = \"chessSquareWhite\";\n            chessSquare.id = (i+10).toString(36) + no;\n            document.getElementById(\"chessBoard\").appendChild(chessSquare);\n        }\n    }\n    makeWhiteRow(8)\n    makeBlackRow(7)\n    makeWhiteRow(6)\n    makeBlackRow(5)\n    makeWhiteRow(4)\n    makeBlackRow(3)\n    makeWhiteRow(2)\n    makeBlackRow(1)\n}\n\n\n//# sourceURL=webpack://knightstravails/./src/makeBoard.js?");

/***/ }),

/***/ "./src/placeKnight.js":
/*!****************************!*\
  !*** ./src/placeKnight.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ placeKnight)\n/* harmony export */ });\nfunction placeKnight(square) {\n    const chessSquare = document.createElement('img');\n    chessSquare.src = '../src/knightPic.png'\n    document.getElementById(square).appendChild(knightPic);\n}\n\n//# sourceURL=webpack://knightstravails/./src/placeKnight.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;