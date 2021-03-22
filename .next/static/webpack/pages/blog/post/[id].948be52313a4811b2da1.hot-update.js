webpackHotUpdate_N_E("pages/blog/post/[id]",{

/***/ "./pages/blog/post/[id].js":
/*!*********************************!*\
  !*** ./pages/blog/post/[id].js ***!
  \*********************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSG", function() { return __N_SSG; });
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "C:\\Users\\Layney\\Documents\\GitHub\\blogProj\\pages\\blog\\post\\[id].js",
    _this = undefined,
    _s = $RefreshSig$();







var Post = function Post(_ref) {
  _s();

  var postData = _ref.postData;

  var handleClick = function handleClick(e) {
    e.preventDefault();
    router.push('/blog/');
  };

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"])();
  var id = router.query.id;
  var x = JSON.stringify(id);
  var y = JSON.stringify(postData);
  console.log("TEST: ", y);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["Fragment"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("main", {
      className: "profile-page",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("section", {
        className: "relative block",
        style: {
          height: "500px"
        },
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
          className: "absolute top-0 w-full h-full bg-center bg-cover",
          style: {
            backgroundImage: "url('https://images.unsplash.com/photo-1499336315816-097655dcfbda?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2710&q=80')"
          },
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("span", {
            id: "blackOverlay",
            className: "w-full h-full absolute opacity-50 bg-black"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 33,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
          className: "top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden",
          style: {
            height: "70px",
            transform: "translateZ(0)"
          },
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("svg", {
            className: "absolute bottom-0 overflow-hidden",
            xmlns: "http://www.w3.org/2000/svg",
            preserveAspectRatio: "none",
            version: "1.1",
            viewBox: "0 0 2560 100",
            x: "0",
            y: "0",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("polygon", {
              className: "text-gray-300 fill-current",
              points: "2560 0 2560 100 0 100"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 51,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 42,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("section", {
        className: "relative py-16 bg-gray-300",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
          className: "container mx-auto px-4",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
            className: "relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
              className: "px-6",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
                className: "flex flex-wrap justify-center",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
                  className: "w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
                    className: "py-6 px-3 mt-32 sm:mt-0",
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("button", {
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
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 64,
                    columnNumber: 21
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 63,
                  columnNumber: 19
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
                  className: "w-full lg:w-4/12 px-4 lg:order-1",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
                    className: "flex justify-center py-4 lg:pt-4 pt-8",
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
                      className: "mr-4 p-3 text-center",
                      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("span", {
                        className: "text-xl font-bold block uppercase tracking-wide text-gray-700",
                        children: postData.map(function (post) {
                          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
                            className: "text-pink-500",
                            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
                              href: "/blog/post/author/".concat(encodeURIComponent(post === null || post === void 0 ? void 0 : post.userId)),
                              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("a", {
                                children: post.userId
                              }, void 0, false, {
                                fileName: _jsxFileName,
                                lineNumber: 81,
                                columnNumber: 35
                              }, _this)
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 80,
                              columnNumber: 33
                            }, _this)
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 79,
                            columnNumber: 31
                          }, _this);
                        })
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 77,
                        columnNumber: 25
                      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("span", {
                        className: "text-sm text-gray-500",
                        children: "Author"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 86,
                        columnNumber: 25
                      }, _this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 76,
                      columnNumber: 23
                    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
                      className: "mr-4 p-3 text-center",
                      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("span", {
                        className: "text-xl font-bold block uppercase tracking-wide text-gray-700",
                        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("p", {
                          className: "text-pink-500",
                          children: id
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 90,
                          columnNumber: 27
                        }, _this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 89,
                        columnNumber: 25
                      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("span", {
                        className: "text-sm text-gray-500",
                        children: "Id"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 92,
                        columnNumber: 25
                      }, _this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 88,
                      columnNumber: 23
                    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
                      className: "lg:mr-4 p-3 text-center",
                      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("span", {
                        className: "text-xl font-bold block uppercase tracking-wide text-gray-700",
                        children: "89"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 95,
                        columnNumber: 25
                      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("span", {
                        className: "text-sm text-gray-500",
                        children: "Comments"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 98,
                        columnNumber: 25
                      }, _this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 94,
                      columnNumber: 23
                    }, _this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 75,
                    columnNumber: 21
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 74,
                  columnNumber: 19
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 62,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
                className: "text-center mt-12",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
                  id: "title",
                  children: postData.map(function (post) {
                    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("h3", {
                      className: "text-4xl font-semibold leading-normal mb-2 text-gray-800 mb-2",
                      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("p", {
                        className: "text-pink-500",
                        children: "Title:"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 108,
                        columnNumber: 17
                      }, _this), " ", post.title]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 107,
                      columnNumber: 17
                    }, _this);
                  })
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 105,
                  columnNumber: 17
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 103,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
                className: "mt-10 py-10 border-t border-gray-300 text-center",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
                  className: "flex flex-wrap justify-center",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
                    className: "w-full lg:w-9/12 px-4",
                    children: [postData.map(function (post) {
                      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("p", {
                        className: "mb-4 text-lg leading-relaxed text-gray-800",
                        children: [post.body, " "]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 117,
                        columnNumber: 27
                      }, _this);
                    }), postData.map(function (post) {
                      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
                        className: "text-pink-500",
                        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
                          href: "/blog/post/author/".concat(encodeURIComponent(post === null || post === void 0 ? void 0 : post.userId)),
                          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("a", {
                            className: "font-normal text-pink-500",
                            children: "View more by author"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 123,
                            columnNumber: 27
                          }, _this)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 122,
                          columnNumber: 25
                        }, _this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 121,
                        columnNumber: 23
                      }, _this);
                    })]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 115,
                    columnNumber: 21
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 114,
                  columnNumber: 19
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 113,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 61,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 60,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 59,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 9
    }, _this)
  }, void 0, false);
};

_s(Post, "fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"]];
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYmxvZy9wb3N0Ly5qcyJdLCJuYW1lcyI6WyJQb3N0IiwicG9zdERhdGEiLCJoYW5kbGVDbGljayIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInJvdXRlciIsInB1c2giLCJ1c2VSb3V0ZXIiLCJpZCIsInF1ZXJ5IiwieCIsIkpTT04iLCJzdHJpbmdpZnkiLCJ5IiwiY29uc29sZSIsImxvZyIsImhlaWdodCIsImJhY2tncm91bmRJbWFnZSIsInRyYW5zZm9ybSIsInRyYW5zaXRpb24iLCJtYXAiLCJwb3N0IiwiZW5jb2RlVVJJQ29tcG9uZW50IiwidXNlcklkIiwidGl0bGUiLCJib2R5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7Ozs7QUFFQSxJQUFNQSxJQUFJLEdBQUcsU0FBUEEsSUFBTyxPQUFrQjtBQUFBOztBQUFBLE1BQWZDLFFBQWUsUUFBZkEsUUFBZTs7QUFFM0IsTUFBTUMsV0FBVyxHQUFHLFNBQWRBLFdBQWMsQ0FBQ0MsQ0FBRCxFQUFPO0FBQ3ZCQSxLQUFDLENBQUNDLGNBQUY7QUFDQUMsVUFBTSxDQUFDQyxJQUFQLENBQVksUUFBWjtBQUNILEdBSEQ7O0FBSUEsTUFBTUQsTUFBTSxHQUFHRSw2REFBUyxFQUF4QjtBQU4yQixNQU9sQkMsRUFQa0IsR0FPVkgsTUFBTSxDQUFDSSxLQVBHLENBT2xCRCxFQVBrQjtBQVEzQixNQUFJRSxDQUFDLEdBQUdDLElBQUksQ0FBQ0MsU0FBTCxDQUFlSixFQUFmLENBQVI7QUFFQSxNQUFJSyxDQUFDLEdBQUdGLElBQUksQ0FBQ0MsU0FBTCxDQUFlWCxRQUFmLENBQVI7QUFDQWEsU0FBTyxDQUFDQyxHQUFSLENBQVksUUFBWixFQUFzQkYsQ0FBdEI7QUFFQSxzQkFDSTtBQUFBLDJCQUtBO0FBQU0sZUFBUyxFQUFDLGNBQWhCO0FBQUEsOEJBQ0E7QUFBUyxpQkFBUyxFQUFDLGdCQUFuQjtBQUFvQyxhQUFLLEVBQUU7QUFB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QUFBQTtBQUFBLCtCQURVO0FBQUEscUJBQWIsQ0FESCxFQUtDeEIsUUFBUSxDQUFDbUIsR0FBVCxDQUFhLFVBQUNDLElBQUQ7QUFBQSwwQ0FDWjtBQUFLLGlDQUFTLEVBQUMsZUFBZjtBQUFBLCtDQUNFLHFFQUFDLGdEQUFEO0FBQU0sOEJBQUksOEJBQXVCQyxrQkFBa0IsQ0FBQ0QsSUFBRCxhQUFDQSxJQUFELHVCQUFDQSxJQUFJLENBQUVFLE1BQVAsQ0FBekMsQ0FBVjtBQUFBLGlEQUNFO0FBQUcscUNBQVMsRUFBQywyQkFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLCtCQURZO0FBQUEscUJBQWIsQ0FMRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFwREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBbENBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUxBLG1CQURKO0FBeUhDLENBdElMOztHQUFNdkIsSTtVQU1hTyxxRDs7O0tBTmJQLEk7O0FBdUxTQSxtRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9ibG9nL3Bvc3QvW2lkXS45NDhiZTUyMzEzYTQ4MTFiMmRhMS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xyXG5cclxuY29uc3QgUG9zdCA9ICh7IHBvc3REYXRhIH0pID0+IHtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVDbGljayA9IChlKSA9PiB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICAgICAgcm91dGVyLnB1c2goJy9ibG9nLycpXHJcbiAgICB9XHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICAgIGNvbnN0ICB7IGlkIH0gID0gcm91dGVyLnF1ZXJ5XHJcbiAgICB2YXIgeCA9IEpTT04uc3RyaW5naWZ5KGlkKVxyXG5cclxuICAgIHZhciB5ID0gSlNPTi5zdHJpbmdpZnkocG9zdERhdGEpXHJcbiAgICBjb25zb2xlLmxvZyhcIlRFU1Q6IFwiLCB5KVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuXHJcblxyXG5cclxuXHJcbiAgICAgICAgPG1haW4gY2xhc3NOYW1lPVwicHJvZmlsZS1wYWdlXCI+XHJcbiAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwicmVsYXRpdmUgYmxvY2tcIiBzdHlsZT17eyBoZWlnaHQ6IFwiNTAwcHhcIiB9fT5cclxuICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiYWJzb2x1dGUgdG9wLTAgdy1mdWxsIGgtZnVsbCBiZy1jZW50ZXIgYmctY292ZXJcIlxyXG4gICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmRJbWFnZTpcclxuICAgICAgICAgICAgICAgIFwidXJsKCdodHRwczovL2ltYWdlcy51bnNwbGFzaC5jb20vcGhvdG8tMTQ5OTMzNjMxNTgxNi0wOTc2NTVkY2ZiZGE/aXhsaWI9cmItMS4yLjEmaXhpZD1leUpoY0hCZmFXUWlPakV5TURkOSZhdXRvPWZvcm1hdCZmaXQ9Y3JvcCZ3PTI3MTAmcT04MCcpXCJcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPHNwYW5cclxuICAgICAgICAgICAgICBpZD1cImJsYWNrT3ZlcmxheVwiXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIGgtZnVsbCBhYnNvbHV0ZSBvcGFjaXR5LTUwIGJnLWJsYWNrXCJcclxuICAgICAgICAgICAgPjwvc3Bhbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJ0b3AtYXV0byBib3R0b20tMCBsZWZ0LTAgcmlnaHQtMCB3LWZ1bGwgYWJzb2x1dGUgcG9pbnRlci1ldmVudHMtbm9uZSBvdmVyZmxvdy1oaWRkZW5cIlxyXG4gICAgICAgICAgICBzdHlsZT17eyBoZWlnaHQ6IFwiNzBweFwiLCB0cmFuc2Zvcm06IFwidHJhbnNsYXRlWigwKVwiIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxzdmdcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhYnNvbHV0ZSBib3R0b20tMCBvdmVyZmxvdy1oaWRkZW5cIlxyXG4gICAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxyXG4gICAgICAgICAgICAgIHByZXNlcnZlQXNwZWN0UmF0aW89XCJub25lXCJcclxuICAgICAgICAgICAgICB2ZXJzaW9uPVwiMS4xXCJcclxuICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDI1NjAgMTAwXCJcclxuICAgICAgICAgICAgICB4PVwiMFwiXHJcbiAgICAgICAgICAgICAgeT1cIjBcIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPHBvbHlnb25cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtZ3JheS0zMDAgZmlsbC1jdXJyZW50XCJcclxuICAgICAgICAgICAgICAgIHBvaW50cz1cIjI1NjAgMCAyNTYwIDEwMCAwIDEwMFwiXHJcbiAgICAgICAgICAgICAgPjwvcG9seWdvbj5cclxuICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwicmVsYXRpdmUgcHktMTYgYmctZ3JheS0zMDBcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIG14LWF1dG8gcHgtNFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIGZsZXggZmxleC1jb2wgbWluLXctMCBicmVhay13b3JkcyBiZy13aGl0ZSB3LWZ1bGwgbWItNiBzaGFkb3cteGwgcm91bmRlZC1sZyAtbXQtNjRcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB4LTZcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXdyYXAganVzdGlmeS1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgbGc6dy00LzEyIHB4LTQgbGc6b3JkZXItMyBsZzp0ZXh0LXJpZ2h0IGxnOnNlbGYtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJweS02IHB4LTMgbXQtMzIgc206bXQtMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJiZy1waW5rLTUwMCBhY3RpdmU6YmctcGluay02MDAgdXBwZXJjYXNlIHRleHQtd2hpdGUgZm9udC1ib2xkIGhvdmVyOnNoYWRvdy1tZCBzaGFkb3cgdGV4dC14cyBweC00IHB5LTIgcm91bmRlZCBvdXRsaW5lLW5vbmUgZm9jdXM6b3V0bGluZS1ub25lIHNtOm1yLTIgbWItMVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIiBvbkNsaWNrPXtoYW5kbGVDbGlja31cclxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgdHJhbnNpdGlvbjogXCJhbGwgLjE1cyBlYXNlXCIgfX1cclxuICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgR28gQmFja1xyXG4gICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBsZzp3LTQvMTIgcHgtNCBsZzpvcmRlci0xXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY2VudGVyIHB5LTQgbGc6cHQtNCBwdC04XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1yLTQgcC0zIHRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQteGwgZm9udC1ib2xkIGJsb2NrIHVwcGVyY2FzZSB0cmFja2luZy13aWRlIHRleHQtZ3JheS03MDBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB7cG9zdERhdGEubWFwKChwb3N0KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1waW5rLTUwMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvYmxvZy9wb3N0L2F1dGhvci8ke2VuY29kZVVSSUNvbXBvbmVudChwb3N0Py51c2VySWQpfWB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE+e3Bvc3QudXNlcklkfTwvYT4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtZ3JheS01MDBcIj5BdXRob3I8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXItNCBwLTMgdGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC14bCBmb250LWJvbGQgYmxvY2sgdXBwZXJjYXNlIHRyYWNraW5nLXdpZGUgdGV4dC1ncmF5LTcwMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtcGluay01MDBcIj57IGlkIH08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LWdyYXktNTAwXCI+SWQ8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGc6bXItNCBwLTMgdGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC14bCBmb250LWJvbGQgYmxvY2sgdXBwZXJjYXNlIHRyYWNraW5nLXdpZGUgdGV4dC1ncmF5LTcwMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDg5XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LWdyYXktNTAwXCI+Q29tbWVudHM8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgbXQtMTJcIj5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGlkPVwidGl0bGVcIj5cclxuICAgICAgICAgICAgICAgIHtwb3N0RGF0YS5tYXAoKHBvc3QpID0+IChcclxuICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LTR4bCBmb250LXNlbWlib2xkIGxlYWRpbmctbm9ybWFsIG1iLTIgdGV4dC1ncmF5LTgwMCBtYi0yXCI+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXBpbmstNTAwXCI+VGl0bGU6PC9wPiB7cG9zdC50aXRsZX1cclxuICAgICAgICAgICAgICAgICAgPC9oMz5cclxuICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTEwIHB5LTEwIGJvcmRlci10IGJvcmRlci1ncmF5LTMwMCB0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC13cmFwIGp1c3RpZnktY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgbGc6dy05LzEyIHB4LTRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIHtwb3N0RGF0YS5tYXAoKHBvc3QpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtYi00IHRleHQtbGcgbGVhZGluZy1yZWxheGVkIHRleHQtZ3JheS04MDBcIj57cG9zdC5ib2R5fSA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICApKX1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAge3Bvc3REYXRhLm1hcCgocG9zdCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXBpbmstNTAwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvYmxvZy9wb3N0L2F1dGhvci8ke2VuY29kZVVSSUNvbXBvbmVudChwb3N0Py51c2VySWQpfWB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImZvbnQtbm9ybWFsIHRleHQtcGluay01MDBcIj5WaWV3IG1vcmUgYnkgYXV0aG9yPC9hPiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgPC9tYWluPlxyXG5cclxuXHJcbiAgICAgICAgPC8+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG5cclxuXHJcbiAgXHJcbiBcclxuICAgXHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUGF0aHMoKSB7XHJcbiAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vanNvbnBsYWNlaG9sZGVyLnR5cGljb2RlLmNvbS9wb3N0cy9gKVxyXG4gIGNvbnN0IHBvc3REYXRhID0gYXdhaXQgcmVzLmpzb24oKVxyXG4gIHZhciBwYXRocyA9IFtdO1xyXG4gIHZhciBpZCA9IEpTT04uc3RyaW5naWZ5KHBhdGhzKVxyXG4gIHZhciB1c2VySWQgPSBKU09OLnN0cmluZ2lmeShwYXRocylcclxuICBmb3IgKHZhciBpIGluIHBvc3REYXRhKVxyXG4gICAgcGF0aHMucHVzaChwb3N0RGF0YVtpXSk7XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBwYXRoczogW1xyXG4gICAgICB7IHBhcmFtczogeyBwb3N0RGF0YSwgaWQsIHVzZXJJZCB9IH1cclxuICAgIF0sXHJcblxyXG4gICAgZmFsbGJhY2s6IHRydWVcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcygge3BhcmFtc30gKSB7XHJcbiAgY29uc29sZS5sb2coXCJQQVJBTTogXCIsIHBhcmFtcylcclxuXHJcbiAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vanNvbnBsYWNlaG9sZGVyLnR5cGljb2RlLmNvbS9wb3N0cy8/JyArIG5ldyBVUkxTZWFyY2hQYXJhbXMoIHBhcmFtcyApKVxyXG4gIGNvbnNvbGUubG9nKFwiUkVTT1VSQ0U6IFwiLCByZXMpXHJcblxyXG4gIGNvbnN0IHBvc3REYXRhID0gYXdhaXQgcmVzLmpzb24oKVxyXG4gIGNvbnNvbGUubG9nKHBvc3REYXRhKVxyXG5cclxuICBpZiAoIXBvc3REYXRhKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBub3RGb3VuZDogdHJ1ZSxcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBwcm9wczoge1xyXG4gICAgICBwb3N0RGF0YVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4gICBcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBQb3N0OyAgICBcclxuICAgIFxyXG4iXSwic291cmNlUm9vdCI6IiJ9