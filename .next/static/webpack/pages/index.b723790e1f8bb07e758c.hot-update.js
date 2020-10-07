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
      }, __jsx("p", null, "Select products and change their price temporarily"))), __jsx(_components_ResourceList__WEBPACK_IMPORTED_MODULE_11__["default"], null));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiaW1nIiwiSW5kZXgiLCJvcGVuIiwicmVzb3VyY2VzIiwiaWRzRnJvbVJlc291cmNlcyIsInNlbGVjdGlvbiIsIm1hcCIsInByb2R1Y3QiLCJpZCIsInNldFN0YXRlIiwic3RvcmUiLCJzZXQiLCJlbXB0eVN0YXRlIiwiZ2V0IiwiY29udGVudCIsIm9uQWN0aW9uIiwic3RhdGUiLCJyZXNvdXJjZSIsImhhbmRsZVNlbGVjdGlvbiIsIlJlYWN0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFNQSxHQUFHLEdBQUcsbUVBQVo7O0lBQ01DLEs7Ozs7Ozs7Ozs7Ozs7Ozs7Z05BQ0U7QUFBQ0MsVUFBSSxFQUFDO0FBQU4sSzs7ME5BMkNVLFVBQUNDLFNBQUQsRUFBYztBQUM1QixVQUFNQyxnQkFBZ0IsR0FBR0QsU0FBUyxDQUFDRSxTQUFWLENBQW9CQyxHQUFwQixDQUF3QixVQUFDQyxPQUFEO0FBQUEsZUFBV0EsT0FBTyxDQUFDQyxFQUFuQjtBQUFBLE9BQXhCLENBQXpCOztBQUNBLFlBQUtDLFFBQUwsQ0FBYztBQUFDUCxZQUFJLEVBQUM7QUFBTixPQUFkLEVBRjRCLENBRzVCOzs7QUFDQVEsc0RBQUssQ0FBQ0MsR0FBTixDQUFVLEtBQVYsRUFBZ0JQLGdCQUFoQjtBQUNILEs7Ozs7Ozs7NkJBL0NRO0FBQUE7O0FBQ04sVUFBTVEsVUFBVSxHQUFHLENBQUNGLGdEQUFLLENBQUNHLEdBQU4sQ0FBVSxLQUFWLENBQXBCO0FBQ0QsYUFDQSxNQUFDLHFEQUFELFFBQ0ksTUFBQyxrRUFBRDtBQUNBLGFBQUssRUFBQyxZQUROO0FBRUEscUJBQWEsRUFBRTtBQUFDQyxpQkFBTyxFQUFDLGlCQUFUO0FBQ0VDLGtCQUFRLEVBQUM7QUFBQSxtQkFBSyxNQUFJLENBQUNOLFFBQUwsQ0FBYztBQUFDUCxrQkFBSSxFQUFDO0FBQU4sYUFBZCxDQUFMO0FBQUE7QUFEWDtBQUZmLFFBREosRUFRSSxNQUFDLHdFQUFEO0FBQ0Usb0JBQVksRUFBQyxTQURmO0FBRUUsb0JBQVksRUFBRSxLQUZoQjtBQUdFLFlBQUksRUFBRSxLQUFLYyxLQUFMLENBQVdkLElBSG5CO0FBSUUsbUJBQVcsRUFBRSxxQkFBQ2UsUUFBRDtBQUFBLGlCQUFZLE1BQUksQ0FBQ0MsZUFBTCxDQUFxQkQsUUFBckIsQ0FBWjtBQUFBLFNBSmY7QUFLRSxnQkFBUSxFQUFFO0FBQUEsaUJBQUksTUFBSSxDQUFDUixRQUFMLENBQWM7QUFBQ1AsZ0JBQUksRUFBQztBQUFOLFdBQWQsQ0FBSjtBQUFBO0FBTFosUUFSSixFQWdCSSxNQUFDLHVEQUFELFFBQ0ksTUFBQywyREFBRDtBQUNBLGVBQU8sRUFBQywwQkFEUjtBQUVBLGNBQU0sRUFBRTtBQUNKWSxpQkFBTyxFQUFDLGlCQURKO0FBRUpDLGtCQUFRLEVBQUM7QUFBQSxtQkFBSSxNQUFJLENBQUNOLFFBQUwsQ0FBYztBQUFDUCxrQkFBSSxFQUFDO0FBQU4sYUFBZCxDQUFKO0FBQUE7QUFGTCxTQUZSO0FBTUEsYUFBSyxFQUFFRjtBQU5QLFNBUUksc0VBUkosQ0FESixDQWhCSixFQTRCSSxNQUFDLGlFQUFELE9BNUJKLENBREE7QUFnQ0QsSyxDQUNEOztBQUNBOzs7Ozs7Ozs7O0VBdENvQm1CLDRDQUFLLENBQUNDLFM7O0FBb0RYbkIsb0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYjcyMzc5MGUxZjhiYjA3ZTc1OGMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7RW1wdHlTdGF0ZSxMYXlvdXQsUGFnZSxUZXh0U3R5bGV9IGZyb20gJ0BzaG9waWZ5L3BvbGFyaXMnO1xyXG5pbXBvcnQgeyBSZXNvdXJjZVBpY2tlciwgVGl0bGVCYXIgfSBmcm9tICdAc2hvcGlmeS9hcHAtYnJpZGdlLXJlYWN0JztcclxuaW1wb3J0IHN0b3JlIGZyb20gJ3N0b3JlLWpzJztcclxuaW1wb3J0IFJlc291cmNlTGlzdFdpdGhQcm9kdWN0cyBmcm9tICcuLi9jb21wb25lbnRzL1Jlc291cmNlTGlzdCc7XHJcbmNvbnN0IGltZyA9ICdodHRwczovL2Nkbi5zaG9waWZ5LmNvbS9zL2ZpbGVzLzEvMDc1Ny85OTU1L2ZpbGVzL2VtcHR5LXN0YXRlLnN2Zyc7XHJcbmNsYXNzIEluZGV4IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuc3RhdGUgPSB7b3BlbjpmYWxzZX07XHJcbnJlbmRlcigpIHtcclxuICAgY29uc3QgZW1wdHlTdGF0ZSA9ICFzdG9yZS5nZXQoJ2lkcycpOyBcclxuICByZXR1cm4gKCAgXHJcbiAgPFBhZ2U+XHJcbiAgICAgIDxUaXRsZUJhclxyXG4gICAgICB0aXRsZT1cIlNhbXBsZSBBcHBcIlxyXG4gICAgICBwcmltYXJ5QWN0aW9uPXt7Y29udGVudDonU2VsZWN0IHByb2R1Y3RzJyxcclxuICAgICAgICAgICAgICAgICAgICAgICBvbkFjdGlvbjooKT0+IHRoaXMuc2V0U3RhdGUoe29wZW46dHJ1ZX0pLFxyXG4gICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICBcclxuICAgICAgLz5cclxuICAgICAgPFJlc291cmNlUGlja2VyXHJcbiAgICAgICAgcmVzb3VyY2VUeXBlPVwiUHJvZHVjdFwiXHJcbiAgICAgICAgc2hvd1ZhcmlhbnRzPXtmYWxzZX1cclxuICAgICAgICBvcGVuPXt0aGlzLnN0YXRlLm9wZW59XHJcbiAgICAgICAgb25TZWxlY3Rpb249eyhyZXNvdXJjZSk9PnRoaXMuaGFuZGxlU2VsZWN0aW9uKHJlc291cmNlKX1cclxuICAgICAgICBvbkNhbmNlbD17KCk9PnRoaXMuc2V0U3RhdGUoe29wZW46ZmFsc2V9KX1cclxuICAgICAgICAvPlxyXG5cclxuICAgICAgPExheW91dD5cclxuICAgICAgICAgIDxFbXB0eVN0YXRlXHJcbiAgICAgICAgICBoZWFkaW5nPVwiU2VsZWN0IHByb2R1Y3RzIHRvIHN0YXJ0XCJcclxuICAgICAgICAgIGFjdGlvbj17e1xyXG4gICAgICAgICAgICAgIGNvbnRlbnQ6J1NlbGVjdCBwcm9kdWN0cycsXHJcbiAgICAgICAgICAgICAgb25BY3Rpb246KCk9PnRoaXMuc2V0U3RhdGUoe29wZW46dHJ1ZX0pLFxyXG4gICAgICAgICAgfX1cclxuICAgICAgICAgIGltYWdlPXtpbWd9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPHA+U2VsZWN0IHByb2R1Y3RzIGFuZCBjaGFuZ2UgdGhlaXIgcHJpY2UgdGVtcG9yYXJpbHk8L3A+XHJcbiAgICAgICAgICA8L0VtcHR5U3RhdGU+XHJcbiAgICAgIDwvTGF5b3V0PlxyXG4gICAgICA8UmVzb3VyY2VMaXN0V2l0aFByb2R1Y3RzLz5cclxuICA8L1BhZ2U+XHJcbik7XHJcbn1cclxuLy9QYXNzaW5nIGRhdGEgZnJvbSB0aGUgcmVzb3VyY2UgcGlja2VyLiBcclxuLypcclxuQXQgdGhlIHBvaW50IHlvdSBzaG91bGQgc2VlIHRoZSBtb2RhbCBvcGVuIGFuZCBjbG9zZSB3aXRoIFxyXG55b3VyIHN0b3JlJ3MgcHJvZHVjdHMgZGlzcGxheWVkLiBJZiB3ZSBzZWxlY3QgYSBwcm9kdWN0IGFuZCBjbGljayBTZWxlY3QsIHRoZW4gZWFjaCBwcm9kdWN0IHNob3VsZCBiZSBmb3VuZCBpbiB0aGUgY29uc29sZS5sb2dcclxuXHJcbk9uZSB3aWxsIHdhbnQgdG8gdGFrZSB0aG9zZSBwcm9kdWN0cyBhbmQgZGlzcGxheSB0aGUgdG8gbWVyY2hhbnRzIGluIGEgZm9ybSwgRXZlbnRpYWxseSBvbmUgd2lsbCB3cml0ZSBhIHF1ZXJ5IHRvIHRoZSBTaG9waWZ5IEdyYXBRTCBBZG1pbiBBUEksIFxyXG4qL1xyXG5oYW5kbGVTZWxlY3Rpb24gPSAocmVzb3VyY2VzKSA9PntcclxuICAgIGNvbnN0IGlkc0Zyb21SZXNvdXJjZXMgPSByZXNvdXJjZXMuc2VsZWN0aW9uLm1hcCgocHJvZHVjdCk9PnByb2R1Y3QuaWQpO1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7b3BlbjpmYWxzZX0pXHJcbiAgICAvL2NvbnNvbGUubG9nKGlkc0Zyb21SZXNvdXJjZXMpXHJcbiAgICBzdG9yZS5zZXQoJ2lkcycsaWRzRnJvbVJlc291cmNlcyk7XHJcbn07XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEluZGV4OyJdLCJzb3VyY2VSb290IjoiIn0=