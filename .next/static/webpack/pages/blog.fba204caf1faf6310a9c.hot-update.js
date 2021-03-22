webpackHotUpdate_N_E("pages/blog",{

/***/ "./pages/blog/index.js":
/*!*****************************!*\
  !*** ./pages/blog/index.js ***!
  \*****************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSG", function() { return __N_SSG; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "C:\\Users\\Layney\\Documents\\GitHub\\blogProj\\pages\\blog\\index.js",
    _s = $RefreshSig$();








function Posts(_ref) {
  _s();

  var _this = this;

  var postData = _ref.postData;
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"])();

  var handleClick = function handleClick(e) {
    e.preventDefault();
    router.push('/');
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("title", {
        children: "All Blog Posts"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 13
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("meta", {
        name: "viewport",
        content: "initial-scale=1.0, width=device-width"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 13
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 9
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("button", {
      onClick: handleClick,
      children: "Go Back"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 13
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("ul", {
      children: postData.map(function (postdeet) {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("li", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
            href: "/blog/post/".concat(encodeURIComponent(postdeet === null || postdeet === void 0 ? void 0 : postdeet.id)),
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("a", {
              children: postdeet.title
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 31,
              columnNumber: 27
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 30,
            columnNumber: 24
          }, _this)
        }, postdeet.id, false, {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 21
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 9
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("main", {
      className: "profile-page",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("section", {
        className: "relative block",
        style: {
          height: "300px"
        },
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
          className: "absolute top-0 w-full h-full bg-center bg-cover",
          style: {
            backgroundImage: "url('https://images.unsplash.com/photo-1499336315816-097655dcfbda?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2710&q=80')"
          },
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("span", {
            id: "blackOverlay",
            className: "w-full h-full absolute opacity-50 bg-black"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 50,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
          className: "top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden",
          style: {
            height: "70px",
            transform: "translateZ(0)"
          },
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("svg", {
            className: "absolute bottom-0 overflow-hidden",
            xmlns: "http://www.w3.org/2000/svg",
            preserveAspectRatio: "none",
            version: "1.1",
            viewBox: "0 0 2560 100",
            x: "0",
            y: "0",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("polygon", {
              className: "text-gray-300 fill-current",
              points: "2560 0 2560 100 0 100"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 68,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 59,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 55,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("section", {
        className: "relative py-16 bg-gray-300",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
          className: "container mx-auto px-4",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
            className: "relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
              className: "px-6",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
                className: "flex flex-wrap justify-center",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
                  className: "w-full lg:w-3/12 px-4 lg:order-2 flex justify-center",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
                    className: "relative"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 81,
                    columnNumber: 21
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 80,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
                  className: "w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
                    className: "py-6 px-3 mt-32 sm:mt-0",
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("button", {
                      className: "bg-pink-500 active:bg-pink-600 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1",
                      type: "button",
                      onClick: handleClick,
                      style: {
                        transition: "all .15s ease"
                      },
                      children: "Go Back"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 86,
                      columnNumber: 23
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 85,
                    columnNumber: 21
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 84,
                  columnNumber: 19
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 79,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
                className: "text-center mt-12",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("h3", {
                  className: "text-4xl font-semibold leading-normal mb-2 text-gray-800 mb-2",
                  children: "All Blog Posts"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 97,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
                  className: "text-sm leading-normal mt-0 mb-2 text-gray-500 font-bold uppercase",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("i", {
                    className: "fas fa-map-marker-alt mr-2 text-lg text-gray-500"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 101,
                    columnNumber: 21
                  }, this), " ", "Click titles to see more"]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 100,
                  columnNumber: 19
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 96,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
                className: "mt-10 py-10 border-t border-gray-300 text-center",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
                  className: "flex flex-wrap justify-center",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
                    className: "w-full lg:w-9/12 px-4",
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("ul", {
                      className: "mb-4 text-lg leading-relaxed text-pink-500",
                      children: postData.map(function (postdeet) {
                        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("li", {
                          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
                            href: "/blog/post/".concat(encodeURIComponent(postdeet === null || postdeet === void 0 ? void 0 : postdeet.id)),
                            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("a", {
                              children: postdeet.title
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 112,
                              columnNumber: 41
                            }, _this)
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 111,
                            columnNumber: 37
                          }, _this)
                        }, postdeet.id, false, {
                          fileName: _jsxFileName,
                          lineNumber: 110,
                          columnNumber: 35
                        }, _this);
                      })
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 108,
                      columnNumber: 23
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 107,
                    columnNumber: 21
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 106,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 105,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 78,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 77,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 76,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 7
    }, this)]
  }, void 0, true);
}

_s(Posts, "fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"]];
});

_c = Posts;
var __N_SSG = true;
/* harmony default export */ __webpack_exports__["default"] = (Posts);

var _c;

$RefreshReg$(_c, "Posts");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYmxvZy9pbmRleC5qcyJdLCJuYW1lcyI6WyJQb3N0cyIsInBvc3REYXRhIiwicm91dGVyIiwidXNlUm91dGVyIiwiaGFuZGxlQ2xpY2siLCJlIiwicHJldmVudERlZmF1bHQiLCJwdXNoIiwibWFwIiwicG9zdGRlZXQiLCJlbmNvZGVVUklDb21wb25lbnQiLCJpZCIsInRpdGxlIiwiaGVpZ2h0IiwiYmFja2dyb3VuZEltYWdlIiwidHJhbnNmb3JtIiwidHJhbnNpdGlvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUdBOzs7O0FBSUEsU0FBU0EsS0FBVCxPQUE2QjtBQUFBOztBQUFBOztBQUFBLE1BQVpDLFFBQVksUUFBWkEsUUFBWTtBQUV6QixNQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCOztBQUNBLE1BQU1DLFdBQVcsR0FBRyxTQUFkQSxXQUFjLENBQUNDLENBQUQsRUFBTztBQUN2QkEsS0FBQyxDQUFDQyxjQUFGO0FBQ0FKLFVBQU0sQ0FBQ0ssSUFBUCxDQUFZLEdBQVo7QUFDSCxHQUhEOztBQU9BLHNCQUNBO0FBQUEsNEJBQ0kscUVBQUMsZ0RBQUQ7QUFBQSw4QkFDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURKLGVBRUk7QUFBTSxZQUFJLEVBQUMsVUFBWDtBQUFzQixlQUFPLEVBQUM7QUFBOUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURKLGVBS1E7QUFBUSxhQUFPLEVBQUVILFdBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBTFIsZUFNSTtBQUFBLGdCQUNLSCxRQUFRLENBQUNPLEdBQVQsQ0FBYSxVQUFDQyxRQUFEO0FBQUEsNEJBQ047QUFBQSxpQ0FDRyxxRUFBQyxnREFBRDtBQUFNLGdCQUFJLHVCQUFnQkMsa0JBQWtCLENBQUNELFFBQUQsYUFBQ0EsUUFBRCx1QkFBQ0EsUUFBUSxDQUFFRSxFQUFYLENBQWxDLENBQVY7QUFBQSxtQ0FDRztBQUFBLHdCQUFJRixRQUFRLENBQUNHO0FBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESCxXQUFTSCxRQUFRLENBQUNFLEVBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRE07QUFBQSxPQUFiO0FBREw7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQU5KLGVBb0JFO0FBQU0sZUFBUyxFQUFDLGNBQWhCO0FBQUEsOEJBQ0U7QUFBUyxpQkFBUyxFQUFDLGdCQUFuQjtBQUFvQyxhQUFLLEVBQUU7QUFBRUUsZ0JBQU0sRUFBRTtBQUFWLFNBQTNDO0FBQUEsZ0NBQ0U7QUFDRSxtQkFBUyxFQUFDLGlEQURaO0FBRUUsZUFBSyxFQUFFO0FBQ0xDLDJCQUFlLEVBQ2I7QUFGRyxXQUZUO0FBQUEsaUNBT0U7QUFDRSxjQUFFLEVBQUMsY0FETDtBQUVFLHFCQUFTLEVBQUM7QUFGWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBUEY7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERixlQWFFO0FBQ0UsbUJBQVMsRUFBQyxzRkFEWjtBQUVFLGVBQUssRUFBRTtBQUFFRCxrQkFBTSxFQUFFLE1BQVY7QUFBa0JFLHFCQUFTLEVBQUU7QUFBN0IsV0FGVDtBQUFBLGlDQUlFO0FBQ0UscUJBQVMsRUFBQyxtQ0FEWjtBQUVFLGlCQUFLLEVBQUMsNEJBRlI7QUFHRSwrQkFBbUIsRUFBQyxNQUh0QjtBQUlFLG1CQUFPLEVBQUMsS0FKVjtBQUtFLG1CQUFPLEVBQUMsY0FMVjtBQU1FLGFBQUMsRUFBQyxHQU5KO0FBT0UsYUFBQyxFQUFDLEdBUEo7QUFBQSxtQ0FTRTtBQUNFLHVCQUFTLEVBQUMsNEJBRFo7QUFFRSxvQkFBTSxFQUFDO0FBRlQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVRGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQWJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBa0NFO0FBQVMsaUJBQVMsRUFBQyw0QkFBbkI7QUFBQSwrQkFDRTtBQUFLLG1CQUFTLEVBQUMsd0JBQWY7QUFBQSxpQ0FDRTtBQUFLLHFCQUFTLEVBQUMsNkZBQWY7QUFBQSxtQ0FDRTtBQUFLLHVCQUFTLEVBQUMsTUFBZjtBQUFBLHNDQUNFO0FBQUsseUJBQVMsRUFBQywrQkFBZjtBQUFBLHdDQUNFO0FBQUssMkJBQVMsRUFBQyxzREFBZjtBQUFBLHlDQUNFO0FBQUssNkJBQVMsRUFBQztBQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLHdCQURGLGVBS0U7QUFBSywyQkFBUyxFQUFDLCtEQUFmO0FBQUEseUNBQ0U7QUFBSyw2QkFBUyxFQUFDLHlCQUFmO0FBQUEsMkNBQ0U7QUFDRSwrQkFBUyxFQUFDLDZKQURaO0FBRUUsMEJBQUksRUFBQyxRQUZQO0FBRWdCLDZCQUFPLEVBQUVYLFdBRnpCO0FBR0UsMkJBQUssRUFBRTtBQUFFWSxrQ0FBVSxFQUFFO0FBQWQsdUJBSFQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSx3QkFMRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBREYsZUFrQkU7QUFBSyx5QkFBUyxFQUFDLG1CQUFmO0FBQUEsd0NBQ0U7QUFBSSwyQkFBUyxFQUFDLCtEQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHdCQURGLGVBSUU7QUFBSywyQkFBUyxFQUFDLG9FQUFmO0FBQUEsMENBQ0U7QUFBRyw2QkFBUyxFQUFDO0FBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQSwwQkFERixFQUN1RSxHQUR2RTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0JBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQWxCRixlQTJCRTtBQUFLLHlCQUFTLEVBQUMsa0RBQWY7QUFBQSx1Q0FDRTtBQUFLLDJCQUFTLEVBQUMsK0JBQWY7QUFBQSx5Q0FDRTtBQUFLLDZCQUFTLEVBQUMsdUJBQWY7QUFBQSwyQ0FDRTtBQUFLLCtCQUFTLEVBQUMsNENBQWY7QUFBQSxnQ0FDS2YsUUFBUSxDQUFDTyxHQUFULENBQWEsVUFBQ0MsUUFBRDtBQUFBLDRDQUNOO0FBQUEsaURBQ0UscUVBQUMsZ0RBQUQ7QUFBTSxnQ0FBSSx1QkFBZ0JDLGtCQUFrQixDQUFDRCxRQUFELGFBQUNBLFFBQUQsdUJBQUNBLFFBQVEsQ0FBRUUsRUFBWCxDQUFsQyxDQUFWO0FBQUEsbURBQ0k7QUFBQSx3Q0FBSUYsUUFBUSxDQUFDRztBQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREYsMkJBQVNILFFBQVEsQ0FBQ0UsRUFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQ0FETTtBQUFBLHVCQUFiO0FBREw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkEzQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBbENGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQXBCRjtBQUFBLGtCQURBO0FBOEdIOztHQXhIUVgsSztVQUVVRyxxRDs7O0tBRlZILEs7O0FBd0pNQSxvRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9ibG9nLmZiYTIwNGNhZjFmYWY2MzEwYTljLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcblxyXG5cclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5cclxuXHJcblxyXG5mdW5jdGlvbiBQb3N0cyh7IHBvc3REYXRhIH0pIHtcclxuXHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxyXG4gICAgY29uc3QgaGFuZGxlQ2xpY2sgPSAoZSkgPT4ge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKVxyXG4gICAgICAgIHJvdXRlci5wdXNoKCcvJylcclxuICAgIH1cclxuXHJcblxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICAgIDxIZWFkPlxyXG4gICAgICAgICAgICA8dGl0bGU+QWxsIEJsb2cgUG9zdHM8L3RpdGxlPlxyXG4gICAgICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwiaW5pdGlhbC1zY2FsZT0xLjAsIHdpZHRoPWRldmljZS13aWR0aFwiIC8+XHJcbiAgICAgICAgPC9IZWFkPlxyXG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2hhbmRsZUNsaWNrfT5HbyBCYWNrPC9idXR0b24+XHJcbiAgICAgICAgPHVsPiAgICBcclxuICAgICAgICAgICAge3Bvc3REYXRhLm1hcCgocG9zdGRlZXQpID0+IChcclxuICAgICAgICAgICAgICAgICAgICA8bGkga2V5PXtwb3N0ZGVldC5pZH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17YC9ibG9nL3Bvc3QvJHtlbmNvZGVVUklDb21wb25lbnQocG9zdGRlZXQ/LmlkKX1gfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8YT57cG9zdGRlZXQudGl0bGV9PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9saT4gXHJcbiAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICA8L3VsPlxyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgICAgIDxtYWluIGNsYXNzTmFtZT1cInByb2ZpbGUtcGFnZVwiPlxyXG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInJlbGF0aXZlIGJsb2NrXCIgc3R5bGU9e3sgaGVpZ2h0OiBcIjMwMHB4XCIgfX0+XHJcbiAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImFic29sdXRlIHRvcC0wIHctZnVsbCBoLWZ1bGwgYmctY2VudGVyIGJnLWNvdmVyXCJcclxuICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6XHJcbiAgICAgICAgICAgICAgICBcInVybCgnaHR0cHM6Ly9pbWFnZXMudW5zcGxhc2guY29tL3Bob3RvLTE0OTkzMzYzMTU4MTYtMDk3NjU1ZGNmYmRhP2l4bGliPXJiLTEuMi4xJml4aWQ9ZXlKaGNIQmZhV1FpT2pFeU1EZDkmYXV0bz1mb3JtYXQmZml0PWNyb3Amdz0yNzEwJnE9ODAnKVwiXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxzcGFuXHJcbiAgICAgICAgICAgICAgaWQ9XCJibGFja092ZXJsYXlcIlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBoLWZ1bGwgYWJzb2x1dGUgb3BhY2l0eS01MCBiZy1ibGFja1wiXHJcbiAgICAgICAgICAgID48L3NwYW4+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwidG9wLWF1dG8gYm90dG9tLTAgbGVmdC0wIHJpZ2h0LTAgdy1mdWxsIGFic29sdXRlIHBvaW50ZXItZXZlbnRzLW5vbmUgb3ZlcmZsb3ctaGlkZGVuXCJcclxuICAgICAgICAgICAgc3R5bGU9e3sgaGVpZ2h0OiBcIjcwcHhcIiwgdHJhbnNmb3JtOiBcInRyYW5zbGF0ZVooMClcIiB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8c3ZnXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYWJzb2x1dGUgYm90dG9tLTAgb3ZlcmZsb3ctaGlkZGVuXCJcclxuICAgICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcclxuICAgICAgICAgICAgICBwcmVzZXJ2ZUFzcGVjdFJhdGlvPVwibm9uZVwiXHJcbiAgICAgICAgICAgICAgdmVyc2lvbj1cIjEuMVwiXHJcbiAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCAyNTYwIDEwMFwiXHJcbiAgICAgICAgICAgICAgeD1cIjBcIlxyXG4gICAgICAgICAgICAgIHk9XCIwXCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxwb2x5Z29uXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktMzAwIGZpbGwtY3VycmVudFwiXHJcbiAgICAgICAgICAgICAgICBwb2ludHM9XCIyNTYwIDAgMjU2MCAxMDAgMCAxMDBcIlxyXG4gICAgICAgICAgICAgID48L3BvbHlnb24+XHJcbiAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInJlbGF0aXZlIHB5LTE2IGJnLWdyYXktMzAwXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBteC1hdXRvIHB4LTRcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBmbGV4IGZsZXgtY29sIG1pbi13LTAgYnJlYWstd29yZHMgYmctd2hpdGUgdy1mdWxsIG1iLTYgc2hhZG93LXhsIHJvdW5kZWQtbGcgLW10LTY0XCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJweC02XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC13cmFwIGp1c3RpZnktY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIGxnOnctMy8xMiBweC00IGxnOm9yZGVyLTIgZmxleCBqdXN0aWZ5LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmVcIj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIGxnOnctNC8xMiBweC00IGxnOm9yZGVyLTMgbGc6dGV4dC1yaWdodCBsZzpzZWxmLWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHktNiBweC0zIG10LTMyIHNtOm10LTBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmctcGluay01MDAgYWN0aXZlOmJnLXBpbmstNjAwIHVwcGVyY2FzZSB0ZXh0LXdoaXRlIGZvbnQtYm9sZCBob3ZlcjpzaGFkb3ctbWQgc2hhZG93IHRleHQteHMgcHgtNCBweS0yIHJvdW5kZWQgb3V0bGluZS1ub25lIGZvY3VzOm91dGxpbmUtbm9uZSBzbTptci0yIG1iLTFcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCIgb25DbGljaz17aGFuZGxlQ2xpY2t9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHRyYW5zaXRpb246IFwiYWxsIC4xNXMgZWFzZVwiIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEdvIEJhY2tcclxuICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBtdC0xMlwiPlxyXG4gICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC00eGwgZm9udC1zZW1pYm9sZCBsZWFkaW5nLW5vcm1hbCBtYi0yIHRleHQtZ3JheS04MDAgbWItMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIEFsbCBCbG9nIFBvc3RzXHJcbiAgICAgICAgICAgICAgICAgIDwvaDM+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1zbSBsZWFkaW5nLW5vcm1hbCBtdC0wIG1iLTIgdGV4dC1ncmF5LTUwMCBmb250LWJvbGQgdXBwZXJjYXNlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFzIGZhLW1hcC1tYXJrZXItYWx0IG1yLTIgdGV4dC1sZyB0ZXh0LWdyYXktNTAwXCI+PC9pPntcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICBDbGljayB0aXRsZXMgdG8gc2VlIG1vcmVcclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtMTAgcHktMTAgYm9yZGVyLXQgYm9yZGVyLWdyYXktMzAwIHRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXdyYXAganVzdGlmeS1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBsZzp3LTkvMTIgcHgtNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHVsICBjbGFzc05hbWU9XCJtYi00IHRleHQtbGcgbGVhZGluZy1yZWxheGVkIHRleHQtcGluay01MDBcIj4gICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAge3Bvc3REYXRhLm1hcCgocG9zdGRlZXQpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e3Bvc3RkZWV0LmlkfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17YC9ibG9nL3Bvc3QvJHtlbmNvZGVVUklDb21wb25lbnQocG9zdGRlZXQ/LmlkKX1gfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhPntwb3N0ZGVldC50aXRsZX08L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgIDwvbWFpbj5cclxuXHJcblxyXG5cclxuICAgIDwvPlxyXG4gICAgKVxyXG59XHJcblxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1BhdGhzKCkge1xyXG4gICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGBodHRwczovL2pzb25wbGFjZWhvbGRlci50eXBpY29kZS5jb20vcG9zdHNgKVxyXG4gICAgICAgIGNvbnN0IHBvc3REYXRhID0gYXdhaXQgcmVzLmpzb24oKVxyXG4gICAgICAgIHZhciBwYXRocyA9IFtdXHJcbiAgICAgICAgdmFyIHggPSBKU09OLnN0cmluZ2lmeShwYXRocyk7XHJcbiAgICAgICAgZm9yKHZhciBpIGluIHBvc3REYXRhKVxyXG4gICAgICAgICAgcGF0aHMucHVzaChwb3N0RGF0YSBbaV0pO1xyXG4gICAgICAgICAgXHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgcGF0aHMgOltcclxuICAgICAgICAgICAgICAgeyBwYXJhbXM6IHtwb3N0RGF0YX0gfVxyXG4gICAgICAgICAgICBdLCBcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBmYWxsYmFjazogZmFsc2VcclxuICAgICAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcygpIHtcclxuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGBodHRwczovL2pzb25wbGFjZWhvbGRlci50eXBpY29kZS5jb20vcG9zdHNgKVxyXG4gICAgY29uc3QgcG9zdERhdGEgPSBhd2FpdCByZXMuanNvbigpXHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBwcm9wczp7XHJcbiAgICAgICAgICAgIHBvc3REYXRhXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUG9zdHM7Il0sInNvdXJjZVJvb3QiOiIifQ==