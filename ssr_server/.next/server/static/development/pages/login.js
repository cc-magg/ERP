module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./config.js":
/*!*******************!*\
  !*** ./config.js ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
 // settings Server

const serverPort = process.env.PORT || 8000;
const dev = true; // si el entorno es diferente a produccion, dev = true

const config = {
  googleClientId: process.env.GOOGLE_CLIENT_ID || '484011279672-pmjs5ta7itkknu6d51hr11pe6nped8ui.apps.googleusercontent.com',
  // esta info se saca de: https://console.developers.google.com/
  googleClientSecret: process.env.GOOGLE_CLIENT_SECRET || 'hyoK0KVMaFSYpEvjLF3UcDeH',
  apiUrl: process.env.API_URL || 'http://localhost:3000',
  apiKeyToken: process.env.API_KEY_TOKEN || 'b2efb508c3f2cf644a6b2454940c863d9d5a246ed415d7cdc54ae6b920afefe6'
};
module.exports = {
  serverPort,
  dev,
  config
};

/***/ }),

/***/ "./localStorageOptions.js":
/*!********************************!*\
  !*** ./localStorageOptions.js ***!
  \********************************/
/*! exports provided: LocalStorageCheckForThis, LocalStorageGetData, LocalStorageRemoveItem, LocalStorageAddItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocalStorageCheckForThis", function() { return LocalStorageCheckForThis; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocalStorageGetData", function() { return LocalStorageGetData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocalStorageRemoveItem", function() { return LocalStorageRemoveItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocalStorageAddItem", function() { return LocalStorageAddItem; });
function LocalStorageCheckForThis(searchedData) {
  //this function can return false in case it dosent exist or true 
  let result = localStorage.getItem(searchedData);

  if (result != null) {
    return true;
  } else {
    return false;
  }
}
function LocalStorageGetData(searchedData) {
  let result = localStorage.getItem(searchedData);
  return result;
}
function LocalStorageRemoveItem(item) {
  if (LocalStorageCheckForThis(item)) {
    localStorage.removeItem(item);
  }
}
function LocalStorageAddItem(key, value) {
  localStorage.setItem(key, value);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireWildcard.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _url = __webpack_require__(/*! url */ "url");

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "./node_modules/next/dist/next-server/lib/utils.js");

var _router = _interopRequireDefault(__webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js"));

function isLocal(href) {
  var url = (0, _url.parse)(href, false, true);
  var origin = (0, _url.parse)((0, _utils.getLocationOrigin)(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  var lastHref = null;
  var lastAs = null;
  var lastResult = null;
  return (href, as) => {
    if (lastResult && href === lastHref && as === lastAs) {
      return lastResult;
    }

    var result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? (0, _utils.formatWithValidation)(url) : url;
}

var observer;
var listeners = new Map();
var IntersectionObserver = false ? undefined : null;
var prefetched = {};

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (observer) {
    return observer;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      var cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        observer.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

var listenToIntersections = (el, cb) => {
  var observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }

    listeners.delete(el);
  };
};

class Link extends _react.Component {
  constructor(props) {
    super(props);
    this.p = void 0;

    this.cleanUpListeners = () => {};

    this.formatUrls = memoizedFormatUrl((href, asHref) => {
      return {
        href: formatUrl(href),
        as: asHref ? formatUrl(asHref) : asHref
      };
    });

    this.linkClicked = e => {
      var {
        nodeName,
        target
      } = e.currentTarget;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      var {
        href,
        as
      } = this.formatUrls(this.props.href, this.props.as);

      if (!isLocal(href)) {
        // ignore click if it's outside our scope (e.g. https://google.com)
        return;
      }

      var {
        pathname
      } = window.location;
      href = (0, _url.resolve)(pathname, href);
      as = as ? (0, _url.resolve)(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      var {
        scroll
      } = this.props;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      _router.default[this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: this.props.shallow
      }).then(success => {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      });
    };

    if (true) {
      if (props.prefetch) {
        console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://err.sh/zeit/next.js/prefetch-true-deprecated');
      }
    }

    this.p = props.prefetch !== false;
  }

  componentWillUnmount() {
    this.cleanUpListeners();
  }

  getPaths() {
    var {
      pathname
    } = window.location;
    var {
      href: parsedHref,
      as: parsedAs
    } = this.formatUrls(this.props.href, this.props.as);
    var resolvedHref = (0, _url.resolve)(pathname, parsedHref);
    return [resolvedHref, parsedAs ? (0, _url.resolve)(pathname, parsedAs) : resolvedHref];
  }

  handleRef(ref) {
    if (this.p && IntersectionObserver && ref && ref.tagName) {
      this.cleanUpListeners();
      var isPrefetched = prefetched[this.getPaths().join( // Join on an invalid URI character
      '%')];

      if (!isPrefetched) {
        this.cleanUpListeners = listenToIntersections(ref, () => {
          this.prefetch();
        });
      }
    }
  } // The function is memoized so that no extra lifecycles are needed
  // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html


  prefetch(options) {
    if (!this.p || true) return; // Prefetch the JSON page if asked (only in the client)

    var paths = this.getPaths(); // We need to handle a prefetch error here since we may be
    // loading with priority which can reject but we don't
    // want to force navigation since this is only a prefetch

    _router.default.prefetch(paths[
    /* href */
    0], paths[
    /* asPath */
    1], options).catch(err => {
      if (true) {
        // rethrow to show invalid URL errors
        throw err;
      }
    });

    prefetched[paths.join( // Join on an invalid URI character
    '%')] = true;
  }

  render() {
    var {
      children
    } = this.props;
    var {
      href,
      as
    } = this.formatUrls(this.props.href, this.props.as); // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

    if (typeof children === 'string') {
      children = _react.default.createElement("a", null, children);
    } // This will return the first child, if multiple are provided it will throw an error


    var child = _react.Children.only(children);

    var props = {
      ref: el => {
        this.handleRef(el);

        if (child && typeof child === 'object' && child.ref) {
          if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
            child.ref.current = el;
          }
        }
      },
      onMouseEnter: e => {
        if (child.props && typeof child.props.onMouseEnter === 'function') {
          child.props.onMouseEnter(e);
        }

        this.prefetch({
          priority: true
        });
      },
      onClick: e => {
        if (child.props && typeof child.props.onClick === 'function') {
          child.props.onClick(e);
        }

        if (!e.defaultPrevented) {
          this.linkClicked(e);
        }
      }
    }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
    // defined, we specify the current 'href', so that repetition is not needed by the user

    if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
      props.href = as || href;
    } // Add the ending slash to the paths. So, we can serve the
    // "<page>/index.html" directly.


    if (false) { var rewriteUrlForNextExport; }

    return _react.default.cloneElement(child, props);
  }

}

if (true) {
  var warn = (0, _utils.execOnce)(console.error); // This module gets removed by webpack.IgnorePlugin

  var PropTypes = __webpack_require__(/*! prop-types */ "prop-types");

  var exact = __webpack_require__(/*! prop-types-exact */ "prop-types-exact"); // @ts-ignore the property is supported, when declaring it on the class it outputs an extra bit of code which is not needed.


  Link.propTypes = exact({
    href: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
    as: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    prefetch: PropTypes.bool,
    replace: PropTypes.bool,
    shallow: PropTypes.bool,
    passHref: PropTypes.bool,
    scroll: PropTypes.bool,
    children: PropTypes.oneOfType([PropTypes.element, (props, propName) => {
      var value = props[propName];

      if (typeof value === 'string') {
        warn("Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>");
      }

      return null;
    }]).isRequired
  });
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "./node_modules/next/dist/next-server/lib/router-context.js");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter.default;
/* global window */

var singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

var urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback'];
var routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
var coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      var router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = function () {
    var router = getRouter();
    return router[field](...arguments);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, function () {
      var eventField = "on" + event.charAt(0).toUpperCase() + event.substring(1);
      var _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...arguments);
        } catch (err) {
          // tslint:disable-next-line:no-console
          console.error("Error when running the Router event: " + eventField); // tslint:disable-next-line:no-console

          console.error(err.message + "\n" + err.stack);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    var message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


var createRouter = function createRouter() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  var _router = router;
  var instance = {};

  for (var property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign({}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = function () {
      return _router[field](...arguments);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return _react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    var name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = "withRouter(" + name + ")";
  }

  return WithRouterWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/mitt.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
MIT License

Copyright (c) Jason Miller (https://jasonformat.com/)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

Object.defineProperty(exports, "__esModule", {
  value: true
});

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        // tslint:disable-next-line:no-bitwise
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

exports.default = mitt;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router-context.js":
/*!******************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router-context.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  result["default"] = mod;
  return result;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

const React = __importStar(__webpack_require__(/*! react */ "react"));

exports.RouterContext = React.createContext(null);

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/router.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");

const mitt_1 = __importDefault(__webpack_require__(/*! ../mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"));

const utils_1 = __webpack_require__(/*! ../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

const is_dynamic_1 = __webpack_require__(/*! ./utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");

const route_matcher_1 = __webpack_require__(/*! ./utils/route-matcher */ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");

const route_regex_1 = __webpack_require__(/*! ./utils/route-regex */ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js");

function addBasePath(path) {
  // variable is always a string
  const p = "";
  return path.indexOf(p) !== 0 ? p + path : path;
}

function toRoute(path) {
  return path.replace(/\/$/, '') || '/';
}

const prepareRoute = path => toRoute(!path || path === '/' ? '/index' : path);

function fetchNextData(pathname, query, isServerRender, cb) {
  let attempts = isServerRender ? 3 : 1;

  function getResponse() {
    return fetch(utils_1.formatWithValidation({
      // @ts-ignore __NEXT_DATA__
      pathname: `/_next/data/${__NEXT_DATA__.buildId}${pathname}.json`,
      query
    }), {
      // Cookies are required to be present for Next.js' SSG "Preview Mode".
      // Cookies may also be required for `getServerSideProps`.
      //
      // > `fetch` won’t send cookies, unless you set the credentials init
      // > option.
      // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
      //
      // > For maximum browser compatibility when it comes to sending &
      // > receiving cookies, always supply the `credentials: 'same-origin'`
      // > option instead of relying on the default.
      // https://github.com/github/fetch#caveats
      credentials: 'same-origin'
    }).then(res => {
      if (!res.ok) {
        if (--attempts > 0 && res.status >= 500) {
          return getResponse();
        }

        throw new Error(`Failed to load static props`);
      }

      return res.json();
    });
  }

  return getResponse().then(data => {
    return cb ? cb(data) : data;
  }).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      ;
      err.code = 'PAGE_LOAD_ERROR';
    }

    throw err;
  });
}

class Router {
  constructor(pathname, query, as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription,
    isFallback
  }) {
    // Static Data Cache
    this.sdc = {};

    this.onPopState = e => {
      if (!e.state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', utils_1.formatWithValidation({
          pathname,
          query
        }), utils_1.getURL());
        return;
      } // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site


      if (e.state && this.isSsr && e.state.as === this.asPath && url_1.parse(e.state.url).pathname === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(e.state)) {
        return;
      }

      const {
        url,
        as,
        options
      } = e.state;

      if (true) {
        if (typeof url === 'undefined' || typeof as === 'undefined') {
          console.warn('`popstate` event triggered but `event.state` did not have `url` or `as` https://err.sh/zeit/next.js/popstate-state-empty');
        }
      }

      this.replace(url, as, options);
    };

    this._getStaticData = asPath => {
      const pathname = prepareRoute(url_1.parse(asPath).pathname);
      return  false ? undefined : fetchNextData(pathname, null, this.isSsr, data => this.sdc[pathname] = data);
    };

    this._getServerData = asPath => {
      let {
        pathname,
        query
      } = url_1.parse(asPath, true);
      pathname = prepareRoute(pathname);
      return fetchNextData(pathname, query, this.isSsr);
    }; // represents the current component key


    this.route = toRoute(pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        props: initialProps,
        err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = pathname;
    this.query = query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    is_dynamic_1.isDynamicRoute(pathname) && __NEXT_DATA__.autoExport ? pathname : as;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;

    if (false) {}
  } // @deprecated backwards compatibility even though it's a private method.


  static _rewriteUrlForNextExport(url) {
    if (false) {} else {
      return url;
    }
  }

  update(route, mod) {
    const Component = mod.default || mod;
    const data = this.components[route];

    if (!data) {
      throw new Error(`Cannot update unavailable route: ${route}`);
    }

    const newData = Object.assign(Object.assign({}, data), {
      Component,
      __N_SSG: mod.__N_SSG,
      __N_SSP: mod.__N_SSP
    });
    this.components[route] = newData; // pages/_app.js updated

    if (route === '/_app') {
      this.notify(this.components[this.route]);
      return;
    }

    if (route === this.route) {
      this.notify(newData);
    }
  }

  reload() {
    window.location.reload();
  }
  /**
   * Go back in history
   */


  back() {
    window.history.back();
  }
  /**
   * Performs a `pushState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  push(url, as = url, options = {}) {
    return this.change('pushState', url, as, options);
  }
  /**
   * Performs a `replaceState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  replace(url, as = url, options = {}) {
    return this.change('replaceState', url, as, options);
  }

  change(method, _url, _as, options) {
    return new Promise((resolve, reject) => {
      if (!options._h) {
        this.isSsr = false;
      } // marking route changes as a navigation start entry


      if (utils_1.ST) {
        performance.mark('routeChange');
      } // If url and as provided as an object representation,
      // we'll format them into the string version here.


      const url = typeof _url === 'object' ? utils_1.formatWithValidation(_url) : _url;
      let as = typeof _as === 'object' ? utils_1.formatWithValidation(_as) : _as; // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly for the SSR page.

      if (false) {}

      this.abortComponentLoad(as); // If the url change is only related to a hash change
      // We should not proceed. We should only change the state.
      // WARNING: `_h` is an internal option for handing Next.js client-side
      // hydration. Your app should _never_ use this property. It may change at
      // any time without notice.

      if (!options._h && this.onlyAHashChange(as)) {
        this.asPath = as;
        Router.events.emit('hashChangeStart', as);
        this.changeState(method, url, addBasePath(as), options);
        this.scrollToHash(as);
        Router.events.emit('hashChangeComplete', as);
        return resolve(true);
      }

      const {
        pathname,
        query,
        protocol
      } = url_1.parse(url, true);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/zeit/next.js/invalid-href-passed`);
        }

        return resolve(false);
      } // If asked to change the current URL we should reload the current page
      // (not location.reload() but reload getInitialProps and other Next.js stuffs)
      // We also need to set the method = replaceState always
      // as this should not go into the history (That's how browsers work)
      // We should compare the new asPath to the current asPath, not the url


      if (!this.urlIsNew(as)) {
        method = 'replaceState';
      }

      const route = toRoute(pathname);
      const {
        shallow = false
      } = options;

      if (is_dynamic_1.isDynamicRoute(route)) {
        const {
          pathname: asPathname
        } = url_1.parse(as);
        const routeRegex = route_regex_1.getRouteRegex(route);
        const routeMatch = route_matcher_1.getRouteMatcher(routeRegex)(asPathname);

        if (!routeMatch) {
          const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

          if (missingParams.length > 0) {
            if (true) {
              console.warn(`Mismatching \`as\` and \`href\` failed to manually provide ` + `the params: ${missingParams.join(', ')} in the \`href\`'s \`query\``);
            }

            return reject(new Error(`The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). ` + `Read more: https://err.sh/zeit/next.js/incompatible-href-as`));
          }
        } else {
          // Merge params into `query`, overwriting any specified in search
          Object.assign(query, routeMatch);
        }
      }

      Router.events.emit('routeChangeStart', as); // If shallow is true and the route exists in the router cache we reuse the previous result

      this.getRouteInfo(route, pathname, query, as, shallow).then(routeInfo => {
        const {
          error
        } = routeInfo;

        if (error && error.cancelled) {
          return resolve(false);
        }

        Router.events.emit('beforeHistoryChange', as);
        this.changeState(method, url, addBasePath(as), options);

        if (true) {
          const appComp = this.components['/_app'].Component;
          window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
        }

        this.set(route, pathname, query, as, routeInfo);

        if (error) {
          Router.events.emit('routeChangeError', error, as);
          throw error;
        }

        Router.events.emit('routeChangeComplete', as);
        return resolve(true);
      }, reject);
    });
  }

  changeState(method, url, as, options = {}) {
    if (true) {
      if (typeof window.history === 'undefined') {
        console.error(`Warning: window.history is not available.`);
        return;
      }

      if (typeof window.history[method] === 'undefined') {
        console.error(`Warning: window.history.${method} is not available`);
        return;
      }
    }

    if (method !== 'pushState' || utils_1.getURL() !== as) {
      window.history[method]({
        url,
        as,
        options
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  getRouteInfo(route, pathname, query, as, shallow = false) {
    const cachedRouteInfo = this.components[route]; // If there is a shallow route transition possible
    // If the route is already rendered on the screen.

    if (shallow && cachedRouteInfo && this.route === route) {
      return Promise.resolve(cachedRouteInfo);
    }

    const handleError = (err, loadErrorFail) => {
      return new Promise(resolve => {
        if (err.code === 'PAGE_LOAD_ERROR' || loadErrorFail) {
          // If we can't load the page it could be one of following reasons
          //  1. Page doesn't exists
          //  2. Page does exist in a different zone
          //  3. Internal error while loading the page
          // So, doing a hard reload is the proper way to deal with this.
          window.location.href = as; // Changing the URL doesn't block executing the current code path.
          // So, we need to mark it as a cancelled error and stop the routing logic.

          err.cancelled = true; // @ts-ignore TODO: fix the control flow here

          return resolve({
            error: err
          });
        }

        if (err.cancelled) {
          // @ts-ignore TODO: fix the control flow here
          return resolve({
            error: err
          });
        }

        resolve(this.fetchComponent('/_error').then(res => {
          const {
            page: Component
          } = res;
          const routeInfo = {
            Component,
            err
          };
          return new Promise(resolve => {
            this.getInitialProps(Component, {
              err,
              pathname,
              query
            }).then(props => {
              routeInfo.props = props;
              routeInfo.error = err;
              resolve(routeInfo);
            }, gipErr => {
              console.error('Error in error page `getInitialProps`: ', gipErr);
              routeInfo.error = err;
              routeInfo.props = {};
              resolve(routeInfo);
            });
          });
        }).catch(err => handleError(err, true)));
      });
    };

    return new Promise((resolve, reject) => {
      if (cachedRouteInfo) {
        return resolve(cachedRouteInfo);
      }

      this.fetchComponent(route).then(res => resolve({
        Component: res.page,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }), reject);
    }).then(routeInfo => {
      const {
        Component,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (true) {
        const {
          isValidElementType
        } = __webpack_require__(/*! react-is */ "./node_modules/next/node_modules/react-is/index.js");

        if (!isValidElementType(Component)) {
          throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
      }

      return this._getData(() => __N_SSG ? this._getStaticData(as) : __N_SSP ? this._getServerData(as) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      })).then(props => {
        routeInfo.props = props;
        this.components[route] = routeInfo;
        return routeInfo;
      });
    }).catch(handleError);
  }

  set(route, pathname, query, as, data) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    this.notify(data);
  }
  /**
   * Callback to execute before replacing router state
   * @param cb callback to be executed
   */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
   * Prefetch page code, you may wait for the data during page rendering.
   * This feature only works in production!
   * @param url the href of prefetched page
   * @param asPath the as path of the prefetched page
   */


  prefetch(url, asPath = url, options = {}) {
    return new Promise((resolve, reject) => {
      const {
        pathname,
        protocol
      } = url_1.parse(url);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/zeit/next.js/invalid-href-passed`);
        }

        return;
      } // Prefetch is not supported in development mode because it would trigger on-demand-entries


      if (true) {
        return;
      }

      Promise.all([this.pageLoader.prefetchData(url, asPath), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](toRoute(pathname))]).then(() => resolve(), reject);
    });
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return utils_1.loadGetInitialProps(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as) {
    if (this.clc) {
      const e = new Error('Route Cancelled');
      e.cancelled = true;
      Router.events.emit('routeChangeError', e, as);
      this.clc();
      this.clc = null;
    }
  }

  notify(data) {
    this.sub(data, this.components['/_app'].Component);
  }

}

exports.default = Router;
Router.events = mitt_1.default();

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
}); // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

exports.isDynamicRoute = isDynamicRoute;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = decodeURIComponent;
    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

exports.getRouteMatcher = getRouteMatcher;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function getRouteRegex(normalizedRoute) {
  // Escape all characters that could be considered RegEx
  const escapedRoute = (normalizedRoute.replace(/\/$/, '') || '/').replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = escapedRoute.replace(/\/\\\[([^/]+?)\\\](?=\/|$)/g, (_, $1) => {
    const isCatchAll = /^(\\\.){3}/.test($1);
    groups[$1 // Un-escape key
    .replace(/\\([|\\{}()[\]^$+*?.-])/g, '$1').replace(/^\.{3}/, '') // eslint-disable-next-line no-sequences
    ] = {
      pos: groupIndex++,
      repeat: isCatchAll
    };
    return isCatchAll ? '/(.+?)' : '/([^/]+?)';
  });
  return {
    re: new RegExp('^' + parameterizedRoute + '(?:/)?$', 'i'),
    groups
  };
}

exports.getRouteRegex = getRouteRegex;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");
/**
 * Utils
 */


function execOnce(fn) {
  let used = false;
  let result = null;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn.apply(this, args);
    }

    return result;
  };
}

exports.execOnce = execOnce;

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

exports.getLocationOrigin = getLocationOrigin;

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

exports.getURL = getURL;

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

exports.getDisplayName = getDisplayName;

function isResSent(res) {
  return res.finished || res.headersSent;
}

exports.isResSent = isResSent;

async function loadGetInitialProps(App, ctx) {
  var _a;

  if (true) {
    if ((_a = App.prototype) === null || _a === void 0 ? void 0 : _a.getInitialProps) {
      const message = `"${getDisplayName(App)}.getInitialProps()" is defined as an instance method - visit https://err.sh/zeit/next.js/get-initial-props-as-an-instance-method for more information.`;
      throw new Error(message);
    }
  } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (true) {
    if (Object.keys(props).length === 0 && !ctx.ctx) {
      console.warn(`${getDisplayName(App)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://err.sh/zeit/next.js/empty-object-getInitialProps`);
    }
  }

  return props;
}

exports.loadGetInitialProps = loadGetInitialProps;
exports.urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];

function formatWithValidation(url, options) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      Object.keys(url).forEach(key => {
        if (exports.urlObjectKeys.indexOf(key) === -1) {
          console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
        }
      });
    }
  }

  return url_1.format(url, options);
}

exports.formatWithValidation = formatWithValidation;
exports.SP = typeof performance !== 'undefined';
exports.ST = exports.SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./node_modules/next/node_modules/react-is/cjs/react-is.development.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/next/node_modules/react-is/cjs/react-is.development.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.8.6
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





if (true) {
  (function() {
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;

var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace;
var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' ||
  // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE);
}

/**
 * Forked from fbjs/warning:
 * https://github.com/facebook/fbjs/blob/e66ba20ad5be433eb54423f2b097d829324d9de6/packages/fbjs/src/__forks__/warning.js
 *
 * Only change is we use console.warn instead of console.error,
 * and do nothing when 'console' is not supported.
 * This really simplifies the code.
 * ---
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var lowPriorityWarning = function () {};

{
  var printWarning = function (format) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    var argIndex = 0;
    var message = 'Warning: ' + format.replace(/%s/g, function () {
      return args[argIndex++];
    });
    if (typeof console !== 'undefined') {
      console.warn(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };

  lowPriorityWarning = function (condition, format) {
    if (format === undefined) {
      throw new Error('`lowPriorityWarning(condition, format, ...args)` requires a warning ' + 'message argument');
    }
    if (!condition) {
      for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        args[_key2 - 2] = arguments[_key2];
      }

      printWarning.apply(undefined, [format].concat(args));
    }
  };
}

var lowPriorityWarning$1 = lowPriorityWarning;

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;
    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
            return type;
          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;
              default:
                return $$typeof;
            }
        }
      case REACT_LAZY_TYPE:
      case REACT_MEMO_TYPE:
      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
}

// AsyncMode is deprecated along with isAsyncMode
var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;

var hasWarnedAboutDeprecatedIsAsyncMode = false;

// AsyncMode should be deprecated
function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true;
      lowPriorityWarning$1(false, 'The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }
  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.typeOf = typeOf;
exports.AsyncMode = AsyncMode;
exports.ConcurrentMode = ConcurrentMode;
exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isValidElementType = isValidElementType;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
  })();
}


/***/ }),

/***/ "./node_modules/next/node_modules/react-is/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/next/node_modules/react-is/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-is.development.js */ "./node_modules/next/node_modules/react-is/cjs/react-is.development.js");
}


/***/ }),

/***/ "./pages/login.js":
/*!************************!*\
  !*** ./pages/login.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../store */ "./store.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! immutable */ "immutable");
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(immutable__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _public_src_actions_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../public/src/actions/index */ "./public/src/actions/index.js");
/* harmony import */ var _localStorageOptions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../localStorageOptions */ "./localStorageOptions.js");
/* harmony import */ var _public_src_pages_containers_login__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../public/src/pages/containers/login */ "./public/src/pages/containers/login.js");
var _jsxFileName = "D:\\www\\gits-proyectos\\proyecto ERP\\ERP V-2\\ssr_server\\pages\\login.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;









class Login extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  //aqui no hacemos validaciones de sesion (cookie auth) por que a esta vista se puede entrar sin estar autenticado
  componentDidMount() {
    //navegation Events
    next_router__WEBPACK_IMPORTED_MODULE_2___default.a.onRouteChangeStart = url => {
      console.log('App is changing to: ', url);
      this.props.actions.showSpinner(true);
    };

    next_router__WEBPACK_IMPORTED_MODULE_2___default.a.onRouteChangeComplete = url => {
      console.log('App changed to: ', url);
      this.props.actions.showSpinner(false);
    };
  }

  render() {
    return __jsx(_public_src_pages_containers_login__WEBPACK_IMPORTED_MODULE_7__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 17
      }
    });
  }

}

function mapStateToProps(state, props) {
  return {
    state
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: Object(redux__WEBPACK_IMPORTED_MODULE_4__["bindActionCreators"])(_public_src_actions_index__WEBPACK_IMPORTED_MODULE_5__, dispatch)
  };
}

/* harmony default export */ __webpack_exports__["default"] = (Object(_store__WEBPACK_IMPORTED_MODULE_1__["initStore"])(Login, mapStateToProps, mapDispatchToProps, 'LOGIN'));

/***/ }),

/***/ "./public/src/action-types/index.js":
/*!******************************************!*\
  !*** ./public/src/action-types/index.js ***!
  \******************************************/
/*! exports provided: ADD_NEW_MESSAGE, UPDATE_API_DATA, CREATE_BURN_AGENT, CALL_METRICS, SET_API_DATA, CALL_USER_ACCESS, SAVE_USER_ACCESS, SAVE_NEW_USER_ACCESS, REMOVE_USER_ACCESS, SAVE_LOGIN_ERROR, SHOW_SPINNER_STATUS, CALL_PROFESORS, SAVE_PROFESORS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_NEW_MESSAGE", function() { return ADD_NEW_MESSAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_API_DATA", function() { return UPDATE_API_DATA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CREATE_BURN_AGENT", function() { return CREATE_BURN_AGENT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CALL_METRICS", function() { return CALL_METRICS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_API_DATA", function() { return SET_API_DATA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CALL_USER_ACCESS", function() { return CALL_USER_ACCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SAVE_USER_ACCESS", function() { return SAVE_USER_ACCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SAVE_NEW_USER_ACCESS", function() { return SAVE_NEW_USER_ACCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_USER_ACCESS", function() { return REMOVE_USER_ACCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SAVE_LOGIN_ERROR", function() { return SAVE_LOGIN_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SHOW_SPINNER_STATUS", function() { return SHOW_SPINNER_STATUS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CALL_PROFESORS", function() { return CALL_PROFESORS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SAVE_PROFESORS", function() { return SAVE_PROFESORS; });
//dado que el type de cada accion se llama minimo 2 veces (en el reducer y en el action) es mejor
//tener este archivo para asi evitar errores de typeo
const ADD_NEW_MESSAGE = 'ADD_NEW_MESSAGE';
const UPDATE_API_DATA = 'UPDATE_API_DATA';
const CREATE_BURN_AGENT = 'CREATE_BURN_AGENT';
const CALL_METRICS = 'CALL_METRICS';
const SET_API_DATA = 'SET_API_DATA';
const CALL_USER_ACCESS = 'CALL_USER_ACCESS';
const SAVE_USER_ACCESS = 'SAVE_USER_ACCESS';
const SAVE_NEW_USER_ACCESS = 'SAVE_NEW_USER_ACCESS';
const REMOVE_USER_ACCESS = 'REMOVE_USER_ACCESS';
const SAVE_LOGIN_ERROR = 'SAVE_LOGIN_ERROR';
const SHOW_SPINNER_STATUS = 'SHOW_SPINNER_STATUS';
const CALL_PROFESORS = 'CALL_PROFESORS';
const SAVE_PROFESORS = 'SAVE_PROFESORS';

/***/ }),

/***/ "./public/src/actions/index.js":
/*!*************************************!*\
  !*** ./public/src/actions/index.js ***!
  \*************************************/
/*! exports provided: callProfesors, saveProfesors, showSpinner, saveUserAccess, saveUserTokenAndDeleteOldErrors, removeUserAccess, callUserAccess, saveLoginError, setApiData, addNewMessage, createBurnAgent, updateApiData, callMetrics */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "callProfesors", function() { return callProfesors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saveProfesors", function() { return saveProfesors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showSpinner", function() { return showSpinner; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saveUserAccess", function() { return saveUserAccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saveUserTokenAndDeleteOldErrors", function() { return saveUserTokenAndDeleteOldErrors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeUserAccess", function() { return removeUserAccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "callUserAccess", function() { return callUserAccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saveLoginError", function() { return saveLoginError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setApiData", function() { return setApiData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addNewMessage", function() { return addNewMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createBurnAgent", function() { return createBurnAgent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateApiData", function() { return updateApiData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "callMetrics", function() { return callMetrics; });
/* harmony import */ var _action_types_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../action-types/index.js */ "./public/src/action-types/index.js");
 //import { List as list } from 'immutable';
//import axios from 'axios';
//const dataTest = [{"id":2278,"type":"rss","value":"41275392","createdAt":"2018-02-28T17:35:53.316Z"},{"id":2275,"type":"rss","value":"41230336","createdAt":"2018-02-28T17:35:51.300Z"},{"id":2272,"type":"rss","value":"40923136","createdAt":"2018-02-28T17:35:49.313Z"},{"id":2269,"type":"rss","value":"40644608","createdAt":"2018-02-28T17:35:47.723Z"},{"id":2266,"type":"rss","value":"40869888","createdAt":"2018-02-19T21:59:10.480Z"},{"id":2263,"type":"rss","value":"40824832","createdAt":"2018-02-19T21:59:08.492Z"},{"id":2260,"type":"rss","value":"40783872","createdAt":"2018-02-19T21:59:06.499Z"},{"id":2257,"type":"rss","value":"40361984","createdAt":"2018-02-19T21:59:04.552Z"},{"id":2254,"type":"rss","value":"42201088","createdAt":"2018-02-19T03:57:41.620Z"},{"id":2251,"type":"rss","value":"42156032","createdAt":"2018-02-19T03:57:39.548Z"},{"id":2248,"type":"rss","value":"42115072","createdAt":"2018-02-19T03:57:37.587Z"},{"id":2245,"type":"rss","value":"42070016","createdAt":"2018-02-19T03:57:35.535Z"},{"id":2242,"type":"rss","value":"42024960","createdAt":"2018-02-19T03:57:33.547Z"},{"id":2239,"type":"rss","value":"41984000","createdAt":"2018-02-19T03:57:31.522Z"},{"id":2236,"type":"rss","value":"41938944","createdAt":"2018-02-19T03:57:29.644Z"},{"id":2233,"type":"rss","value":"41897984","createdAt":"2018-02-19T03:57:27.529Z"},{"id":2230,"type":"rss","value":"41852928","createdAt":"2018-02-19T03:57:25.515Z"},{"id":2227,"type":"rss","value":"41807872","createdAt":"2018-02-19T03:57:23.513Z"},{"id":2224,"type":"rss","value":"41771008","createdAt":"2018-02-19T03:57:21.518Z"},{"id":2221,"type":"rss","value":"41717760","createdAt":"2018-02-19T03:57:19.590Z"}];

function callProfesors(data) {
  return {
    type: _action_types_index_js__WEBPACK_IMPORTED_MODULE_0__["CALL_PROFESORS"],
    payload: {
      data
    }
  };
}
function saveProfesors(profesorsAction) {
  return {
    type: _action_types_index_js__WEBPACK_IMPORTED_MODULE_0__["SAVE_PROFESORS"],
    payload: {
      profesorsAction
    }
  };
}
function showSpinner(status) {
  return {
    type: _action_types_index_js__WEBPACK_IMPORTED_MODULE_0__["SHOW_SPINNER_STATUS"],
    payload: {
      status
    }
  };
}
function saveUserAccess(userAccess) {
  return {
    type: _action_types_index_js__WEBPACK_IMPORTED_MODULE_0__["SAVE_USER_ACCESS"],
    payload: {
      userAccess
    }
  };
}
function saveUserTokenAndDeleteOldErrors(userAccess) {
  return {
    type: _action_types_index_js__WEBPACK_IMPORTED_MODULE_0__["SAVE_NEW_USER_ACCESS"],
    payload: {
      userAccess
    }
  };
}
function removeUserAccess() {
  return {
    type: _action_types_index_js__WEBPACK_IMPORTED_MODULE_0__["REMOVE_USER_ACCESS"]
  };
}
function callUserAccess(user, password) {
  return {
    type: _action_types_index_js__WEBPACK_IMPORTED_MODULE_0__["CALL_USER_ACCESS"],
    payload: {
      user,
      password
    }
  };
}
function saveLoginError(error) {
  return {
    type: _action_types_index_js__WEBPACK_IMPORTED_MODULE_0__["SAVE_LOGIN_ERROR"],
    payload: {
      error
    }
  };
}
function setApiData(apiData) {
  return {
    type: _action_types_index_js__WEBPACK_IMPORTED_MODULE_0__["SET_API_DATA"],
    payload: {
      apiData,
      newData: true
    }
  };
}
function addNewMessage(message, userID) {
  return {
    type: ADD_NEW_MESSAGE,
    payload: {
      message: message,
      userID: userID
    }
  };
}
function createBurnAgent(uuid, type) {
  return {
    type: CREATE_BURN_AGENT,
    payload: {
      uuid: uuid,
      type: type
    }
  };
}
function updateApiData(apiData) {
  return {
    type: UPDATE_API_DATA,
    payload: {
      apiData: apiData,
      newData: true
    }
  };
}
function callMetrics(uuid, type) {
  return {
    type: CALL_METRICS,
    payload: {
      uuid,
      type
    }
  };
}
/*export function callMetrics(uuid, type) {
    return dispatch => {
        return axios.get(`http://localhost:8080/metrics/${uuid}/${type}`)
        .then(response => {
            //console.log(response.data);
            dispatch(setApiData(response.data));
        })
    }
}*/

/***/ }),

/***/ "./public/src/api.json":
/*!*****************************!*\
  !*** ./public/src/api.json ***!
  \*****************************/
/*! exports provided: message, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"message\":\"Hola Arturo :D\"}");

/***/ }),

/***/ "./public/src/components/error/component/regular-error.js":
/*!****************************************************************!*\
  !*** ./public/src/components/error/component/regular-error.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "D:\\www\\gits-proyectos\\proyecto ERP\\ERP V-2\\ssr_server\\public\\src\\components\\error\\component\\regular-error.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


function RegularError(props) {
  console.log('informacion del error: ' + props.errorInfo);
  return __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 5
    }
  }, __jsx("h1", {
    style: {
      color: 'white'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 9
    }
  }, "upps hay un error"));
}

/* harmony default export */ __webpack_exports__["default"] = (RegularError);

/***/ }),

/***/ "./public/src/components/error/container/handle-error.js":
/*!***************************************************************!*\
  !*** ./public/src/components/error/container/handle-error.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _component_regular_error_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../component/regular-error.js */ "./public/src/components/error/component/regular-error.js");
var _jsxFileName = "D:\\www\\gits-proyectos\\proyecto ERP\\ERP V-2\\ssr_server\\public\\src\\components\\error\\container\\handle-error.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




class HandleError extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      handleError: false,
      errorInfo: ''
    });

    _defineProperty(this, "componentDidCatch", (error, errorInfo) => {
      this.setState({
        handleError: true,
        errorInfo: errorInfo
      });
    });
  }

  render() {
    if (this.state.handleError) {
      return __jsx(_component_regular_error_js__WEBPACK_IMPORTED_MODULE_1__["default"], {
        errorInfo: this.state.errorInfo,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18,
          columnNumber: 20
        }
      });
    } else {
      return __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20,
          columnNumber: 21
        }
      }, this.props.children);
    }
  }

}

/* harmony default export */ __webpack_exports__["default"] = (HandleError);

/***/ }),

/***/ "./public/src/components/form-login/components/form.js":
/*!*************************************************************!*\
  !*** ./public/src/components/form-login/components/form.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "D:\\www\\gits-proyectos\\proyecto ERP\\ERP V-2\\ssr_server\\public\\src\\components\\form-login\\components\\form.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



const FormLogin = props => {
  let color = props.baseColor ? props.baseColor : '';
  return __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Form"], {
    horizontal: true,
    onSubmit: props.handleSubmit,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 9
    }
  }, color != '' && __jsx("h4", {
    style: {
      color: color
    },
    className: "jsx-2618757967" + " " + "title",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 30
    }
  }, "Member Login"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["FormGroup"], {
    controlId: "formHorizontalEmail",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 13
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    sm: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 17
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["FormControl"], {
    type: "text",
    placeholder: "UserName",
    name: "userName",
    inputRef: props.setRef,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 17
    }
  }))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["FormGroup"], {
    controlId: "formHorizontalPassword",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 13
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    sm: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 17
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["FormControl"], {
    type: "password",
    placeholder: "Password",
    name: "password",
    inputRef: props.setRef,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 17
    }
  }))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["FormGroup"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 13
    }
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Col"], {
    sm: 12,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 17
    }
  }, color != '' ? __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    style: {
      background: color,
      color: '#FFFFFF',
      fontSize: 15
    },
    bsSize: "lg",
    block: true,
    type: "submit",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 36
    }
  }, "LOGIN") : __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    style: {
      fontSize: 15
    },
    bsStyle: "primary",
    bsSize: "lg",
    block: true,
    type: "submit",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 21
    }
  }, "LOGIN"))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2618757967",
    __self: undefined
  }, ".title.jsx-2618757967{text-align:center;font-weight:bold;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFx3d3dcXGdpdHMtcHJveWVjdG9zXFxwcm95ZWN0byBFUlBcXEVSUCBWLTJcXHNzcl9zZXJ2ZXJcXHB1YmxpY1xcc3JjXFxjb21wb25lbnRzXFxmb3JtLWxvZ2luXFxjb21wb25lbnRzXFxmb3JtLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW1Dd0IsQUFHdUMsa0JBQ0QsaUJBQ3JCIiwiZmlsZSI6IkQ6XFx3d3dcXGdpdHMtcHJveWVjdG9zXFxwcm95ZWN0byBFUlBcXEVSUCBWLTJcXHNzcl9zZXJ2ZXJcXHB1YmxpY1xcc3JjXFxjb21wb25lbnRzXFxmb3JtLWxvZ2luXFxjb21wb25lbnRzXFxmb3JtLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgRm9ybSwgRm9ybUdyb3VwLCBDb2wsIENvbnRyb2xMYWJlbCwgRm9ybUNvbnRyb2wsIENoZWNrYm94LCBCdXR0b24gfSBmcm9tICdyZWFjdC1ib290c3RyYXAnO1xyXG5cclxuY29uc3QgRm9ybUxvZ2luID0gcHJvcHMgPT4ge1xyXG4gICAgbGV0IGNvbG9yID0gKHByb3BzLmJhc2VDb2xvcik/IHByb3BzLmJhc2VDb2xvciA6ICcnO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8Rm9ybSBob3Jpem9udGFsIG9uU3VibWl0PXtwcm9wcy5oYW5kbGVTdWJtaXR9PlxyXG4gICAgICAgICAgICB7KGNvbG9yICE9ICcnKSYmIDxoNCBzdHlsZT17e2NvbG9yOiBjb2xvcn19IGNsYXNzTmFtZT1cInRpdGxlXCI+TWVtYmVyIExvZ2luPC9oND59XHJcbiAgICAgICAgICAgIDxGb3JtR3JvdXAgY29udHJvbElkPVwiZm9ybUhvcml6b250YWxFbWFpbFwiPlxyXG4gICAgICAgICAgICAgICAgey8qPENvbCBjb21wb25lbnRDbGFzcz17Q29udHJvbExhYmVsfSBzbT17MTJ9PlxyXG4gICAgICAgICAgICAgICAgVXNlck5hbWVcclxuICAgICAgICAgICAgICAgIDwvQ29sPiovfVxyXG4gICAgICAgICAgICAgICAgPENvbCBzbT17MTJ9PlxyXG4gICAgICAgICAgICAgICAgPEZvcm1Db250cm9sIHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJVc2VyTmFtZVwiIG5hbWU9XCJ1c2VyTmFtZVwiIGlucHV0UmVmPXtwcm9wcy5zZXRSZWZ9IC8+XHJcbiAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgPC9Gb3JtR3JvdXA+XHJcblxyXG4gICAgICAgICAgICA8Rm9ybUdyb3VwIGNvbnRyb2xJZD1cImZvcm1Ib3Jpem9udGFsUGFzc3dvcmRcIj5cclxuICAgICAgICAgICAgICAgIHsvKjxDb2wgY29tcG9uZW50Q2xhc3M9e0NvbnRyb2xMYWJlbH0gc209ezJ9PlxyXG4gICAgICAgICAgICAgICAgUGFzc3dvcmRcclxuICAgICAgICAgICAgICAgIDwvQ29sPiovfVxyXG4gICAgICAgICAgICAgICAgPENvbCBzbT17MTJ9PlxyXG4gICAgICAgICAgICAgICAgPEZvcm1Db250cm9sIHR5cGU9XCJwYXNzd29yZFwiIHBsYWNlaG9sZGVyPVwiUGFzc3dvcmRcIiBuYW1lPVwicGFzc3dvcmRcIiBpbnB1dFJlZj17cHJvcHMuc2V0UmVmfSAvPlxyXG4gICAgICAgICAgICAgICAgPC9Db2w+XHJcbiAgICAgICAgICAgIDwvRm9ybUdyb3VwPlxyXG5cclxuICAgICAgICAgICAgPEZvcm1Hcm91cD5cclxuICAgICAgICAgICAgICAgIDxDb2wgc209ezEyfT5cclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAoY29sb3IgIT0gJycpPyA8QnV0dG9uIHN0eWxlPXt7YmFja2dyb3VuZDogY29sb3IsIGNvbG9yOiAnI0ZGRkZGRicsIGZvbnRTaXplOiAxNX19IGJzU2l6ZT1cImxnXCIgYmxvY2sgdHlwZT1cInN1Ym1pdFwiPkxPR0lOPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gc3R5bGU9e3tmb250U2l6ZTogMTV9fSBic1N0eWxlPVwicHJpbWFyeVwiIGJzU2l6ZT1cImxnXCIgYmxvY2sgdHlwZT1cInN1Ym1pdFwiPkxPR0lOPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA8L0NvbD5cclxuICAgICAgICAgICAgPC9Gb3JtR3JvdXA+XHJcbiAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAgICAgICAgIC50aXRsZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgICAgICAgfWBcclxuICAgICAgICAgICAgfTwvc3R5bGU+XHJcbiAgICAgICAgPC9Gb3JtPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGb3JtTG9naW47Il19 */\n/*@ sourceURL=D:\\\\www\\\\gits-proyectos\\\\proyecto ERP\\\\ERP V-2\\\\ssr_server\\\\public\\\\src\\\\components\\\\form-login\\\\components\\\\form.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (FormLogin);

/***/ }),

/***/ "./public/src/components/form-login/containers/formLogin.js":
/*!******************************************************************!*\
  !*** ./public/src/components/form-login/containers/formLogin.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_form_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/form.js */ "./public/src/components/form-login/components/form.js");
/* harmony import */ var _actions_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../actions/index.js */ "./public/src/actions/index.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__);
var _jsxFileName = "D:\\www\\gits-proyectos\\proyecto ERP\\ERP V-2\\ssr_server\\public\\src\\components\\form-login\\containers\\formLogin.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









class FormContainer extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      showAlert: false,
      alertContent: '',
      type: '',
      detectedToken: ''
    });

    _defineProperty(this, "handleSubmit", event => {
      event.preventDefault();
      console.log('dio submit userName: ' + this.userName.value + ' password: ' + this.password.value);

      if (this.userName.value != '' && this.password.value != '') {
        this.setState({
          showAlert: false
        });
        this.userName.value.replace(" ", "%20");
        this.password.value.replace(" ", "%20");
        this.props.actions.callUserAccess(this.userName.value, this.password.value);
      } else {
        //alert('Por favor ingresar todos los datos¡¡');
        this.setState({
          showAlert: true,
          alertContent: 'Por favor ingresar TODOS los datos',
          type: 'warning'
        });
      }
    });

    _defineProperty(this, "setRef", element => {
      if (element != null) {
        if (element.name == 'userName') {
          this.userName = element;
        } else {
          this.password = element;
        }
      }
    });
  }

  render() {
    const wellStyles = {
      maxWidth: 400,
      margin: '0 auto 10px'
    };
    return __jsx("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 16
      }
    }, __jsx(_components_form_js__WEBPACK_IMPORTED_MODULE_3__["default"], {
      handleSubmit: this.handleSubmit,
      setRef: this.setRef,
      baseColor: this.props.baseColor,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 13
      }
    }), this.state.showAlert ? __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Alert"], {
      bsStyle: this.state.type,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 38
      }
    }, this.state.alertContent) : this.props.error && __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Alert"], {
      bsStyle: "danger",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 128
      }
    }, this.props.error));
  }

}

function mapDispatchToProps(dispatch) {
  return {
    actions: Object(redux__WEBPACK_IMPORTED_MODULE_2__["bindActionCreators"])(_actions_index_js__WEBPACK_IMPORTED_MODULE_4__, dispatch)
  };
}

function mapStateToProps(state, props) {
  let access = state.get('user').get('access');
  let error = state.get('user').get('error');
  return {
    error
  };
}

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, mapDispatchToProps)(FormContainer));

/***/ }),

/***/ "./public/src/pages/components/loginComponent.js":
/*!*******************************************************!*\
  !*** ./public/src/pages/components/loginComponent.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_form_login_containers_formLogin__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/form-login/containers/formLogin */ "./public/src/components/form-login/containers/formLogin.js");
var _jsxFileName = "D:\\www\\gits-proyectos\\proyecto ERP\\ERP V-2\\ssr_server\\public\\src\\pages\\components\\loginComponent.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




const LoginComponent = props => {
  let logued = __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 19
    }
  }, __jsx("div", {
    className: "text-center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 9
    }
  }, "ALREADY IN"), __jsx("div", {
    className: "text-center logout",
    onClick: props.logout,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 9
    }
  }, "\xBFwanna logout?"), __jsx("div", {
    className: "text-center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 9
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 13
    }
  }, __jsx("a", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 28
    }
  }, "ir al home")), __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 13
    }
  }, " ---- "), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/main",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 13
    }
  }, __jsx("a", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 32
    }
  }, "ir al dashboard"))));

  let login = __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 18
    }
  }, __jsx("div", {
    className: "text-center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 9
    }
  }, __jsx("img", {
    src: "/images/userIcon.png",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 13
    }
  })), __jsx("div", {
    className: "paddingTop20",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 9
    }
  }, __jsx(_components_form_login_containers_formLogin__WEBPACK_IMPORTED_MODULE_3__["default"], {
    baseColor: "#c55a11",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 13
    }
  }))); //console.log('is logued? '+props.isLogued);


  return __jsx("div", {
    className: "jsx-3577945092",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 12
    }
  }, props.isLogued ? logued : login, __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3577945092",
    __self: undefined
  }, "img.jsx-3577945092{max-width:100px;margin:0 auto;}.paddingTop20.jsx-3577945092{padding-top:15px;}.logout.jsx-3577945092{color:red;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFx3d3dcXGdpdHMtcHJveWVjdG9zXFxwcm95ZWN0byBFUlBcXEVSUCBWLTJcXHNzcl9zZXJ2ZXJcXHB1YmxpY1xcc3JjXFxwYWdlc1xcY29tcG9uZW50c1xcbG9naW5Db21wb25lbnQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMEJZLEFBRWlDLEFBSUMsQUFHUCxVQUNkLE1BUGtCLENBSWxCLGFBSEEiLCJmaWxlIjoiRDpcXHd3d1xcZ2l0cy1wcm95ZWN0b3NcXHByb3llY3RvIEVSUFxcRVJQIFYtMlxcc3NyX3NlcnZlclxccHVibGljXFxzcmNcXHBhZ2VzXFxjb21wb25lbnRzXFxsb2dpbkNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCBGb3JtIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvZm9ybS1sb2dpbi9jb250YWluZXJzL2Zvcm1Mb2dpbic7XHJcblxyXG5jb25zdCBMb2dpbkNvbXBvbmVudCA9IHByb3BzID0+IHtcclxuICAgIGxldCBsb2d1ZWQgPSAoPGRpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCI+QUxSRUFEWSBJTjwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgbG9nb3V0XCIgb25DbGljaz17cHJvcHMubG9nb3V0fT7Cv3dhbm5hIGxvZ291dD88L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+PGE+aXIgYWwgaG9tZTwvYT48L0xpbms+XHJcbiAgICAgICAgICAgIDxzcGFuPiAtLS0tIDwvc3Bhbj5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9tYWluXCI+PGE+aXIgYWwgZGFzaGJvYXJkPC9hPjwvTGluaz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvZGl2Pik7XHJcbiAgICBsZXQgbG9naW4gPSAoPGRpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgIDxpbWcgc3JjPVwiL2ltYWdlcy91c2VySWNvbi5wbmdcIiAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFkZGluZ1RvcDIwXCI+XHJcbiAgICAgICAgICAgIDxGb3JtIGJhc2VDb2xvcj0nI2M1NWExMScgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvZGl2Pik7XHJcbiAgICAvL2NvbnNvbGUubG9nKCdpcyBsb2d1ZWQ/ICcrcHJvcHMuaXNMb2d1ZWQpO1xyXG4gICAgcmV0dXJuIDxkaXY+XHJcbiAgICAgICAgeyhwcm9wcy5pc0xvZ3VlZCkgPyBsb2d1ZWQgOiBsb2dpbn1cclxuICAgICAgICA8c3R5bGUganN4PntcclxuICAgICAgICAgICAgYGltZyB7XHJcbiAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDEwMHB4O1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnBhZGRpbmdUb3AyMCB7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogMTVweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAubG9nb3V0IHtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiByZWQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYFxyXG4gICAgICAgIH08L3N0eWxlPlxyXG4gICAgPC9kaXY+O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMb2dpbkNvbXBvbmVudDsiXX0= */\n/*@ sourceURL=D:\\\\www\\\\gits-proyectos\\\\proyecto ERP\\\\ERP V-2\\\\ssr_server\\\\public\\\\src\\\\pages\\\\components\\\\loginComponent.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (LoginComponent);

/***/ }),

/***/ "./public/src/pages/components/loginLayout.js":
/*!****************************************************!*\
  !*** ./public/src/pages/components/loginLayout.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "D:\\www\\gits-proyectos\\proyecto ERP\\ERP V-2\\ssr_server\\public\\src\\pages\\components\\loginLayout.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


const LoginComponent = props => __jsx("div", {
  className: "jsx-2743481640",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 4,
    columnNumber: 5
  }
}, __jsx("div", {
  className: "jsx-2743481640" + " " + "center",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 9
  }
}, __jsx("div", {
  className: "jsx-2743481640" + " " + "column1",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 13
  }
}, __jsx("div", {
  className: "jsx-2743481640" + " " + "absoluteCenterLogin heightAuto",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 17
  }
}, __jsx("div", {
  className: "jsx-2743481640" + " " + "card",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 21
  }
}, __jsx("div", {
  className: "jsx-2743481640" + " " + "padding20",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 25
  }
}, props.children))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
  id: "2743481640",
  __self: undefined
}, "body{margin:0;font-family:\"Calibri (Body)\" !important;}html,body div{height:100%;}.logout{color:red;}.center{position:absolute;width:100%;height:100%;}.column1{background-color:#333f50 !important;}.absoluteCenterLogin{position:absolute;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);width:100%;padding:20px;}.heightAuto,.heightAuto div{height:auto !important;}.card{border-radius:10px;background:#FFFFFF;max-width:380px;margin:0 auto;padding:0 !important;}.padding20{padding:20px;}.spinner>div{margin:0 auto;padding:30px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFx3d3dcXGdpdHMtcHJveWVjdG9zXFxwcm95ZWN0byBFUlBcXEVSUCBWLTJcXHNzcl9zZXJ2ZXJcXHB1YmxpY1xcc3JjXFxwYWdlc1xcY29tcG9uZW50c1xcbG9naW5MYXlvdXQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBZ0JZLEFBRTBCLEFBSUcsQUFHRixBQUdRLEFBS2tCLEFBR2xCLEFBUUssQUFHSixBQU9OLEFBR0MsU0F0Q3lCLENBTzNDLEVBSEEsQ0FnQ0EsQ0FHaUIsSUE3QkYsQUFRSCxDQVdXLElBSHZCLEdBUGEsQ0FxQmIsRUE3QmdCLE1BU29CLENBTHBDLEVBZW9CLEdBbEJwQixRQVhBLEtBOEJrQixjQUNPLHFCQUN6QixtREFaZSxXQUNFLGFBQ2pCIiwiZmlsZSI6IkQ6XFx3d3dcXGdpdHMtcHJveWVjdG9zXFxwcm95ZWN0byBFUlBcXEVSUCBWLTJcXHNzcl9zZXJ2ZXJcXHB1YmxpY1xcc3JjXFxwYWdlc1xcY29tcG9uZW50c1xcbG9naW5MYXlvdXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuY29uc3QgTG9naW5Db21wb25lbnQgPSBwcm9wcyA9PiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2VudGVyXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sdW1uMVwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZUNlbnRlckxvZ2luIGhlaWdodEF1dG9cIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYWRkaW5nMjBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtwcm9wcy5jaGlsZHJlbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e1xyXG4gICAgICAgICAgICBgYm9keSB7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTpcIkNhbGlicmkgKEJvZHkpXCIgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBodG1sLCBib2R5IGRpdiB7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmxvZ291dCB7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogcmVkO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5jZW50ZXIge1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmNvbHVtbjEge1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzMzM2Y1MCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5hYnNvbHV0ZUNlbnRlckxvZ2luIHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgIHRvcDogNTAlO1xyXG4gICAgICAgICAgICAgICAgbGVmdDogNTAlO1xyXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmhlaWdodEF1dG8sIC5oZWlnaHRBdXRvIGRpdiB7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IGF1dG8gIWltcG9ydGFudDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuY2FyZCB7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI0ZGRkZGRjtcclxuICAgICAgICAgICAgICAgIG1heC13aWR0aDogMzgwcHg7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IDAgYXV0bztcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAucGFkZGluZzIwIHtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnNwaW5uZXIgPiBkaXZ7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IDAgYXV0bztcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDMwcHg7XHJcbiAgICAgICAgICAgIH1gXHJcbiAgICAgICAgfTwvc3R5bGU+XHJcbiAgICA8L2Rpdj5cclxuKVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTG9naW5Db21wb25lbnQ7Il19 */\n/*@ sourceURL=D:\\\\www\\\\gits-proyectos\\\\proyecto ERP\\\\ERP V-2\\\\ssr_server\\\\public\\\\src\\\\pages\\\\components\\\\loginLayout.js */"));

/* harmony default export */ __webpack_exports__["default"] = (LoginComponent);

/***/ }),

/***/ "./public/src/pages/containers/login.js":
/*!**********************************************!*\
  !*** ./public/src/pages/containers/login.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! immutable */ "immutable");
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(immutable__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _actions_index_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../actions/index.js */ "./public/src/actions/index.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! js-cookie */ "js-cookie");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _utils_auth__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../utils/auth */ "./utils/auth.js");
/* harmony import */ var react_spinners__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-spinners */ "react-spinners");
/* harmony import */ var react_spinners__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_spinners__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _components_error_container_handle_error_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/error/container/handle-error.js */ "./public/src/components/error/container/handle-error.js");
/* harmony import */ var _components_loginComponent__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/loginComponent */ "./public/src/pages/components/loginComponent.js");
/* harmony import */ var _components_loginLayout__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/loginLayout */ "./public/src/pages/components/loginLayout.js");
var _jsxFileName = "D:\\www\\gits-proyectos\\proyecto ERP\\ERP V-2\\ssr_server\\public\\src\\pages\\containers\\login.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }










 //import LoginComponent from '../components/login';



/**lo mas seguro es que el usuario no tenga un token, en este caso solo es mostrar el formulario, pero,
 * en caso de que si tenga un token, se debe revisar y si ya no es valido entonces se muestra el formulario
 * si es valido entonces se muestra la vista de que ya esta logueado que si desea hacer logout
 */

class Login extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      isLogued: false,
      token: Object(immutable__WEBPACK_IMPORTED_MODULE_2__["Map"])(),
      showSpinner: this.props.showSpinner,
      error: ''
    });

    _defineProperty(this, "handleLogout", () => {
      this.props.actions.saveUserAccess('');
      Object(_utils_auth__WEBPACK_IMPORTED_MODULE_7__["logout"])();
    });
  }

  componentDidUpdate() {
    //console.log('entro en componentDidUpdate ');
    //if the comoponent update because now the user is logued (from getDerivedStateFromProps validations)
    //then here we create the cookie and redirect to /main
    if (this.state.isLogued) {
      Object(_utils_auth__WEBPACK_IMPORTED_MODULE_7__["login"])(this.props.token, '/main');
    } else {
      this.props.actions.saveUserAccess('');
    } //console.log('salio de componentDidUpdate');

  }

  async componentDidMount() {
    //console.log('entro en componentDidMount ');
    //on page load check, if there was already a cookie token then it's saved in the store so that
    //getDerivedStateFromProps can validate it
    if (!this.state.isLogued) {
      const token2 = await js_cookie__WEBPACK_IMPORTED_MODULE_6___default.a.get('token');

      if (token2) {
        this.props.actions.saveUserAccess(token2);
      }
    }
  }

  static getDerivedStateFromProps(props, state) {
    //console.log('entro en getDerivedStateFromProps ');
    let newState = {};

    if (props.showSpinner != state.showSpinner) {
      //console.log('getDerivedStateFromProps nuevo spinner '+props.showSpinner);
      //en caso de que halla un cambio en el estado del spinner pues actualizamos su state
      newState.showSpinner = props.showSpinner;
    }

    if (props.token != state.token) {
      //if there is a new token in the store its validated, if valid then isLogued: true
      //if not then the store token is removed
      //console.log('getDerivedStateFromProps nuevo token '+props.token);
      if (props.token.length > 0) {
        if (true) {
          //if the token is valid
          console.log('isLogued = true');
          newState.token = props.token;
          newState.isLogued = true;
        } else {}
      } else {
        console.log('isLogued = false'); //if the token is empty

        newState.isLogued = false;
      }
    }

    if (props.error != state.error) {
      //console.log('getDerivedStateFromProps nuevo error '+props.error);
      //login returned error insted of token
      newState.isLogued = false;
    }

    return Object.keys(newState).length ? newState : null;
  }

  render() {
    return __jsx(_components_error_container_handle_error_js__WEBPACK_IMPORTED_MODULE_9__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 93,
        columnNumber: 17
      }
    }, __jsx(_components_loginLayout__WEBPACK_IMPORTED_MODULE_11__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 94,
        columnNumber: 13
      }
    }, this.state.showSpinner ? __jsx("div", {
      className: "spinner",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 95,
        columnNumber: 45
      }
    }, __jsx(react_spinners__WEBPACK_IMPORTED_MODULE_8__["RingLoader"], {
      loading: this.state.showSpinner,
      color: "#000000",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 96,
        columnNumber: 21
      }
    })) : __jsx(_components_loginComponent__WEBPACK_IMPORTED_MODULE_10__["default"], {
      isLogued: this.state.isLogued,
      logout: () => this.handleLogout,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 97,
        columnNumber: 21
      }
    })));
  }

}

function mapStateToProps(state, props) {
  let result = {}; //let token = state.get('user').get('access');
  //console.log('mapStateToProps ERROR: ' + state.get('user').get('error'));

  result.showSpinner = state.get('spinner').get('showSpinner');
  result.error = state.get('user').get('error');
  result.token = state.get('user').get('access');
  return result;
}

function mapDispatchToProps(dispatch) {
  return {
    actions: Object(redux__WEBPACK_IMPORTED_MODULE_3__["bindActionCreators"])(_actions_index_js__WEBPACK_IMPORTED_MODULE_5__, dispatch)
  };
}

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, mapDispatchToProps)(Login));

/***/ }),

/***/ "./public/src/reducers/agent.js":
/*!**************************************!*\
  !*** ./public/src/reducers/agent.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _action_types_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../action-types/index.js */ "./public/src/action-types/index.js");
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! immutable */ "immutable");
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(immutable__WEBPACK_IMPORTED_MODULE_1__);



const initialState = Object(immutable__WEBPACK_IMPORTED_MODULE_1__["fromJS"])({
  uuid: '',
  type: ''
});

const agent = (state = initialState, action) => {
  switch (action.type) {
    case _action_types_index_js__WEBPACK_IMPORTED_MODULE_0__["CREATE_BURN_AGENT"]:
      {
        return state.merge({
          uuid: action.payload.uuid,
          type: action.payload.type
        });
      }

    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (agent);

/***/ }),

/***/ "./public/src/reducers/apiData.js":
/*!****************************************!*\
  !*** ./public/src/reducers/apiData.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! immutable */ "immutable");
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(immutable__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _action_types_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../action-types/index.js */ "./public/src/action-types/index.js");



const initialState = Object(immutable__WEBPACK_IMPORTED_MODULE_0__["fromJS"])({
  apiData: [],
  newData: false
});

const data = (state = initialState, action) => {
  //que hago con el estado segun la accion
  switch (action.type) {
    case _action_types_index_js__WEBPACK_IMPORTED_MODULE_1__["SET_API_DATA"]:
      {
        let result = [];
        result = action.payload.apiData.map(item => {
          return Object(immutable__WEBPACK_IMPORTED_MODULE_0__["Map"])(item);
        });
        /*action.payload.apiData.forEach(element => {
            result.push(map(element));
            //result = result.concat(asd)
        });*/
        //console.log(result);
        //return state.set('apiData',  result)

        return state.merge({
          apiData: action.payload.apiData,
          newData: action.payload.newData
        }); //return state.set('apiData', result2);
        //return state.set('apiData', JSON.stringify({"id":2278,"type":"rss","value":"41275392","createdAt":"2018-02-28T17:35:53.316Z"}))
      }

    case _action_types_index_js__WEBPACK_IMPORTED_MODULE_1__["UPDATE_API_DATA"]:
      {
        let a = [];
        let b = [];
        state.get('apiData').forEach(element => {
          a.push(element);
        });
        b.push(action.payload.apiData);
        let result = a.concat(b);
        return state.set('apiData', Object(immutable__WEBPACK_IMPORTED_MODULE_0__["List"])(result));
      }

    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (data);

/***/ }),

/***/ "./public/src/reducers/data.js":
/*!*************************************!*\
  !*** ./public/src/reducers/data.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! immutable */ "immutable");
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(immutable__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _api_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../api.json */ "./public/src/api.json");
var _api_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../api.json */ "./public/src/api.json", 1);
/* harmony import */ var _action_types_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../action-types/index.js */ "./public/src/action-types/index.js");
 //import data

 //import normalizedData from '../schemas/index.js';


const initialState = Object(immutable__WEBPACK_IMPORTED_MODULE_0__["fromJS"])({
  /*entities: normalizedData.entities,
  categories: normalizedData.result.categories,*/
  message: _api_json__WEBPACK_IMPORTED_MODULE_1__.message,
  userMessage: '',
  userID: ''
});

const data = (state = initialState, action) => {
  //que hago con el estado segun la accion
  switch (action.type) {
    case _action_types_index_js__WEBPACK_IMPORTED_MODULE_2__["ADD_NEW_MESSAGE"]:
      {
        console.log('mensaje: ' + action.payload.query + ' id: ' + action.payload.userID);
        return state.merge({
          userMessage: action.payload.message,
          userID: action.payload.userID
        });
      }

    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (data);

/***/ }),

/***/ "./public/src/reducers/index.js":
/*!**************************************!*\
  !*** ./public/src/reducers/index.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _data_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data.js */ "./public/src/reducers/data.js");
/* harmony import */ var _apiData_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./apiData.js */ "./public/src/reducers/apiData.js");
/* harmony import */ var _agent_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./agent.js */ "./public/src/reducers/agent.js");
/* harmony import */ var _user_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user.js */ "./public/src/reducers/user.js");
/* harmony import */ var _spinner_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./spinner.js */ "./public/src/reducers/spinner.js");
/* harmony import */ var _profesors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./profesors */ "./public/src/reducers/profesors.js");
/* harmony import */ var redux_immutable__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! redux-immutable */ "redux-immutable");
/* harmony import */ var redux_immutable__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(redux_immutable__WEBPACK_IMPORTED_MODULE_6__);







const rootReducer = Object(redux_immutable__WEBPACK_IMPORTED_MODULE_6__["combineReducers"])({
  data: _data_js__WEBPACK_IMPORTED_MODULE_0__["default"],
  backendData: _apiData_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  agent: _agent_js__WEBPACK_IMPORTED_MODULE_2__["default"],
  user: _user_js__WEBPACK_IMPORTED_MODULE_3__["default"],
  spinner: _spinner_js__WEBPACK_IMPORTED_MODULE_4__["default"],
  profesors: _profesors__WEBPACK_IMPORTED_MODULE_5__["default"]
});
/* harmony default export */ __webpack_exports__["default"] = (rootReducer);

/***/ }),

/***/ "./public/src/reducers/profesors.js":
/*!******************************************!*\
  !*** ./public/src/reducers/profesors.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! immutable */ "immutable");
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(immutable__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _action_types_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../action-types/index.js */ "./public/src/action-types/index.js");


const initialState = Object(immutable__WEBPACK_IMPORTED_MODULE_0__["fromJS"])({
  profesorsList: []
});

const user = (state = initialState, action) => {
  switch (action.type) {
    case _action_types_index_js__WEBPACK_IMPORTED_MODULE_1__["SAVE_PROFESORS"]:
      {
        //console.log("ya se guardo el profesor en el reducer")
        return state.set('profesorsList', action.payload.profesorsAction.get('profesores'));
      }

    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (user);

/***/ }),

/***/ "./public/src/reducers/spinner.js":
/*!****************************************!*\
  !*** ./public/src/reducers/spinner.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _action_types_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../action-types/index.js */ "./public/src/action-types/index.js");
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! immutable */ "immutable");
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(immutable__WEBPACK_IMPORTED_MODULE_1__);


const initialState = Object(immutable__WEBPACK_IMPORTED_MODULE_1__["fromJS"])({
  showSpinner: false
});

const spinnerStatus = (state = initialState, action) => {
  switch (action.type) {
    case _action_types_index_js__WEBPACK_IMPORTED_MODULE_0__["SHOW_SPINNER_STATUS"]:
      {
        return state.set('showSpinner', action.payload.status);
      }

    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (spinnerStatus);

/***/ }),

/***/ "./public/src/reducers/user.js":
/*!*************************************!*\
  !*** ./public/src/reducers/user.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! immutable */ "immutable");
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(immutable__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _action_types_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../action-types/index.js */ "./public/src/action-types/index.js");
/* harmony import */ var _utils_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../utils/auth */ "./utils/auth.js");
/* harmony import */ var _localStorageOptions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../localStorageOptions */ "./localStorageOptions.js");




const initialState = Object(immutable__WEBPACK_IMPORTED_MODULE_0__["fromJS"])({
  access: {},
  error: ''
});

const user = (state = initialState, action) => {
  switch (action.type) {
    case _action_types_index_js__WEBPACK_IMPORTED_MODULE_1__["SAVE_NEW_USER_ACCESS"]:
      {
        return state.merge({
          access: action.payload.userAccess,
          error: ''
        });
      }

    case _action_types_index_js__WEBPACK_IMPORTED_MODULE_1__["SAVE_USER_ACCESS"]:
      {
        //here we also save it in the localstorage of the browser
        //LocalStorageAddItem('access', JSON.stringify(action.payload.userAccess));
        return state.set('access', action.payload.userAccess);
      }

    case _action_types_index_js__WEBPACK_IMPORTED_MODULE_1__["SAVE_LOGIN_ERROR"]:
      {
        if (action.payload.error) {
          return state.set('error', action.payload.error);
        }

        return null;
      }

    case _action_types_index_js__WEBPACK_IMPORTED_MODULE_1__["REMOVE_USER_ACCESS"]:
      {
        Object(_localStorageOptions__WEBPACK_IMPORTED_MODULE_3__["LocalStorageRemoveItem"])('access');
        return state.set('access', '');
      }

    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (user);

/***/ }),

/***/ "./public/src/sagas/index.js":
/*!***********************************!*\
  !*** ./public/src/sagas/index.js ***!
  \***********************************/
/*! exports provided: getUserAccess, getProfesors, actionsWatcher, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUserAccess", function() { return getUserAccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProfesors", function() { return getProfesors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "actionsWatcher", function() { return actionsWatcher; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return mySaga; });
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! immutable */ "immutable");
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(immutable__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../utils/auth */ "./utils/auth.js");
/* harmony import */ var _action_types_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../action-types/index.js */ "./public/src/action-types/index.js");
/* harmony import */ var _actions_index_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../actions/index.js */ "./public/src/actions/index.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../config */ "./config.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_config__WEBPACK_IMPORTED_MODULE_6__);







function* getUserAccess(action) {
  try {
    console.log('antes del call ' + _config__WEBPACK_IMPORTED_MODULE_6__["config"].apiKeyToken); //const response = yield call(axios.get, `http://localhost:8080/login/${action.payload.user}/${action.payload.password}`);

    const response = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(axios__WEBPACK_IMPORTED_MODULE_1___default.a.post, `http://localhost:3000/api`, {
      apiKeyToken: _config__WEBPACK_IMPORTED_MODULE_6__["config"].apiKeyToken
    });
    /*const apiCall = () => {
        return axios.post('http://localhost:3000/api/auth/sign-in', { apiKeyToken: config.apiKeyToken }, {
            auth: {
                email: action.payload.email,
                password: action.payload.password
            }
        }).then(response => response.data)
            .catch(err => {
                throw err;
            });
    }*/
    //if(response.data) login(response.data.newUserToken);
    //yield put(saveUserAccess(map(response.data)));

    console.log('resultado', response.data);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(response.data.error ? Object(_actions_index_js__WEBPACK_IMPORTED_MODULE_5__["saveLoginError"])(response.data.error) : Object(_actions_index_js__WEBPACK_IMPORTED_MODULE_5__["saveUserTokenAndDeleteOldErrors"])(response.data.newUserToken));
  } catch (error) {
    console.log('Request failed¡¡ error: ' + error);
  }
}
function* getProfesors(action) {
  try {
    const response = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(axios__WEBPACK_IMPORTED_MODULE_1___default.a.post, `http://localhost:5678/graphql`, {
      query: 'query Profesores{profesores {id,nombre,nacionalidad,genero,cursos {titulo,id}}}'
    });
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(_actions_index_js__WEBPACK_IMPORTED_MODULE_5__["saveProfesors"])(Object(immutable__WEBPACK_IMPORTED_MODULE_2__["Map"])(response.data.data)));
  } catch (error) {
    console.log('Request failed¡¡ error: ' + error);
  }
}
function* actionsWatcher() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeEvery"])(_action_types_index_js__WEBPACK_IMPORTED_MODULE_4__["CALL_USER_ACCESS"], getUserAccess), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeEvery"])(_action_types_index_js__WEBPACK_IMPORTED_MODULE_4__["CALL_PROFESORS"], getProfesors)]);
}
function* mySaga() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["all"])([actionsWatcher()]);
}

/***/ }),

/***/ "./store.js":
/*!******************!*\
  !*** ./store.js ***!
  \******************/
/*! exports provided: configureStore, initStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "configureStore", function() { return configureStore; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initStore", function() { return initStore; });
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-redux-wrapper */ "next-redux-wrapper");
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_redux_saga__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-redux-saga */ "next-redux-saga");
/* harmony import */ var next_redux_saga__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_redux_saga__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! immutable */ "immutable");
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(immutable__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! redux-saga */ "redux-saga");
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(redux_saga__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var redux_logger__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! redux-logger */ "redux-logger");
/* harmony import */ var redux_logger__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(redux_logger__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! redux-thunk */ "redux-thunk");
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(redux_thunk__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _public_src_reducers_index__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./public/src/reducers/index */ "./public/src/reducers/index.js");
/* harmony import */ var _public_src_sagas_index__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./public/src/sagas/index */ "./public/src/sagas/index.js");



 //import middlewares






const sagaMiddleware = redux_saga__WEBPACK_IMPORTED_MODULE_4___default()();

const bindMiddleware = middleware => {
  //if (process.env.NODE_ENV !== 'production') {
  const {
    composeWithDevTools
  } = __webpack_require__(/*! redux-devtools-extension */ "redux-devtools-extension");

  return composeWithDevTools(Object(redux__WEBPACK_IMPORTED_MODULE_0__["applyMiddleware"])(...middleware)); //}
  //return applyMiddleware(...middleware)
};

function configureStore() {
  const store = Object(redux__WEBPACK_IMPORTED_MODULE_0__["createStore"])(_public_src_reducers_index__WEBPACK_IMPORTED_MODULE_7__["default"], Object(immutable__WEBPACK_IMPORTED_MODULE_3__["Map"])({}), //initial state
  bindMiddleware([redux_logger__WEBPACK_IMPORTED_MODULE_5___default.a, redux_thunk__WEBPACK_IMPORTED_MODULE_6___default.a, sagaMiddleware]));
  console.log('store created'); //store.sagaTask = sagaMiddleware.run(mySaga)

  store.runSagaTask = () => {
    store.sagaTask = sagaMiddleware.run(_public_src_sagas_index__WEBPACK_IMPORTED_MODULE_8__["default"]);
  }; // run the rootSaga initially


  store.runSagaTask();
  return store;
}
function initStore(BaseComponent, mapStateToProps, mapDispatchToProps, from) {
  console.log(' from ' + from);
  return next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1___default()(configureStore, mapStateToProps, mapDispatchToProps)(next_redux_saga__WEBPACK_IMPORTED_MODULE_2___default()(BaseComponent));
}

/***/ }),

/***/ "./utils/auth.js":
/*!***********************!*\
  !*** ./utils/auth.js ***!
  \***********************/
/*! exports provided: auth, logout, login, getSessionToken, validateToken */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "auth", function() { return auth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logout", function() { return logout; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "login", function() { return login; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSessionToken", function() { return getSessionToken; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validateToken", function() { return validateToken; });
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_cookies__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-cookies */ "next-cookies");
/* harmony import */ var next_cookies__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_cookies__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! js-cookie */ "js-cookie");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_2__);



const auth = ctx => {
  //en caso de que ya tenga un token pues deberiamos validarlo a la api para ver si aun es valido
  //en caso de que si sea valido entonces se muestra la web
  //en caso de que no sea valido o no tenga token pues se muestra el login
  const {
    token
  } = next_cookies__WEBPACK_IMPORTED_MODULE_1___default()(ctx);
  console.log('desde auth: req = ' + ctx.req + ' token = ' + token);

  if (ctx.req && !token) {
    ctx.res.writeHead(302, {
      Location: '/login'
    }).end();
  }

  if (!token) {
    next_router__WEBPACK_IMPORTED_MODULE_0___default.a.push("/login");
  }

  return token;
};
const logout = () => {
  js_cookie__WEBPACK_IMPORTED_MODULE_2___default.a.remove('token'); //there is an explanention for why we use localstorage in the localstorage event listener
  //To trigger the event listener we save some random data into the `logout` key, the triggered event must be in each page componentwillmount and componentdidmount

  window.localStorage.setItem("logout", Date.now());
  next_router__WEBPACK_IMPORTED_MODULE_0___default.a.push("/login");
};
const login = (token, redirectTo) => {
  //expires set the amount of days to expire
  js_cookie__WEBPACK_IMPORTED_MODULE_2___default.a.set("token", token, {
    expires: 1
  }); //console.log('from auth: redirecTo: '+redirectTo+' '+Cookies.get('token'));

  next_router__WEBPACK_IMPORTED_MODULE_0___default.a.push(redirectTo);
};
const getSessionToken = () => js_cookie__WEBPACK_IMPORTED_MODULE_2___default.a.get('token');
const validateToken = () => {
  if (js_cookie__WEBPACK_IMPORTED_MODULE_2___default.a.get('token')) return true; //here we make a request to the api to know if the token is still valid or not

  return false;
};

/***/ }),

/***/ 5:
/*!******************************!*\
  !*** multi ./pages/login.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\www\gits-proyectos\proyecto ERP\ERP V-2\ssr_server\pages\login.js */"./pages/login.js");


/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "immutable":
/*!****************************!*\
  !*** external "immutable" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("immutable");

/***/ }),

/***/ "js-cookie":
/*!****************************!*\
  !*** external "js-cookie" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("js-cookie");

/***/ }),

/***/ "next-cookies":
/*!*******************************!*\
  !*** external "next-cookies" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-cookies");

/***/ }),

/***/ "next-redux-saga":
/*!**********************************!*\
  !*** external "next-redux-saga" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-redux-saga");

/***/ }),

/***/ "next-redux-wrapper":
/*!*************************************!*\
  !*** external "next-redux-wrapper" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-redux-wrapper");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "prop-types-exact":
/*!***********************************!*\
  !*** external "prop-types-exact" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types-exact");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-bootstrap":
/*!**********************************!*\
  !*** external "react-bootstrap" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-bootstrap");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "react-spinners":
/*!*********************************!*\
  !*** external "react-spinners" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-spinners");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "redux-devtools-extension":
/*!*******************************************!*\
  !*** external "redux-devtools-extension" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-devtools-extension");

/***/ }),

/***/ "redux-immutable":
/*!**********************************!*\
  !*** external "redux-immutable" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-immutable");

/***/ }),

/***/ "redux-logger":
/*!*******************************!*\
  !*** external "redux-logger" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-logger");

/***/ }),

/***/ "redux-saga":
/*!*****************************!*\
  !*** external "redux-saga" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-saga");

/***/ }),

/***/ "redux-saga/effects":
/*!*************************************!*\
  !*** external "redux-saga/effects" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-saga/effects");

/***/ }),

/***/ "redux-thunk":
/*!******************************!*\
  !*** external "redux-thunk" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ })

/******/ });
//# sourceMappingURL=login.js.map