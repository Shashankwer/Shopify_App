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
/* harmony import */ var _shopify_app_bridge_actions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @shopify/app-bridge/actions */ "./node_modules/@shopify/app-bridge/actions/index.js");
/* harmony import */ var _shopify_app_bridge_actions__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_shopify_app_bridge_actions__WEBPACK_IMPORTED_MODULE_10__);








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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiaW1nIiwiSW5kZXgiLCJvcGVuIiwiY29udGVudCIsIm9uQWN0aW9uIiwic2V0U3RhdGUiLCJSZWFjdCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBR0EsSUFBTUEsR0FBRyxHQUFHLG1FQUFaOztJQUNNQyxLOzs7Ozs7Ozs7Ozs7Ozs7O2dOQUNFO0FBQUNDLFVBQUksRUFBQztBQUFOLEs7Ozs7Ozs7NkJBQ0M7QUFBQTs7QUFDUCxhQUNBLE1BQUMscURBQUQsUUFDSSxNQUFDLDREQUFEO0FBQ0EsYUFBSyxFQUFDLFlBRE47QUFFQSxxQkFBYSxFQUFFO0FBQUNDLGlCQUFPLEVBQUM7QUFBVDtBQUZmLFFBREosRUFNSSxNQUFDLHVEQUFELFFBQ0ksTUFBQywyREFBRDtBQUNBLGVBQU8sRUFBQywwQkFEUjtBQUVBLGNBQU0sRUFBRTtBQUNKQSxpQkFBTyxFQUFDLGlCQURKO0FBRUpDLGtCQUFRLEVBQUM7QUFBQSxtQkFBSSxNQUFJLENBQUNDLFFBQUwsQ0FBYztBQUFDSCxrQkFBSSxFQUFDO0FBQU4sYUFBZCxDQUFKO0FBQUE7QUFGTCxTQUZSO0FBTUEsYUFBSyxFQUFFRjtBQU5QLFNBUUksc0VBUkosQ0FESixDQU5KLENBREE7QUFxQkQ7Ozs7RUF4Qm1CTSw0Q0FBSyxDQUFDQyxTOztBQTRCWE4sb0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMmRlZTllNjk2NWI5MmJmMWZiYjguaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7RW1wdHlTdGF0ZSxMYXlvdXQsUGFnZSxUZXh0U3R5bGV9IGZyb20gJ0BzaG9waWZ5L3BvbGFyaXMnO1xyXG5pbXBvcnQge1RpdGxlQmFyfSBmcm9tICdAc2hvcGlmeS9hcHAtYnJpZGdlJztcclxuaW1wb3J0IHsgUmVzb3VyY2VQaWNrZXIgfSBmcm9tICdAc2hvcGlmeS9hcHAtYnJpZGdlL2FjdGlvbnMnO1xyXG5cclxuXHJcbmNvbnN0IGltZyA9ICdodHRwczovL2Nkbi5zaG9waWZ5LmNvbS9zL2ZpbGVzLzEvMDc1Ny85OTU1L2ZpbGVzL2VtcHR5LXN0YXRlLnN2Zyc7XHJcbmNsYXNzIEluZGV4IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuc3RhdGUgPSB7b3BlbjpmYWxzZX07XHJcbnJlbmRlcigpIHtcclxuICByZXR1cm4gKCAgXHJcbiAgPFBhZ2U+XHJcbiAgICAgIDxUaXRsZUJhclxyXG4gICAgICB0aXRsZT1cIlNhbXBsZSBBcHBcIlxyXG4gICAgICBwcmltYXJ5QWN0aW9uPXt7Y29udGVudDonU2VsZWN0IHByb2R1Y3RzJ319XHJcbiAgICAgIC8+XHJcbiAgICAgIFxyXG4gICAgICA8TGF5b3V0PlxyXG4gICAgICAgICAgPEVtcHR5U3RhdGVcclxuICAgICAgICAgIGhlYWRpbmc9XCJTZWxlY3QgcHJvZHVjdHMgdG8gc3RhcnRcIlxyXG4gICAgICAgICAgYWN0aW9uPXt7XHJcbiAgICAgICAgICAgICAgY29udGVudDonU2VsZWN0IHByb2R1Y3RzJyxcclxuICAgICAgICAgICAgICBvbkFjdGlvbjooKT0+dGhpcy5zZXRTdGF0ZSh7b3Blbjp0cnVlfSksXHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgICAgaW1hZ2U9e2ltZ31cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8cD5TZWxlY3QgcHJvZHVjdHMgYW5kIGNoYW5nZSB0aGVpciBwcmljZSB0ZW1wb3JhcmlseTwvcD5cclxuICAgICAgICAgIDwvRW1wdHlTdGF0ZT5cclxuICAgICAgPC9MYXlvdXQ+XHJcbiAgPC9QYWdlPlxyXG4pO1xyXG59XHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbmRleDsiXSwic291cmNlUm9vdCI6IiJ9