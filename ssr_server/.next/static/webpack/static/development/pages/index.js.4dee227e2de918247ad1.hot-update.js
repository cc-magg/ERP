webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../store */ "./store.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! immutable */ "./node_modules/immutable/dist/immutable.js");
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(immutable__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/index.js");
/* harmony import */ var _public_src_actions_index__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../public/src/actions/index */ "./public/src/actions/index.js");
/* harmony import */ var _public_src_pages_containers_home__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../public/src/pages/containers/home */ "./public/src/pages/containers/home.js");
/* harmony import */ var _localStorageOptions__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../localStorageOptions */ "./localStorageOptions.js");





var _jsxFileName = "D:\\www\\gits-proyectos\\proyecto ERP\\ERP V-2\\ssr_server\\pages\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;

function _createSuper(Derived) { return function () { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }






 //import components




var HomePage = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(HomePage, _Component);

  var _super = _createSuper(HomePage);

  function HomePage() {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, HomePage);

    return _super.apply(this, arguments);
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(HomePage, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this = this;

      /*if(LocalStorageCheckForThis('access') && this.props.result.size == 0) {
          let access = LocalStorageGetData('access');
          this.props.actions.saveUserAccess(map(JSON.parse(access)));
      }*/
      //here we use the localstorage eventlistener so that every tab from the browser listen when the logout is being called and then
      //it redirects to login all tabs from the browser (this event is called after the cookie.remove() so the login will show the form for every tab)
      //Add event listener when a restricted Page Component mounts
      window.addEventListener('storage', function (event) {
        if (event.key === 'logout') {
          _this.props.actions.saveUserAccess('');

          next_router__WEBPACK_IMPORTED_MODULE_7___default.a.push('/login');
        }
      }); //navegation Events

      next_router__WEBPACK_IMPORTED_MODULE_7___default.a.onRouteChangeStart = function (url) {
        console.log('App is changing to: ', url);

        _this.props.actions.showSpinner(true);
      };

      next_router__WEBPACK_IMPORTED_MODULE_7___default.a.onRouteChangeComplete = function (url) {
        console.log('App changed to: ', url);

        _this.props.actions.showSpinner(false);
      };
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      var _this2 = this;

      //Remove event listener when the Component unmount and delete all data
      //the second parameter must be the same as the window.addEventListener second parameter for it to work
      window.removeEventListener('storage', function (event) {
        if (event.key === 'logout') {
          _this2.props.actions.saveUserAccess('');

          next_router__WEBPACK_IMPORTED_MODULE_7___default.a.push('/login');
        }
      });
      window.localStorage.removeItem('logout');
    }
  }, {
    key: "render",
    value: function render() {
      return __jsx(_public_src_pages_containers_home__WEBPACK_IMPORTED_MODULE_11__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54,
          columnNumber: 17
        }
      });
    }
  }]);

  return HomePage;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

function mapStateToProps(state, props) {
  /*let result = map();
  let access = state.get('user').get('access');
  if(access != ''){
      result = access;
  }
  return {
      result
  }*/
}

function mapDispatchToProps(dispatch) {
  return {
    actions: Object(redux__WEBPACK_IMPORTED_MODULE_9__["bindActionCreators"])(_public_src_actions_index__WEBPACK_IMPORTED_MODULE_10__, dispatch)
  };
}

/* harmony default export */ __webpack_exports__["default"] = (Object(_store__WEBPACK_IMPORTED_MODULE_6__["initStore"])(HomePage, '', mapDispatchToProps, 'HOME'));

/***/ })

})
//# sourceMappingURL=index.js.4dee227e2de918247ad1.hot-update.js.map