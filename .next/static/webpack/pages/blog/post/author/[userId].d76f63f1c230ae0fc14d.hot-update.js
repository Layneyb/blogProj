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
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
                      className: "mr-4 p-3 text-center",
                      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("span", {
                        className: "text-xl font-bold block uppercase tracking-wide text-gray-700"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 99,
                        columnNumber: 25
                      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("span", {
                        className: "text-pink-500",
                        children: postData.map(function (author) {
                          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("li", {}, author.userId, false, {
                            fileName: _jsxFileName,
                            lineNumber: 104,
                            columnNumber: 33
                          }, _this);
                        })
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 101,
                        columnNumber: 31
                      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("span", {
                        className: "text-sm text-gray-500",
                        children: "Author ID"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 108,
                        columnNumber: 25
                      }, _this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 98,
                      columnNumber: 23
                    }, _this)
                  }, void 0, false, {
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
                  lineNumber: 115,
                  columnNumber: 17
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 113,
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
                              children: ["POST ID: ", author.id]
                            }, void 0, true, {
                              fileName: _jsxFileName,
                              lineNumber: 124,
                              columnNumber: 37
                            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("li", {
                              children: ["TITLE: ", author.title]
                            }, void 0, true, {
                              fileName: _jsxFileName,
                              lineNumber: 125,
                              columnNumber: 37
                            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("li", {
                              children: ["CONTENTS: ", author.body]
                            }, void 0, true, {
                              fileName: _jsxFileName,
                              lineNumber: 126,
                              columnNumber: 37
                            }, _this)]
                          }, void 0, true, {
                            fileName: _jsxFileName,
                            lineNumber: 123,
                            columnNumber: 35
                          }, _this)
                        }, author.userId, false, {
                          fileName: _jsxFileName,
                          lineNumber: 122,
                          columnNumber: 33
                        }, _this);
                      })
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 120,
                      columnNumber: 61
                    }, _this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 120,
                    columnNumber: 21
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 119,
                  columnNumber: 19
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 118,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYmxvZy9wb3N0L2F1dGhvci9bdXNlcklkXS5qcyJdLCJuYW1lcyI6WyJQb3N0IiwicG9zdERhdGEiLCJoYW5kbGVDbGljayIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInJvdXRlciIsInB1c2giLCJ1c2VSb3V0ZXIiLCJ1c2VySWQiLCJxdWVyeSIsImlkIiwieCIsIkpTT04iLCJzdHJpbmdpZnkiLCJ1c2VySWRzIiwiY29uc29sZSIsImxvZyIsInkiLCJtYXAiLCJhdXRob3IiLCJ0aXRsZSIsImJvZHkiLCJoZWlnaHQiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJ0cmFuc2Zvcm0iLCJ0cmFuc2l0aW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7OztBQUVBLElBQU1BLElBQUksR0FBRyxTQUFQQSxJQUFPLE9BQWtCO0FBQUE7O0FBQUEsTUFBZkMsUUFBZSxRQUFmQSxRQUFlOztBQUUzQixNQUFNQyxXQUFXLEdBQUcsU0FBZEEsV0FBYyxDQUFDQyxDQUFELEVBQU87QUFDdkJBLEtBQUMsQ0FBQ0MsY0FBRjtBQUNBQyxVQUFNLENBQUNDLElBQVAsQ0FBWSxHQUFaO0FBQ0gsR0FIRDs7QUFLQSxNQUFNRCxNQUFNLEdBQUdFLDZEQUFTLEVBQXhCO0FBUDJCLE1BUWxCQyxNQVJrQixHQVFOSCxNQUFNLENBQUNJLEtBUkQsQ0FRbEJELE1BUmtCO0FBQUEsTUFTbEJFLEVBVGtCLEdBU1ZMLE1BQU0sQ0FBQ0ksS0FURyxDQVNsQkMsRUFUa0I7QUFVM0IsTUFBSUMsQ0FBQyxHQUFHQyxJQUFJLENBQUNDLFNBQUwsQ0FBZUgsRUFBZixDQUFSO0FBRUEsTUFBSUksT0FBTyxHQUFHRixJQUFJLENBQUNDLFNBQUwsQ0FBZUwsTUFBZixDQUFkO0FBQ0FPLFNBQU8sQ0FBQ0MsR0FBUixDQUFZLGFBQVosRUFBMkJGLE9BQTNCO0FBRUEsTUFBSUcsQ0FBQyxHQUFHTCxJQUFJLENBQUNDLFNBQUwsQ0FBZVos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R0FBVCxDQUFhLFVBQUNDLE1BQUQ7QUFBQSw0Q0FDTjtBQUFBLGlEQUNFO0FBQUssOEJBQUUsRUFBQyxlQUFSO0FBQUEsb0RBQ0U7QUFBQSxzREFBY0EsTUFBTSxDQUFDVCxFQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUNBREYsZUFFRTtBQUFBLG9EQUFZUyxNQUFNLENBQUNDLEtBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQ0FGRixlQUdFO0FBQUEsdURBQWVELE1BQU0sQ0FBQ0UsSUFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFDQUhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGLDJCQUFTRixNQUFNLENBQUNYLE1BQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUNBRE07QUFBQSx1QkFBYjtBQURtQztBQUFBO0FBQUE7QUFBQTtBQUFBLDZCQUF4QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFuQ0Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBbENBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQXZCQTtBQUFBLGtCQURKO0FBd0hDLENBMUlMOztHQUFNUixJO1VBT2FPLHFEOzs7S0FQYlAsSTs7QUFzTFNBLG1FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2Jsb2cvcG9zdC9hdXRob3IvW3VzZXJJZF0uZDc2ZjYzZjFjMjMwYWUwZmMxNGQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXHJcblxyXG5jb25zdCBQb3N0ID0gKHsgcG9zdERhdGEgfSkgPT4ge1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZUNsaWNrID0gKGUpID0+IHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcclxuICAgICAgICByb3V0ZXIucHVzaCgnLycpXHJcbiAgICB9XHJcbiAgICBcclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gICAgY29uc3QgIHsgdXNlcklkIH0gID0gcm91dGVyLnF1ZXJ5XHJcbiAgICBjb25zdCAgeyBpZCB9ICA9IHJvdXRlci5xdWVyeVxyXG4gICAgdmFyIHggPSBKU09OLnN0cmluZ2lmeShpZClcclxuICAgIFxyXG4gICAgdmFyIHVzZXJJZHMgPSBKU09OLnN0cmluZ2lmeSh1c2VySWQpXHJcbiAgICBjb25zb2xlLmxvZyhcIkFVVEhPUiBJRDogXCIsIHVzZXJJZHMpXHJcblxyXG4gICAgdmFyIHkgPSBKU09OLnN0cmluZ2lmeShwb3N0RGF0YSlcclxuICAgIGNvbnNvbGUubG9nKFwiVEVTVDogXCIsIHkpXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8SGVhZD5cclxuICAgICAgICAgICAgICAgIDx0aXRsZT5CbG9nIFBvc3Q6IHsgaWQgfSA8L3RpdGxlPlxyXG4gICAgICAgICAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cImluaXRpYWwtc2NhbGU9MS4wLCB3aWR0aD1kZXZpY2Utd2lkdGhcIi8+XHJcbiAgICAgICAgICAgIDwvSGVhZD5cclxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVDbGlja30+R28gQmFjazwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8ZGl2PkF1dGhvciB7IGlkIH0gRGV0YWlsczo8L2Rpdj5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgPHVsPiAgICBcclxuICAgICAgICAgICAge3Bvc3REYXRhLm1hcCgoYXV0aG9yKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGxpIGtleT17YXV0aG9yLnVzZXJJZH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGlkPVwicG9zdENvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+VElUTEU6IHthdXRob3IudGl0bGV9PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPklEOiB7YXV0aG9yLmlkfTwvbGk+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgPGxpPkNPTlRFTlRTOiB7YXV0aG9yLmJvZHl9PC9saT4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9saT4gXHJcbiAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICA8L3VsPlxyXG5cclxuXHJcblxyXG4gICAgICAgIFxyXG4gICAgICAgIDxtYWluIGNsYXNzTmFtZT1cInByb2ZpbGUtcGFnZVwiPlxyXG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInJlbGF0aXZlIGJsb2NrXCIgc3R5bGU9e3sgaGVpZ2h0OiBcIjMwMHB4XCIgfX0+XHJcbiAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImFic29sdXRlIHRvcC0wIHctZnVsbCBoLWZ1bGwgYmctY2VudGVyIGJnLWNvdmVyXCJcclxuICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6XHJcbiAgICAgICAgICAgICAgICBcInVybCgnaHR0cHM6Ly9pbWFnZXMudW5zcGxhc2guY29tL3Bob3RvLTE0OTkzMzYzMTU4MTYtMDk3NjU1ZGNmYmRhP2l4bGliPXJiLTEuMi4xJml4aWQ9ZXlKaGNIQmZhV1FpT2pFeU1EZDkmYXV0bz1mb3JtYXQmZml0PWNyb3Amdz0yNzEwJnE9ODAnKVwiXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxzcGFuXHJcbiAgICAgICAgICAgICAgaWQ9XCJibGFja092ZXJsYXlcIlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBoLWZ1bGwgYWJzb2x1dGUgb3BhY2l0eS01MCBiZy1ibGFja1wiXHJcbiAgICAgICAgICAgID48L3NwYW4+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwidG9wLWF1dG8gYm90dG9tLTAgbGVmdC0wIHJpZ2h0LTAgdy1mdWxsIGFic29sdXRlIHBvaW50ZXItZXZlbnRzLW5vbmUgb3ZlcmZsb3ctaGlkZGVuXCJcclxuICAgICAgICAgICAgc3R5bGU9e3sgaGVpZ2h0OiBcIjcwcHhcIiwgdHJhbnNmb3JtOiBcInRyYW5zbGF0ZVooMClcIiB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8c3ZnXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYWJzb2x1dGUgYm90dG9tLTAgb3ZlcmZsb3ctaGlkZGVuXCJcclxuICAgICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcclxuICAgICAgICAgICAgICBwcmVzZXJ2ZUFzcGVjdFJhdGlvPVwibm9uZVwiXHJcbiAgICAgICAgICAgICAgdmVyc2lvbj1cIjEuMVwiXHJcbiAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCAyNTYwIDEwMFwiXHJcbiAgICAgICAgICAgICAgeD1cIjBcIlxyXG4gICAgICAgICAgICAgIHk9XCIwXCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxwb2x5Z29uXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktMzAwIGZpbGwtY3VycmVudFwiXHJcbiAgICAgICAgICAgICAgICBwb2ludHM9XCIyNTYwIDAgMjU2MCAxMDAgMCAxMDBcIlxyXG4gICAgICAgICAgICAgID48L3BvbHlnb24+XHJcbiAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInJlbGF0aXZlIHB5LTE2IGJnLWdyYXktMzAwXCIgc3R5bGU9e3sgaGVpZ2h0OiBcIjEwMHZoXCIgfX0+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBteC1hdXRvIHB4LTRcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBmbGV4IGZsZXgtY29sIG1pbi13LTAgYnJlYWstd29yZHMgYmctd2hpdGUgdy1mdWxsIG1iLTYgc2hhZG93LXhsIHJvdW5kZWQtbGcgLW10LTY0XCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJweC02XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC13cmFwIGp1c3RpZnktY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIGxnOnctNC8xMiBweC00IGxnOm9yZGVyLTMgbGc6dGV4dC1yaWdodCBsZzpzZWxmLWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHktNiBweC0zIG10LTMyIHNtOm10LTBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmctcGluay01MDAgYWN0aXZlOmJnLXBpbmstNjAwIHVwcGVyY2FzZSB0ZXh0LXdoaXRlIGZvbnQtYm9sZCBob3ZlcjpzaGFkb3ctbWQgc2hhZG93IHRleHQteHMgcHgtNCBweS0yIHJvdW5kZWQgb3V0bGluZS1ub25lIGZvY3VzOm91dGxpbmUtbm9uZSBzbTptci0yIG1iLTFcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCIgb25DbGljaz17aGFuZGxlQ2xpY2t9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHRyYW5zaXRpb246IFwiYWxsIC4xNXMgZWFzZVwiIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEdvIEJhY2tcclxuICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgbGc6dy00LzEyIHB4LTQgbGc6b3JkZXItMVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWNlbnRlciBweS00IGxnOnB0LTQgcHQtOFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtci00IHAtMyB0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXhsIGZvbnQtYm9sZCBibG9jayB1cHBlcmNhc2UgdHJhY2tpbmctd2lkZSB0ZXh0LWdyYXktNzAwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1waW5rLTUwMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7cG9zdERhdGEubWFwKChhdXRob3IpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkga2V5PXthdXRob3IudXNlcklkfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC1ncmF5LTUwMFwiPkF1dGhvciBJRDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBtdC0xMlwiPlxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJ0aXRsZVwiPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTEwIHB5LTEwIGJvcmRlci10IGJvcmRlci1ncmF5LTMwMCB0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC13cmFwIGp1c3RpZnktY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgbGc6dy05LzEyIHB4LTRcIj4gPHVsPiAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAge3Bvc3REYXRhLm1hcCgoYXV0aG9yKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGtleT17YXV0aG9yLnVzZXJJZH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGlkPVwicG9zdENvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+UE9TVCBJRDoge2F1dGhvci5pZH08L2xpPiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlRJVExFOiB7YXV0aG9yLnRpdGxlfTwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5DT05URU5UUzoge2F1dGhvci5ib2R5fTwvbGk+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgPC9tYWluPlxyXG5cclxuICAgICAgICA8Lz5cclxuICAgICAgICApXHJcbiAgICB9XHJcblxyXG5cclxuICBcclxuIFxyXG4gICAgZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1BhdGhzKCkge1xyXG4gICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9qc29ucGxhY2Vob2xkZXIudHlwaWNvZGUuY29tL3Bvc3RzL2ApXHJcbiAgICAgIGNvbnN0IHBvc3REYXRhID0gYXdhaXQgcmVzLmpzb24oKVxyXG4gICAgICB2YXIgcGF0aHMgPSBbXTtcclxuICAgICAgdmFyIHVzZXJJZCA9IEpTT04uc3RyaW5naWZ5KHBhdGhzKVxyXG4gICAgICBmb3IgKHZhciBpIGluIHBvc3REYXRhKVxyXG4gICAgICAgIHBhdGhzLnB1c2gocG9zdERhdGFbaV0pO1xyXG4gICAgXHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgcGF0aHM6IFtcclxuICAgICAgICAgIHsgcGFyYW1zOiB7IHBvc3REYXRhLCB1c2VySWQgfSB9XHJcbiAgICAgICAgXSxcclxuICAgIFxyXG4gICAgICAgIGZhbGxiYWNrOiB0cnVlXHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKCBwYXJhbXMgKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiUEFSQU06IFwiLCBwYXJhbXMpXHJcbiAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKCdodHRwczovL2pzb25wbGFjZWhvbGRlci50eXBpY29kZS5jb20vcG9zdHMvPz0nICsgcGFyYW1zKVxyXG4gICAgICBjb25zb2xlLmxvZyhcIlJFU09VUkNFOiBcIiwgcmVzKVxyXG4gICAgXHJcbiAgICAgIGNvbnN0IHBvc3REYXRhID0gYXdhaXQgcmVzLmpzb24oKVxyXG4gICAgICBjb25zb2xlLmxvZyhwb3N0RGF0YSlcclxuICAgIFxyXG4gICAgICBpZiAoIXBvc3REYXRhKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgIG5vdEZvdW5kOiB0cnVlLFxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgXHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgcHJvcHM6IHtcclxuICAgICAgICAgIHBvc3REYXRhXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUG9zdDsgICAgIl0sInNvdXJjZVJvb3QiOiIifQ==