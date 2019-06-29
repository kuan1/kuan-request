(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("@babel/runtime/regenerator"), require("@babel/runtime/helpers/asyncToGenerator"), require("axios"), require("@babel/runtime/helpers/typeof"), require("blueimp-md5"), require("js-sha256"));
	else if(typeof define === 'function' && define.amd)
		define("kuan-request", ["@babel/runtime/regenerator", "@babel/runtime/helpers/asyncToGenerator", "axios", "@babel/runtime/helpers/typeof", "blueimp-md5", "js-sha256"], factory);
	else if(typeof exports === 'object')
		exports["kuan-request"] = factory(require("@babel/runtime/regenerator"), require("@babel/runtime/helpers/asyncToGenerator"), require("axios"), require("@babel/runtime/helpers/typeof"), require("blueimp-md5"), require("js-sha256"));
	else
		root["kuan-request"] = factory(root["@babel/runtime/regenerator"], root["@babel/runtime/helpers/asyncToGenerator"], root["axios"], root["@babel/runtime/helpers/typeof"], root["blueimp-md5"], root["js-sha256"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE__0__, __WEBPACK_EXTERNAL_MODULE__3__, __WEBPACK_EXTERNAL_MODULE__4__, __WEBPACK_EXTERNAL_MODULE__5__, __WEBPACK_EXTERNAL_MODULE__6__, __WEBPACK_EXTERNAL_MODULE__7__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	return __webpack_require__(__webpack_require__.s = 12);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__0__;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return '@media ' + item[2] + '{' + content + '}';
      } else {
        return content;
      }
    }).join('');
  }; // import a list of modules into the list


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    for (var i = 0; i < this.length; i++) {
      var id = this[i][0];

      if (id != null) {
        alreadyImportedModules[id] = true;
      }
    }

    for (i = 0; i < modules.length; i++) {
      var item = modules[i]; // skip already imported module
      // this implementation is not 100% perfect for weird media query combinations
      // when a module is imported multiple times with different media queries.
      // I hope this will never occur (Hey this way we have smaller bundles)

      if (item[0] == null || !alreadyImportedModules[item[0]]) {
        if (mediaQuery && !item[2]) {
          item[2] = mediaQuery;
        } else if (mediaQuery) {
          item[2] = '(' + item[2] + ') and (' + mediaQuery + ')';
        }

        list.push(item);
      }
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || '';
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;
  return '/*# ' + data + ' */';
}

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-style-loader/lib/listToStyles.js
/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}

// CONCATENATED MODULE: ./node_modules/vue-style-loader/lib/addStylesClient.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return addStylesClient; });
/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
  Modified by Evan You @yyx990803
*/



var hasDocument = typeof document !== 'undefined'

if (typeof DEBUG !== 'undefined' && DEBUG) {
  if (!hasDocument) {
    throw new Error(
    'vue-style-loader cannot be used in a non-browser environment. ' +
    "Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
  ) }
}

/*
type StyleObject = {
  id: number;
  parts: Array<StyleObjectPart>
}

type StyleObjectPart = {
  css: string;
  media: string;
  sourceMap: ?string
}
*/

var stylesInDom = {/*
  [id: number]: {
    id: number,
    refs: number,
    parts: Array<(obj?: StyleObjectPart) => void>
  }
*/}

var head = hasDocument && (document.head || document.getElementsByTagName('head')[0])
var singletonElement = null
var singletonCounter = 0
var isProduction = false
var noop = function () {}
var options = null
var ssrIdKey = 'data-vue-ssr-id'

// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
// tags it will allow on a page
var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase())

function addStylesClient (parentId, list, _isProduction, _options) {
  isProduction = _isProduction

  options = _options || {}

  var styles = listToStyles(parentId, list)
  addStylesToDom(styles)

  return function update (newList) {
    var mayRemove = []
    for (var i = 0; i < styles.length; i++) {
      var item = styles[i]
      var domStyle = stylesInDom[item.id]
      domStyle.refs--
      mayRemove.push(domStyle)
    }
    if (newList) {
      styles = listToStyles(parentId, newList)
      addStylesToDom(styles)
    } else {
      styles = []
    }
    for (var i = 0; i < mayRemove.length; i++) {
      var domStyle = mayRemove[i]
      if (domStyle.refs === 0) {
        for (var j = 0; j < domStyle.parts.length; j++) {
          domStyle.parts[j]()
        }
        delete stylesInDom[domStyle.id]
      }
    }
  }
}

function addStylesToDom (styles /* Array<StyleObject> */) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i]
    var domStyle = stylesInDom[item.id]
    if (domStyle) {
      domStyle.refs++
      for (var j = 0; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j])
      }
      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j]))
      }
      if (domStyle.parts.length > item.parts.length) {
        domStyle.parts.length = item.parts.length
      }
    } else {
      var parts = []
      for (var j = 0; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j]))
      }
      stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts }
    }
  }
}

function createStyleElement () {
  var styleElement = document.createElement('style')
  styleElement.type = 'text/css'
  head.appendChild(styleElement)
  return styleElement
}

function addStyle (obj /* StyleObjectPart */) {
  var update, remove
  var styleElement = document.querySelector('style[' + ssrIdKey + '~="' + obj.id + '"]')

  if (styleElement) {
    if (isProduction) {
      // has SSR styles and in production mode.
      // simply do nothing.
      return noop
    } else {
      // has SSR styles but in dev mode.
      // for some reason Chrome can't handle source map in server-rendered
      // style tags - source maps in <style> only works if the style tag is
      // created and inserted dynamically. So we remove the server rendered
      // styles and inject new ones.
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  if (isOldIE) {
    // use singleton mode for IE9.
    var styleIndex = singletonCounter++
    styleElement = singletonElement || (singletonElement = createStyleElement())
    update = applyToSingletonTag.bind(null, styleElement, styleIndex, false)
    remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true)
  } else {
    // use multi-style-tag mode in all other cases
    styleElement = createStyleElement()
    update = applyToTag.bind(null, styleElement)
    remove = function () {
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  update(obj)

  return function updateStyle (newObj /* StyleObjectPart */) {
    if (newObj) {
      if (newObj.css === obj.css &&
          newObj.media === obj.media &&
          newObj.sourceMap === obj.sourceMap) {
        return
      }
      update(obj = newObj)
    } else {
      remove()
    }
  }
}

var replaceText = (function () {
  var textStore = []

  return function (index, replacement) {
    textStore[index] = replacement
    return textStore.filter(Boolean).join('\n')
  }
})()

function applyToSingletonTag (styleElement, index, remove, obj) {
  var css = remove ? '' : obj.css

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = replaceText(index, css)
  } else {
    var cssNode = document.createTextNode(css)
    var childNodes = styleElement.childNodes
    if (childNodes[index]) styleElement.removeChild(childNodes[index])
    if (childNodes.length) {
      styleElement.insertBefore(cssNode, childNodes[index])
    } else {
      styleElement.appendChild(cssNode)
    }
  }
}

function applyToTag (styleElement, obj) {
  var css = obj.css
  var media = obj.media
  var sourceMap = obj.sourceMap

  if (media) {
    styleElement.setAttribute('media', media)
  }
  if (options.ssrId) {
    styleElement.setAttribute(ssrIdKey, obj.id)
  }

  if (sourceMap) {
    // https://developer.chrome.com/devtools/docs/javascript-debugging
    // this makes source maps inside style tags work properly in Chrome
    css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
    // http://stackoverflow.com/a/26603875
    css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
  }

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild)
    }
    styleElement.appendChild(document.createTextNode(css))
  }
}


/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__3__;

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__4__;

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__5__;

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__6__;

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__7__;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(9);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(2).default
var update = add("59d5872f", content, true, {});

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// Module
exports.push([module.i, "@-webkit-keyframes mint-spinner-rotate {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg); }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg); } }\n\n@keyframes mint-spinner-rotate {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg); }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg); } }\n\n#kuan-loading {\n  position: fixed;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n          align-items: center;\n  -webkit-box-pack: center;\n  -webkit-justify-content: center;\n          justify-content: center;\n  z-index: 8000;\n  display: none;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: column;\n          flex-direction: column; }\n  #kuan-loading .spinner-wrap {\n    padding: 8px;\n    border-radius: 5px;\n    background-color: rgba(0, 0, 0, 0.5); }\n  #kuan-loading .spinner-snake {\n    -webkit-animation: mint-spinner-rotate 0.8s infinite linear;\n            animation: mint-spinner-rotate 0.8s infinite linear;\n    border: 4px solid rgba(0, 0, 0, 0.7);\n    border-top-color: #cccccc;\n    border-left-color: #cccccc;\n    border-bottom-color: #cccccc;\n    height: 32px;\n    width: 32px;\n    border-radius: 50%; }\n  #kuan-loading .loading-tip {\n    line-height: 3;\n    font-size: 14px;\n    color: rgba(0, 0, 0, 0.7); }\n", ""]);



/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(11);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(2).default
var update = add("62732538", content, true, {});

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// Module
exports.push([module.i, "#kuan-toast {\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  left: 0;\n  top: 0;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n          align-items: center;\n  -webkit-box-pack: center;\n  -webkit-justify-content: center;\n          justify-content: center;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: column;\n          flex-direction: column;\n  z-index: 8001; }\n  #kuan-toast > .toast-item {\n    border-radius: 5px;\n    background: rgba(0, 0, 0, 0.7);\n    color: #fff;\n    text-align: center;\n    max-width: 80%;\n    padding: 5px 8px;\n    opacity: 0.8;\n    font-size: 14px;\n    margin-bottom: 10px; }\n", ""]);



/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "@babel/runtime/regenerator"
var regenerator_ = __webpack_require__(0);
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator_);

// EXTERNAL MODULE: external "@babel/runtime/helpers/asyncToGenerator"
var asyncToGenerator_ = __webpack_require__(3);
var asyncToGenerator_default = /*#__PURE__*/__webpack_require__.n(asyncToGenerator_);

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(4);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);

// EXTERNAL MODULE: ./src/loading/index.scss
var src_loading = __webpack_require__(8);

// CONCATENATED MODULE: ./src/loading/index.js
/**
 * author luzhongk@126.com
 * 简单的loading控制
 */

var timer;

function loading_show() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref$text = _ref.text,
      text = _ref$text === void 0 ? '' : _ref$text,
      _ref$delay = _ref.delay,
      delay = _ref$delay === void 0 ? 10000000 : _ref$delay;

  if (typeof document === 'undefined') return;
  if (timer) clearTimeout(timer);
  var container = document.getElementById('kuan-loading');

  if (!container) {
    container = document.createElement('div');
    container.id = 'kuan-loading';
    document.body.appendChild(container);
  }

  container.innerHTML = "\n    <div class=\"spinner-wrap\">\n      <div class=\"spinner-snake\"></div>\n      <span class=\"loading-tip\">".concat(text, "</span>\n    </div>\n  ");
  container.style.display = 'flex';
  setTimeout(loading_hide, delay);
}

function loading_hide() {
  if (typeof document === 'undefined') return;
  var container = document.getElementById('kuan-loading');

  if (container) {
    container.style.display = 'none';
  }
}

/* harmony default export */ var src_loading_0 = ({
  show: loading_show,
  hide: loading_hide
});
// CONCATENATED MODULE: ./src/createApi/utils/loading.js

/* harmony default export */ var utils_loading = ({
  num: 0,
  show: function show() {
    this.num += 1;

    if (this.num === 1) {
      src_loading_0.show();
    }
  },
  hide: function hide() {
    var force = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

    if (force) {
      this.num = 0;
      src_loading_0.hide();
      return;
    } // 等待发出去的请求返回结果后结束loading


    if (this.num > 0) this.num -= 1;

    if (this.num === 0) {
      src_loading_0.hide();
    }
  }
});
// EXTERNAL MODULE: ./src/toast/index.scss
var src_toast = __webpack_require__(10);

// CONCATENATED MODULE: ./src/toast/index.js
/**
 * author luzhongk@126.com
 * 简单的提示
 */


function toast_show() {
  var text = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var delay = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2000;
  if (typeof document === 'undefined') return;
  var container = document.getElementById('kuan-toast');

  if (!container) {
    container = document.createElement('div');
    container.id = 'kuan-toast';
    document.body.appendChild(container);
  }

  container.style.display = 'flex';
  var target = document.createElement('div');
  target.className = 'toast-item';
  target.textContent = text;
  container.appendChild(target);
  toast_hide(delay, target);
}

function toast_hide() {
  var delay = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 300;
  var target = arguments.length > 1 ? arguments[1] : undefined;
  if (typeof document === 'undefined') return;
  setTimeout(function () {
    var container = document.getElementById('kuan-toast');
    if (!container) return;

    if (!target) {
      container.innerHTML = '';
    } else {
      container.removeChild(target);
    }

    if (!container.getElementsByClassName('toast-item').length) {
      container.style.display = 'none';
    }
  }, delay);
}

/* harmony default export */ var src_toast_0 = (toast_show);
// CONCATENATED MODULE: ./src/createApi/utils/util.js
/**
 * 状态码
 */
var codeMessage = {
  400: '请求有错误',
  401: '没有权限',
  403: '用户得到授权，但是访问是被禁止的。',
  404: '404 未找到',
  405: '请求method错误',
  406: '请求的格式不可得。',
  410: '请求的资源被永久删除',
  422: '当创建一个对象时，发生一个验证错误。',
  500: '服务器发生错误',
  502: '网关错误',
  503: '服务不可用',
  504: '网络超时'
  /**
   * @description:
   * @param {Object} error 接口返回错误
   * @return: String
   */

};
function getErrMsg() {
  var error = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  var _ref = error.response || {},
      _ref$status = _ref.status,
      status = _ref$status === void 0 ? '' : _ref$status,
      _ref$data = _ref.data,
      data = _ref$data === void 0 ? {} : _ref$data;

  if (!status) return '网络超时';
  return data.info || data.msg || codeMessage[status] || '请求失败';
} // 获取接口Http状态码

function getErrStatus() {
  var error = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  var _ref2 = error.response || {},
      _ref2$status = _ref2.status,
      status = _ref2$status === void 0 ? 0 : _ref2$status;

  return status;
}
// CONCATENATED MODULE: ./src/createApi/index.js







var noop = function noop() {}; // 数据缓存对象


var cache = {};
function createApi() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref$loading = _ref.loading,
      loading = _ref$loading === void 0 ? utils_loading : _ref$loading,
      _ref$toast = _ref.toast,
      toast = _ref$toast === void 0 ? src_toast_0 : _ref$toast,
      _ref$setHeaders = _ref.setHeaders,
      setHeaders = _ref$setHeaders === void 0 ? noop : _ref$setHeaders,
      _ref$handleError = _ref.handleError,
      handleError = _ref$handleError === void 0 ? noop : _ref$handleError,
      _ref$loginForce = _ref.loginForce,
      loginForce = _ref$loginForce === void 0 ? null : _ref$loginForce,
      _ref$createOptions = _ref.createOptions,
      createOptions = _ref$createOptions === void 0 ? {} : _ref$createOptions,
      _ref$maxCount = _ref.maxCount,
      maxCount = _ref$maxCount === void 0 ? 1 : _ref$maxCount;

  // axios接口返回对象
  var instance = external_axios_default.a.create(createOptions); // 动态设置headers

  instance.interceptors.request.use(function (config) {
    var headers = setHeaders(config) || {};

    for (var key in headers) {
      var value = headers[key];
      config.headers[key] = value;
    }

    return config;
  });
  return (
    /*#__PURE__*/
    function () {
      var _ref2 = asyncToGenerator_default()(
      /*#__PURE__*/
      regenerator_default.a.mark(function _callee(options) {
        var _ref3,
            _ref3$shouldLoading,
            shouldLoading,
            _ref3$shouldToast,
            shouldToast,
            _ref3$shouldCache,
            shouldCache,
            targetCache,
            i,
            response,
            data,
            message,
            err,
            status,
            _args = arguments;

        return regenerator_default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _ref3 = _args.length > 1 && _args[1] !== undefined ? _args[1] : {}, _ref3$shouldLoading = _ref3.shouldLoading, shouldLoading = _ref3$shouldLoading === void 0 ? true : _ref3$shouldLoading, _ref3$shouldToast = _ref3.shouldToast, shouldToast = _ref3$shouldToast === void 0 ? true : _ref3$shouldToast, _ref3$shouldCache = _ref3.shouldCache, shouldCache = _ref3$shouldCache === void 0 ? false : _ref3$shouldCache;

                if (!shouldCache) {
                  _context.next = 5;
                  break;
                }

                targetCache = cache[options.url];

                if (!targetCache) {
                  _context.next = 5;
                  break;
                }

                return _context.abrupt("return", targetCache);

              case 5:
                // 是否loadding
                if (shouldLoading) loading.show();
                i = 0;

              case 7:
                if (!(i < maxCount + 1)) {
                  _context.next = 41;
                  break;
                }

                _context.prev = 8;
                _context.next = 11;
                return instance(options);

              case 11:
                response = _context.sent;
                data = response.data; // 取消loading

                if (shouldLoading) loading.hide(); // 缓存结果

                if (shouldCache) {
                  cache[options.url] = data.data;
                } // 后台返回自定义错误


                if (!(!data.success && !data.iRet)) {
                  _context.next = 22;
                  break;
                }

                message = data.info || data.error || ''; // 错误信息

                err = new Error(message); // eslint-disable-line

                err.response = response; // 错误信息提示

                if (shouldToast) {
                  toast(getErrMsg(e));
                } // 统一错误处理


                handleError(err);
                throw err;

              case 22:
                return _context.abrupt("return", data.data);

              case 25:
                _context.prev = 25;
                _context.t0 = _context["catch"](8);
                console.error("".concat(options.url), _context.t0.response || '');

                if (!(i < maxCount)) {
                  _context.next = 34;
                  break;
                }

                status = getErrStatus(_context.t0); // 401重新登录

                if (!(status === 401 && loginForce)) {
                  _context.next = 34;
                  break;
                }

                _context.next = 33;
                return loginForce();

              case 33:
                return _context.abrupt("continue", 38);

              case 34:
                // 消除错误提示
                if (shouldLoading) loading.hide(true); // 错误信息提示

                if (shouldToast) {
                  toast(getErrMsg(_context.t0));
                } // 自定义错误处理


                handleError(_context.t0);
                return _context.abrupt("return", Promise.reject(_context.t0));

              case 38:
                i++;
                _context.next = 7;
                break;

              case 41:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[8, 25]]);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }()
  );
}
// EXTERNAL MODULE: external "@babel/runtime/helpers/typeof"
var typeof_ = __webpack_require__(5);
var typeof_default = /*#__PURE__*/__webpack_require__.n(typeof_);

// EXTERNAL MODULE: external "blueimp-md5"
var external_blueimp_md5_ = __webpack_require__(6);
var external_blueimp_md5_default = /*#__PURE__*/__webpack_require__.n(external_blueimp_md5_);

// EXTERNAL MODULE: external "js-sha256"
var external_js_sha256_ = __webpack_require__(7);

// CONCATENATED MODULE: ./src/encrypt/index.js



/**
 * 加密
 * @param {Object} params 加密参数
 * @param {String} encryptKey 加密key
 * @param {Boolean} isDebug 是否是开发模式
 */

function encrypt() {
  var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var encryptKey = arguments.length > 1 ? arguments[1] : undefined;
  var isDebug = arguments.length > 2 ? arguments[2] : undefined;
  if (!encryptKey) return '';
  var keys = Object.keys(params).sort();
  var sign = keys.reduce(function (collect, key) {
    var item = params[key];

    if (['number', 'string'].includes(typeof_default()(item))) {
      item = (item + '').trim();
    }

    collect.push(item);
    return collect;
  }, []).join('');
  var res = Object(external_js_sha256_["sha256"])("".concat(external_blueimp_md5_default()(encodeURIComponent(sign))).concat(encryptKey));

  if (isDebug) {
    console.log(sign, res);
  }

  return res;
}
// CONCATENATED MODULE: ./src/index.js
/* concated harmony reexport createApi */__webpack_require__.d(__webpack_exports__, "createApi", function() { return createApi; });
/* concated harmony reexport loading */__webpack_require__.d(__webpack_exports__, "loading", function() { return src_loading_0; });
/* concated harmony reexport toast */__webpack_require__.d(__webpack_exports__, "toast", function() { return src_toast_0; });
/* concated harmony reexport encrypt */__webpack_require__.d(__webpack_exports__, "encrypt", function() { return encrypt; });





/* harmony default export */ var src = __webpack_exports__["default"] = (createApi);

/***/ })
/******/ ]);
});