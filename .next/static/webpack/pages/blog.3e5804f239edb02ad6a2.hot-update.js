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
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("main", {
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
            lineNumber: 35,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 28,
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
              lineNumber: 53,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 44,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 40,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 27,
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
                    lineNumber: 66,
                    columnNumber: 21
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 65,
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
                      lineNumber: 71,
                      columnNumber: 23
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 70,
                    columnNumber: 21
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 69,
                  columnNumber: 19
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 64,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
                className: "text-center mt-12",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("h3", {
                  className: "text-4xl font-semibold leading-normal mb-2 text-gray-800 mb-2",
                  children: "All Blog Posts"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 82,
                  columnNumber: 19
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("div", {
                  className: "text-sm leading-normal mt-0 mb-2 text-gray-500 font-bold uppercase",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxDEV"])("i", {
                    className: "fas fa-map-marker-alt mr-2 text-lg text-gray-500"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 86,
                    columnNumber: 21
                  }, this), " ", "Click titles to see more"]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 85,
                  columnNumber: 19
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 81,
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
                              lineNumber: 97,
                              columnNumber: 41
                            }, _this)
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 96,
                            columnNumber: 37
                          }, _this)
                        }, postdeet.id, false, {
                          fileName: _jsxFileName,
                          lineNumber: 95,
                          columnNumber: 35
                        }, _this);
                      })
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 93,
                      columnNumber: 23
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 92,
                    columnNumber: 21
                  }, this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 91,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 90,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 63,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 62,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 61,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 7
    }, this)
  }, void 0, false);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYmxvZy9pbmRleC5qcyJdLCJuYW1lcyI6WyJQb3N0cyIsInBvc3REYXRhIiwicm91dGVyIiwidXNlUm91dGVyIiwiaGFuZGxlQ2xpY2siLCJlIiwicHJldmVudERlZmF1bHQiLCJwdXNoIiwiaGVpZ2h0IiwiYmFja2dyb3VuZEltYWdlIiwidHJhbnNmb3JtIiwidHJhbnNpdGlvbiIsIm1hcCIsInBvc3RkZWV0IiwiZW5jb2RlVVJJQ29tcG9uZW50IiwiaWQiLCJ0aXRsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUdBOzs7O0FBSUEsU0FBU0EsS0FBVCxPQUE2QjtBQUFBOztBQUFBOztBQUFBLE1BQVpDLFFBQVksUUFBWkEsUUFBWTtBQUV6QixNQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCOztBQUNBLE1BQU1DLFdBQVcsR0FBRyxTQUFkQSxXQUFjLENBQUNDLENBQUQsRUFBTztBQUN2QkEsS0FBQyxDQUFDQyxjQUFGO0FBQ0FKLFVBQU0sQ0FBQ0ssSUFBUCxDQUFZLEdBQVo7QUFDSCxHQUhEOztBQU9BLHNCQUNBO0FBQUEsMkJBS0U7QUFBTSxlQUFTLEVBQUMsY0FBaEI7QUFBQSw4QkFDRTtBQUFTLGlCQUFTLEVBQUMsZ0JBQW5CO0FBQW9DLGFBQUssRUFBRTtBQUFFQyxnQkFBTSxFQUFFO0FBQVYsU0FBM0M7QUFBQSxnQ0FDRTtBQUNFLG1CQUFTLEVBQUMsaURBRFo7QUFFRSxlQUFLLEVBQUU7QUFDTEMsMkJBQWUsRUFDYjtBQUZHLFdBRlQ7QUFBQSxpQ0FPRTtBQUNFLGNBQUUsRUFBQyxjQURMO0FBRUUscUJBQVMsRUFBQztBQUZaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFQRjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLGVBYUU7QUFDRSxtQkFBUyxFQUFDLHNGQURaO0FBRUUsZUFBSyxFQUFFO0FBQUVELGtCQUFNLEVBQUUsTUFBVjtBQUFrQkUs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QUE7QUFBQTtBQUFBO0FBQUEsY0FsQ0Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTEYsbUJBREE7QUErRkg7O0dBekdRZixLO1VBRVVHLHFEOzs7S0FGVkgsSzs7QUF5SU1BLG9FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2Jsb2cuM2U1ODA0ZjIzOWVkYjAyYWQ2YTIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuXHJcblxyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIFBvc3RzKHsgcG9zdERhdGEgfSkge1xyXG5cclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXHJcbiAgICBjb25zdCBoYW5kbGVDbGljayA9IChlKSA9PiB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICAgICAgcm91dGVyLnB1c2goJy8nKVxyXG4gICAgfVxyXG5cclxuXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgIDw+XHJcblxyXG5cclxuXHJcblxyXG4gICAgICA8bWFpbiBjbGFzc05hbWU9XCJwcm9maWxlLXBhZ2VcIj5cclxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBibG9ja1wiIHN0eWxlPXt7IGhlaWdodDogXCIzMDBweFwiIH19PlxyXG4gICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJhYnNvbHV0ZSB0b3AtMCB3LWZ1bGwgaC1mdWxsIGJnLWNlbnRlciBiZy1jb3ZlclwiXHJcbiAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZEltYWdlOlxyXG4gICAgICAgICAgICAgICAgXCJ1cmwoJ2h0dHBzOi8vaW1hZ2VzLnVuc3BsYXNoLmNvbS9waG90by0xNDk5MzM2MzE1ODE2LTA5NzY1NWRjZmJkYT9peGxpYj1yYi0xLjIuMSZpeGlkPWV5SmhjSEJmYVdRaU9qRXlNRGQ5JmF1dG89Zm9ybWF0JmZpdD1jcm9wJnc9MjcxMCZxPTgwJylcIlxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8c3BhblxyXG4gICAgICAgICAgICAgIGlkPVwiYmxhY2tPdmVybGF5XCJcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgaC1mdWxsIGFic29sdXRlIG9wYWNpdHktNTAgYmctYmxhY2tcIlxyXG4gICAgICAgICAgICA+PC9zcGFuPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInRvcC1hdXRvIGJvdHRvbS0wIGxlZnQtMCByaWdodC0wIHctZnVsbCBhYnNvbHV0ZSBwb2ludGVyLWV2ZW50cy1ub25lIG92ZXJmbG93LWhpZGRlblwiXHJcbiAgICAgICAgICAgIHN0eWxlPXt7IGhlaWdodDogXCI3MHB4XCIsIHRyYW5zZm9ybTogXCJ0cmFuc2xhdGVaKDApXCIgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPHN2Z1xyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImFic29sdXRlIGJvdHRvbS0wIG92ZXJmbG93LWhpZGRlblwiXHJcbiAgICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXHJcbiAgICAgICAgICAgICAgcHJlc2VydmVBc3BlY3RSYXRpbz1cIm5vbmVcIlxyXG4gICAgICAgICAgICAgIHZlcnNpb249XCIxLjFcIlxyXG4gICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMjU2MCAxMDBcIlxyXG4gICAgICAgICAgICAgIHg9XCIwXCJcclxuICAgICAgICAgICAgICB5PVwiMFwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8cG9seWdvblxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTMwMCBmaWxsLWN1cnJlbnRcIlxyXG4gICAgICAgICAgICAgICAgcG9pbnRzPVwiMjU2MCAwIDI1NjAgMTAwIDAgMTAwXCJcclxuICAgICAgICAgICAgICA+PC9wb2x5Z29uPlxyXG4gICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBweS0xNiBiZy1ncmF5LTMwMFwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgbXgtYXV0byBweC00XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgZmxleCBmbGV4LWNvbCBtaW4tdy0wIGJyZWFrLXdvcmRzIGJnLXdoaXRlIHctZnVsbCBtYi02IHNoYWRvdy14bCByb3VuZGVkLWxnIC1tdC02NFwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHgtNlwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtd3JhcCBqdXN0aWZ5LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBsZzp3LTMvMTIgcHgtNCBsZzpvcmRlci0yIGZsZXgganVzdGlmeS1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBsZzp3LTQvMTIgcHgtNCBsZzpvcmRlci0zIGxnOnRleHQtcmlnaHQgbGc6c2VsZi1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB5LTYgcHgtMyBtdC0zMiBzbTptdC0wXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJnLXBpbmstNTAwIGFjdGl2ZTpiZy1waW5rLTYwMCB1cHBlcmNhc2UgdGV4dC13aGl0ZSBmb250LWJvbGQgaG92ZXI6c2hhZG93LW1kIHNoYWRvdyB0ZXh0LXhzIHB4LTQgcHktMiByb3VuZGVkIG91dGxpbmUtbm9uZSBmb2N1czpvdXRsaW5lLW5vbmUgc206bXItMiBtYi0xXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9e2hhbmRsZUNsaWNrfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyB0cmFuc2l0aW9uOiBcImFsbCAuMTVzIGVhc2VcIiB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBHbyBCYWNrXHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgbXQtMTJcIj5cclxuICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRleHQtNHhsIGZvbnQtc2VtaWJvbGQgbGVhZGluZy1ub3JtYWwgbWItMiB0ZXh0LWdyYXktODAwIG1iLTJcIj5cclxuICAgICAgICAgICAgICAgICAgICBBbGwgQmxvZyBQb3N0c1xyXG4gICAgICAgICAgICAgICAgICA8L2gzPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtc20gbGVhZGluZy1ub3JtYWwgbXQtMCBtYi0yIHRleHQtZ3JheS01MDAgZm9udC1ib2xkIHVwcGVyY2FzZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhcyBmYS1tYXAtbWFya2VyLWFsdCBtci0yIHRleHQtbGcgdGV4dC1ncmF5LTUwMFwiPjwvaT57XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgQ2xpY2sgdGl0bGVzIHRvIHNlZSBtb3JlXHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTEwIHB5LTEwIGJvcmRlci10IGJvcmRlci1ncmF5LTMwMCB0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC13cmFwIGp1c3RpZnktY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgbGc6dy05LzEyIHB4LTRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDx1bCAgY2xhc3NOYW1lPVwibWItNCB0ZXh0LWxnIGxlYWRpbmctcmVsYXhlZCB0ZXh0LXBpbmstNTAwXCI+ICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtwb3N0RGF0YS5tYXAoKHBvc3RkZWV0KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkga2V5PXtwb3N0ZGVldC5pZH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvYmxvZy9wb3N0LyR7ZW5jb2RlVVJJQ29tcG9uZW50KHBvc3RkZWV0Py5pZCl9YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YT57cG9zdGRlZXQudGl0bGV9PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICA8L21haW4+XHJcblxyXG5cclxuXHJcbiAgICA8Lz5cclxuICAgIClcclxufVxyXG5cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQYXRocygpIHtcclxuICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9qc29ucGxhY2Vob2xkZXIudHlwaWNvZGUuY29tL3Bvc3RzYClcclxuICAgICAgICBjb25zdCBwb3N0RGF0YSA9IGF3YWl0IHJlcy5qc29uKClcclxuICAgICAgICB2YXIgcGF0aHMgPSBbXVxyXG4gICAgICAgIHZhciB4ID0gSlNPTi5zdHJpbmdpZnkocGF0aHMpO1xyXG4gICAgICAgIGZvcih2YXIgaSBpbiBwb3N0RGF0YSlcclxuICAgICAgICAgIHBhdGhzLnB1c2gocG9zdERhdGEgW2ldKTtcclxuICAgICAgICAgIFxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHBhdGhzIDpbXHJcbiAgICAgICAgICAgICAgIHsgcGFyYW1zOiB7cG9zdERhdGF9IH1cclxuICAgICAgICAgICAgXSwgXHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgZmFsbGJhY2s6IGZhbHNlXHJcbiAgICAgICAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoKSB7XHJcbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9qc29ucGxhY2Vob2xkZXIudHlwaWNvZGUuY29tL3Bvc3RzYClcclxuICAgIGNvbnN0IHBvc3REYXRhID0gYXdhaXQgcmVzLmpzb24oKVxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgcHJvcHM6e1xyXG4gICAgICAgICAgICBwb3N0RGF0YVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBvc3RzOyJdLCJzb3VyY2VSb290IjoiIn0=