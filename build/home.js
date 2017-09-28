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
/******/ 	__webpack_require__.p = "/public/assets";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */,
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(2);
__webpack_require__(4);

var img=document.createElement('img');
img.src=__webpack_require__(3);
document.getElementById('img_container').appendChild(img);
console.log('homejs');

/***/ }),
/* 2 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAmCAYAAACoPemuAAAAAXNSR0IArs4c6QAAA+dJREFUWAntWE1oE0EUTtY2QiFaiF5C6clLD1YUhN7sTYRSELSnSqF/NFDPvUk9etXS9B/UnFpBLPHgTRRB6EFahV48leJFC8FAD22T+H3DvGEyyTa7zaYnF5J58+a97/vyZnd2JrHY/ytcBeLhwmOx9fX1C4VC4TryuiqVShqfVDweP8DnF3z7nZ2d34eGhkphcd34QMJA7i0vLw+Uy+X7ABhA/4oLJH0I/AM773ne24mJiTz6ZRkL0zYUtrS0dBeCnkHMjTDAjIWobQicmZyc/BA61y8hl8tdKhaLrzE+6MaAcA9Cd9By+g7wSaGfRr8Xbbcbj/5mMpl8NDw8/LfOWF1X3YqtrKxcOz4+3kRGj2SBtAh7rq2tbWN8fPyb+N0WuTdPTk4ewj8NkUlrfLe9vX0QuT8tn69ZI0yL+oqMFLMgqIImm0gkZkdHR3/TF+RaW1u7enR0NIvYDAQKzwHE9QURJwmKS08fRalKQdQh7JGpqak3KuAMXwsLCw+Q9hLiOnT6Lqa1r9G0ejaXvqeMKNy4/c2IIjbziaN/JF09moe272WE8elDlLrR9fSN4Gna8s0MMaBxRjQuMwc1ny+KEoYye1wSrKj5ZitlYSlT42XFr5cgUxjxS6sGuHhCnFqn8KuKuNGfSkCULR8g4hOTfOT1w1fC9IouMXNhnj5JCtJq3DmJdXjFrVqP7z5YRjnXqaqIiDsO/oDmr2Hx+EJGWdW7D2XeO23xrMk+g4P45GEqefWGoAaJU9klXgTuiN3K1uEx/Danh6C0OPBL+O5r+WXz2Pw2MYWpV4928oV8HpfhcfgNtwf1JgheW6QJaoFheBx+Q0VhZvr8ymqiIzJsHpvfhufNvy8OBPWK3crW4TH8NqfHPToCuR3m49vN/ZQdELVNfPIQl7zkr8fh6YNDXgb1Jk+6kbcOft7v4KJeSTw4WAqmucmz+pGZGndaAB1ecatWCdOnmW16UOak3nlWBUbRIS7xiYVp3CavH64ShqAy1M9YQRm987RczZkaLyMo5COv9N22amudzWbfIUA2i4dI7o9is4hN4W3sJD6jWhcpAILeY39mNg6uKPZVxWSARyzYu+wDpANgH5utHPOJI6I0V2p1dVVNqe7XNFUV46jPKWmem8cw+zSfU5IRgKp9wYnp3tjYWNE4LaNGGMe0uMjPlRCzgco9Ef7TxNUVxsTFxcXLmIJXMCM9iWNqH0Pc80bifIVJYiv+uwgirqEwCsQvjPzfnkbiAgmT6rGN8v+xOuI+YRm5Q57QwpgU5eWKw5N6i+eCqnUsSsKgWKjQCzydGXwKyNkqlUo/guaeSxxukYRN9A8YZQ01/2ZOMgAAAABJRU5ErkJggg=="

/***/ }),
/* 4 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);