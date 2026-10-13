/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 889:
/***/ ((module) => {

module.exports = eval("require")("actions/core");


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __nccwpck_require__(moduleId) {
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			__webpack_modules__[moduleId](module, module.exports, __nccwpck_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete __webpack_module_cache__[moduleId];
/******/ 		}
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/asset-relocator-loader */
/******/ 	if (typeof __nccwpck_require__ !== 'undefined') __nccwpck_require__.ab = __dirname + "/";
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
const core= __nccwpck_require__(889)

try {
    // The line below gets the input named 'who-to-greet' and stores it in the variable nameToGreet
    const nameToGreet=core.getInput('who-to-greet');
    // The line below will output 'Hello, <who-to-greet>!' where <who-to-greet> is the input provided to the action
    // The line below will print the greeting to the console
    console.log(`Hello', ${nameToGreet}!`);
    // The line below sets the output parameter 'time' to the current time
    core.setOutput('time', new Date().toTimeString());
} catch (error) {
    core.setFailed(error.message);
}
module.exports = __webpack_exports__;
/******/ })()
;