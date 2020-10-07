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
      }), __jsx(_shopify_app_bridge_actions__WEBPACK_IMPORTED_MODULE_10__["ResourcePicker"], {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiaW1nIiwiSW5kZXgiLCJvcGVuIiwicmVzb3VyY2VzIiwic2V0U3RhdGUiLCJjb25zb2xlIiwibG9nIiwiY29udGVudCIsInN0YXRlIiwicmVzb3VyY2UiLCJoYW5kbGVTZWxlY3Rpb24iLCJvbkFjdGlvbiIsIlJlYWN0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFHQSxJQUFNQSxHQUFHLEdBQUcsbUVBQVo7O0lBQ01DLEs7Ozs7Ozs7Ozs7Ozs7Ozs7Z05BQ0U7QUFBQ0MsVUFBSSxFQUFDO0FBQU4sSzs7ME5BK0JVLFVBQUNDLFNBQUQsRUFBYztBQUM1QixZQUFLQyxRQUFMLENBQWM7QUFBQ0YsWUFBSSxFQUFDO0FBQU4sT0FBZDs7QUFDQUcsYUFBTyxDQUFDQyxHQUFSLENBQVlILFNBQVo7QUFDSCxLOzs7Ozs7OzZCQWpDUTtBQUFBOztBQUNQLGFBQ0EsTUFBQyxxREFBRCxRQUNJLE1BQUMsNERBQUQ7QUFDQSxhQUFLLEVBQUMsWUFETjtBQUVBLHFCQUFhLEVBQUU7QUFBQ0ksaUJBQU8sRUFBQztBQUFUO0FBRmYsUUFESixFQUtJLE1BQUMsMkVBQUQ7QUFDRSxvQkFBWSxFQUFDLFNBRGY7QUFFRSxvQkFBWSxFQUFFLEtBRmhCO0FBR0UsWUFBSSxFQUFFLEtBQUtDLEtBQUwsQ0FBV04sSUFIbkI7QUFJRSxtQkFBVyxFQUFFLHFCQUFDTyxRQUFEO0FBQUEsaUJBQVksTUFBSSxDQUFDQyxlQUFMLENBQXFCRCxRQUFyQixDQUFaO0FBQUEsU0FKZjtBQUtFLGdCQUFRLEVBQUU7QUFBQSxpQkFBSSxNQUFJLENBQUNMLFFBQUwsQ0FBYztBQUFDRixnQkFBSSxFQUFDO0FBQU4sV0FBZCxDQUFKO0FBQUE7QUFMWixRQUxKLEVBYUksTUFBQyx1REFBRCxRQUNJLE1BQUMsMkRBQUQ7QUFDQSxlQUFPLEVBQUMsMEJBRFI7QUFFQSxjQUFNLEVBQUU7QUFDSkssaUJBQU8sRUFBQyxpQkFESjtBQUVKSSxrQkFBUSxFQUFDO0FBQUEsbUJBQUksTUFBSSxDQUFDUCxRQUFMLENBQWM7QUFBQ0Ysa0JBQUksRUFBQztBQUFOLGFBQWQsQ0FBSjtBQUFBO0FBRkwsU0FGUjtBQU1BLGFBQUssRUFBRUY7QUFOUCxTQVFJLHNFQVJKLENBREosQ0FiSixDQURBO0FBNEJEOzs7O0VBL0JtQlksNENBQUssQ0FBQ0MsUzs7QUFzQ1haLG9FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmY5YmYxNTg1NWM4OGZhNTk1NDA4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0VtcHR5U3RhdGUsTGF5b3V0LFBhZ2UsVGV4dFN0eWxlfSBmcm9tICdAc2hvcGlmeS9wb2xhcmlzJztcclxuaW1wb3J0IHtUaXRsZUJhcn0gZnJvbSAnQHNob3BpZnkvYXBwLWJyaWRnZSc7XHJcbmltcG9ydCB7IFJlc291cmNlUGlja2VyIH0gZnJvbSAnQHNob3BpZnkvYXBwLWJyaWRnZS9hY3Rpb25zJztcclxuXHJcblxyXG5jb25zdCBpbWcgPSAnaHR0cHM6Ly9jZG4uc2hvcGlmeS5jb20vcy9maWxlcy8xLzA3NTcvOTk1NS9maWxlcy9lbXB0eS1zdGF0ZS5zdmcnO1xyXG5jbGFzcyBJbmRleCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbnN0YXRlID0ge29wZW46ZmFsc2V9O1xyXG5yZW5kZXIoKSB7XHJcbiAgcmV0dXJuICggIFxyXG4gIDxQYWdlPlxyXG4gICAgICA8VGl0bGVCYXJcclxuICAgICAgdGl0bGU9XCJTYW1wbGUgQXBwXCJcclxuICAgICAgcHJpbWFyeUFjdGlvbj17e2NvbnRlbnQ6J1NlbGVjdCBwcm9kdWN0cyd9fVxyXG4gICAgICAvPlxyXG4gICAgICA8UmVzb3VyY2VQaWNrZXJcclxuICAgICAgICByZXNvdXJjZVR5cGU9XCJQcm9kdWN0XCJcclxuICAgICAgICBzaG93VmFyaWFudHM9e2ZhbHNlfVxyXG4gICAgICAgIG9wZW49e3RoaXMuc3RhdGUub3Blbn1cclxuICAgICAgICBvblNlbGVjdGlvbj17KHJlc291cmNlKT0+dGhpcy5oYW5kbGVTZWxlY3Rpb24ocmVzb3VyY2UpfVxyXG4gICAgICAgIG9uQ2FuY2VsPXsoKT0+dGhpcy5zZXRTdGF0ZSh7b3BlbjpmYWxzZX0pfVxyXG4gICAgICAgIC8+XHJcblxyXG4gICAgICA8TGF5b3V0PlxyXG4gICAgICAgICAgPEVtcHR5U3RhdGVcclxuICAgICAgICAgIGhlYWRpbmc9XCJTZWxlY3QgcHJvZHVjdHMgdG8gc3RhcnRcIlxyXG4gICAgICAgICAgYWN0aW9uPXt7XHJcbiAgICAgICAgICAgICAgY29udGVudDonU2VsZWN0IHByb2R1Y3RzJyxcclxuICAgICAgICAgICAgICBvbkFjdGlvbjooKT0+dGhpcy5zZXRTdGF0ZSh7b3Blbjp0cnVlfSksXHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgICAgaW1hZ2U9e2ltZ31cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8cD5TZWxlY3QgcHJvZHVjdHMgYW5kIGNoYW5nZSB0aGVpciBwcmljZSB0ZW1wb3JhcmlseTwvcD5cclxuICAgICAgICAgIDwvRW1wdHlTdGF0ZT5cclxuICAgICAgPC9MYXlvdXQ+XHJcbiAgPC9QYWdlPlxyXG4pO1xyXG59XHJcbmhhbmRsZVNlbGVjdGlvbiA9IChyZXNvdXJjZXMpID0+e1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7b3BlbjpmYWxzZX0pXHJcbiAgICBjb25zb2xlLmxvZyhyZXNvdXJjZXMpXHJcbn07XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEluZGV4OyJdLCJzb3VyY2VSb290IjoiIn0=