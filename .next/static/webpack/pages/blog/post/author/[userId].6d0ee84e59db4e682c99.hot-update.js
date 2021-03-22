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
                        className: "text-xl font-bold block uppercase tracking-wide text-gray-700",
                        children: postData.map(function (post) {
                          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
                            className: "text-pink-500",
                            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(Link, {
                              href: "/blog/post/author/".concat(encodeURIComponent(post === null || post === void 0 ? void 0 : post.userId)),
                              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("a", {
                                children: post.userId
                              }, void 0, false, {
                                fileName: _jsxFileName,
                                lineNumber: 103,
                                columnNumber: 35
                              }, _this)
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 102,
                              columnNumber: 33
                            }, _this)
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 101,
                            columnNumber: 31
                          }, _this);
                        })
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 99,
                        columnNumber: 25
                      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("span", {
                        className: "text-sm text-gray-500",
                        children: "Author"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 108,
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
                          lineNumber: 112,
                          columnNumber: 27
                        }, _this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 111,
                        columnNumber: 25
                      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("span", {
                        className: "text-sm text-gray-500",
                        children: "Id"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 114,
                        columnNumber: 25
                      }, _this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 110,
                      columnNumber: 23
                    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
                      className: "lg:mr-4 p-3 text-center",
                      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("span", {
                        className: "text-xl font-bold block uppercase tracking-wide text-gray-700",
                        children: "89"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 117,
                        columnNumber: 25
                      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("span", {
                        className: "text-sm text-gray-500",
                        children: "Comments"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 120,
                        columnNumber: 25
                      }, _this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 116,
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
                  id: "title",
                  children: postData.map(function (post) {
                    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("h3", {
                      className: "text-4xl font-semibold leading-normal mb-2 text-gray-800 mb-2",
                      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("p", {
                        className: "text-pink-500",
                        children: "Title:"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 130,
                        columnNumber: 17
                      }, _this), " ", post.title]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 129,
                      columnNumber: 17
                    }, _this);
                  })
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 127,
                  columnNumber: 17
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 125,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
                className: "mt-10 py-10 border-t border-gray-300 text-center",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
                  className: "flex flex-wrap justify-center",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
                    className: "w-full lg:w-9/12 px-4",
                    children: [postData.map(function (post) {
                      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("p", {
                        className: "mb-4 text-lg leading-relaxed text-gray-800",
                        children: [post.body, " "]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 139,
                        columnNumber: 27
                      }, _this);
                    }), postData.map(function (post) {
                      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
                        className: "text-pink-500",
                        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(Link, {
                          href: "/blog/post/author/".concat(encodeURIComponent(post === null || post === void 0 ? void 0 : post.userId)),
                          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("a", {
                            className: "font-normal text-pink-500",
                            children: "View more by author"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 145,
                            columnNumber: 27
                          }, _this)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 144,
                          columnNumber: 25
                        }, _this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 143,
                        columnNumber: 23
                      }, _this);
                    })]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 137,
                    columnNumber: 21
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 136,
                  columnNumber: 19
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 135,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYmxvZy9wb3N0L2F1dGhvci9bdXNlcklkXS5qcyJdLCJuYW1lcyI6WyJQb3N0IiwicG9zdERhdGEiLCJoYW5kbGVDbGljayIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInJvdXRlciIsInB1c2giLCJ1c2VSb3V0ZXIiLCJ1c2VySWQiLCJxdWVyeSIsImlkIiwieCIsIkpTT04iLCJzdHJpbmdpZnkiLCJ1c2VySWRzIiwiY29uc29sZSIsImxvZyIsInkiLCJtYXAiLCJhdXRob3IiLCJ0aXRsZSIsImJvZHkiLCJoZWlnaHQiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJ0cmFuc2Zvcm0iLCJ0cmFuc2l0aW9uIiwicG9zdCIsImVuY29kZVVSSUNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7Ozs7QUFFQSxJQUFNQSxJQUFJLEdBQUcsU0FBUEEsSUFBTyxPQUFrQjtBQUFBOztBQUFBLE1BQWZDLFFBQWUsUUFBZkEsUUFBZTs7QUFFM0IsTUFBTUMsV0FBVyxHQUFHLFNBQWRBLFdBQWMsQ0FBQ0MsQ0FBRCxFQUFPO0FBQ3ZCQSxLQUFDLENBQUNDLGNBQUY7QUFDQUMsVUFBTSxDQUFDQyxJQUFQLENBQVksR0FBWjtBQUNILEdBSEQ7O0FBS0EsTUFBTUQsTUFBTSxHQUFHRSw2REFBUyxFQUF4QjtBQVAyQixNQVFsQkMsTUFSa0IsR0FRTkgsTUFBTSxDQUFDSSxLQVJELENBUWxCRCxNQVJrQjtBQUFBLE1BU2xCRSxFQVRrQixHQVNWTCxNQUFNLENBQUNJLEtBVEcsQ0FTbEJDLEVBVGtCO0FBVTNCLE1BQUlDLENBQUMsR0FBR0MsSUFBSSxDQUFDQyxTQUFMLENBQWVILEVBQWYsQ0FBUjtBQUVBLE1BQUlJLE9BQU8sR0FBR0YsSUFBSSxDQUFDQyxTQUFMLENBQWVMLE1BQWYsQ0FBZDtBQUNBTyxTQUFPLENBQUNDLEdBQVIsQ0FBWSxhQUFaLEVBQTJCRixPQUEzQjtBQUVBLE1BQUlHLENBQUMs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QUFJLENBQUNMLElBQWhFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwrQkFEVTtBQUFBLHFCQUFiLENBREgsRUFLQ3BCLFFBQVEsQ0FBQ2lCLEdBQVQsQ0FBYSxVQUFDUSxJQUFEO0FBQUEsMENBQ1o7QUFBSyxpQ0FBUyxFQUFDLGVBQWY7QUFBQSwrQ0FDRSxxRUFBQyxJQUFEO0FBQU0sOEJBQUksOEJBQXVCQyxrQkFBa0IsQ0FBQ0QsSUFBRCxhQUFDQSxJQUFELHVCQUFDQSxJQUFJLENBQUVsQixNQUFQLENBQXpDLENBQVY7QUFBQSxpREFDRTtBQUFHLHFDQUFTLEVBQUMsMkJBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSwrQkFEWTtBQUFBLHFCQUFiLENBTEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBcERGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQWxDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUF2QkE7QUFBQSxrQkFESjtBQTBJQyxDQTVKTDs7R0FBTVIsSTtVQU9hTyxxRDs7O0tBUGJQLEk7O0FBd01TQSxtRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9ibG9nL3Bvc3QvYXV0aG9yL1t1c2VySWRdLjZkMGVlODRlNTlkYjRlNjgyYzk5LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xyXG5cclxuY29uc3QgUG9zdCA9ICh7IHBvc3REYXRhIH0pID0+IHtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVDbGljayA9IChlKSA9PiB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICAgICAgcm91dGVyLnB1c2goJy8nKVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICAgIGNvbnN0ICB7IHVzZXJJZCB9ICA9IHJvdXRlci5xdWVyeVxyXG4gICAgY29uc3QgIHsgaWQgfSAgPSByb3V0ZXIucXVlcnlcclxuICAgIHZhciB4ID0gSlNPTi5zdHJpbmdpZnkoaWQpXHJcbiAgICBcclxuICAgIHZhciB1c2VySWRzID0gSlNPTi5zdHJpbmdpZnkodXNlcklkKVxyXG4gICAgY29uc29sZS5sb2coXCJBVVRIT1IgSUQ6IFwiLCB1c2VySWRzKVxyXG5cclxuICAgIHZhciB5ID0gSlNPTi5zdHJpbmdpZnkocG9zdERhdGEpXHJcbiAgICBjb25zb2xlLmxvZyhcIlRFU1Q6IFwiLCB5KVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPEhlYWQ+XHJcbiAgICAgICAgICAgICAgICA8dGl0bGU+QmxvZyBQb3N0OiB7IGlkIH0gPC90aXRsZT5cclxuICAgICAgICAgICAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJpbml0aWFsLXNjYWxlPTEuMCwgd2lkdGg9ZGV2aWNlLXdpZHRoXCIvPlxyXG4gICAgICAgICAgICA8L0hlYWQ+XHJcbiAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17aGFuZGxlQ2xpY2t9PkdvIEJhY2s8L2J1dHRvbj5cclxuICAgICAgICAgICAgPGRpdj5BdXRob3IgeyBpZCB9IERldGFpbHM6PC9kaXY+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIDx1bD4gICAgXHJcbiAgICAgICAgICAgIHtwb3N0RGF0YS5tYXAoKGF1dGhvcikgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e2F1dGhvci51c2VySWR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBpZD1cInBvc3RDb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlRJVExFOiB7YXV0aG9yLnRpdGxlfTwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5JRDoge2F1dGhvci5pZH08L2xpPiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5DT05URU5UUzoge2F1dGhvci5ib2R5fTwvbGk+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGk+IFxyXG4gICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgPC91bD5cclxuXHJcblxyXG5cclxuICAgICAgICBcclxuICAgICAgICA8bWFpbiBjbGFzc05hbWU9XCJwcm9maWxlLXBhZ2VcIj5cclxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBibG9ja1wiIHN0eWxlPXt7IGhlaWdodDogXCIzMDBweFwiIH19PlxyXG4gICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJhYnNvbHV0ZSB0b3AtMCB3LWZ1bGwgaC1mdWxsIGJnLWNlbnRlciBiZy1jb3ZlclwiXHJcbiAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZEltYWdlOlxyXG4gICAgICAgICAgICAgICAgXCJ1cmwoJ2h0dHBzOi8vaW1hZ2VzLnVuc3BsYXNoLmNvbS9waG90by0xNDk5MzM2MzE1ODE2LTA5NzY1NWRjZmJkYT9peGxpYj1yYi0xLjIuMSZpeGlkPWV5SmhjSEJmYVdRaU9qRXlNRGQ5JmF1dG89Zm9ybWF0JmZpdD1jcm9wJnc9MjcxMCZxPTgwJylcIlxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8c3BhblxyXG4gICAgICAgICAgICAgIGlkPVwiYmxhY2tPdmVybGF5XCJcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgaC1mdWxsIGFic29sdXRlIG9wYWNpdHktNTAgYmctYmxhY2tcIlxyXG4gICAgICAgICAgICA+PC9zcGFuPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInRvcC1hdXRvIGJvdHRvbS0wIGxlZnQtMCByaWdodC0wIHctZnVsbCBhYnNvbHV0ZSBwb2ludGVyLWV2ZW50cy1ub25lIG92ZXJmbG93LWhpZGRlblwiXHJcbiAgICAgICAgICAgIHN0eWxlPXt7IGhlaWdodDogXCI3MHB4XCIsIHRyYW5zZm9ybTogXCJ0cmFuc2xhdGVaKDApXCIgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPHN2Z1xyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImFic29sdXRlIGJvdHRvbS0wIG92ZXJmbG93LWhpZGRlblwiXHJcbiAgICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXHJcbiAgICAgICAgICAgICAgcHJlc2VydmVBc3BlY3RSYXRpbz1cIm5vbmVcIlxyXG4gICAgICAgICAgICAgIHZlcnNpb249XCIxLjFcIlxyXG4gICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMjU2MCAxMDBcIlxyXG4gICAgICAgICAgICAgIHg9XCIwXCJcclxuICAgICAgICAgICAgICB5PVwiMFwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8cG9seWdvblxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTMwMCBmaWxsLWN1cnJlbnRcIlxyXG4gICAgICAgICAgICAgICAgcG9pbnRzPVwiMjU2MCAwIDI1NjAgMTAwIDAgMTAwXCJcclxuICAgICAgICAgICAgICA+PC9wb2x5Z29uPlxyXG4gICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBweS0xNiBiZy1ncmF5LTMwMFwiIHN0eWxlPXt7IGhlaWdodDogXCIxMDB2aFwiIH19PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgbXgtYXV0byBweC00XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgZmxleCBmbGV4LWNvbCBtaW4tdy0wIGJyZWFrLXdvcmRzIGJnLXdoaXRlIHctZnVsbCBtYi02IHNoYWRvdy14bCByb3VuZGVkLWxnIC1tdC02NFwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHgtNlwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtd3JhcCBqdXN0aWZ5LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBsZzp3LTQvMTIgcHgtNCBsZzpvcmRlci0zIGxnOnRleHQtcmlnaHQgbGc6c2VsZi1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB5LTYgcHgtMyBtdC0zMiBzbTptdC0wXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJnLXBpbmstNTAwIGFjdGl2ZTpiZy1waW5rLTYwMCB1cHBlcmNhc2UgdGV4dC13aGl0ZSBmb250LWJvbGQgaG92ZXI6c2hhZG93LW1kIHNoYWRvdyB0ZXh0LXhzIHB4LTQgcHktMiByb3VuZGVkIG91dGxpbmUtbm9uZSBmb2N1czpvdXRsaW5lLW5vbmUgc206bXItMiBtYi0xXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9e2hhbmRsZUNsaWNrfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyB0cmFuc2l0aW9uOiBcImFsbCAuMTVzIGVhc2VcIiB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBHbyBCYWNrXHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIGxnOnctNC8xMiBweC00IGxnOm9yZGVyLTFcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXIgcHktNCBsZzpwdC00IHB0LThcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXItNCBwLTMgdGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC14bCBmb250LWJvbGQgYmxvY2sgdXBwZXJjYXNlIHRyYWNraW5nLXdpZGUgdGV4dC1ncmF5LTcwMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtwb3N0RGF0YS5tYXAoKHBvc3QpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXBpbmstNTAwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17YC9ibG9nL3Bvc3QvYXV0aG9yLyR7ZW5jb2RlVVJJQ29tcG9uZW50KHBvc3Q/LnVzZXJJZCl9YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YT57cG9zdC51c2VySWR9PC9hPiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC1ncmF5LTUwMFwiPkF1dGhvcjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtci00IHAtMyB0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXhsIGZvbnQtYm9sZCBibG9jayB1cHBlcmNhc2UgdHJhY2tpbmctd2lkZSB0ZXh0LWdyYXktNzAwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1waW5rLTUwMFwiPnsgaWQgfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtZ3JheS01MDBcIj5JZDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZzptci00IHAtMyB0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXhsIGZvbnQtYm9sZCBibG9jayB1cHBlcmNhc2UgdHJhY2tpbmctd2lkZSB0ZXh0LWdyYXktNzAwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgODlcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtZ3JheS01MDBcIj5Db21tZW50czwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBtdC0xMlwiPlxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJ0aXRsZVwiPlxyXG4gICAgICAgICAgICAgICAge3Bvc3REYXRhLm1hcCgocG9zdCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRleHQtNHhsIGZvbnQtc2VtaWJvbGQgbGVhZGluZy1ub3JtYWwgbWItMiB0ZXh0LWdyYXktODAwIG1iLTJcIj5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtcGluay01MDBcIj5UaXRsZTo8L3A+IHtwb3N0LnRpdGxlfVxyXG4gICAgICAgICAgICAgICAgICA8L2gzPlxyXG4gICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtMTAgcHktMTAgYm9yZGVyLXQgYm9yZGVyLWdyYXktMzAwIHRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXdyYXAganVzdGlmeS1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBsZzp3LTkvMTIgcHgtNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAge3Bvc3REYXRhLm1hcCgocG9zdCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm1iLTQgdGV4dC1sZyBsZWFkaW5nLXJlbGF4ZWQgdGV4dC1ncmF5LTgwMFwiPntwb3N0LmJvZHl9IDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICkpfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICB7cG9zdERhdGEubWFwKChwb3N0KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtcGluay01MDBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17YC9ibG9nL3Bvc3QvYXV0aG9yLyR7ZW5jb2RlVVJJQ29tcG9uZW50KHBvc3Q/LnVzZXJJZCl9YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiZm9udC1ub3JtYWwgdGV4dC1waW5rLTUwMFwiPlZpZXcgbW9yZSBieSBhdXRob3I8L2E+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICA8L21haW4+XHJcblxyXG4gICAgICAgIDwvPlxyXG4gICAgICAgIClcclxuICAgIH1cclxuXHJcblxyXG4gIFxyXG4gXHJcbiAgICBleHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUGF0aHMoKSB7XHJcbiAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGBodHRwczovL2pzb25wbGFjZWhvbGRlci50eXBpY29kZS5jb20vcG9zdHMvYClcclxuICAgICAgY29uc3QgcG9zdERhdGEgPSBhd2FpdCByZXMuanNvbigpXHJcbiAgICAgIHZhciBwYXRocyA9IFtdO1xyXG4gICAgICB2YXIgdXNlcklkID0gSlNPTi5zdHJpbmdpZnkocGF0aHMpXHJcbiAgICAgIGZvciAodmFyIGkgaW4gcG9zdERhdGEpXHJcbiAgICAgICAgcGF0aHMucHVzaChwb3N0RGF0YVtpXSk7XHJcbiAgICBcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBwYXRoczogW1xyXG4gICAgICAgICAgeyBwYXJhbXM6IHsgcG9zdERhdGEsIHVzZXJJZCB9IH1cclxuICAgICAgICBdLFxyXG4gICAgXHJcbiAgICAgICAgZmFsbGJhY2s6IHRydWVcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBleHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoIHBhcmFtcyApIHtcclxuICAgICAgY29uc29sZS5sb2coXCJQQVJBTTogXCIsIHBhcmFtcylcclxuICAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vanNvbnBsYWNlaG9sZGVyLnR5cGljb2RlLmNvbS9wb3N0cy8/PScgKyBwYXJhbXMpXHJcbiAgICAgIGNvbnNvbGUubG9nKFwiUkVTT1VSQ0U6IFwiLCByZXMpXHJcbiAgICBcclxuICAgICAgY29uc3QgcG9zdERhdGEgPSBhd2FpdCByZXMuanNvbigpXHJcbiAgICAgIGNvbnNvbGUubG9nKHBvc3REYXRhKVxyXG4gICAgXHJcbiAgICAgIGlmICghcG9zdERhdGEpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgbm90Rm91bmQ6IHRydWUsXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICBcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBwcm9wczoge1xyXG4gICAgICAgICAgcG9zdERhdGFcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBQb3N0OyAgICAiXSwic291cmNlUm9vdCI6IiJ9