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
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_0___default.a, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("title", {
        children: ["Blog Post: ", id, " "]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("meta", {
        name: "viewport",
        content: "initial-scale=1.0, width=device-width"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
      children: ["Blog Post ", id, " Details:"]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
      id: "postContainer",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
        id: "title",
        children: postData.map(function (post) {
          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
            children: ["Title: ", post.title]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 30,
            columnNumber: 21
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 15
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
        id: "author",
        children: postData.map(function (post) {
          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
            children: ["Author:", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
              href: "/blog/post/author/".concat(encodeURIComponent(post === null || post === void 0 ? void 0 : post.userId)),
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("a", {
                children: post.userId
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 37,
                columnNumber: 25
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 36,
              columnNumber: 23
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 35,
            columnNumber: 21
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 15
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
        id: "body",
        children: postData.map(function (post) {
          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
            children: ["Body: ", post.body, " "]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 44,
            columnNumber: 23
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 15
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 9
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("main", {
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
            lineNumber: 61,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 54,
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
              lineNumber: 79,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 70,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 66,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 53,
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
                      lineNumber: 93,
                      columnNumber: 23
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 92,
                    columnNumber: 21
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 91,
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
                                lineNumber: 109,
                                columnNumber: 35
                              }, _this)
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 108,
                              columnNumber: 33
                            }, _this)
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 107,
                            columnNumber: 31
                          }, _this);
                        })
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 105,
                        columnNumber: 25
                      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("span", {
                        className: "text-sm text-gray-500",
                        children: "Author"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 114,
                        columnNumber: 25
                      }, _this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 104,
                      columnNumber: 23
                    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
                      className: "mr-4 p-3 text-center",
                      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("span", {
                        className: "text-xl font-bold block uppercase tracking-wide text-gray-700",
                        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("p", {
                          className: "text-pink-500",
                          children: "10"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 118,
                          columnNumber: 27
                        }, _this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 117,
                        columnNumber: 25
                      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("span", {
                        className: "text-sm text-gray-500",
                        children: "Id"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 120,
                        columnNumber: 25
                      }, _this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 116,
                      columnNumber: 23
                    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
                      className: "lg:mr-4 p-3 text-center",
                      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("span", {
                        className: "text-xl font-bold block uppercase tracking-wide text-gray-700",
                        children: "89"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 123,
                        columnNumber: 25
                      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("span", {
                        className: "text-sm text-gray-500",
                        children: "Comments"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 126,
                        columnNumber: 25
                      }, _this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 122,
                      columnNumber: 23
                    }, _this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 103,
                    columnNumber: 21
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 102,
                  columnNumber: 19
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 90,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
                className: "text-center mt-12",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
                  id: "title",
                  children: postData.map(function (post) {
                    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("h3", {
                      className: "text-4xl font-semibold leading-normal mb-2 text-gray-800 mb-2",
                      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("p", {
                        className: "text-pink-500",
                        children: "Title:"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 136,
                        columnNumber: 17
                      }, _this), " ", post.title]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 135,
                      columnNumber: 17
                    }, _this);
                  })
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 133,
                  columnNumber: 17
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
                  className: "text-sm leading-normal mt-0 mb-2 text-gray-500 font-bold uppercase",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("i", {
                    className: "fas fa-map-marker-alt mr-2 text-lg text-gray-500"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 142,
                    columnNumber: 21
                  }, _this), " ", postData.map(function (post) {
                    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
                      className: "text-pink-500",
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
                        href: "/blog/post/author/".concat(encodeURIComponent(post === null || post === void 0 ? void 0 : post.userId)),
                        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("a", {
                          children: ["Author: ", post.userId]
                        }, void 0, true, {
                          fileName: _jsxFileName,
                          lineNumber: 147,
                          columnNumber: 25
                        }, _this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 146,
                        columnNumber: 23
                      }, _this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 145,
                      columnNumber: 21
                    }, _this);
                  })]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 141,
                  columnNumber: 19
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 131,
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
                        children: ["Body: ", post.body, " "]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 159,
                        columnNumber: 23
                      }, _this);
                    }), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("p", {
                      className: "mb-4 text-lg leading-relaxed text-gray-800",
                      children: "An artist of considerable range, Jenna the name taken by Melbourne-raised, Brooklyn-based Nick Murphy writes, performs and records all of his own music, giving it a warm, intimate feel with a solid groove structure. An artist of considerable range."
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 161,
                      columnNumber: 23
                    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("a", {
                      href: "#pablo",
                      className: "font-normal text-pink-500",
                      onClick: function onClick(e) {
                        return e.preventDefault();
                      },
                      children: "Show more"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 168,
                      columnNumber: 23
                    }, _this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 155,
                    columnNumber: 21
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 154,
                  columnNumber: 19
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 153,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 89,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 88,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 87,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 86,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 9
    }, _this)]
  }, void 0, true);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYmxvZy9wb3N0Ly5qcyJdLCJuYW1lcyI6WyJQb3N0IiwicG9zdERhdGEiLCJoYW5kbGVDbGljayIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInJvdXRlciIsInB1c2giLCJ1c2VSb3V0ZXIiLCJpZCIsInF1ZXJ5IiwieCIsIkpTT04iLCJzdHJpbmdpZnkiLCJ5IiwiY29uc29sZSIsImxvZyIsIm1hcCIsInBvc3QiLCJ0aXRsZSIsImVuY29kZVVSSUNvbXBvbmVudCIsInVzZXJJZCIsImJvZHkiLCJoZWlnaHQiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJ0cmFuc2Zvcm0iLCJ0cmFuc2l0aW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7Ozs7QUFFQSxJQUFNQSxJQUFJLEdBQUcsU0FBUEEsSUFBTyxPQUFrQjtBQUFBOztBQUFBLE1BQWZDLFFBQWUsUUFBZkEsUUFBZTs7QUFFM0IsTUFBTUMsV0FBVyxHQUFHLFNBQWRBLFdBQWMsQ0FBQ0MsQ0FBRCxFQUFPO0FBQ3ZCQSxLQUFDLENBQUNDLGNBQUY7QUFDQUMsVUFBTSxDQUFDQyxJQUFQLENBQVksUUFBWjtBQUNILEdBSEQ7O0FBSUEsTUFBTUQsTUFBTSxHQUFHRSw2REFBUyxFQUF4QjtBQU4yQixNQU9sQkMsRUFQa0IsR0FPVkgsTUFBTSxDQUFDSSxLQVBHLENBT2xCRCxFQVBrQjtBQVEzQixNQUFJRSxDQUFDLEdBQUdDLElBQUksQ0FBQ0MsU0FBTCxDQUFlSixFQUFmLENBQVI7QUFFQSxNQUFJSyxDQUFDLEdBQUdGLElBQUksQ0FBQ0MsU0FBTCxDQUFlWCxRQUFmLENBQVI7QUFDQWEsU0FBTyxDQUFDQyxHQUFSLENBQVksUUFBWixFQUFzQkYsQ0FBdEI7QUFFQSxzQkFDSTtBQUFBLDRCQUNJLHFFQUFDLGdEQUFEO0FBQUEsOEJBQ0k7QUFBQSxrQ0FBb0JMLEVBQXBCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURKLGVB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QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFsQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBakNBO0FBQUEsa0JBREo7QUF5S0MsQ0F0TEw7O0dBQU1KLEk7VUFNYU8scUQ7OztLQU5iUCxJOztBQXVPU0EsbUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYmxvZy9wb3N0L1tpZF0uOTRiNjRkNDAwZGU0N2VmZTE4NGEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcclxuXHJcbmNvbnN0IFBvc3QgPSAoeyBwb3N0RGF0YSB9KSA9PiB7XHJcblxyXG4gICAgY29uc3QgaGFuZGxlQ2xpY2sgPSAoZSkgPT4ge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKVxyXG4gICAgICAgIHJvdXRlci5wdXNoKCcvYmxvZy8nKVxyXG4gICAgfVxyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgICBjb25zdCAgeyBpZCB9ICA9IHJvdXRlci5xdWVyeVxyXG4gICAgdmFyIHggPSBKU09OLnN0cmluZ2lmeShpZClcclxuXHJcbiAgICB2YXIgeSA9IEpTT04uc3RyaW5naWZ5KHBvc3REYXRhKVxyXG4gICAgY29uc29sZS5sb2coXCJURVNUOiBcIiwgeSlcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxIZWFkPlxyXG4gICAgICAgICAgICAgICAgPHRpdGxlPkJsb2cgUG9zdDogeyBpZCB9IDwvdGl0bGU+XHJcbiAgICAgICAgICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwiaW5pdGlhbC1zY2FsZT0xLjAsIHdpZHRoPWRldmljZS13aWR0aFwiLz5cclxuICAgICAgICAgICAgPC9IZWFkPlxyXG4gICAgICAgICAgICA8ZGl2PkJsb2cgUG9zdCB7IGlkIH0gRGV0YWlsczo8L2Rpdj5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgPGRpdiBpZD1cInBvc3RDb250YWluZXJcIj5cclxuICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIDxkaXYgaWQ9XCJ0aXRsZVwiPlxyXG4gICAgICAgICAgICAgICAge3Bvc3REYXRhLm1hcCgocG9zdCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+VGl0bGU6IHtwb3N0LnRpdGxlfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBpZD1cImF1dGhvclwiPlxyXG4gICAgICAgICAgICAgICAge3Bvc3REYXRhLm1hcCgocG9zdCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+QXV0aG9yOlxyXG4gICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17YC9ibG9nL3Bvc3QvYXV0aG9yLyR7ZW5jb2RlVVJJQ29tcG9uZW50KHBvc3Q/LnVzZXJJZCl9YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhPntwb3N0LnVzZXJJZH08L2E+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBpZD1cImJvZHlcIj5cclxuICAgICAgICAgICAgICAgICAge3Bvc3REYXRhLm1hcCgocG9zdCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdj5Cb2R5OiB7cG9zdC5ib2R5fSA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgIDxtYWluIGNsYXNzTmFtZT1cInByb2ZpbGUtcGFnZVwiPlxyXG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInJlbGF0aXZlIGJsb2NrXCIgc3R5bGU9e3sgaGVpZ2h0OiBcIjUwMHB4XCIgfX0+XHJcbiAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImFic29sdXRlIHRvcC0wIHctZnVsbCBoLWZ1bGwgYmctY2VudGVyIGJnLWNvdmVyXCJcclxuICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6XHJcbiAgICAgICAgICAgICAgICBcInVybCgnaHR0cHM6Ly9pbWFnZXMudW5zcGxhc2guY29tL3Bob3RvLTE0OTkzMzYzMTU4MTYtMDk3NjU1ZGNmYmRhP2l4bGliPXJiLTEuMi4xJml4aWQ9ZXlKaGNIQmZhV1FpT2pFeU1EZDkmYXV0bz1mb3JtYXQmZml0PWNyb3Amdz0yNzEwJnE9ODAnKVwiXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxzcGFuXHJcbiAgICAgICAgICAgICAgaWQ9XCJibGFja092ZXJsYXlcIlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBoLWZ1bGwgYWJzb2x1dGUgb3BhY2l0eS01MCBiZy1ibGFja1wiXHJcbiAgICAgICAgICAgID48L3NwYW4+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwidG9wLWF1dG8gYm90dG9tLTAgbGVmdC0wIHJpZ2h0LTAgdy1mdWxsIGFic29sdXRlIHBvaW50ZXItZXZlbnRzLW5vbmUgb3ZlcmZsb3ctaGlkZGVuXCJcclxuICAgICAgICAgICAgc3R5bGU9e3sgaGVpZ2h0OiBcIjcwcHhcIiwgdHJhbnNmb3JtOiBcInRyYW5zbGF0ZVooMClcIiB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8c3ZnXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYWJzb2x1dGUgYm90dG9tLTAgb3ZlcmZsb3ctaGlkZGVuXCJcclxuICAgICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcclxuICAgICAgICAgICAgICBwcmVzZXJ2ZUFzcGVjdFJhdGlvPVwibm9uZVwiXHJcbiAgICAgICAgICAgICAgdmVyc2lvbj1cIjEuMVwiXHJcbiAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCAyNTYwIDEwMFwiXHJcbiAgICAgICAgICAgICAgeD1cIjBcIlxyXG4gICAgICAgICAgICAgIHk9XCIwXCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxwb2x5Z29uXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktMzAwIGZpbGwtY3VycmVudFwiXHJcbiAgICAgICAgICAgICAgICBwb2ludHM9XCIyNTYwIDAgMjU2MCAxMDAgMCAxMDBcIlxyXG4gICAgICAgICAgICAgID48L3BvbHlnb24+XHJcbiAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInJlbGF0aXZlIHB5LTE2IGJnLWdyYXktMzAwXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBteC1hdXRvIHB4LTRcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBmbGV4IGZsZXgtY29sIG1pbi13LTAgYnJlYWstd29yZHMgYmctd2hpdGUgdy1mdWxsIG1iLTYgc2hhZG93LXhsIHJvdW5kZWQtbGcgLW10LTY0XCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJweC02XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC13cmFwIGp1c3RpZnktY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIGxnOnctNC8xMiBweC00IGxnOm9yZGVyLTMgbGc6dGV4dC1yaWdodCBsZzpzZWxmLWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHktNiBweC0zIG10LTMyIHNtOm10LTBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmctcGluay01MDAgYWN0aXZlOmJnLXBpbmstNjAwIHVwcGVyY2FzZSB0ZXh0LXdoaXRlIGZvbnQtYm9sZCBob3ZlcjpzaGFkb3ctbWQgc2hhZG93IHRleHQteHMgcHgtNCBweS0yIHJvdW5kZWQgb3V0bGluZS1ub25lIGZvY3VzOm91dGxpbmUtbm9uZSBzbTptci0yIG1iLTFcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCIgb25DbGljaz17aGFuZGxlQ2xpY2t9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHRyYW5zaXRpb246IFwiYWxsIC4xNXMgZWFzZVwiIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEdvIEJhY2tcclxuICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgbGc6dy00LzEyIHB4LTQgbGc6b3JkZXItMVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWNlbnRlciBweS00IGxnOnB0LTQgcHQtOFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtci00IHAtMyB0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXhsIGZvbnQtYm9sZCBibG9jayB1cHBlcmNhc2UgdHJhY2tpbmctd2lkZSB0ZXh0LWdyYXktNzAwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAge3Bvc3REYXRhLm1hcCgocG9zdCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtcGluay01MDBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtgL2Jsb2cvcG9zdC9hdXRob3IvJHtlbmNvZGVVUklDb21wb25lbnQocG9zdD8udXNlcklkKX1gfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhPntwb3N0LnVzZXJJZH08L2E+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LWdyYXktNTAwXCI+QXV0aG9yPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1yLTQgcC0zIHRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQteGwgZm9udC1ib2xkIGJsb2NrIHVwcGVyY2FzZSB0cmFja2luZy13aWRlIHRleHQtZ3JheS03MDBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXBpbmstNTAwXCI+MTA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LWdyYXktNTAwXCI+SWQ8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGc6bXItNCBwLTMgdGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC14bCBmb250LWJvbGQgYmxvY2sgdXBwZXJjYXNlIHRyYWNraW5nLXdpZGUgdGV4dC1ncmF5LTcwMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDg5XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LWdyYXktNTAwXCI+Q29tbWVudHM8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgbXQtMTJcIj5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGlkPVwidGl0bGVcIj5cclxuICAgICAgICAgICAgICAgIHtwb3N0RGF0YS5tYXAoKHBvc3QpID0+IChcclxuICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LTR4bCBmb250LXNlbWlib2xkIGxlYWRpbmctbm9ybWFsIG1iLTIgdGV4dC1ncmF5LTgwMCBtYi0yXCI+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXBpbmstNTAwXCI+VGl0bGU6PC9wPiB7cG9zdC50aXRsZX1cclxuICAgICAgICAgICAgICAgICAgPC9oMz5cclxuICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXNtIGxlYWRpbmctbm9ybWFsIG10LTAgbWItMiB0ZXh0LWdyYXktNTAwIGZvbnQtYm9sZCB1cHBlcmNhc2VcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYXMgZmEtbWFwLW1hcmtlci1hbHQgbXItMiB0ZXh0LWxnIHRleHQtZ3JheS01MDBcIj48L2k+e1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAge3Bvc3REYXRhLm1hcCgocG9zdCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1waW5rLTUwMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17YC9ibG9nL3Bvc3QvYXV0aG9yLyR7ZW5jb2RlVVJJQ29tcG9uZW50KHBvc3Q/LnVzZXJJZCl9YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhPkF1dGhvcjoge3Bvc3QudXNlcklkfTwvYT4gXHJcbiAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtMTAgcHktMTAgYm9yZGVyLXQgYm9yZGVyLWdyYXktMzAwIHRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXdyYXAganVzdGlmeS1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBsZzp3LTkvMTIgcHgtNFwiPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICB7cG9zdERhdGEubWFwKChwb3N0KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtYi00IHRleHQtbGcgbGVhZGluZy1yZWxheGVkIHRleHQtZ3JheS04MDBcIj5Cb2R5OiB7cG9zdC5ib2R5fSA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibWItNCB0ZXh0LWxnIGxlYWRpbmctcmVsYXhlZCB0ZXh0LWdyYXktODAwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEFuIGFydGlzdCBvZiBjb25zaWRlcmFibGUgcmFuZ2UsIEplbm5hIHRoZSBuYW1lIHRha2VuIGJ5XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIE1lbGJvdXJuZS1yYWlzZWQsIEJyb29rbHluLWJhc2VkIE5pY2sgTXVycGh5IHdyaXRlcyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGVyZm9ybXMgYW5kIHJlY29yZHMgYWxsIG9mIGhpcyBvd24gbXVzaWMsIGdpdmluZyBpdCBhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdhcm0sIGludGltYXRlIGZlZWwgd2l0aCBhIHNvbGlkIGdyb292ZSBzdHJ1Y3R1cmUuIEFuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFydGlzdCBvZiBjb25zaWRlcmFibGUgcmFuZ2UuXHJcbiAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBocmVmPVwiI3BhYmxvXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9udC1ub3JtYWwgdGV4dC1waW5rLTUwMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2UgPT4gZS5wcmV2ZW50RGVmYXVsdCgpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBTaG93IG1vcmVcclxuICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgIDwvbWFpbj5cclxuXHJcblxyXG4gICAgICAgIDwvPlxyXG4gICAgICAgIClcclxuICAgIH1cclxuXHJcblxyXG4gIFxyXG4gXHJcbiAgIFxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1BhdGhzKCkge1xyXG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGBodHRwczovL2pzb25wbGFjZWhvbGRlci50eXBpY29kZS5jb20vcG9zdHMvYClcclxuICBjb25zdCBwb3N0RGF0YSA9IGF3YWl0IHJlcy5qc29uKClcclxuICB2YXIgcGF0aHMgPSBbXTtcclxuICB2YXIgaWQgPSBKU09OLnN0cmluZ2lmeShwYXRocylcclxuICB2YXIgdXNlcklkID0gSlNPTi5zdHJpbmdpZnkocGF0aHMpXHJcbiAgZm9yICh2YXIgaSBpbiBwb3N0RGF0YSlcclxuICAgIHBhdGhzLnB1c2gocG9zdERhdGFbaV0pO1xyXG5cclxuICByZXR1cm4ge1xyXG4gICAgcGF0aHM6IFtcclxuICAgICAgeyBwYXJhbXM6IHsgcG9zdERhdGEsIGlkLCB1c2VySWQgfSB9XHJcbiAgICBdLFxyXG5cclxuICAgIGZhbGxiYWNrOiB0cnVlXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoIHtwYXJhbXN9ICkge1xyXG4gIGNvbnNvbGUubG9nKFwiUEFSQU06IFwiLCBwYXJhbXMpXHJcblxyXG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKCdodHRwczovL2pzb25wbGFjZWhvbGRlci50eXBpY29kZS5jb20vcG9zdHMvPycgKyBuZXcgVVJMU2VhcmNoUGFyYW1zKCBwYXJhbXMgKSlcclxuICBjb25zb2xlLmxvZyhcIlJFU09VUkNFOiBcIiwgcmVzKVxyXG5cclxuICBjb25zdCBwb3N0RGF0YSA9IGF3YWl0IHJlcy5qc29uKClcclxuICBjb25zb2xlLmxvZyhwb3N0RGF0YSlcclxuXHJcbiAgaWYgKCFwb3N0RGF0YSkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgbm90Rm91bmQ6IHRydWUsXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXR1cm4ge1xyXG4gICAgcHJvcHM6IHtcclxuICAgICAgcG9zdERhdGFcclxuICAgIH1cclxuICB9XHJcbn1cclxuICAgXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUG9zdDsgICAgXHJcbiAgICBcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==