function $app_define$(a, b, c) {
  debugger
  console.log(a, '------')
  c({}, {}, {
    exports: {}
  })
}
function $app_bootstrap$() {}


const a = (function(){
    
    var manifestJson = {"package":"com.application.demo","name":"xxxx1","versionName":"1.0.0","versionCode":"1","minPlatformVersion":"1020","icon":"/Common/logo.png","features":[{"name":"system.prompt"},{"name":"system.router"},{"name":"system.shortcut"}],"permissions":[{"origin":"*"}],"config":{"logLevel":"log"},"router":{"entry":"Demo","pages":{"Demo":{"component":"index"},"DemoDetail":{"component":"index"},"About":{"component":"index"}},"widgets":{"CardDemo":{"name":"CardDemo","description":"快应用卡片展示","component":"index","path":"/CardDemo","features":[]}}},"display":{"titleBarBackgroundColor":"#f2f2f2","titleBarTextColor":"#414141","menu":true,"pages":{"Demo":{"titleBarText":"示例页","menu":false},"DemoDetail":{"titleBarText":"详情页"},"About":{"menu":false}}}}
    var createAppHandler = function() {
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/app.ux?uxType=app");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../../hap-dsl-xvm/lib/loaders/script-loader.js!../../hap-dsl-xvm/lib/loaders/module-loader.js!../../hap-dsl-xvm/lib/loaders/manifest-loader.js?path=/home/sunliangmu/work/gitlab/hap-toolkit/packages/hap-toolkit/xxxx1/src!../../hap-dsl-xvm/node_modules/babel-loader/lib/index.js?cwd=/home/sunliangmu/work/gitlab/hap-toolkit/packages/hap-toolkit/xxxx1&cacheDirectory&comments=false!../../hap-dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=script!./src/app.ux?uxType=app":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** /home/sunliangmu/work/gitlab/hap-toolkit/packages/hap-dsl-xvm/lib/loaders/script-loader.js!/home/sunliangmu/work/gitlab/hap-toolkit/packages/hap-dsl-xvm/lib/loaders/module-loader.js!/home/sunliangmu/work/gitlab/hap-toolkit/packages/hap-dsl-xvm/lib/loaders/manifest-loader.js?path=/home/sunliangmu/work/gitlab/hap-toolkit/packages/hap-toolkit/xxxx1/src!/home/sunliangmu/work/gitlab/hap-toolkit/packages/hap-dsl-xvm/node_modules/babel-loader/lib?cwd=/home/sunliangmu/work/gitlab/hap-toolkit/packages/hap-toolkit/xxxx1&cacheDirectory&comments=false!/home/sunliangmu/work/gitlab/hap-toolkit/packages/hap-dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=script!./src/app.ux?uxType=app ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = function __scriptModule__ (module, exports, $app_require$){"use strict";
debugger
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

__webpack_require__(/*! ./global */ "./src/global.js");

var _util = _interopRequireDefault(__webpack_require__(/*! ./util */ "./src/util.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  showMenu: _util.default.showMenu,
  createShortcut: _util.default.createShortcut
};
exports.default = _default;}

/***/ }),

/***/ "../../hap-dsl-xvm/lib/loaders/style-loader.js?index=0&type=style!../../hap-dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=style!./src/Components/part1.ux?uxType=comp":
/*!**************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** /home/sunliangmu/work/gitlab/hap-toolkit/packages/hap-dsl-xvm/lib/loaders/style-loader.js?index=0&type=style!/home/sunliangmu/work/gitlab/hap-toolkit/packages/hap-dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=style!./src/Components/part1.ux?uxType=comp ***!
  \**************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  ".a": {
    "color": "#8A2BE2"
  }
}

/***/ }),

/***/ "../../hap-dsl-xvm/lib/loaders/style-loader.js?index=0&type=style!../../hap-dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=style!./src/Components/part2.ux?uxType=comp":
/*!**************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** /home/sunliangmu/work/gitlab/hap-toolkit/packages/hap-dsl-xvm/lib/loaders/style-loader.js?index=0&type=style!/home/sunliangmu/work/gitlab/hap-toolkit/packages/hap-dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=style!./src/Components/part2.ux?uxType=comp ***!
  \**************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  ".a": {
    "color": "#8A2BE2"
  }
}

/***/ }),

/***/ "../../hap-dsl-xvm/lib/loaders/template-loader.js!../../hap-dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=template!./src/Components/part1.ux?uxType=comp&":
/*!**************************************************************************************************************************************************************************************************************************************************************!*\
  !*** /home/sunliangmu/work/gitlab/hap-toolkit/packages/hap-dsl-xvm/lib/loaders/template-loader.js!/home/sunliangmu/work/gitlab/hap-toolkit/packages/hap-dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=template!./src/Components/part1.ux?uxType=comp& ***!
  \**************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "type": "div",
  "attr": {
    "id": "part1"
  },
  "id": "part1",
  "children": [
    {
      "type": "text",
      "attr": {
        "value": function () {return 1}
      },
      "classList": [
        "a"
      ]
    }
  ]
}

/***/ }),

/***/ "../../hap-dsl-xvm/lib/loaders/template-loader.js!../../hap-dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=template!./src/Components/part2.ux?uxType=comp&":
/*!**************************************************************************************************************************************************************************************************************************************************************!*\
  !*** /home/sunliangmu/work/gitlab/hap-toolkit/packages/hap-dsl-xvm/lib/loaders/template-loader.js!/home/sunliangmu/work/gitlab/hap-toolkit/packages/hap-dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=template!./src/Components/part2.ux?uxType=comp& ***!
  \**************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "type": "div",
  "attr": {
    "id": "part2"
  },
  "id": "part2",
  "children": [
    {
      "type": "text",
      "attr": {
        "value": function () {return 22}
      },
      "classList": [
        "a"
      ]
    }
  ]
}

/***/ }),

/***/ "../../hap-dsl-xvm/lib/loaders/ux-loader.js?cwd=/home/sunliangmu/work/gitlab/hap-toolkit/packages/hap-toolkit/xxxx1&type=import!./src/Components/part1.ux?uxType=comp&name=part1":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** /home/sunliangmu/work/gitlab/hap-toolkit/packages/hap-dsl-xvm/lib/loaders/ux-loader.js?cwd=/home/sunliangmu/work/gitlab/hap-toolkit/packages/hap-toolkit/xxxx1&type=import!./src/Components/part1.ux?uxType=comp&name=part1 ***!
  \***********************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var $app_style$ = __webpack_require__(/*! ../../../../hap-dsl-xvm/lib/loaders/style-loader.js?index=0&type=style!../../../../hap-dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=style!./part1.ux?uxType=comp */ "../../hap-dsl-xvm/lib/loaders/style-loader.js?index=0&type=style!../../hap-dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=style!./src/Components/part1.ux?uxType=comp")
;
var $app_script$ = null
$app_define$('@app-component/part1', [], function($app_require$, $app_exports$, $app_module$) {
     $app_module$.exports.template = __webpack_require__(/*! ../../../../hap-dsl-xvm/lib/loaders/template-loader.js!../../../../hap-dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=template!./part1.ux?uxType=comp& */ "../../hap-dsl-xvm/lib/loaders/template-loader.js!../../hap-dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=template!./src/Components/part1.ux?uxType=comp&")
      debugger
     $app_module$.exports.style = $app_style$
})

/***/ }),

/***/ "../../hap-dsl-xvm/lib/loaders/ux-loader.js?cwd=/home/sunliangmu/work/gitlab/hap-toolkit/packages/hap-toolkit/xxxx1&type=import!./src/Components/part2.ux?uxType=comp&name=part2":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** /home/sunliangmu/work/gitlab/hap-toolkit/packages/hap-dsl-xvm/lib/loaders/ux-loader.js?cwd=/home/sunliangmu/work/gitlab/hap-toolkit/packages/hap-toolkit/xxxx1&type=import!./src/Components/part2.ux?uxType=comp&name=part2 ***!
  \***********************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var $app_style$ = __webpack_require__(/*! ../../../../hap-dsl-xvm/lib/loaders/style-loader.js?index=0&type=style!../../../../hap-dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=style!./part2.ux?uxType=comp */ "../../hap-dsl-xvm/lib/loaders/style-loader.js?index=0&type=style!../../hap-dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=style!./src/Components/part2.ux?uxType=comp")
;
var $app_script$ = null
$app_define$('@app-component/part2', [], function($app_require$, $app_exports$, $app_module$) {
     $app_module$.exports.template = __webpack_require__(/*! ../../../../hap-dsl-xvm/lib/loaders/template-loader.js!../../../../hap-dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=template!./part2.ux?uxType=comp& */ "../../hap-dsl-xvm/lib/loaders/template-loader.js!../../hap-dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=template!./src/Components/part2.ux?uxType=comp&")

     $app_module$.exports.style = $app_style$
})

/***/ }),

/***/ "./src/app.ux?uxType=app":
/*!*******************************!*\
  !*** ./src/app.ux?uxType=app ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../../hap-dsl-xvm/lib/loaders/ux-loader.js?cwd=/home/sunliangmu/work/gitlab/hap-toolkit/packages/hap-toolkit/xxxx1&type=import!./Components/part1.ux?uxType=comp&name=part1 */ "../../hap-dsl-xvm/lib/loaders/ux-loader.js?cwd=/home/sunliangmu/work/gitlab/hap-toolkit/packages/hap-toolkit/xxxx1&type=import!./src/Components/part1.ux?uxType=comp&name=part1")
__webpack_require__(/*! ../../../hap-dsl-xvm/lib/loaders/ux-loader.js?cwd=/home/sunliangmu/work/gitlab/hap-toolkit/packages/hap-toolkit/xxxx1&type=import!./Components/part2.ux?uxType=comp&name=part2 */ "../../hap-dsl-xvm/lib/loaders/ux-loader.js?cwd=/home/sunliangmu/work/gitlab/hap-toolkit/packages/hap-toolkit/xxxx1&type=import!./src/Components/part2.ux?uxType=comp&name=part2")


var $app_style$ = {};

var $app_script$ = __webpack_require__(/*! ../../../hap-dsl-xvm/lib/loaders/script-loader.js!../../../hap-dsl-xvm/lib/loaders/module-loader.js!../../../hap-dsl-xvm/lib/loaders/manifest-loader.js?path=/home/sunliangmu/work/gitlab/hap-toolkit/packages/hap-toolkit/xxxx1/src!../../../hap-dsl-xvm/node_modules/babel-loader/lib?cwd=/home/sunliangmu/work/gitlab/hap-toolkit/packages/hap-toolkit/xxxx1&cacheDirectory&comments=false!../../../hap-dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=script!./app.ux?uxType=app */ "../../hap-dsl-xvm/lib/loaders/script-loader.js!../../hap-dsl-xvm/lib/loaders/module-loader.js!../../hap-dsl-xvm/lib/loaders/manifest-loader.js?path=/home/sunliangmu/work/gitlab/hap-toolkit/packages/hap-toolkit/xxxx1/src!../../hap-dsl-xvm/node_modules/babel-loader/lib/index.js?cwd=/home/sunliangmu/work/gitlab/hap-toolkit/packages/hap-toolkit/xxxx1&cacheDirectory&comments=false!../../hap-dsl-xvm/lib/loaders/fragment-loader.js?index=0&type=script!./src/app.ux?uxType=app")
;
$app_define$('@app-application/app', [], function ($app_require$, $app_exports$, $app_module$) {
  debugger
  $app_script$($app_module$, $app_exports$, $app_require$)
  if ($app_exports$.__esModule && $app_exports$.default) {
    $app_module$.exports = $app_exports$.default
  }
  $app_module$.exports.manifest = __webpack_require__(/*! ./manifest.json */ "./src/manifest.json")
  $app_module$.exports.style = { list: [ $app_style$ ] }
  
})
$app_bootstrap$('@app-application/app', { packagerVersion: "0.7.3" })


/***/ }),

/***/ "./src/global.js":
/*!***********************!*\
  !*** ./src/global.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setGlobalData = setGlobalData;
exports.getGlobalData = getGlobalData;

/**
 * @file 全局能力的配置与获取
 */
function getGlobalRef() {
  return Object.getPrototypeOf(global) || global;
}

const quickappGlobal = getGlobalRef();
/**
 * 设置全局(被APP与Page共享)数据；
 * @param key {string}
 * @param val {*}
 */

function setGlobalData(key, val) {
  quickappGlobal[key] = val;
}
/**
 * 获取全局(被APP与Page共享)数据；
 * @param key {string}
 * @return {*}
 */


function getGlobalData(key) {
  return quickappGlobal[key];
} // 两个方法默认定义在全局


setGlobalData('setGlobalData', setGlobalData);
setGlobalData('getGlobalData', getGlobalData); // TODO：开发者定义全局环境变量，后面即可直接访问
// setGlobalData('fetch', $app_require$('@app-module/system.fetch'))

/***/ }),

/***/ "./src/manifest.json":
/*!***************************!*\
  !*** ./src/manifest.json ***!
  \***************************/
/*! exports provided: package, name, versionName, versionCode, minPlatformVersion, icon, features, permissions, config, router, display, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"package\":\"com.application.demo\",\"name\":\"xxxx1\",\"versionName\":\"1.0.0\",\"versionCode\":\"1\",\"minPlatformVersion\":\"1020\",\"icon\":\"/Common/logo.png\",\"features\":[{\"name\":\"system.prompt\"},{\"name\":\"system.router\"},{\"name\":\"system.shortcut\"}],\"permissions\":[{\"origin\":\"*\"}],\"config\":{\"logLevel\":\"log\"},\"router\":{\"entry\":\"Demo\",\"pages\":{\"Demo\":{\"component\":\"index\"},\"DemoDetail\":{\"component\":\"index\"},\"About\":{\"component\":\"index\"}},\"widgets\":{\"CardDemo\":{\"name\":\"CardDemo\",\"description\":\"快应用卡片展示\",\"component\":\"index\",\"path\":\"/CardDemo\",\"features\":[]}}},\"display\":{\"titleBarBackgroundColor\":\"#f2f2f2\",\"titleBarTextColor\":\"#414141\",\"menu\":true,\"pages\":{\"Demo\":{\"titleBarText\":\"示例页\",\"menu\":false},\"DemoDetail\":{\"titleBarText\":\"详情页\"},\"About\":{\"menu\":false}}}}");

/***/ }),

/***/ "./src/util.js":
/*!*********************!*\
  !*** ./src/util.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/**
 * 显示菜单
 */
function showMenu() {
  const prompt = $app_require$('@app-module/system.prompt');

  const router = $app_require$('@app-module/system.router');

  const appInfo = $app_require$('@app-module/system.app').getInfo();

  prompt.showContextMenu({
    itemList: ['保存桌面', '关于', '取消'],
    success: function (ret) {
      switch (ret.index) {
        case 0:
          // 保存桌面
          createShortcut();
          break;

        case 1:
          // 关于
          router.push({
            uri: '/About',
            params: {
              name: appInfo.name,
              icon: appInfo.icon
            }
          });
          break;

        case 2:
          // 取消
          break;

        default:
          prompt.showToast({
            message: 'error'
          });
      }
    }
  });
}
/**
 * 创建桌面图标
 * 注意：使用加载器测试`创建桌面快捷方式`功能时，请先在`系统设置`中打开`应用加载器`的`桌面快捷方式`权限
 */


function createShortcut() {
  const prompt = $app_require$('@app-module/system.prompt');

  const shortcut = $app_require$('@app-module/system.shortcut');

  shortcut.hasInstalled({
    success: function (ret) {
      if (ret) {
        prompt.showToast({
          message: '已创建桌面图标'
        });
      } else {
        shortcut.install({
          success: function () {
            prompt.showToast({
              message: '成功创建桌面图标'
            });
          },
          fail: function (errmsg, errcode) {
            prompt.showToast({
              message: `${errcode}: ${errmsg}`
            });
          }
        });
      }
    }
  });
}

var _default = {
  showMenu,
  createShortcut
};
exports.default = _default;

/***/ })

/******/ });
    };
    if (typeof window === "undefined") {
      return createAppHandler();
    }
    else {
      window.createAppHandler = createAppHandler
      // H5注入manifest以获取features
      global.manifest = manifestJson;
    }
  })();
//# sourceMappingURL=app.js.map

console.log(a)