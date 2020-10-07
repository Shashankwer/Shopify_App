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
/* harmony import */ var _shopify_app_bridge_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @shopify/app-bridge-react */ "./node_modules/@shopify/app-bridge-react/index.js");
/* harmony import */ var _shopify_app_bridge_react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_shopify_app_bridge_react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var store_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! store-js */ "./node_modules/store-js/dist/store.legacy.js");
/* harmony import */ var store_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(store_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _components_ResourceList__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/ResourceList */ "./components/ResourceList.js");








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
      var idsFromResources = resources.selection.map(function (product) {
        return product.id;
      });

      _this.setState({
        open: false
      }); //console.log(idsFromResources)


      store_js__WEBPACK_IMPORTED_MODULE_10___default.a.set('ids', idsFromResources);
    });

    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Index, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var emptyState = !store_js__WEBPACK_IMPORTED_MODULE_10___default.a.get('ids');
      return __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_8__["Page"], null, __jsx(_shopify_app_bridge_react__WEBPACK_IMPORTED_MODULE_9__["TitleBar"], {
        title: "Sample App",
        primaryAction: {
          content: 'Select products',
          onAction: function onAction() {
            return _this2.setState({
              open: true
            });
          }
        }
      }), __jsx(_shopify_app_bridge_react__WEBPACK_IMPORTED_MODULE_9__["ResourcePicker"], {
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
      }), emptyState ? __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_8__["Layout"], null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_8__["EmptyState"], {
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
      }, __jsx("p", null, "Select products and change their price temporarily"))) : __jsx(_components_ResourceList__WEBPACK_IMPORTED_MODULE_11__["default"], null));
    } //Passing data from the resource picker. 

    /*
    At the point you should see the modal open and close with 
    your store's products displayed. If we select a product and click Select, then each product should be found in the console.log
    
    One will want to take those products and display the to merchants in a form, Eventially one will write a query to the Shopify GrapQL Admin API, 
    */

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiaW1nIiwiSW5kZXgiLCJvcGVuIiwicmVzb3VyY2VzIiwiaWRzRnJvbVJlc291cmNlcyIsInNlbGVjdGlvbiIsIm1hcCIsInByb2R1Y3QiLCJpZCIsInNldFN0YXRlIiwic3RvcmUiLCJzZXQiLCJlbXB0eVN0YXRlIiwiZ2V0IiwiY29udGVudCIsIm9uQWN0aW9uIiwic3RhdGUiLCJyZXNvdXJjZSIsImhhbmRsZVNlbGVjdGlvbiIsIlJlYWN0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFNQSxHQUFHLEdBQUcsbUVBQVo7O0lBQ01DLEs7Ozs7Ozs7Ozs7Ozs7Ozs7Z05BQ0U7QUFBQ0MsVUFBSSxFQUFDO0FBQU4sSzs7ME5BOENVLFVBQUNDLFNBQUQsRUFBYztBQUM1QixVQUFNQyxnQkFBZ0IsR0FBR0QsU0FBUyxDQUFDRSxTQUFWLENBQW9CQyxHQUFwQixDQUF3QixVQUFDQyxPQUFEO0FBQUEsZUFBV0EsT0FBTyxDQUFDQyxFQUFuQjtBQUFBLE9BQXhCLENBQXpCOztBQUNBLFlBQUtDLFFBQUwsQ0FBYztBQUFDUCxZQUFJLEVBQUM7QUFBTixPQUFkLEVBRjRCLENBRzVCOzs7QUFDQVEsc0RBQUssQ0FBQ0MsR0FBTixDQUFVLEtBQVYsRUFBZ0JQLGdCQUFoQjtBQUNILEs7Ozs7Ozs7NkJBbERRO0FBQUE7O0FBQ04sVUFBTVEsVUFBVSxHQUFHLENBQUNGLGdEQUFLLENBQUNHLEdBQU4sQ0FBVSxLQUFWLENBQXBCO0FBRUQsYUFDQSxNQUFDLHFEQUFELFFBQ0ksTUFBQyxrRUFBRDtBQUNBLGFBQUssRUFBQyxZQUROO0FBRUEscUJBQWEsRUFBRTtBQUFDQyxpQkFBTyxFQUFDLGlCQUFUO0FBQ0VDLGtCQUFRLEVBQUM7QUFBQSxtQkFBSyxNQUFJLENBQUNOLFFBQUwsQ0FBYztBQUFDUCxrQkFBSSxFQUFDO0FBQU4sYUFBZCxDQUFMO0FBQUE7QUFEWDtBQUZmLFFBREosRUFRSSxNQUFDLHdFQUFEO0FBQ0Usb0JBQVksRUFBQyxTQURmO0FBRUUsb0JBQVksRUFBRSxLQUZoQjtBQUdFLFlBQUksRUFBRSxLQUFLYyxLQUFMLENBQVdkLElBSG5CO0FBSUUsbUJBQVcsRUFBRSxxQkFBQ2UsUUFBRDtBQUFBLGlCQUFZLE1BQUksQ0FBQ0MsZUFBTCxDQUFxQkQsUUFBckIsQ0FBWjtBQUFBLFNBSmY7QUFLRSxnQkFBUSxFQUFFO0FBQUEsaUJBQUksTUFBSSxDQUFDUixRQUFMLENBQWM7QUFBQ1AsZ0JBQUksRUFBQztBQUFOLFdBQWQsQ0FBSjtBQUFBO0FBTFosUUFSSixFQWVHVSxVQUFVLEdBRVAsTUFBQyx1REFBRCxRQUNNLE1BQUMsMkRBQUQ7QUFDRixlQUFPLEVBQUMsMEJBRE47QUFFRixjQUFNLEVBQUU7QUFDTkUsaUJBQU8sRUFBQyxpQkFERjtBQUVOQyxrQkFBUSxFQUFDO0FBQUEsbUJBQUksTUFBSSxDQUFDTixRQUFMLENBQWM7QUFBQ1Asa0JBQUksRUFBQztBQUFOLGFBQWQsQ0FBSjtBQUFBO0FBRkgsU0FGTjtBQU1KLGFBQUssRUFBRUY7QUFOSCxTQVFBLHNFQVJBLENBRE4sQ0FGTyxHQWVYLE1BQUMsaUVBQUQsT0E5QkYsQ0FEQTtBQWtDRCxLLENBQ0Q7O0FBQ0E7Ozs7Ozs7Ozs7RUF6Q29CbUIsNENBQUssQ0FBQ0MsUzs7QUF1RFhuQixvRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5mNmYyZGE0YTEwMDgyZDM4NDY3OS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtFbXB0eVN0YXRlLExheW91dCxQYWdlLFRleHRTdHlsZX0gZnJvbSAnQHNob3BpZnkvcG9sYXJpcyc7XHJcbmltcG9ydCB7IFJlc291cmNlUGlja2VyLCBUaXRsZUJhciB9IGZyb20gJ0BzaG9waWZ5L2FwcC1icmlkZ2UtcmVhY3QnO1xyXG5pbXBvcnQgc3RvcmUgZnJvbSAnc3RvcmUtanMnO1xyXG5pbXBvcnQgUmVzb3VyY2VMaXN0V2l0aFByb2R1Y3RzIGZyb20gJy4uL2NvbXBvbmVudHMvUmVzb3VyY2VMaXN0JztcclxuY29uc3QgaW1nID0gJ2h0dHBzOi8vY2RuLnNob3BpZnkuY29tL3MvZmlsZXMvMS8wNzU3Lzk5NTUvZmlsZXMvZW1wdHktc3RhdGUuc3ZnJztcclxuY2xhc3MgSW5kZXggZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG5zdGF0ZSA9IHtvcGVuOmZhbHNlfTtcclxucmVuZGVyKCkge1xyXG4gICBjb25zdCBlbXB0eVN0YXRlID0gIXN0b3JlLmdldCgnaWRzJyk7XHJcblxyXG4gIHJldHVybiAoICBcclxuICA8UGFnZT5cclxuICAgICAgPFRpdGxlQmFyXHJcbiAgICAgIHRpdGxlPVwiU2FtcGxlIEFwcFwiXHJcbiAgICAgIHByaW1hcnlBY3Rpb249e3tjb250ZW50OidTZWxlY3QgcHJvZHVjdHMnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgIG9uQWN0aW9uOigpPT4gdGhpcy5zZXRTdGF0ZSh7b3Blbjp0cnVlfSksXHJcbiAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgIFxyXG4gICAgICAvPlxyXG4gICAgICA8UmVzb3VyY2VQaWNrZXJcclxuICAgICAgICByZXNvdXJjZVR5cGU9XCJQcm9kdWN0XCJcclxuICAgICAgICBzaG93VmFyaWFudHM9e2ZhbHNlfVxyXG4gICAgICAgIG9wZW49e3RoaXMuc3RhdGUub3Blbn1cclxuICAgICAgICBvblNlbGVjdGlvbj17KHJlc291cmNlKT0+dGhpcy5oYW5kbGVTZWxlY3Rpb24ocmVzb3VyY2UpfVxyXG4gICAgICAgIG9uQ2FuY2VsPXsoKT0+dGhpcy5zZXRTdGF0ZSh7b3BlbjpmYWxzZX0pfVxyXG4gICAgICAgIC8+XHJcbiAgICB7ZW1wdHlTdGF0ZSA/IFxyXG4gICAgICAgIChcclxuICAgICAgICA8TGF5b3V0PlxyXG4gICAgICAgICAgICAgIDxFbXB0eVN0YXRlXHJcbiAgICAgICAgICAgIGhlYWRpbmc9XCJTZWxlY3QgcHJvZHVjdHMgdG8gc3RhcnRcIlxyXG4gICAgICAgICAgICBhY3Rpb249e3tcclxuICAgICAgICAgICAgICBjb250ZW50OidTZWxlY3QgcHJvZHVjdHMnLFxyXG4gICAgICAgICAgICAgIG9uQWN0aW9uOigpPT50aGlzLnNldFN0YXRlKHtvcGVuOnRydWV9KSxcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgICBpbWFnZT17aW1nfVxyXG4gICAgICAgID5cclxuICAgICAgICAgICAgICA8cD5TZWxlY3QgcHJvZHVjdHMgYW5kIGNoYW5nZSB0aGVpciBwcmljZSB0ZW1wb3JhcmlseTwvcD5cclxuICAgICAgICAgIDwvRW1wdHlTdGF0ZT5cclxuICAgICAgICA8L0xheW91dD5cclxuICApOihcclxuICAgIDxSZXNvdXJjZUxpc3RXaXRoUHJvZHVjdHMvPlxyXG4gICl9XHJcbjwvUGFnZT4pO1xyXG59XHJcbi8vUGFzc2luZyBkYXRhIGZyb20gdGhlIHJlc291cmNlIHBpY2tlci4gXHJcbi8qXHJcbkF0IHRoZSBwb2ludCB5b3Ugc2hvdWxkIHNlZSB0aGUgbW9kYWwgb3BlbiBhbmQgY2xvc2Ugd2l0aCBcclxueW91ciBzdG9yZSdzIHByb2R1Y3RzIGRpc3BsYXllZC4gSWYgd2Ugc2VsZWN0IGEgcHJvZHVjdCBhbmQgY2xpY2sgU2VsZWN0LCB0aGVuIGVhY2ggcHJvZHVjdCBzaG91bGQgYmUgZm91bmQgaW4gdGhlIGNvbnNvbGUubG9nXHJcblxyXG5PbmUgd2lsbCB3YW50IHRvIHRha2UgdGhvc2UgcHJvZHVjdHMgYW5kIGRpc3BsYXkgdGhlIHRvIG1lcmNoYW50cyBpbiBhIGZvcm0sIEV2ZW50aWFsbHkgb25lIHdpbGwgd3JpdGUgYSBxdWVyeSB0byB0aGUgU2hvcGlmeSBHcmFwUUwgQWRtaW4gQVBJLCBcclxuKi9cclxuaGFuZGxlU2VsZWN0aW9uID0gKHJlc291cmNlcykgPT57XHJcbiAgICBjb25zdCBpZHNGcm9tUmVzb3VyY2VzID0gcmVzb3VyY2VzLnNlbGVjdGlvbi5tYXAoKHByb2R1Y3QpPT5wcm9kdWN0LmlkKTtcclxuICAgIHRoaXMuc2V0U3RhdGUoe29wZW46ZmFsc2V9KVxyXG4gICAgLy9jb25zb2xlLmxvZyhpZHNGcm9tUmVzb3VyY2VzKVxyXG4gICAgc3RvcmUuc2V0KCdpZHMnLGlkc0Zyb21SZXNvdXJjZXMpO1xyXG59O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbmRleDsiXSwic291cmNlUm9vdCI6IiJ9