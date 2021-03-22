module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/blog/post/author/[userId].js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/blog/post/author/[userId].js":
/*!********************************************!*\
  !*** ./pages/blog/post/author/[userId].js ***!
  \********************************************/
/*! exports provided: getStaticPaths, getStaticProps, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStaticPaths", function() { return getStaticPaths; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStaticProps", function() { return getStaticProps; });
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\Layney\\Documents\\GitHub\\blogProj\\pages\\blog\\post\\author\\[userId].js";





const Post = ({
  postData
}) => {
  const handleClick = e => {
    e.preventDefault();
    router.push('/');
  };

  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_1__["useRouter"])();
  const {
    userId
  } = router.query;
  const {
    id
  } = router.query;
  var x = JSON.stringify(id);
  var userIds = JSON.stringify(userId);
  console.log("AUTHOR ID: ", userId);
  var y = JSON.stringify(postData);
  console.log("TEST: ", y);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["Fragment"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("main", {
      className: "profile-page",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("section", {
        className: "relative block",
        style: {
          height: "300px"
        },
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
          className: "absolute top-0 w-full h-full bg-center bg-cover",
          style: {
            backgroundImage: "url('https://images.unsplash.com/photo-1499336315816-097655dcfbda?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2710&q=80')"
          },
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("span", {
            id: "blackOverlay",
            className: "w-full h-full absolute opacity-50 bg-black"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 33,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
          className: "top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden",
          style: {
            height: "70px",
            transform: "translateZ(0)"
          },
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("svg", {
            className: "absolute bottom-0 overflow-hidden",
            xmlns: "http://www.w3.org/2000/svg",
            preserveAspectRatio: "none",
            version: "1.1",
            viewBox: "0 0 2560 100",
            x: "0",
            y: "0",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("polygon", {
              className: "text-gray-300 fill-current",
              points: "2560 0 2560 100 0 100"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 51,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 42,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("section", {
        className: "relative py-16 bg-gray-300",
        style: {
          height: "100vh"
        },
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
          className: "container mx-auto px-4",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
            className: "relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
              className: "px-6",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
                className: "flex flex-wrap justify-center",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
                  className: "w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
                    className: "py-6 px-3 mt-32 sm:mt-0",
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("button", {
                      className: "bg-pink-500 active:bg-pink-600 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1",
                      type: "button",
                      onClick: handleClick,
                      style: {
                        transition: "all .15s ease"
                      },
                      children: "Go Back"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 65,
                      columnNumber: 23
                    }, undefined)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 64,
                    columnNumber: 21
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 63,
                  columnNumber: 19
                }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
                  className: "w-full lg:w-4/12 px-4 lg:order-1",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
                    className: "flex justify-center py-4 lg:pt-4 pt-8",
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
                      className: "mr-4 p-3 text-center",
                      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("span", {
                        className: "text-xl font-bold block uppercase tracking-wide text-gray-700"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 77,
                        columnNumber: 25
                      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
                        className: "text-pink-500",
                        children: userId
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 79,
                        columnNumber: 29
                      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("span", {
                        className: "text-sm text-gray-500",
                        children: "Author ID"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 80,
                        columnNumber: 25
                      }, undefined)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 76,
                      columnNumber: 23
                    }, undefined)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 75,
                    columnNumber: 21
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 74,
                  columnNumber: 19
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 62,
                columnNumber: 17
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
                className: "text-center mt-12",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
                  id: "title"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 87,
                  columnNumber: 17
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 85,
                columnNumber: 17
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
                className: "mt-10 py-10 border-t border-gray-300 text-center",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
                  className: "flex flex-wrap justify-center",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
                    className: "w-full lg:w-9/12 px-4",
                    children: [" ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("ul", {
                      children: postData.map(author => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("li", {
                        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
                          id: "postContainer",
                          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("li", {
                            children: ["POST ID: ", author.id]
                          }, void 0, true, {
                            fileName: _jsxFileName,
                            lineNumber: 96,
                            columnNumber: 37
                          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("li", {
                            children: ["TITLE: ", author.title]
                          }, void 0, true, {
                            fileName: _jsxFileName,
                            lineNumber: 97,
                            columnNumber: 37
                          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("li", {
                            children: ["CONTENTS: ", author.body]
                          }, void 0, true, {
                            fileName: _jsxFileName,
                            lineNumber: 98,
                            columnNumber: 37
                          }, undefined)]
                        }, void 0, true, {
                          fileName: _jsxFileName,
                          lineNumber: 95,
                          columnNumber: 35
                        }, undefined)
                      }, author.userId, false, {
                        fileName: _jsxFileName,
                        lineNumber: 94,
                        columnNumber: 33
                      }, undefined))
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 92,
                      columnNumber: 61
                    }, undefined)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 92,
                    columnNumber: 21
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 91,
                  columnNumber: 19
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 90,
                columnNumber: 17
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 61,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 60,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 59,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 9
    }, undefined)
  }, void 0, false);
};

async function getStaticPaths() {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/`);
  const postData = await res.json();
  var paths = [];
  var userId = JSON.stringify(paths);

  for (var i in postData) paths.push(postData[i]);

  return {
    paths: [{
      params: {
        postData,
        userId
      }
    }],
    fallback: true
  };
}
async function getStaticProps(params) {
  console.log("PARAM: ", params);
  const res = await fetch('https://jsonplaceholder.typicode.com/posts/?=userId=' + params);
  console.log("RESOURCE: ", res);
  const postData = await res.json();
  console.log(postData);

  if (!postData) {
    return {
      notFound: true
    };
  }

  return {
    props: {
      postData
    }
  };
}
/* harmony default export */ __webpack_exports__["default"] = (Post);

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-dev-runtime");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvYmxvZy9wb3N0L2F1dGhvci9bdXNlcklkXS5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIl0sIm5hbWVzIjpbIlBvc3QiLCJwb3N0RGF0YSIsImhhbmRsZUNsaWNrIiwiZSIsInByZXZlbnREZWZhdWx0Iiwicm91dGVyIiwicHVzaCIsInVzZVJvdXRlciIsInVzZXJJZCIsInF1ZXJ5IiwiaWQiLCJ4IiwiSlNPTiIsInN0cmluZ2lmeSIsInVzZXJJZHMiLCJjb25zb2xlIiwibG9nIiwieSIsImhlaWdodCIsImJhY2tncm91bmRJbWFnZSIsInRyYW5zZm9ybSIsInRyYW5zaXRpb24iLCJtYXAiLCJhdXRob3IiLCJ0aXRsZSIsImJvZHkiLCJnZXRTdGF0aWNQYXRocyIsInJlcyIsImZldGNoIiwianNvbiIsInBhdGhzIiwiaSIsInBhcmFtcyIsImZhbGxiYWNrIiwiZ2V0U3RhdGljUHJvcHMiLCJub3RGb3VuZCIsInByb3BzIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7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QUFFO0FBTEwsR0FBUDtBQU9EO0FBRU0sZUFBZUMsY0FBZixDQUErQkYsTUFBL0IsRUFBd0M7QUFDN0NqQixTQUFPLENBQUNDLEdBQVIsQ0FBWSxTQUFaLEVBQXVCZ0IsTUFBdkI7QUFDQSxRQUFNTCxHQUFHLEdBQUcsTUFBTUMsS0FBSyxDQUFDLHlEQUF5REksTUFBMUQsQ0FBdkI7QUFDQWpCLFNBQU8sQ0FBQ0MsR0FBUixDQUFZLFlBQVosRUFBMEJXLEdBQTFCO0FBRUEsUUFBTTFCLFFBQVEsR0FBRyxNQUFNMEIsR0FBRyxDQUFDRSxJQUFKLEVBQXZCO0FBQ0FkLFNBQU8sQ0FBQ0MsR0FBUixDQUFZZixRQUFaOztBQUVBLE1BQUksQ0FBQ0EsUUFBTCxFQUFlO0FBQ2IsV0FBTztBQUNMa0MsY0FBUSxFQUFFO0FBREwsS0FBUDtBQUdEOztBQUVELFNBQU87QUFDTEMsU0FBSyxFQUFFO0FBQ0xuQztBQURLO0FBREYsR0FBUDtBQUtEO0FBR1VELG1FQUFmLEU7Ozs7Ozs7Ozs7O0FDN0pBLHNDOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLGtEIiwiZmlsZSI6InBhZ2VzL2Jsb2cvcG9zdC9hdXRob3IvW3VzZXJJZF0uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uLy4uLy4uLy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3BhZ2VzL2Jsb2cvcG9zdC9hdXRob3IvW3VzZXJJZF0uanNcIik7XG4iLCJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xyXG5cclxuY29uc3QgUG9zdCA9ICh7IHBvc3REYXRhIH0pID0+IHtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVDbGljayA9IChlKSA9PiB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICAgICAgcm91dGVyLnB1c2goJy8nKVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICAgIGNvbnN0ICB7IHVzZXJJZCB9ICA9IHJvdXRlci5xdWVyeVxyXG4gICAgY29uc3QgIHsgaWQgfSAgPSByb3V0ZXIucXVlcnlcclxuICAgIHZhciB4ID0gSlNPTi5zdHJpbmdpZnkoaWQpXHJcbiAgICBcclxuICAgIHZhciB1c2VySWRzID0gSlNPTi5zdHJpbmdpZnkodXNlcklkKVxyXG4gICAgY29uc29sZS5sb2coXCJBVVRIT1IgSUQ6IFwiLCB1c2VySWQpXHJcblxyXG4gICAgdmFyIHkgPSBKU09OLnN0cmluZ2lmeShwb3N0RGF0YSlcclxuICAgIGNvbnNvbGUubG9nKFwiVEVTVDogXCIsIHkpXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgIDxtYWluIGNsYXNzTmFtZT1cInByb2ZpbGUtcGFnZVwiPlxyXG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInJlbGF0aXZlIGJsb2NrXCIgc3R5bGU9e3sgaGVpZ2h0OiBcIjMwMHB4XCIgfX0+XHJcbiAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImFic29sdXRlIHRvcC0wIHctZnVsbCBoLWZ1bGwgYmctY2VudGVyIGJnLWNvdmVyXCJcclxuICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6XHJcbiAgICAgICAgICAgICAgICBcInVybCgnaHR0cHM6Ly9pbWFnZXMudW5zcGxhc2guY29tL3Bob3RvLTE0OTkzMzYzMTU4MTYtMDk3NjU1ZGNmYmRhP2l4bGliPXJiLTEuMi4xJml4aWQ9ZXlKaGNIQmZhV1FpT2pFeU1EZDkmYXV0bz1mb3JtYXQmZml0PWNyb3Amdz0yNzEwJnE9ODAnKVwiXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxzcGFuXHJcbiAgICAgICAgICAgICAgaWQ9XCJibGFja092ZXJsYXlcIlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBoLWZ1bGwgYWJzb2x1dGUgb3BhY2l0eS01MCBiZy1ibGFja1wiXHJcbiAgICAgICAgICAgID48L3NwYW4+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwidG9wLWF1dG8gYm90dG9tLTAgbGVmdC0wIHJpZ2h0LTAgdy1mdWxsIGFic29sdXRlIHBvaW50ZXItZXZlbnRzLW5vbmUgb3ZlcmZsb3ctaGlkZGVuXCJcclxuICAgICAgICAgICAgc3R5bGU9e3sgaGVpZ2h0OiBcIjcwcHhcIiwgdHJhbnNmb3JtOiBcInRyYW5zbGF0ZVooMClcIiB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8c3ZnXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYWJzb2x1dGUgYm90dG9tLTAgb3ZlcmZsb3ctaGlkZGVuXCJcclxuICAgICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcclxuICAgICAgICAgICAgICBwcmVzZXJ2ZUFzcGVjdFJhdGlvPVwibm9uZVwiXHJcbiAgICAgICAgICAgICAgdmVyc2lvbj1cIjEuMVwiXHJcbiAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCAyNTYwIDEwMFwiXHJcbiAgICAgICAgICAgICAgeD1cIjBcIlxyXG4gICAgICAgICAgICAgIHk9XCIwXCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxwb2x5Z29uXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktMzAwIGZpbGwtY3VycmVudFwiXHJcbiAgICAgICAgICAgICAgICBwb2ludHM9XCIyNTYwIDAgMjU2MCAxMDAgMCAxMDBcIlxyXG4gICAgICAgICAgICAgID48L3BvbHlnb24+XHJcbiAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInJlbGF0aXZlIHB5LTE2IGJnLWdyYXktMzAwXCIgc3R5bGU9e3sgaGVpZ2h0OiBcIjEwMHZoXCIgfX0+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBteC1hdXRvIHB4LTRcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBmbGV4IGZsZXgtY29sIG1pbi13LTAgYnJlYWstd29yZHMgYmctd2hpdGUgdy1mdWxsIG1iLTYgc2hhZG93LXhsIHJvdW5kZWQtbGcgLW10LTY0XCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJweC02XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC13cmFwIGp1c3RpZnktY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIGxnOnctNC8xMiBweC00IGxnOm9yZGVyLTMgbGc6dGV4dC1yaWdodCBsZzpzZWxmLWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHktNiBweC0zIG10LTMyIHNtOm10LTBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmctcGluay01MDAgYWN0aXZlOmJnLXBpbmstNjAwIHVwcGVyY2FzZSB0ZXh0LXdoaXRlIGZvbnQtYm9sZCBob3ZlcjpzaGFkb3ctbWQgc2hhZG93IHRleHQteHMgcHgtNCBweS0yIHJvdW5kZWQgb3V0bGluZS1ub25lIGZvY3VzOm91dGxpbmUtbm9uZSBzbTptci0yIG1iLTFcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCIgb25DbGljaz17aGFuZGxlQ2xpY2t9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHRyYW5zaXRpb246IFwiYWxsIC4xNXMgZWFzZVwiIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEdvIEJhY2tcclxuICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgbGc6dy00LzEyIHB4LTQgbGc6b3JkZXItMVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWNlbnRlciBweS00IGxnOnB0LTQgcHQtOFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtci00IHAtMyB0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXhsIGZvbnQtYm9sZCBibG9jayB1cHBlcmNhc2UgdHJhY2tpbmctd2lkZSB0ZXh0LWdyYXktNzAwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1waW5rLTUwMFwiPnsgdXNlcklkIH08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LWdyYXktNTAwXCI+QXV0aG9yIElEPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyIG10LTEyXCI+XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdiBpZD1cInRpdGxlXCI+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtMTAgcHktMTAgYm9yZGVyLXQgYm9yZGVyLWdyYXktMzAwIHRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXdyYXAganVzdGlmeS1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBsZzp3LTkvMTIgcHgtNFwiPiA8dWw+ICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7cG9zdERhdGEubWFwKChhdXRob3IpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkga2V5PXthdXRob3IudXNlcklkfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJwb3N0Q29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5QT1NUIElEOiB7YXV0aG9yLmlkfTwvbGk+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+VElUTEU6IHthdXRob3IudGl0bGV9PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPkNPTlRFTlRTOiB7YXV0aG9yLmJvZHl9PC9saT4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICA8L21haW4+XHJcblxyXG4gICAgICAgIDwvPlxyXG4gICAgICAgIClcclxuICAgIH1cclxuXHJcblxyXG4gIFxyXG4gXHJcbiAgICBleHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUGF0aHMoKSB7XHJcbiAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGBodHRwczovL2pzb25wbGFjZWhvbGRlci50eXBpY29kZS5jb20vcG9zdHMvYClcclxuICAgICAgY29uc3QgcG9zdERhdGEgPSBhd2FpdCByZXMuanNvbigpXHJcbiAgICAgIHZhciBwYXRocyA9IFtdO1xyXG4gICAgICB2YXIgdXNlcklkID0gSlNPTi5zdHJpbmdpZnkocGF0aHMpXHJcbiAgICAgIGZvciAodmFyIGkgaW4gcG9zdERhdGEpXHJcbiAgICAgICAgcGF0aHMucHVzaChwb3N0RGF0YVtpXSk7XHJcbiAgICBcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBwYXRoczogW1xyXG4gICAgICAgICAgeyBwYXJhbXM6IHsgcG9zdERhdGEsIHVzZXJJZCB9IH1cclxuICAgICAgICBdLFxyXG4gICAgXHJcbiAgICAgICAgZmFsbGJhY2s6IHRydWVcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBleHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoIHBhcmFtcyApIHtcclxuICAgICAgY29uc29sZS5sb2coXCJQQVJBTTogXCIsIHBhcmFtcylcclxuICAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vanNvbnBsYWNlaG9sZGVyLnR5cGljb2RlLmNvbS9wb3N0cy8/PXVzZXJJZD0nICsgcGFyYW1zKVxyXG4gICAgICBjb25zb2xlLmxvZyhcIlJFU09VUkNFOiBcIiwgcmVzKVxyXG4gICAgXHJcbiAgICAgIGNvbnN0IHBvc3REYXRhID0gYXdhaXQgcmVzLmpzb24oKVxyXG4gICAgICBjb25zb2xlLmxvZyhwb3N0RGF0YSlcclxuICAgIFxyXG4gICAgICBpZiAoIXBvc3REYXRhKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgIG5vdEZvdW5kOiB0cnVlLFxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgXHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgcHJvcHM6IHtcclxuICAgICAgICAgIHBvc3REYXRhXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUG9zdDsgICAgIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9oZWFkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvcm91dGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9