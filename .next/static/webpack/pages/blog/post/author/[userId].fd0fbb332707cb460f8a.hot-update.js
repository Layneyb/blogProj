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
            lineNumber: 37,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 30,
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
              lineNumber: 55,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 46,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 29,
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
                      lineNumber: 69,
                      columnNumber: 23
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 68,
                    columnNumber: 21
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 67,
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
                        lineNumber: 81,
                        columnNumber: 25
                      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
                        className: "text-pink-500",
                        children: id
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 83,
                        columnNumber: 29
                      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("span", {
                        className: "text-sm text-gray-500",
                        children: ["Author ID ", id]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 84,
                        columnNumber: 25
                      }, _this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 80,
                      columnNumber: 23
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 79,
                    columnNumber: 21
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 78,
                  columnNumber: 19
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 66,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
                className: "text-center mt-12",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
                  id: "title"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 91,
                  columnNumber: 17
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 89,
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
                              lineNumber: 100,
                              columnNumber: 37
                            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("li", {
                              children: ["TITLE: ", author.title]
                            }, void 0, true, {
                              fileName: _jsxFileName,
                              lineNumber: 101,
                              columnNumber: 37
                            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("li", {
                              children: ["CONTENTS: ", author.body]
                            }, void 0, true, {
                              fileName: _jsxFileName,
                              lineNumber: 102,
                              columnNumber: 37
                            }, _this)]
                          }, void 0, true, {
                            fileName: _jsxFileName,
                            lineNumber: 99,
                            columnNumber: 35
                          }, _this)
                        }, author.userId, false, {
                          fileName: _jsxFileName,
                          lineNumber: 98,
                          columnNumber: 33
                        }, _this);
                      })
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 96,
                      columnNumber: 61
                    }, _this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 96,
                    columnNumber: 21
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 95,
                  columnNumber: 19
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 94,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 65,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 64,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 63,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 9
    }, _this)
  }, void 0, false);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYmxvZy9wb3N0L2F1dGhvci9bdXNlcklkXS5qcyJdLCJuYW1lcyI6WyJQb3N0IiwicG9zdERhdGEiLCJoYW5kbGVDbGljayIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInJvdXRlciIsInB1c2giLCJ1c2VSb3V0ZXIiLCJ1c2VySWQiLCJxdWVyeSIsImlkIiwieCIsIkpTT04iLCJzdHJpbmdpZnkiLCJ1c2VySWRzIiwiY29uc29sZSIsImxvZyIsInkiLCJoZWlnaHQiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJ0cmFuc2Zvcm0iLCJ0cmFuc2l0aW9uIiwibWFwIiwiYXV0aG9yIiwidGl0bGUiLCJib2R5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7OztBQUVBLElBQU1BLElBQUksR0FBRyxTQUFQQSxJQUFPLE9BQWtCO0FBQUE7O0FBQUEsTUFBZkMsUUFBZSxRQUFmQSxRQUFlOztBQUUzQixNQUFNQyxXQUFXLEdBQUcsU0FBZEEsV0FBYyxDQUFDQyxDQUFELEVBQU87QUFDdkJBLEtBQUMsQ0FBQ0MsY0FBRjtBQUNBQyxVQUFNLENBQUNDLElBQVAsQ0FBWSxHQUFaO0FBQ0gsR0FIRDs7QUFLQSxNQUFNRCxNQUFNLEdBQUdFLDZEQUFTLEVBQXhCO0FBUDJCLE1BUWxCQyxNQVJrQixHQVFOSCxNQUFNLENBQUNJLEtBUkQsQ0FRbEJELE1BUmtCO0FBQUEsTUFTbEJFLEVBVGtCLEdBU1ZMLE1BQU0sQ0FBQ0ksS0FURyxDQVNsQkMsRUFUa0I7QUFVM0IsTUFBSUMsQ0FBQyxHQUFHQyxJQUFJLENBQUNDLFNBQUwsQ0FBZUgsRUFBZixDQUFSO0FBRUEsTUFBSUksT0FBTyxHQUFHRixJQUFJLENBQUNDLFNBQUwsQ0FBZUwsTUFBZixDQUFkO0FBQ0FPLFNBQU8sQ0FBQ0MsR0FBUixDQUFZLGFBQVosRUFBMkJGLE9BQTNCO0FBRUEsTUFBSUcsQ0FBQyxHQUFHTCxJQUFJLENBQUNDLFNBQUwsQ0FBZVos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QUFBQSx1Q0FDRTtBQUFLLDJCQUFTLEVBQUMsK0JBQWY7QUFBQSx5Q0FDRTtBQUFLLDZCQUFTLEVBQUMsdUJBQWY7QUFBQSxpREFBd0M7QUFBQSxnQ0FDbkNULFFBQVEsQ0FBQ3FCLEdBQVQsQ0FBYSxVQUFDQyxNQUFEO0FBQUEsNENBQ047QUFBQSxpREFDRTtBQUFLLDhCQUFFLEVBQUMsZUFBUjtBQUFBLG9EQUNFO0FBQUEsc0RBQWNBLE1BQU0sQ0FBQ2IsRUFBckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFDQURGLGVBRUU7QUFBQSxvREFBWWEsTUFBTSxDQUFDQyxLQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUNBRkYsZUFHRTtBQUFBLHVEQUFlRCxNQUFNLENBQUNFLElBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQ0FIRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERiwyQkFBU0YsTUFBTSxDQUFDZixNQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlDQURNO0FBQUEsdUJBQWI7QUFEbUM7QUFBQTtBQUFBO0FBQUE7QUFBQSw2QkFBeEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBN0JGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQWxDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFMQSxtQkFESjtBQWdHQyxDQWxITDs7R0FBTVIsSTtVQU9hTyxxRDs7O0tBUGJQLEk7O0FBOEpTQSxtRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9ibG9nL3Bvc3QvYXV0aG9yL1t1c2VySWRdLmZkMGZiYjMzMjcwN2NiNDYwZjhhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xyXG5cclxuY29uc3QgUG9zdCA9ICh7IHBvc3REYXRhIH0pID0+IHtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVDbGljayA9IChlKSA9PiB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICAgICAgcm91dGVyLnB1c2goJy8nKVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICAgIGNvbnN0ICB7IHVzZXJJZCB9ICA9IHJvdXRlci5xdWVyeVxyXG4gICAgY29uc3QgIHsgaWQgfSAgPSByb3V0ZXIucXVlcnlcclxuICAgIHZhciB4ID0gSlNPTi5zdHJpbmdpZnkoaWQpXHJcbiAgICBcclxuICAgIHZhciB1c2VySWRzID0gSlNPTi5zdHJpbmdpZnkodXNlcklkKVxyXG4gICAgY29uc29sZS5sb2coXCJBVVRIT1IgSUQ6IFwiLCB1c2VySWRzKVxyXG5cclxuICAgIHZhciB5ID0gSlNPTi5zdHJpbmdpZnkocG9zdERhdGEpXHJcbiAgICBjb25zb2xlLmxvZyhcIlRFU1Q6IFwiLCB5KVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuXHJcblxyXG5cclxuICAgICAgICBcclxuICAgICAgICA8bWFpbiBjbGFzc05hbWU9XCJwcm9maWxlLXBhZ2VcIj5cclxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBibG9ja1wiIHN0eWxlPXt7IGhlaWdodDogXCIzMDBweFwiIH19PlxyXG4gICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJhYnNvbHV0ZSB0b3AtMCB3LWZ1bGwgaC1mdWxsIGJnLWNlbnRlciBiZy1jb3ZlclwiXHJcbiAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZEltYWdlOlxyXG4gICAgICAgICAgICAgICAgXCJ1cmwoJ2h0dHBzOi8vaW1hZ2VzLnVuc3BsYXNoLmNvbS9waG90by0xNDk5MzM2MzE1ODE2LTA5NzY1NWRjZmJkYT9peGxpYj1yYi0xLjIuMSZpeGlkPWV5SmhjSEJmYVdRaU9qRXlNRGQ5JmF1dG89Zm9ybWF0JmZpdD1jcm9wJnc9MjcxMCZxPTgwJylcIlxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8c3BhblxyXG4gICAgICAgICAgICAgIGlkPVwiYmxhY2tPdmVybGF5XCJcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgaC1mdWxsIGFic29sdXRlIG9wYWNpdHktNTAgYmctYmxhY2tcIlxyXG4gICAgICAgICAgICA+PC9zcGFuPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInRvcC1hdXRvIGJvdHRvbS0wIGxlZnQtMCByaWdodC0wIHctZnVsbCBhYnNvbHV0ZSBwb2ludGVyLWV2ZW50cy1ub25lIG92ZXJmbG93LWhpZGRlblwiXHJcbiAgICAgICAgICAgIHN0eWxlPXt7IGhlaWdodDogXCI3MHB4XCIsIHRyYW5zZm9ybTogXCJ0cmFuc2xhdGVaKDApXCIgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPHN2Z1xyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImFic29sdXRlIGJvdHRvbS0wIG92ZXJmbG93LWhpZGRlblwiXHJcbiAgICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXHJcbiAgICAgICAgICAgICAgcHJlc2VydmVBc3BlY3RSYXRpbz1cIm5vbmVcIlxyXG4gICAgICAgICAgICAgIHZlcnNpb249XCIxLjFcIlxyXG4gICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMjU2MCAxMDBcIlxyXG4gICAgICAgICAgICAgIHg9XCIwXCJcclxuICAgICAgICAgICAgICB5PVwiMFwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8cG9seWdvblxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTMwMCBmaWxsLWN1cnJlbnRcIlxyXG4gICAgICAgICAgICAgICAgcG9pbnRzPVwiMjU2MCAwIDI1NjAgMTAwIDAgMTAwXCJcclxuICAgICAgICAgICAgICA+PC9wb2x5Z29uPlxyXG4gICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBweS0xNiBiZy1ncmF5LTMwMFwiIHN0eWxlPXt7IGhlaWdodDogXCIxMDB2aFwiIH19PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgbXgtYXV0byBweC00XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgZmxleCBmbGV4LWNvbCBtaW4tdy0wIGJyZWFrLXdvcmRzIGJnLXdoaXRlIHctZnVsbCBtYi02IHNoYWRvdy14bCByb3VuZGVkLWxnIC1tdC02NFwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHgtNlwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtd3JhcCBqdXN0aWZ5LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBsZzp3LTQvMTIgcHgtNCBsZzpvcmRlci0zIGxnOnRleHQtcmlnaHQgbGc6c2VsZi1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB5LTYgcHgtMyBtdC0zMiBzbTptdC0wXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJnLXBpbmstNTAwIGFjdGl2ZTpiZy1waW5rLTYwMCB1cHBlcmNhc2UgdGV4dC13aGl0ZSBmb250LWJvbGQgaG92ZXI6c2hhZG93LW1kIHNoYWRvdyB0ZXh0LXhzIHB4LTQgcHktMiByb3VuZGVkIG91dGxpbmUtbm9uZSBmb2N1czpvdXRsaW5lLW5vbmUgc206bXItMiBtYi0xXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9e2hhbmRsZUNsaWNrfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyB0cmFuc2l0aW9uOiBcImFsbCAuMTVzIGVhc2VcIiB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBHbyBCYWNrXHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIGxnOnctNC8xMiBweC00IGxnOm9yZGVyLTFcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXIgcHktNCBsZzpwdC00IHB0LThcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXItNCBwLTMgdGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC14bCBmb250LWJvbGQgYmxvY2sgdXBwZXJjYXNlIHRyYWNraW5nLXdpZGUgdGV4dC1ncmF5LTcwMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtcGluay01MDBcIj57IGlkIH08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LWdyYXktNTAwXCI+QXV0aG9yIElEIHtpZH08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgbXQtMTJcIj5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGlkPVwidGl0bGVcIj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC0xMCBweS0xMCBib3JkZXItdCBib3JkZXItZ3JheS0zMDAgdGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtd3JhcCBqdXN0aWZ5LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIGxnOnctOS8xMiBweC00XCI+IDx1bD4gICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtwb3N0RGF0YS5tYXAoKGF1dGhvcikgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e2F1dGhvci51c2VySWR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBpZD1cInBvc3RDb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlBPU1QgSUQ6IHthdXRob3IuaWR9PC9saT4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5USVRMRToge2F1dGhvci50aXRsZX08L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+Q09OVEVOVFM6IHthdXRob3IuYm9keX08L2xpPiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgIDwvbWFpbj5cclxuXHJcbiAgICAgICAgPC8+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG5cclxuXHJcbiAgXHJcbiBcclxuICAgIGV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQYXRocygpIHtcclxuICAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vanNvbnBsYWNlaG9sZGVyLnR5cGljb2RlLmNvbS9wb3N0cy9gKVxyXG4gICAgICBjb25zdCBwb3N0RGF0YSA9IGF3YWl0IHJlcy5qc29uKClcclxuICAgICAgdmFyIHBhdGhzID0gW107XHJcbiAgICAgIHZhciB1c2VySWQgPSBKU09OLnN0cmluZ2lmeShwYXRocylcclxuICAgICAgZm9yICh2YXIgaSBpbiBwb3N0RGF0YSlcclxuICAgICAgICBwYXRocy5wdXNoKHBvc3REYXRhW2ldKTtcclxuICAgIFxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIHBhdGhzOiBbXHJcbiAgICAgICAgICB7IHBhcmFtczogeyBwb3N0RGF0YSwgdXNlcklkIH0gfVxyXG4gICAgICAgIF0sXHJcbiAgICBcclxuICAgICAgICBmYWxsYmFjazogdHJ1ZVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcyggcGFyYW1zICkge1xyXG4gICAgICBjb25zb2xlLmxvZyhcIlBBUkFNOiBcIiwgcGFyYW1zKVxyXG4gICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly9qc29ucGxhY2Vob2xkZXIudHlwaWNvZGUuY29tL3Bvc3RzLz89JyArIHBhcmFtcylcclxuICAgICAgY29uc29sZS5sb2coXCJSRVNPVVJDRTogXCIsIHJlcylcclxuICAgIFxyXG4gICAgICBjb25zdCBwb3N0RGF0YSA9IGF3YWl0IHJlcy5qc29uKClcclxuICAgICAgY29uc29sZS5sb2cocG9zdERhdGEpXHJcbiAgICBcclxuICAgICAgaWYgKCFwb3N0RGF0YSkge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICBub3RGb3VuZDogdHJ1ZSxcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIFxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIHByb3BzOiB7XHJcbiAgICAgICAgICBwb3N0RGF0YVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBvc3Q7ICAgICJdLCJzb3VyY2VSb290IjoiIn0=