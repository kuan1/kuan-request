(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("axios"), require("@babel/runtime/helpers/typeof"), require("blueimp-md5"), require("js-sha256"), require("hash.js"));
	else if(typeof define === 'function' && define.amd)
		define("kuan-request", ["axios", "@babel/runtime/helpers/typeof", "blueimp-md5", "js-sha256", "hash.js"], factory);
	else if(typeof exports === 'object')
		exports["kuan-request"] = factory(require("axios"), require("@babel/runtime/helpers/typeof"), require("blueimp-md5"), require("js-sha256"), require("hash.js"));
	else
		root["kuan-request"] = factory(root["axios"], root["@babel/runtime/helpers/typeof"], root["blueimp-md5"], root["js-sha256"], root["hash.js"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE__2__, __WEBPACK_EXTERNAL_MODULE__3__, __WEBPACK_EXTERNAL_MODULE__4__, __WEBPACK_EXTERNAL_MODULE__5__, __WEBPACK_EXTERNAL_MODULE__10__) {
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
/******/ 	return __webpack_require__(__webpack_require__.s = 11);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
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
/* 1 */
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
/* 2 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__2__;

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
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(7);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(1).default
var update = add("59d5872f", content, true, {});

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(false);
// Module
exports.push([module.i, "@-webkit-keyframes mint-spinner-rotate {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg); }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg); } }\n\n@keyframes mint-spinner-rotate {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg); }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg); } }\n\n#kuan-loading {\n  position: fixed;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n          align-items: center;\n  -webkit-box-pack: center;\n  -webkit-justify-content: center;\n          justify-content: center;\n  z-index: 8000;\n  display: none;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: column;\n          flex-direction: column; }\n  #kuan-loading .spinner-wrap {\n    padding: 8px;\n    border-radius: 5px;\n    background-color: rgba(0, 0, 0, 0.5); }\n  #kuan-loading .spinner-snake {\n    -webkit-animation: mint-spinner-rotate 0.8s infinite linear;\n            animation: mint-spinner-rotate 0.8s infinite linear;\n    border: 4px solid rgba(0, 0, 0, 0.7);\n    border-top-color: #cccccc;\n    border-left-color: #cccccc;\n    border-bottom-color: #cccccc;\n    height: 32px;\n    width: 32px;\n    border-radius: 50%; }\n  #kuan-loading .loading-tip {\n    line-height: 3;\n    font-size: 14px;\n    color: rgba(0, 0, 0, 0.7); }\n", ""]);



/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(9);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(1).default
var update = add("62732538", content, true, {});

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(0)(false);
// Module
exports.push([module.i, "#kuan-toast {\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  left: 0;\n  top: 0;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n          align-items: center;\n  -webkit-box-pack: center;\n  -webkit-justify-content: center;\n          justify-content: center;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: column;\n          flex-direction: column;\n  z-index: 8001; }\n  #kuan-toast > .toast-item {\n    border-radius: 5px;\n    background: rgba(0, 0, 0, 0.7);\n    color: #fff;\n    text-align: center;\n    max-width: 80%;\n    padding: 5px 8px;\n    opacity: 0.8;\n    font-size: 14px;\n    margin-bottom: 10px; }\n", ""]);



/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__10__;

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(2);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);

// EXTERNAL MODULE: ./src/loading/index.scss
var loading = __webpack_require__(6);

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

/* harmony default export */ var src_loading = ({
  show: loading_show,
  hide: loading_hide
});
// CONCATENATED MODULE: ./src/createApi/loadingCtrl.js

/* harmony default export */ var createApi_loadingCtrl = ({
  num: 0,
  show: function show() {
    this.num += 1;

    if (this.num === 1) {
      src_loading.show();
    }
  },
  hide: function hide() {
    var force = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

    if (force) {
      this.num = 0;
      wx.hideLoading();
      return;
    } // 等待发出去的请求返回结果后结束loading


    if (this.num > 0) this.num -= 1;

    if (this.num === 0) {
      src_loading.hide();
    }
  }
});
// EXTERNAL MODULE: ./src/toast/index.scss
var src_toast = __webpack_require__(8);

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
// CONCATENATED MODULE: ./src/createApi/index.js
/**
 * author luzhongkuan@126.com
 * 针对幻熊科技对axios进行2次封装，添加loading，错误提示，错误处理
 */


 // 状态码对应错误信息

var codeMessage = {
  400: '请求有错误',
  401: '没有权限',
  403: '用户得到授权，但是访问是被禁止的。',
  404: '未找到',
  405: '请求method错误',
  406: '请求的格式不可得。',
  410: '请求的资源被永久删除',
  422: '当创建一个对象时，发生一个验证错误。',
  500: '服务器发生错误',
  502: '网关错误',
  503: '服务不可用',
  504: '网络超时'
};

var noop = function noop() {};

/* harmony default export */ var createApi = (function () {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var _options$loadingCtrl = options.loadingCtrl,
      loadingCtrl = _options$loadingCtrl === void 0 ? createApi_loadingCtrl : _options$loadingCtrl,
      _options$toast = options.toast,
      toast = _options$toast === void 0 ? src_toast_0 : _options$toast,
      _options$getHeaders = options.getHeaders,
      getHeaders = _options$getHeaders === void 0 ? noop : _options$getHeaders,
      _options$handleError = options.handleError,
      handleError = _options$handleError === void 0 ? noop : _options$handleError,
      _options$createOption = options.createOptions,
      createOptions = _options$createOption === void 0 ? {} : _options$createOption,
      _options$alertDetail = options.alertDetail,
      alertDetail = _options$alertDetail === void 0 ? false : _options$alertDetail,
      _options$shouldAlert = options.shouldAlert,
      shouldAlert = _options$shouldAlert === void 0 ? true : _options$shouldAlert,
      _options$shouldLoadin = options.shouldLoading,
      shouldLoading = _options$shouldLoadin === void 0 ? true : _options$shouldLoadin; // 错误处理

  var _handleError = function _handleError() {
    var error = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    // 发生错误取消loading
    loadingCtrl.hide(); // 请求返回信息

    var _ref = error.response || {},
        _ref$status = _ref.status,
        status = _ref$status === void 0 ? '' : _ref$status,
        _ref$config = _ref.config,
        config = _ref$config === void 0 ? {} : _ref$config,
        _ref$data = _ref.data,
        data = _ref$data === void 0 ? {} : _ref$data; // 获取错误信息


    var getMessage = function getMessage(status) {
      if (!status) return '网络超时';
      return data.info || data.msg || codeMessage[status] || '请求失败';
    }; // 提示信息


    var msg = getMessage(status);

    if (msg && config.alert !== false && shouldAlert) {
      var errorMsg = msg; // 提示详细错误

      if (alertDetail) {
        errorMsg = "".concat(status, " ").concat(config.url || '', "\uFF1A\n ").concat(msg);
      }

      toast(errorMsg);
    } // 自定义错误处理


    handleError(status, msg, error);
  };

  var instance = external_axios_default.a.create(createOptions); // 请求拦截

  instance.interceptors.request.use(function (config) {
    // 动态设置headers
    var headers = getHeaders(config) || {};
    if (config.loading !== false && shouldLoading) loadingCtrl.show();

    for (var key in headers) {
      var value = headers[key];
      config.headers[key] = value;
    }

    return config;
  }); // 返回结果拦截

  instance.interceptors.response.use(function (response) {
    var _response$data = response.data,
        data = _response$data === void 0 ? {} : _response$data,
        config = response.config;

    if (!data.success && !data.iRet) {
      // 自定义错误
      var message = data.info || data.error || '未知错误';
      var error = new Error(message); // eslint-disable-line

      error.response = response; // 统一错误处理

      _handleError(error);

      throw error;
    }

    if (config.loading !== false && shouldLoading) loadingCtrl.hide();
    return data.data; // 后台返回真实数据
  }, function (error) {
    // 统一错误处理
    _handleError(error);

    return Promise.reject(error);
  }); // 返回axios实例

  return instance;
});
// EXTERNAL MODULE: external "@babel/runtime/helpers/typeof"
var typeof_ = __webpack_require__(3);
var typeof_default = /*#__PURE__*/__webpack_require__.n(typeof_);

// EXTERNAL MODULE: external "blueimp-md5"
var external_blueimp_md5_ = __webpack_require__(4);
var external_blueimp_md5_default = /*#__PURE__*/__webpack_require__.n(external_blueimp_md5_);

// EXTERNAL MODULE: external "hash.js"
var external_hash_js_ = __webpack_require__(10);

// EXTERNAL MODULE: external "js-sha256"
var external_js_sha256_ = __webpack_require__(5);

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
/* concated harmony reexport loading */__webpack_require__.d(__webpack_exports__, "loading", function() { return src_loading; });
/* concated harmony reexport toast */__webpack_require__.d(__webpack_exports__, "toast", function() { return src_toast_0; });
/* concated harmony reexport encrypt */__webpack_require__.d(__webpack_exports__, "encrypt", function() { return encrypt; });





/* harmony default export */ var src = __webpack_exports__["default"] = (createApi);

/***/ })
/******/ ]);
});