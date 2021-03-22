webpackHotUpdate_N_E("pages/blog/post/author/[userId]",{

/***/ "./pages/blog/post/author/[userId].js":
/*!********************************************!*\
  !*** ./pages/blog/post/author/[userId].js ***!
  \********************************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSG", function() { return __N_SSG; });
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\Layney\\Documents\\GitHub\\blogProj\\pages\\blog\\post\\author\\[userId].js",
    _this = undefined,
    _s = $RefreshSig$();






var Post = function Post(_ref) {
  _s();

  var postData = _ref.postData;

  var handleClick = function handleClick(e) {
    e.preventDefault();
    router.push('/');
  };

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_1__["useRouter"])();
  var userId = router.query.userId;
  var id = router.query.id;
  var x = JSON.stringify(id);
  var userIds = JSON.stringify(userId);
  console.log("AUTHOR ID: ", userIds);
  var y = JSON.stringify(postData);
  console.log("TEST: ", y);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_0___default.a, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("title", {
        children: ["Blog Post: ", id, " "]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("meta", {
        name: "viewport",
        content: "initial-scale=1.0, width=device-width"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("button", {
      onClick: handleClick,
      children: "Go Back"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
      children: ["Author ", id, " Details:"]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("ul", {
      children: postData.map(function (author) {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("li", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
            id: "postContainer",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("li", {
              children: ["TITLE: ", author.title]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 35,
              columnNumber: 25
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("li", {
              children: ["ID: ", author.id]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 36,
              columnNumber: 25
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("li", {
              children: ["CONTENTS: ", author.body]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 37,
              columnNumber: 26
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 34,
            columnNumber: 23
          }, _this)
        }, author.userId, false, {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 21
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 9
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("main", {
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
            lineNumber: 55,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 48,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
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
              lineNumber: 73,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 64,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 60,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("section", {
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
                      lineNumber: 87,
                      columnNumber: 23
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 86,
                    columnNumber: 21
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 85,
                  columnNumber: 19
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
                  className: "w-full lg:w-4/12 px-4 lg:order-1",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
                    className: "flex justify-center py-4 lg:pt-4 pt-8",
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
                      className: "mr-4 p-3 text-center",
                      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("span", {
                        className: "text-xl font-bold block uppercase tracking-wide text-gray-700"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 99,
                        columnNumber: 25
                      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
                        className: "text-pink-500"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 101,
                        columnNumber: 31
                      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("span", {
                        className: "text-sm text-gray-500",
                        children: "Author"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 102,
                        columnNumber: 25
                      }, _this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 98,
                      columnNumber: 23
                    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
                      className: "mr-4 p-3 text-center",
                      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("span", {
                        className: "text-xl font-bold block uppercase tracking-wide text-gray-700",
                        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("p", {
                          className: "text-pink-500",
                          children: id
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 107,
                          columnNumber: 27
                        }, _this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 106,
                        columnNumber: 25
                      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("span", {
                        className: "text-sm text-gray-500",
                        children: "Id"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 109,
                        columnNumber: 25
                      }, _this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 105,
                      columnNumber: 23
                    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
                      className: "lg:mr-4 p-3 text-center",
                      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("span", {
                        className: "text-xl font-bold block uppercase tracking-wide text-gray-700",
                        children: "89"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 112,
                        columnNumber: 25
                      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("span", {
                        className: "text-sm text-gray-500",
                        children: "Comments"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 115,
                        columnNumber: 25
                      }, _this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 111,
                      columnNumber: 23
                    }, _this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 97,
                    columnNumber: 21
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 96,
                  columnNumber: 19
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 84,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
                className: "text-center mt-12",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
                  id: "title"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 122,
                  columnNumber: 17
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 120,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
                className: "mt-10 py-10 border-t border-gray-300 text-center",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
                  className: "flex flex-wrap justify-center",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
                    className: "w-full lg:w-9/12 px-4",
                    children: [" ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("ul", {
                      children: postData.map(function (author) {
                        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("li", {
                          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
                            id: "postContainer",
                            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("li", {
                              children: ["TITLE: ", author.title]
                            }, void 0, true, {
                              fileName: _jsxFileName,
                              lineNumber: 131,
                              columnNumber: 37
                            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("li", {
                              children: ["ID: ", author.id]
                            }, void 0, true, {
                              fileName: _jsxFileName,
                              lineNumber: 132,
                              columnNumber: 37
                            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("li", {
                              children: ["CONTENTS: ", author.body]
                            }, void 0, true, {
                              fileName: _jsxFileName,
                              lineNumber: 133,
                              columnNumber: 37
                            }, _this)]
                          }, void 0, true, {
                            fileName: _jsxFileName,
                            lineNumber: 130,
                            columnNumber: 35
                          }, _this)
                        }, author.userId, false, {
                          fileName: _jsxFileName,
                          lineNumber: 129,
                          columnNumber: 33
                        }, _this);
                      })
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 127,
                      columnNumber: 61
                    }, _this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 127,
                    columnNumber: 21
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 126,
                  columnNumber: 19
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 125,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 83,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 82,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 81,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 80,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 9
    }, _this)]
  }, void 0, true);
};

_s(Post, "fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_1__["useRouter"]];
});

_c = Post;
var __N_SSG = true;
/* harmony default export */ __webpack_exports__["default"] = (Post);

var _c;

$RefreshReg$(_c, "Post");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYmxvZy9wb3N0L2F1dGhvci9bdXNlcklkXS5qcyJdLCJuYW1lcyI6WyJQb3N0IiwicG9zdERhdGEiLCJoYW5kbGVDbGljayIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInJvdXRlciIsInB1c2giLCJ1c2VSb3V0ZXIiLCJ1c2VySWQiLCJxdWVyeSIsImlkIiwieCIsIkpTT04iLCJzdHJpbmdpZnkiLCJ1c2VySWRzIiwiY29uc29sZSIsImxvZyIsInkiLCJtYXAiLCJhdXRob3IiLCJ0aXRsZSIsImJvZHkiLCJoZWlnaHQiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJ0cmFuc2Zvcm0iLCJ0cmFuc2l0aW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7OztBQUVBLElBQU1BLElBQUksR0FBRyxTQUFQQSxJQUFPLE9BQWtCO0FBQUE7O0FBQUEsTUFBZkMsUUFBZSxRQUFmQSxRQUFlOztBQUUzQixNQUFNQyxXQUFXLEdBQUcsU0FBZEEsV0FBYyxDQUFDQyxDQUFELEVBQU87QUFDdkJBLEtBQUMsQ0FBQ0MsY0FBRjtBQUNBQyxVQUFNLENBQUNDLElBQVAsQ0FBWSxHQUFaO0FBQ0gsR0FIRDs7QUFLQSxNQUFNRCxNQUFNLEdBQUdFLDZEQUFTLEVBQXhCO0FBUDJCLE1BUWxCQyxNQVJrQixHQVFOSCxNQUFNLENBQUNJLEtBUkQsQ0FRbEJELE1BUmtCO0FBQUEsTUFTbEJFLEVBVGtCLEdBU1ZMLE1BQU0sQ0FBQ0ksS0FURyxDQVNsQkMsRUFUa0I7QUFVM0IsTUFBSUMsQ0FBQyxHQUFHQyxJQUFJLENBQUNDLFNBQUwsQ0FBZUgsRUFBZixDQUFSO0FBRUEsTUFBSUksT0FBTyxHQUFHRixJQUFJLENBQUNDLFNBQUwsQ0FBZUwsTUFBZixDQUFkO0FBQ0FPLFNBQU8sQ0FBQ0MsR0FBUixDQUFZLGFBQVosRUFBMkJGLE9BQTNCO0FBRUEsTUFBSUcsQ0FBQyxHQUFHTCxJQUFJLENBQUNDLFNBQUwsQ0FBZVos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QUEsZUFsQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBdkJBO0FBQUEsa0JBREo7QUErSEMsQ0FqSkw7O0dBQU1SLEk7VUFPYU8scUQ7OztLQVBiUCxJOztBQTZMU0EsbUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYmxvZy9wb3N0L2F1dGhvci9bdXNlcklkXS43OTMxMGU3NzcwNzYzNDAzYWU1Ny5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcclxuXHJcbmNvbnN0IFBvc3QgPSAoeyBwb3N0RGF0YSB9KSA9PiB7XHJcblxyXG4gICAgY29uc3QgaGFuZGxlQ2xpY2sgPSAoZSkgPT4ge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKVxyXG4gICAgICAgIHJvdXRlci5wdXNoKCcvJylcclxuICAgIH1cclxuICAgIFxyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgICBjb25zdCAgeyB1c2VySWQgfSAgPSByb3V0ZXIucXVlcnlcclxuICAgIGNvbnN0ICB7IGlkIH0gID0gcm91dGVyLnF1ZXJ5XHJcbiAgICB2YXIgeCA9IEpTT04uc3RyaW5naWZ5KGlkKVxyXG4gICAgXHJcbiAgICB2YXIgdXNlcklkcyA9IEpTT04uc3RyaW5naWZ5KHVzZXJJZClcclxuICAgIGNvbnNvbGUubG9nKFwiQVVUSE9SIElEOiBcIiwgdXNlcklkcylcclxuXHJcbiAgICB2YXIgeSA9IEpTT04uc3RyaW5naWZ5KHBvc3REYXRhKVxyXG4gICAgY29uc29sZS5sb2coXCJURVNUOiBcIiwgeSlcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxIZWFkPlxyXG4gICAgICAgICAgICAgICAgPHRpdGxlPkJsb2cgUG9zdDogeyBpZCB9IDwvdGl0bGU+XHJcbiAgICAgICAgICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwiaW5pdGlhbC1zY2FsZT0xLjAsIHdpZHRoPWRldmljZS13aWR0aFwiLz5cclxuICAgICAgICAgICAgPC9IZWFkPlxyXG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2hhbmRsZUNsaWNrfT5HbyBCYWNrPC9idXR0b24+XHJcbiAgICAgICAgICAgIDxkaXY+QXV0aG9yIHsgaWQgfSBEZXRhaWxzOjwvZGl2PlxyXG4gICAgICAgICAgICBcclxuICAgICAgICA8dWw+ICAgIFxyXG4gICAgICAgICAgICB7cG9zdERhdGEubWFwKChhdXRob3IpID0+IChcclxuICAgICAgICAgICAgICAgICAgICA8bGkga2V5PXthdXRob3IudXNlcklkfT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJwb3N0Q29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5USVRMRToge2F1dGhvci50aXRsZX08L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+SUQ6IHthdXRob3IuaWR9PC9saT4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+Q09OVEVOVFM6IHthdXRob3IuYm9keX08L2xpPiBcclxuICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2xpPiBcclxuICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvdWw+XHJcblxyXG5cclxuXHJcbiAgICAgICAgXHJcbiAgICAgICAgPG1haW4gY2xhc3NOYW1lPVwicHJvZmlsZS1wYWdlXCI+XHJcbiAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwicmVsYXRpdmUgYmxvY2tcIiBzdHlsZT17eyBoZWlnaHQ6IFwiMzAwcHhcIiB9fT5cclxuICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiYWJzb2x1dGUgdG9wLTAgdy1mdWxsIGgtZnVsbCBiZy1jZW50ZXIgYmctY292ZXJcIlxyXG4gICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmRJbWFnZTpcclxuICAgICAgICAgICAgICAgIFwidXJsKCdodHRwczovL2ltYWdlcy51bnNwbGFzaC5jb20vcGhvdG8tMTQ5OTMzNjMxNTgxNi0wOTc2NTVkY2ZiZGE/aXhsaWI9cmItMS4yLjEmaXhpZD1leUpoY0hCZmFXUWlPakV5TURkOSZhdXRvPWZvcm1hdCZmaXQ9Y3JvcCZ3PTI3MTAmcT04MCcpXCJcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPHNwYW5cclxuICAgICAgICAgICAgICBpZD1cImJsYWNrT3ZlcmxheVwiXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIGgtZnVsbCBhYnNvbHV0ZSBvcGFjaXR5LTUwIGJnLWJsYWNrXCJcclxuICAgICAgICAgICAgPjwvc3Bhbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJ0b3AtYXV0byBib3R0b20tMCBsZWZ0LTAgcmlnaHQtMCB3LWZ1bGwgYWJzb2x1dGUgcG9pbnRlci1ldmVudHMtbm9uZSBvdmVyZmxvdy1oaWRkZW5cIlxyXG4gICAgICAgICAgICBzdHlsZT17eyBoZWlnaHQ6IFwiNzBweFwiLCB0cmFuc2Zvcm06IFwidHJhbnNsYXRlWigwKVwiIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxzdmdcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhYnNvbHV0ZSBib3R0b20tMCBvdmVyZmxvdy1oaWRkZW5cIlxyXG4gICAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxyXG4gICAgICAgICAgICAgIHByZXNlcnZlQXNwZWN0UmF0aW89XCJub25lXCJcclxuICAgICAgICAgICAgICB2ZXJzaW9uPVwiMS4xXCJcclxuICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDI1NjAgMTAwXCJcclxuICAgICAgICAgICAgICB4PVwiMFwiXHJcbiAgICAgICAgICAgICAgeT1cIjBcIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPHBvbHlnb25cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtZ3JheS0zMDAgZmlsbC1jdXJyZW50XCJcclxuICAgICAgICAgICAgICAgIHBvaW50cz1cIjI1NjAgMCAyNTYwIDEwMCAwIDEwMFwiXHJcbiAgICAgICAgICAgICAgPjwvcG9seWdvbj5cclxuICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwicmVsYXRpdmUgcHktMTYgYmctZ3JheS0zMDBcIiBzdHlsZT17eyBoZWlnaHQ6IFwiMTAwdmhcIiB9fT5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIG14LWF1dG8gcHgtNFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIGZsZXggZmxleC1jb2wgbWluLXctMCBicmVhay13b3JkcyBiZy13aGl0ZSB3LWZ1bGwgbWItNiBzaGFkb3cteGwgcm91bmRlZC1sZyAtbXQtNjRcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB4LTZcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXdyYXAganVzdGlmeS1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgbGc6dy00LzEyIHB4LTQgbGc6b3JkZXItMyBsZzp0ZXh0LXJpZ2h0IGxnOnNlbGYtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJweS02IHB4LTMgbXQtMzIgc206bXQtMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJiZy1waW5rLTUwMCBhY3RpdmU6YmctcGluay02MDAgdXBwZXJjYXNlIHRleHQtd2hpdGUgZm9udC1ib2xkIGhvdmVyOnNoYWRvdy1tZCBzaGFkb3cgdGV4dC14cyBweC00IHB5LTIgcm91bmRlZCBvdXRsaW5lLW5vbmUgZm9jdXM6b3V0bGluZS1ub25lIHNtOm1yLTIgbWItMVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIiBvbkNsaWNrPXtoYW5kbGVDbGlja31cclxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgdHJhbnNpdGlvbjogXCJhbGwgLjE1cyBlYXNlXCIgfX1cclxuICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgR28gQmFja1xyXG4gICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBsZzp3LTQvMTIgcHgtNCBsZzpvcmRlci0xXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY2VudGVyIHB5LTQgbGc6cHQtNCBwdC04XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1yLTQgcC0zIHRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQteGwgZm9udC1ib2xkIGJsb2NrIHVwcGVyY2FzZSB0cmFja2luZy13aWRlIHRleHQtZ3JheS03MDBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtcGluay01MDBcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LWdyYXktNTAwXCI+QXV0aG9yPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtci00IHAtMyB0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXhsIGZvbnQtYm9sZCBibG9jayB1cHBlcmNhc2UgdHJhY2tpbmctd2lkZSB0ZXh0LWdyYXktNzAwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1waW5rLTUwMFwiPnsgaWQgfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtZ3JheS01MDBcIj5JZDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZzptci00IHAtMyB0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXhsIGZvbnQtYm9sZCBibG9jayB1cHBlcmNhc2UgdHJhY2tpbmctd2lkZSB0ZXh0LWdyYXktNzAwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgODlcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtZ3JheS01MDBcIj5Db21tZW50czwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBtdC0xMlwiPlxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJ0aXRsZVwiPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTEwIHB5LTEwIGJvcmRlci10IGJvcmRlci1ncmF5LTMwMCB0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC13cmFwIGp1c3RpZnktY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgbGc6dy05LzEyIHB4LTRcIj4gPHVsPiAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAge3Bvc3REYXRhLm1hcCgoYXV0aG9yKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGtleT17YXV0aG9yLnVzZXJJZH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGlkPVwicG9zdENvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+VElUTEU6IHthdXRob3IudGl0bGV9PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPklEOiB7YXV0aG9yLmlkfTwvbGk+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+Q09OVEVOVFM6IHthdXRob3IuYm9keX08L2xpPiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgIDwvbWFpbj5cclxuXHJcbiAgICAgICAgPC8+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG5cclxuXHJcbiAgXHJcbiBcclxuICAgIGV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQYXRocygpIHtcclxuICAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vanNvbnBsYWNlaG9sZGVyLnR5cGljb2RlLmNvbS9wb3N0cy9gKVxyXG4gICAgICBjb25zdCBwb3N0RGF0YSA9IGF3YWl0IHJlcy5qc29uKClcclxuICAgICAgdmFyIHBhdGhzID0gW107XHJcbiAgICAgIHZhciB1c2VySWQgPSBKU09OLnN0cmluZ2lmeShwYXRocylcclxuICAgICAgZm9yICh2YXIgaSBpbiBwb3N0RGF0YSlcclxuICAgICAgICBwYXRocy5wdXNoKHBvc3REYXRhW2ldKTtcclxuICAgIFxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIHBhdGhzOiBbXHJcbiAgICAgICAgICB7IHBhcmFtczogeyBwb3N0RGF0YSwgdXNlcklkIH0gfVxyXG4gICAgICAgIF0sXHJcbiAgICBcclxuICAgICAgICBmYWxsYmFjazogdHJ1ZVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcyggcGFyYW1zICkge1xyXG4gICAgICBjb25zb2xlLmxvZyhcIlBBUkFNOiBcIiwgcGFyYW1zKVxyXG4gICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly9qc29ucGxhY2Vob2xkZXIudHlwaWNvZGUuY29tL3Bvc3RzLz89JyArIHBhcmFtcylcclxuICAgICAgY29uc29sZS5sb2coXCJSRVNPVVJDRTogXCIsIHJlcylcclxuICAgIFxyXG4gICAgICBjb25zdCBwb3N0RGF0YSA9IGF3YWl0IHJlcy5qc29uKClcclxuICAgICAgY29uc29sZS5sb2cocG9zdERhdGEpXHJcbiAgICBcclxuICAgICAgaWYgKCFwb3N0RGF0YSkge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICBub3RGb3VuZDogdHJ1ZSxcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIFxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIHByb3BzOiB7XHJcbiAgICAgICAgICBwb3N0RGF0YVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBvc3Q7ICAgICJdLCJzb3VyY2VSb290IjoiIn0=