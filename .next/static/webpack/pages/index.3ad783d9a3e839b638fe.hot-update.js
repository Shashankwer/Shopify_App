webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @shopify/polaris */ "./node_modules/@shopify/polaris/dist/esm/index.js");
/* harmony import */ var _shopify_app_bridge__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @shopify/app-bridge */ "./node_modules/@shopify/app-bridge/index.js");
/* harmony import */ var _shopify_app_bridge__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_shopify_app_bridge__WEBPACK_IMPORTED_MODULE_9__);








var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }



var img = 'https://cdn.shopify.com/s/files/1/0757/9955/files/empty-state.svg';

var Index = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(Index, _React$Component);

  var _super = _createSuper(Index);

  function Index() {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Index);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "state", {
      open: false
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "handleSelection", function (resources) {
      _this.setState({
        open: false
      });

      console.log(resources);
    });

    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Index, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_8__["Page"], null, __jsx(_shopify_app_bridge__WEBPACK_IMPORTED_MODULE_9__["TitleBar"], {
        title: "Sample App",
        primaryAction: {
          content: 'Select products'
        }
      }), __jsx(_shopify_app_bridge__WEBPACK_IMPORTED_MODULE_9__["ResourcePicker"], {
        resourceType: "Product",
        showVariants: false,
        open: this.state.open,
        onSelection: function onSelection(resource) {
          return _this2.handleSelection(resource);
        },
        onCancel: function onCancel() {
          return _this2.setState({
            open: false
          });
        }
      }), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_8__["Layout"], null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_8__["EmptyState"], {
        heading: "Select products to start",
        action: {
          content: 'Select products',
          onAction: function onAction() {
            return _this2.setState({
              open: true
            });
          }
        },
        image: img
      }, __jsx("p", null, "Select products and change their price temporarily"))));
    }
  }]);

  return Index;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Index);

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiaW1nIiwiSW5kZXgiLCJvcGVuIiwicmVzb3VyY2VzIiwic2V0U3RhdGUiLCJjb25zb2xlIiwibG9nIiwiY29udGVudCIsInN0YXRlIiwicmVzb3VyY2UiLCJoYW5kbGVTZWxlY3Rpb24iLCJvbkFjdGlvbiIsIlJlYWN0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUdBLElBQU1BLEdBQUcsR0FBRyxtRUFBWjs7SUFDTUMsSzs7Ozs7Ozs7Ozs7Ozs7OztnTkFDRTtBQUFDQyxVQUFJLEVBQUM7QUFBTixLOzswTkErQlUsVUFBQ0MsU0FBRCxFQUFjO0FBQzVCLFlBQUtDLFFBQUwsQ0FBYztBQUFDRixZQUFJLEVBQUM7QUFBTixPQUFkOztBQUNBRyxhQUFPLENBQUNDLEdBQVIsQ0FBWUgsU0FBWjtBQUNILEs7Ozs7Ozs7NkJBakNRO0FBQUE7O0FBQ1AsYUFDQSxNQUFDLHFEQUFELFFBQ0ksTUFBQyw0REFBRDtBQUNBLGFBQUssRUFBQyxZQUROO0FBRUEscUJBQWEsRUFBRTtBQUFDSSxpQkFBTyxFQUFDO0FBQVQ7QUFGZixRQURKLEVBS0ksTUFBQyxrRUFBRDtBQUNFLG9CQUFZLEVBQUMsU0FEZjtBQUVFLG9CQUFZLEVBQUUsS0FGaEI7QUFHRSxZQUFJLEVBQUUsS0FBS0MsS0FBTCxDQUFXTixJQUhuQjtBQUlFLG1CQUFXLEVBQUUscUJBQUNPLFFBQUQ7QUFBQSxpQkFBWSxNQUFJLENBQUNDLGVBQUwsQ0FBcUJELFFBQXJCLENBQVo7QUFBQSxTQUpmO0FBS0UsZ0JBQVEsRUFBRTtBQUFBLGlCQUFJLE1BQUksQ0FBQ0wsUUFBTCxDQUFjO0FBQUNGLGdCQUFJLEVBQUM7QUFBTixXQUFkLENBQUo7QUFBQTtBQUxaLFFBTEosRUFhSSxNQUFDLHVEQUFELFFBQ0ksTUFBQywyREFBRDtBQUNBLGVBQU8sRUFBQywwQkFEUjtBQUVBLGNBQU0sRUFBRTtBQUNKSyxpQkFBTyxFQUFDLGlCQURKO0FBRUpJLGtCQUFRLEVBQUM7QUFBQSxtQkFBSSxNQUFJLENBQUNQLFFBQUwsQ0FBYztBQUFDRixrQkFBSSxFQUFDO0FBQU4sYUFBZCxDQUFKO0FBQUE7QUFGTCxTQUZSO0FBTUEsYUFBSyxFQUFFRjtBQU5QLFNBUUksc0VBUkosQ0FESixDQWJKLENBREE7QUE0QkQ7Ozs7RUEvQm1CWSw0Q0FBSyxDQUFDQyxTOztBQXNDWFosb0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguM2FkNzgzZDlhM2U4MzliNjM4ZmUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7RW1wdHlTdGF0ZSxMYXlvdXQsUGFnZSxUZXh0U3R5bGV9IGZyb20gJ0BzaG9waWZ5L3BvbGFyaXMnO1xyXG5pbXBvcnQgeyBUaXRsZUJhcixSZXNvdXJjZVBpY2tlciB9IGZyb20gJ0BzaG9waWZ5L2FwcC1icmlkZ2UnO1xyXG5cclxuXHJcbmNvbnN0IGltZyA9ICdodHRwczovL2Nkbi5zaG9waWZ5LmNvbS9zL2ZpbGVzLzEvMDc1Ny85OTU1L2ZpbGVzL2VtcHR5LXN0YXRlLnN2Zyc7XHJcbmNsYXNzIEluZGV4IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuc3RhdGUgPSB7b3BlbjpmYWxzZX07XHJcbnJlbmRlcigpIHtcclxuICByZXR1cm4gKCAgXHJcbiAgPFBhZ2U+XHJcbiAgICAgIDxUaXRsZUJhclxyXG4gICAgICB0aXRsZT1cIlNhbXBsZSBBcHBcIlxyXG4gICAgICBwcmltYXJ5QWN0aW9uPXt7Y29udGVudDonU2VsZWN0IHByb2R1Y3RzJ319XHJcbiAgICAgIC8+XHJcbiAgICAgIDxSZXNvdXJjZVBpY2tlclxyXG4gICAgICAgIHJlc291cmNlVHlwZT1cIlByb2R1Y3RcIlxyXG4gICAgICAgIHNob3dWYXJpYW50cz17ZmFsc2V9XHJcbiAgICAgICAgb3Blbj17dGhpcy5zdGF0ZS5vcGVufVxyXG4gICAgICAgIG9uU2VsZWN0aW9uPXsocmVzb3VyY2UpPT50aGlzLmhhbmRsZVNlbGVjdGlvbihyZXNvdXJjZSl9XHJcbiAgICAgICAgb25DYW5jZWw9eygpPT50aGlzLnNldFN0YXRlKHtvcGVuOmZhbHNlfSl9XHJcbiAgICAgICAgLz5cclxuXHJcbiAgICAgIDxMYXlvdXQ+XHJcbiAgICAgICAgICA8RW1wdHlTdGF0ZVxyXG4gICAgICAgICAgaGVhZGluZz1cIlNlbGVjdCBwcm9kdWN0cyB0byBzdGFydFwiXHJcbiAgICAgICAgICBhY3Rpb249e3tcclxuICAgICAgICAgICAgICBjb250ZW50OidTZWxlY3QgcHJvZHVjdHMnLFxyXG4gICAgICAgICAgICAgIG9uQWN0aW9uOigpPT50aGlzLnNldFN0YXRlKHtvcGVuOnRydWV9KSxcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgICBpbWFnZT17aW1nfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxwPlNlbGVjdCBwcm9kdWN0cyBhbmQgY2hhbmdlIHRoZWlyIHByaWNlIHRlbXBvcmFyaWx5PC9wPlxyXG4gICAgICAgICAgPC9FbXB0eVN0YXRlPlxyXG4gICAgICA8L0xheW91dD5cclxuICA8L1BhZ2U+XHJcbik7XHJcbn1cclxuaGFuZGxlU2VsZWN0aW9uID0gKHJlc291cmNlcykgPT57XHJcbiAgICB0aGlzLnNldFN0YXRlKHtvcGVuOmZhbHNlfSlcclxuICAgIGNvbnNvbGUubG9nKHJlc291cmNlcylcclxufTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW5kZXg7Il0sInNvdXJjZVJvb3QiOiIifQ==