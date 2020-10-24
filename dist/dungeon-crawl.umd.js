(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["dungeon-crawl"] = factory();
	else
		root["dungeon-crawl"] = factory();
})((typeof self !== 'undefined' ? self : this), function() {
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
/******/ 	return __webpack_require__(__webpack_require__.s = "fb15");
/******/ })
/************************************************************************/
/******/ ({

/***/ "00ee":
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__("b622");

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var test = {};

test[TO_STRING_TAG] = 'z';

module.exports = String(test) === '[object z]';


/***/ }),

/***/ "0366":
/***/ (function(module, exports, __webpack_require__) {

var aFunction = __webpack_require__("1c0b");

// optional / simple context binding
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 0: return function () {
      return fn.call(that);
    };
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ "0554":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("96a4");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("499e").default
var update = add("17611838", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ "057f":
/***/ (function(module, exports, __webpack_require__) {

var toIndexedObject = __webpack_require__("fc6a");
var nativeGetOwnPropertyNames = __webpack_require__("241c").f;

var toString = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return nativeGetOwnPropertyNames(it);
  } catch (error) {
    return windowNames.slice();
  }
};

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
module.exports.f = function getOwnPropertyNames(it) {
  return windowNames && toString.call(it) == '[object Window]'
    ? getWindowNames(it)
    : nativeGetOwnPropertyNames(toIndexedObject(it));
};


/***/ }),

/***/ "06cf":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("83ab");
var propertyIsEnumerableModule = __webpack_require__("d1e7");
var createPropertyDescriptor = __webpack_require__("5c6c");
var toIndexedObject = __webpack_require__("fc6a");
var toPrimitive = __webpack_require__("c04e");
var has = __webpack_require__("5135");
var IE8_DOM_DEFINE = __webpack_require__("0cfb");

var nativeGetOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// `Object.getOwnPropertyDescriptor` method
// https://tc39.github.io/ecma262/#sec-object.getownpropertydescriptor
exports.f = DESCRIPTORS ? nativeGetOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
  O = toIndexedObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return nativeGetOwnPropertyDescriptor(O, P);
  } catch (error) { /* empty */ }
  if (has(O, P)) return createPropertyDescriptor(!propertyIsEnumerableModule.f.call(O, P), O[P]);
};


/***/ }),

/***/ "0cfb":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("83ab");
var fails = __webpack_require__("d039");
var createElement = __webpack_require__("cc12");

// Thank's IE8 for his funny defineProperty
module.exports = !DESCRIPTORS && !fails(function () {
  return Object.defineProperty(createElement('div'), 'a', {
    get: function () { return 7; }
  }).a != 7;
});


/***/ }),

/***/ "0f12":
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__("24fb");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".world{background:#262626;height:calc(100vh - 50px);display:flex;align-items:center;justify-content:center}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "13d5":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var $reduce = __webpack_require__("d58f").left;
var arrayMethodIsStrict = __webpack_require__("a640");
var arrayMethodUsesToLength = __webpack_require__("ae40");

var STRICT_METHOD = arrayMethodIsStrict('reduce');
var USES_TO_LENGTH = arrayMethodUsesToLength('reduce', { 1: 0 });

// `Array.prototype.reduce` method
// https://tc39.github.io/ecma262/#sec-array.prototype.reduce
$({ target: 'Array', proto: true, forced: !STRICT_METHOD || !USES_TO_LENGTH }, {
  reduce: function reduce(callbackfn /* , initialValue */) {
    return $reduce(this, callbackfn, arguments.length, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),

/***/ "14c3":
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__("c6b6");
var regexpExec = __webpack_require__("9263");

// `RegExpExec` abstract operation
// https://tc39.github.io/ecma262/#sec-regexpexec
module.exports = function (R, S) {
  var exec = R.exec;
  if (typeof exec === 'function') {
    var result = exec.call(R, S);
    if (typeof result !== 'object') {
      throw TypeError('RegExp exec method returned something other than an Object or null');
    }
    return result;
  }

  if (classof(R) !== 'RegExp') {
    throw TypeError('RegExp#exec called on incompatible receiver');
  }

  return regexpExec.call(R, S);
};



/***/ }),

/***/ "159b":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var DOMIterables = __webpack_require__("fdbc");
var forEach = __webpack_require__("17c2");
var createNonEnumerableProperty = __webpack_require__("9112");

for (var COLLECTION_NAME in DOMIterables) {
  var Collection = global[COLLECTION_NAME];
  var CollectionPrototype = Collection && Collection.prototype;
  // some Chrome versions have non-configurable methods on DOMTokenList
  if (CollectionPrototype && CollectionPrototype.forEach !== forEach) try {
    createNonEnumerableProperty(CollectionPrototype, 'forEach', forEach);
  } catch (error) {
    CollectionPrototype.forEach = forEach;
  }
}


/***/ }),

/***/ "17c2":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $forEach = __webpack_require__("b727").forEach;
var arrayMethodIsStrict = __webpack_require__("a640");
var arrayMethodUsesToLength = __webpack_require__("ae40");

var STRICT_METHOD = arrayMethodIsStrict('forEach');
var USES_TO_LENGTH = arrayMethodUsesToLength('forEach');

// `Array.prototype.forEach` method implementation
// https://tc39.github.io/ecma262/#sec-array.prototype.foreach
module.exports = (!STRICT_METHOD || !USES_TO_LENGTH) ? function forEach(callbackfn /* , thisArg */) {
  return $forEach(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
} : [].forEach;


/***/ }),

/***/ "19aa":
/***/ (function(module, exports) {

module.exports = function (it, Constructor, name) {
  if (!(it instanceof Constructor)) {
    throw TypeError('Incorrect ' + (name ? name + ' ' : '') + 'invocation');
  } return it;
};


/***/ }),

/***/ "1be4":
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__("d066");

module.exports = getBuiltIn('document', 'documentElement');


/***/ }),

/***/ "1c0b":
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') {
    throw TypeError(String(it) + ' is not a function');
  } return it;
};


/***/ }),

/***/ "1c7e":
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__("b622");

var ITERATOR = wellKnownSymbol('iterator');
var SAFE_CLOSING = false;

try {
  var called = 0;
  var iteratorWithReturn = {
    next: function () {
      return { done: !!called++ };
    },
    'return': function () {
      SAFE_CLOSING = true;
    }
  };
  iteratorWithReturn[ITERATOR] = function () {
    return this;
  };
  // eslint-disable-next-line no-throw-literal
  Array.from(iteratorWithReturn, function () { throw 2; });
} catch (error) { /* empty */ }

module.exports = function (exec, SKIP_CLOSING) {
  if (!SKIP_CLOSING && !SAFE_CLOSING) return false;
  var ITERATION_SUPPORT = false;
  try {
    var object = {};
    object[ITERATOR] = function () {
      return {
        next: function () {
          return { done: ITERATION_SUPPORT = true };
        }
      };
    };
    exec(object);
  } catch (error) { /* empty */ }
  return ITERATION_SUPPORT;
};


/***/ }),

/***/ "1cdc":
/***/ (function(module, exports, __webpack_require__) {

var userAgent = __webpack_require__("342f");

module.exports = /(iphone|ipod|ipad).*applewebkit/i.test(userAgent);


/***/ }),

/***/ "1d80":
/***/ (function(module, exports) {

// `RequireObjectCoercible` abstract operation
// https://tc39.github.io/ecma262/#sec-requireobjectcoercible
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on " + it);
  return it;
};


/***/ }),

/***/ "1dde":
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__("d039");
var wellKnownSymbol = __webpack_require__("b622");
var V8_VERSION = __webpack_require__("2d00");

var SPECIES = wellKnownSymbol('species');

module.exports = function (METHOD_NAME) {
  // We can't use this feature detection in V8 since it causes
  // deoptimization and serious performance degradation
  // https://github.com/zloirock/core-js/issues/677
  return V8_VERSION >= 51 || !fails(function () {
    var array = [];
    var constructor = array.constructor = {};
    constructor[SPECIES] = function () {
      return { foo: 1 };
    };
    return array[METHOD_NAME](Boolean).foo !== 1;
  });
};


/***/ }),

/***/ "217c":
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__("24fb");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".market{background:hsla(0,0%,100%,.5)}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "2266":
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__("825a");
var isArrayIteratorMethod = __webpack_require__("e95a");
var toLength = __webpack_require__("50c4");
var bind = __webpack_require__("0366");
var getIteratorMethod = __webpack_require__("35a1");
var callWithSafeIterationClosing = __webpack_require__("9bdd");

var Result = function (stopped, result) {
  this.stopped = stopped;
  this.result = result;
};

var iterate = module.exports = function (iterable, fn, that, AS_ENTRIES, IS_ITERATOR) {
  var boundFunction = bind(fn, that, AS_ENTRIES ? 2 : 1);
  var iterator, iterFn, index, length, result, next, step;

  if (IS_ITERATOR) {
    iterator = iterable;
  } else {
    iterFn = getIteratorMethod(iterable);
    if (typeof iterFn != 'function') throw TypeError('Target is not iterable');
    // optimisation for array iterators
    if (isArrayIteratorMethod(iterFn)) {
      for (index = 0, length = toLength(iterable.length); length > index; index++) {
        result = AS_ENTRIES
          ? boundFunction(anObject(step = iterable[index])[0], step[1])
          : boundFunction(iterable[index]);
        if (result && result instanceof Result) return result;
      } return new Result(false);
    }
    iterator = iterFn.call(iterable);
  }

  next = iterator.next;
  while (!(step = next.call(iterator)).done) {
    result = callWithSafeIterationClosing(iterator, boundFunction, step.value, AS_ENTRIES);
    if (typeof result == 'object' && result && result instanceof Result) return result;
  } return new Result(false);
};

iterate.stop = function (result) {
  return new Result(true, result);
};


/***/ }),

/***/ "232f":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("217c");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("499e").default
var update = add("6b6b50a0", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ "23cb":
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__("a691");

var max = Math.max;
var min = Math.min;

// Helper for a popular repeating case of the spec:
// Let integer be ? ToInteger(index).
// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
module.exports = function (index, length) {
  var integer = toInteger(index);
  return integer < 0 ? max(integer + length, 0) : min(integer, length);
};


/***/ }),

/***/ "23e7":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var getOwnPropertyDescriptor = __webpack_require__("06cf").f;
var createNonEnumerableProperty = __webpack_require__("9112");
var redefine = __webpack_require__("6eeb");
var setGlobal = __webpack_require__("ce4e");
var copyConstructorProperties = __webpack_require__("e893");
var isForced = __webpack_require__("94ca");

/*
  options.target      - name of the target object
  options.global      - target is the global object
  options.stat        - export as static methods of target
  options.proto       - export as prototype methods of target
  options.real        - real prototype method for the `pure` version
  options.forced      - export even if the native feature is available
  options.bind        - bind methods to the target, required for the `pure` version
  options.wrap        - wrap constructors to preventing global pollution, required for the `pure` version
  options.unsafe      - use the simple assignment of property instead of delete + defineProperty
  options.sham        - add a flag to not completely full polyfills
  options.enumerable  - export as enumerable property
  options.noTargetGet - prevent calling a getter on target
*/
module.exports = function (options, source) {
  var TARGET = options.target;
  var GLOBAL = options.global;
  var STATIC = options.stat;
  var FORCED, target, key, targetProperty, sourceProperty, descriptor;
  if (GLOBAL) {
    target = global;
  } else if (STATIC) {
    target = global[TARGET] || setGlobal(TARGET, {});
  } else {
    target = (global[TARGET] || {}).prototype;
  }
  if (target) for (key in source) {
    sourceProperty = source[key];
    if (options.noTargetGet) {
      descriptor = getOwnPropertyDescriptor(target, key);
      targetProperty = descriptor && descriptor.value;
    } else targetProperty = target[key];
    FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);
    // contained in target
    if (!FORCED && targetProperty !== undefined) {
      if (typeof sourceProperty === typeof targetProperty) continue;
      copyConstructorProperties(sourceProperty, targetProperty);
    }
    // add a flag to not completely full polyfills
    if (options.sham || (targetProperty && targetProperty.sham)) {
      createNonEnumerableProperty(sourceProperty, 'sham', true);
    }
    // extend global
    redefine(target, key, sourceProperty, options);
  }
};


/***/ }),

/***/ "241c":
/***/ (function(module, exports, __webpack_require__) {

var internalObjectKeys = __webpack_require__("ca84");
var enumBugKeys = __webpack_require__("7839");

var hiddenKeys = enumBugKeys.concat('length', 'prototype');

// `Object.getOwnPropertyNames` method
// https://tc39.github.io/ecma262/#sec-object.getownpropertynames
exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return internalObjectKeys(O, hiddenKeys);
};


/***/ }),

/***/ "24fb":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "25f0":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var redefine = __webpack_require__("6eeb");
var anObject = __webpack_require__("825a");
var fails = __webpack_require__("d039");
var flags = __webpack_require__("ad6d");

var TO_STRING = 'toString';
var RegExpPrototype = RegExp.prototype;
var nativeToString = RegExpPrototype[TO_STRING];

var NOT_GENERIC = fails(function () { return nativeToString.call({ source: 'a', flags: 'b' }) != '/a/b'; });
// FF44- RegExp#toString has a wrong name
var INCORRECT_NAME = nativeToString.name != TO_STRING;

// `RegExp.prototype.toString` method
// https://tc39.github.io/ecma262/#sec-regexp.prototype.tostring
if (NOT_GENERIC || INCORRECT_NAME) {
  redefine(RegExp.prototype, TO_STRING, function toString() {
    var R = anObject(this);
    var p = String(R.source);
    var rf = R.flags;
    var f = String(rf === undefined && R instanceof RegExp && !('flags' in RegExpPrototype) ? flags.call(R) : rf);
    return '/' + p + '/' + f;
  }, { unsafe: true });
}


/***/ }),

/***/ "2626":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var getBuiltIn = __webpack_require__("d066");
var definePropertyModule = __webpack_require__("9bf2");
var wellKnownSymbol = __webpack_require__("b622");
var DESCRIPTORS = __webpack_require__("83ab");

var SPECIES = wellKnownSymbol('species');

module.exports = function (CONSTRUCTOR_NAME) {
  var Constructor = getBuiltIn(CONSTRUCTOR_NAME);
  var defineProperty = definePropertyModule.f;

  if (DESCRIPTORS && Constructor && !Constructor[SPECIES]) {
    defineProperty(Constructor, SPECIES, {
      configurable: true,
      get: function () { return this; }
    });
  }
};


/***/ }),

/***/ "2cf4":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var fails = __webpack_require__("d039");
var classof = __webpack_require__("c6b6");
var bind = __webpack_require__("0366");
var html = __webpack_require__("1be4");
var createElement = __webpack_require__("cc12");
var IS_IOS = __webpack_require__("1cdc");

var location = global.location;
var set = global.setImmediate;
var clear = global.clearImmediate;
var process = global.process;
var MessageChannel = global.MessageChannel;
var Dispatch = global.Dispatch;
var counter = 0;
var queue = {};
var ONREADYSTATECHANGE = 'onreadystatechange';
var defer, channel, port;

var run = function (id) {
  // eslint-disable-next-line no-prototype-builtins
  if (queue.hasOwnProperty(id)) {
    var fn = queue[id];
    delete queue[id];
    fn();
  }
};

var runner = function (id) {
  return function () {
    run(id);
  };
};

var listener = function (event) {
  run(event.data);
};

var post = function (id) {
  // old engines have not location.origin
  global.postMessage(id + '', location.protocol + '//' + location.host);
};

// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
if (!set || !clear) {
  set = function setImmediate(fn) {
    var args = [];
    var i = 1;
    while (arguments.length > i) args.push(arguments[i++]);
    queue[++counter] = function () {
      // eslint-disable-next-line no-new-func
      (typeof fn == 'function' ? fn : Function(fn)).apply(undefined, args);
    };
    defer(counter);
    return counter;
  };
  clear = function clearImmediate(id) {
    delete queue[id];
  };
  // Node.js 0.8-
  if (classof(process) == 'process') {
    defer = function (id) {
      process.nextTick(runner(id));
    };
  // Sphere (JS game engine) Dispatch API
  } else if (Dispatch && Dispatch.now) {
    defer = function (id) {
      Dispatch.now(runner(id));
    };
  // Browsers with MessageChannel, includes WebWorkers
  // except iOS - https://github.com/zloirock/core-js/issues/624
  } else if (MessageChannel && !IS_IOS) {
    channel = new MessageChannel();
    port = channel.port2;
    channel.port1.onmessage = listener;
    defer = bind(port.postMessage, port, 1);
  // Browsers with postMessage, skip WebWorkers
  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
  } else if (
    global.addEventListener &&
    typeof postMessage == 'function' &&
    !global.importScripts &&
    !fails(post) &&
    location.protocol !== 'file:'
  ) {
    defer = post;
    global.addEventListener('message', listener, false);
  // IE8-
  } else if (ONREADYSTATECHANGE in createElement('script')) {
    defer = function (id) {
      html.appendChild(createElement('script'))[ONREADYSTATECHANGE] = function () {
        html.removeChild(this);
        run(id);
      };
    };
  // Rest old browsers
  } else {
    defer = function (id) {
      setTimeout(runner(id), 0);
    };
  }
}

module.exports = {
  set: set,
  clear: clear
};


/***/ }),

/***/ "2d00":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var userAgent = __webpack_require__("342f");

var process = global.process;
var versions = process && process.versions;
var v8 = versions && versions.v8;
var match, version;

if (v8) {
  match = v8.split('.');
  version = match[0] + match[1];
} else if (userAgent) {
  match = userAgent.match(/Edge\/(\d+)/);
  if (!match || match[1] >= 74) {
    match = userAgent.match(/Chrome\/(\d+)/);
    if (match) version = match[1];
  }
}

module.exports = version && +version;


/***/ }),

/***/ "2f62":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/* unused harmony export Store */
/* unused harmony export createLogger */
/* unused harmony export createNamespacedHelpers */
/* unused harmony export install */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return mapActions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return mapGetters; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return mapMutations; });
/* unused harmony export mapState */
/*!
 * vuex v3.5.1
 * (c) 2020 Evan You
 * @license MIT
 */
function applyMixin (Vue) {
  var version = Number(Vue.version.split('.')[0]);

  if (version >= 2) {
    Vue.mixin({ beforeCreate: vuexInit });
  } else {
    // override init and inject vuex init procedure
    // for 1.x backwards compatibility.
    var _init = Vue.prototype._init;
    Vue.prototype._init = function (options) {
      if ( options === void 0 ) options = {};

      options.init = options.init
        ? [vuexInit].concat(options.init)
        : vuexInit;
      _init.call(this, options);
    };
  }

  /**
   * Vuex init hook, injected into each instances init hooks list.
   */

  function vuexInit () {
    var options = this.$options;
    // store injection
    if (options.store) {
      this.$store = typeof options.store === 'function'
        ? options.store()
        : options.store;
    } else if (options.parent && options.parent.$store) {
      this.$store = options.parent.$store;
    }
  }
}

var target = typeof window !== 'undefined'
  ? window
  : typeof global !== 'undefined'
    ? global
    : {};
var devtoolHook = target.__VUE_DEVTOOLS_GLOBAL_HOOK__;

function devtoolPlugin (store) {
  if (!devtoolHook) { return }

  store._devtoolHook = devtoolHook;

  devtoolHook.emit('vuex:init', store);

  devtoolHook.on('vuex:travel-to-state', function (targetState) {
    store.replaceState(targetState);
  });

  store.subscribe(function (mutation, state) {
    devtoolHook.emit('vuex:mutation', mutation, state);
  }, { prepend: true });

  store.subscribeAction(function (action, state) {
    devtoolHook.emit('vuex:action', action, state);
  }, { prepend: true });
}

/**
 * Get the first item that pass the test
 * by second argument function
 *
 * @param {Array} list
 * @param {Function} f
 * @return {*}
 */
function find (list, f) {
  return list.filter(f)[0]
}

/**
 * Deep copy the given object considering circular structure.
 * This function caches all nested objects and its copies.
 * If it detects circular structure, use cached copy to avoid infinite loop.
 *
 * @param {*} obj
 * @param {Array<Object>} cache
 * @return {*}
 */
function deepCopy (obj, cache) {
  if ( cache === void 0 ) cache = [];

  // just return if obj is immutable value
  if (obj === null || typeof obj !== 'object') {
    return obj
  }

  // if obj is hit, it is in circular structure
  var hit = find(cache, function (c) { return c.original === obj; });
  if (hit) {
    return hit.copy
  }

  var copy = Array.isArray(obj) ? [] : {};
  // put the copy into cache at first
  // because we want to refer it in recursive deepCopy
  cache.push({
    original: obj,
    copy: copy
  });

  Object.keys(obj).forEach(function (key) {
    copy[key] = deepCopy(obj[key], cache);
  });

  return copy
}

/**
 * forEach for object
 */
function forEachValue (obj, fn) {
  Object.keys(obj).forEach(function (key) { return fn(obj[key], key); });
}

function isObject (obj) {
  return obj !== null && typeof obj === 'object'
}

function isPromise (val) {
  return val && typeof val.then === 'function'
}

function assert (condition, msg) {
  if (!condition) { throw new Error(("[vuex] " + msg)) }
}

function partial (fn, arg) {
  return function () {
    return fn(arg)
  }
}

// Base data struct for store's module, package with some attribute and method
var Module = function Module (rawModule, runtime) {
  this.runtime = runtime;
  // Store some children item
  this._children = Object.create(null);
  // Store the origin module object which passed by programmer
  this._rawModule = rawModule;
  var rawState = rawModule.state;

  // Store the origin module's state
  this.state = (typeof rawState === 'function' ? rawState() : rawState) || {};
};

var prototypeAccessors = { namespaced: { configurable: true } };

prototypeAccessors.namespaced.get = function () {
  return !!this._rawModule.namespaced
};

Module.prototype.addChild = function addChild (key, module) {
  this._children[key] = module;
};

Module.prototype.removeChild = function removeChild (key) {
  delete this._children[key];
};

Module.prototype.getChild = function getChild (key) {
  return this._children[key]
};

Module.prototype.hasChild = function hasChild (key) {
  return key in this._children
};

Module.prototype.update = function update (rawModule) {
  this._rawModule.namespaced = rawModule.namespaced;
  if (rawModule.actions) {
    this._rawModule.actions = rawModule.actions;
  }
  if (rawModule.mutations) {
    this._rawModule.mutations = rawModule.mutations;
  }
  if (rawModule.getters) {
    this._rawModule.getters = rawModule.getters;
  }
};

Module.prototype.forEachChild = function forEachChild (fn) {
  forEachValue(this._children, fn);
};

Module.prototype.forEachGetter = function forEachGetter (fn) {
  if (this._rawModule.getters) {
    forEachValue(this._rawModule.getters, fn);
  }
};

Module.prototype.forEachAction = function forEachAction (fn) {
  if (this._rawModule.actions) {
    forEachValue(this._rawModule.actions, fn);
  }
};

Module.prototype.forEachMutation = function forEachMutation (fn) {
  if (this._rawModule.mutations) {
    forEachValue(this._rawModule.mutations, fn);
  }
};

Object.defineProperties( Module.prototype, prototypeAccessors );

var ModuleCollection = function ModuleCollection (rawRootModule) {
  // register root module (Vuex.Store options)
  this.register([], rawRootModule, false);
};

ModuleCollection.prototype.get = function get (path) {
  return path.reduce(function (module, key) {
    return module.getChild(key)
  }, this.root)
};

ModuleCollection.prototype.getNamespace = function getNamespace (path) {
  var module = this.root;
  return path.reduce(function (namespace, key) {
    module = module.getChild(key);
    return namespace + (module.namespaced ? key + '/' : '')
  }, '')
};

ModuleCollection.prototype.update = function update$1 (rawRootModule) {
  update([], this.root, rawRootModule);
};

ModuleCollection.prototype.register = function register (path, rawModule, runtime) {
    var this$1 = this;
    if ( runtime === void 0 ) runtime = true;

  if ((false)) {}

  var newModule = new Module(rawModule, runtime);
  if (path.length === 0) {
    this.root = newModule;
  } else {
    var parent = this.get(path.slice(0, -1));
    parent.addChild(path[path.length - 1], newModule);
  }

  // register nested modules
  if (rawModule.modules) {
    forEachValue(rawModule.modules, function (rawChildModule, key) {
      this$1.register(path.concat(key), rawChildModule, runtime);
    });
  }
};

ModuleCollection.prototype.unregister = function unregister (path) {
  var parent = this.get(path.slice(0, -1));
  var key = path[path.length - 1];
  var child = parent.getChild(key);

  if (!child) {
    if ((false)) {}
    return
  }

  if (!child.runtime) {
    return
  }

  parent.removeChild(key);
};

ModuleCollection.prototype.isRegistered = function isRegistered (path) {
  var parent = this.get(path.slice(0, -1));
  var key = path[path.length - 1];

  return parent.hasChild(key)
};

function update (path, targetModule, newModule) {
  if ((false)) {}

  // update target module
  targetModule.update(newModule);

  // update nested modules
  if (newModule.modules) {
    for (var key in newModule.modules) {
      if (!targetModule.getChild(key)) {
        if ((false)) {}
        return
      }
      update(
        path.concat(key),
        targetModule.getChild(key),
        newModule.modules[key]
      );
    }
  }
}

var functionAssert = {
  assert: function (value) { return typeof value === 'function'; },
  expected: 'function'
};

var objectAssert = {
  assert: function (value) { return typeof value === 'function' ||
    (typeof value === 'object' && typeof value.handler === 'function'); },
  expected: 'function or object with "handler" function'
};

var assertTypes = {
  getters: functionAssert,
  mutations: functionAssert,
  actions: objectAssert
};

function assertRawModule (path, rawModule) {
  Object.keys(assertTypes).forEach(function (key) {
    if (!rawModule[key]) { return }

    var assertOptions = assertTypes[key];

    forEachValue(rawModule[key], function (value, type) {
      assert(
        assertOptions.assert(value),
        makeAssertionMessage(path, key, type, value, assertOptions.expected)
      );
    });
  });
}

function makeAssertionMessage (path, key, type, value, expected) {
  var buf = key + " should be " + expected + " but \"" + key + "." + type + "\"";
  if (path.length > 0) {
    buf += " in module \"" + (path.join('.')) + "\"";
  }
  buf += " is " + (JSON.stringify(value)) + ".";
  return buf
}

var Vue; // bind on install

var Store = function Store (options) {
  var this$1 = this;
  if ( options === void 0 ) options = {};

  // Auto install if it is not done yet and `window` has `Vue`.
  // To allow users to avoid auto-installation in some cases,
  // this code should be placed here. See #731
  if (!Vue && typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
  }

  if ((false)) {}

  var plugins = options.plugins; if ( plugins === void 0 ) plugins = [];
  var strict = options.strict; if ( strict === void 0 ) strict = false;

  // store internal state
  this._committing = false;
  this._actions = Object.create(null);
  this._actionSubscribers = [];
  this._mutations = Object.create(null);
  this._wrappedGetters = Object.create(null);
  this._modules = new ModuleCollection(options);
  this._modulesNamespaceMap = Object.create(null);
  this._subscribers = [];
  this._watcherVM = new Vue();
  this._makeLocalGettersCache = Object.create(null);

  // bind commit and dispatch to self
  var store = this;
  var ref = this;
  var dispatch = ref.dispatch;
  var commit = ref.commit;
  this.dispatch = function boundDispatch (type, payload) {
    return dispatch.call(store, type, payload)
  };
  this.commit = function boundCommit (type, payload, options) {
    return commit.call(store, type, payload, options)
  };

  // strict mode
  this.strict = strict;

  var state = this._modules.root.state;

  // init root module.
  // this also recursively registers all sub-modules
  // and collects all module getters inside this._wrappedGetters
  installModule(this, state, [], this._modules.root);

  // initialize the store vm, which is responsible for the reactivity
  // (also registers _wrappedGetters as computed properties)
  resetStoreVM(this, state);

  // apply plugins
  plugins.forEach(function (plugin) { return plugin(this$1); });

  var useDevtools = options.devtools !== undefined ? options.devtools : Vue.config.devtools;
  if (useDevtools) {
    devtoolPlugin(this);
  }
};

var prototypeAccessors$1 = { state: { configurable: true } };

prototypeAccessors$1.state.get = function () {
  return this._vm._data.$$state
};

prototypeAccessors$1.state.set = function (v) {
  if ((false)) {}
};

Store.prototype.commit = function commit (_type, _payload, _options) {
    var this$1 = this;

  // check object-style commit
  var ref = unifyObjectStyle(_type, _payload, _options);
    var type = ref.type;
    var payload = ref.payload;
    var options = ref.options;

  var mutation = { type: type, payload: payload };
  var entry = this._mutations[type];
  if (!entry) {
    if ((false)) {}
    return
  }
  this._withCommit(function () {
    entry.forEach(function commitIterator (handler) {
      handler(payload);
    });
  });

  this._subscribers
    .slice() // shallow copy to prevent iterator invalidation if subscriber synchronously calls unsubscribe
    .forEach(function (sub) { return sub(mutation, this$1.state); });

  if (
    false
  ) {}
};

Store.prototype.dispatch = function dispatch (_type, _payload) {
    var this$1 = this;

  // check object-style dispatch
  var ref = unifyObjectStyle(_type, _payload);
    var type = ref.type;
    var payload = ref.payload;

  var action = { type: type, payload: payload };
  var entry = this._actions[type];
  if (!entry) {
    if ((false)) {}
    return
  }

  try {
    this._actionSubscribers
      .slice() // shallow copy to prevent iterator invalidation if subscriber synchronously calls unsubscribe
      .filter(function (sub) { return sub.before; })
      .forEach(function (sub) { return sub.before(action, this$1.state); });
  } catch (e) {
    if ((false)) {}
  }

  var result = entry.length > 1
    ? Promise.all(entry.map(function (handler) { return handler(payload); }))
    : entry[0](payload);

  return new Promise(function (resolve, reject) {
    result.then(function (res) {
      try {
        this$1._actionSubscribers
          .filter(function (sub) { return sub.after; })
          .forEach(function (sub) { return sub.after(action, this$1.state); });
      } catch (e) {
        if ((false)) {}
      }
      resolve(res);
    }, function (error) {
      try {
        this$1._actionSubscribers
          .filter(function (sub) { return sub.error; })
          .forEach(function (sub) { return sub.error(action, this$1.state, error); });
      } catch (e) {
        if ((false)) {}
      }
      reject(error);
    });
  })
};

Store.prototype.subscribe = function subscribe (fn, options) {
  return genericSubscribe(fn, this._subscribers, options)
};

Store.prototype.subscribeAction = function subscribeAction (fn, options) {
  var subs = typeof fn === 'function' ? { before: fn } : fn;
  return genericSubscribe(subs, this._actionSubscribers, options)
};

Store.prototype.watch = function watch (getter, cb, options) {
    var this$1 = this;

  if ((false)) {}
  return this._watcherVM.$watch(function () { return getter(this$1.state, this$1.getters); }, cb, options)
};

Store.prototype.replaceState = function replaceState (state) {
    var this$1 = this;

  this._withCommit(function () {
    this$1._vm._data.$$state = state;
  });
};

Store.prototype.registerModule = function registerModule (path, rawModule, options) {
    if ( options === void 0 ) options = {};

  if (typeof path === 'string') { path = [path]; }

  if ((false)) {}

  this._modules.register(path, rawModule);
  installModule(this, this.state, path, this._modules.get(path), options.preserveState);
  // reset store to update getters...
  resetStoreVM(this, this.state);
};

Store.prototype.unregisterModule = function unregisterModule (path) {
    var this$1 = this;

  if (typeof path === 'string') { path = [path]; }

  if ((false)) {}

  this._modules.unregister(path);
  this._withCommit(function () {
    var parentState = getNestedState(this$1.state, path.slice(0, -1));
    Vue.delete(parentState, path[path.length - 1]);
  });
  resetStore(this);
};

Store.prototype.hasModule = function hasModule (path) {
  if (typeof path === 'string') { path = [path]; }

  if ((false)) {}

  return this._modules.isRegistered(path)
};

Store.prototype.hotUpdate = function hotUpdate (newOptions) {
  this._modules.update(newOptions);
  resetStore(this, true);
};

Store.prototype._withCommit = function _withCommit (fn) {
  var committing = this._committing;
  this._committing = true;
  fn();
  this._committing = committing;
};

Object.defineProperties( Store.prototype, prototypeAccessors$1 );

function genericSubscribe (fn, subs, options) {
  if (subs.indexOf(fn) < 0) {
    options && options.prepend
      ? subs.unshift(fn)
      : subs.push(fn);
  }
  return function () {
    var i = subs.indexOf(fn);
    if (i > -1) {
      subs.splice(i, 1);
    }
  }
}

function resetStore (store, hot) {
  store._actions = Object.create(null);
  store._mutations = Object.create(null);
  store._wrappedGetters = Object.create(null);
  store._modulesNamespaceMap = Object.create(null);
  var state = store.state;
  // init all modules
  installModule(store, state, [], store._modules.root, true);
  // reset vm
  resetStoreVM(store, state, hot);
}

function resetStoreVM (store, state, hot) {
  var oldVm = store._vm;

  // bind store public getters
  store.getters = {};
  // reset local getters cache
  store._makeLocalGettersCache = Object.create(null);
  var wrappedGetters = store._wrappedGetters;
  var computed = {};
  forEachValue(wrappedGetters, function (fn, key) {
    // use computed to leverage its lazy-caching mechanism
    // direct inline function use will lead to closure preserving oldVm.
    // using partial to return function with only arguments preserved in closure environment.
    computed[key] = partial(fn, store);
    Object.defineProperty(store.getters, key, {
      get: function () { return store._vm[key]; },
      enumerable: true // for local getters
    });
  });

  // use a Vue instance to store the state tree
  // suppress warnings just in case the user has added
  // some funky global mixins
  var silent = Vue.config.silent;
  Vue.config.silent = true;
  store._vm = new Vue({
    data: {
      $$state: state
    },
    computed: computed
  });
  Vue.config.silent = silent;

  // enable strict mode for new vm
  if (store.strict) {
    enableStrictMode(store);
  }

  if (oldVm) {
    if (hot) {
      // dispatch changes in all subscribed watchers
      // to force getter re-evaluation for hot reloading.
      store._withCommit(function () {
        oldVm._data.$$state = null;
      });
    }
    Vue.nextTick(function () { return oldVm.$destroy(); });
  }
}

function installModule (store, rootState, path, module, hot) {
  var isRoot = !path.length;
  var namespace = store._modules.getNamespace(path);

  // register in namespace map
  if (module.namespaced) {
    if (store._modulesNamespaceMap[namespace] && ("production" !== 'production')) {
      console.error(("[vuex] duplicate namespace " + namespace + " for the namespaced module " + (path.join('/'))));
    }
    store._modulesNamespaceMap[namespace] = module;
  }

  // set state
  if (!isRoot && !hot) {
    var parentState = getNestedState(rootState, path.slice(0, -1));
    var moduleName = path[path.length - 1];
    store._withCommit(function () {
      if ((false)) {}
      Vue.set(parentState, moduleName, module.state);
    });
  }

  var local = module.context = makeLocalContext(store, namespace, path);

  module.forEachMutation(function (mutation, key) {
    var namespacedType = namespace + key;
    registerMutation(store, namespacedType, mutation, local);
  });

  module.forEachAction(function (action, key) {
    var type = action.root ? key : namespace + key;
    var handler = action.handler || action;
    registerAction(store, type, handler, local);
  });

  module.forEachGetter(function (getter, key) {
    var namespacedType = namespace + key;
    registerGetter(store, namespacedType, getter, local);
  });

  module.forEachChild(function (child, key) {
    installModule(store, rootState, path.concat(key), child, hot);
  });
}

/**
 * make localized dispatch, commit, getters and state
 * if there is no namespace, just use root ones
 */
function makeLocalContext (store, namespace, path) {
  var noNamespace = namespace === '';

  var local = {
    dispatch: noNamespace ? store.dispatch : function (_type, _payload, _options) {
      var args = unifyObjectStyle(_type, _payload, _options);
      var payload = args.payload;
      var options = args.options;
      var type = args.type;

      if (!options || !options.root) {
        type = namespace + type;
        if (false) {}
      }

      return store.dispatch(type, payload)
    },

    commit: noNamespace ? store.commit : function (_type, _payload, _options) {
      var args = unifyObjectStyle(_type, _payload, _options);
      var payload = args.payload;
      var options = args.options;
      var type = args.type;

      if (!options || !options.root) {
        type = namespace + type;
        if (false) {}
      }

      store.commit(type, payload, options);
    }
  };

  // getters and state object must be gotten lazily
  // because they will be changed by vm update
  Object.defineProperties(local, {
    getters: {
      get: noNamespace
        ? function () { return store.getters; }
        : function () { return makeLocalGetters(store, namespace); }
    },
    state: {
      get: function () { return getNestedState(store.state, path); }
    }
  });

  return local
}

function makeLocalGetters (store, namespace) {
  if (!store._makeLocalGettersCache[namespace]) {
    var gettersProxy = {};
    var splitPos = namespace.length;
    Object.keys(store.getters).forEach(function (type) {
      // skip if the target getter is not match this namespace
      if (type.slice(0, splitPos) !== namespace) { return }

      // extract local getter type
      var localType = type.slice(splitPos);

      // Add a port to the getters proxy.
      // Define as getter property because
      // we do not want to evaluate the getters in this time.
      Object.defineProperty(gettersProxy, localType, {
        get: function () { return store.getters[type]; },
        enumerable: true
      });
    });
    store._makeLocalGettersCache[namespace] = gettersProxy;
  }

  return store._makeLocalGettersCache[namespace]
}

function registerMutation (store, type, handler, local) {
  var entry = store._mutations[type] || (store._mutations[type] = []);
  entry.push(function wrappedMutationHandler (payload) {
    handler.call(store, local.state, payload);
  });
}

function registerAction (store, type, handler, local) {
  var entry = store._actions[type] || (store._actions[type] = []);
  entry.push(function wrappedActionHandler (payload) {
    var res = handler.call(store, {
      dispatch: local.dispatch,
      commit: local.commit,
      getters: local.getters,
      state: local.state,
      rootGetters: store.getters,
      rootState: store.state
    }, payload);
    if (!isPromise(res)) {
      res = Promise.resolve(res);
    }
    if (store._devtoolHook) {
      return res.catch(function (err) {
        store._devtoolHook.emit('vuex:error', err);
        throw err
      })
    } else {
      return res
    }
  });
}

function registerGetter (store, type, rawGetter, local) {
  if (store._wrappedGetters[type]) {
    if ((false)) {}
    return
  }
  store._wrappedGetters[type] = function wrappedGetter (store) {
    return rawGetter(
      local.state, // local state
      local.getters, // local getters
      store.state, // root state
      store.getters // root getters
    )
  };
}

function enableStrictMode (store) {
  store._vm.$watch(function () { return this._data.$$state }, function () {
    if ((false)) {}
  }, { deep: true, sync: true });
}

function getNestedState (state, path) {
  return path.reduce(function (state, key) { return state[key]; }, state)
}

function unifyObjectStyle (type, payload, options) {
  if (isObject(type) && type.type) {
    options = payload;
    payload = type;
    type = type.type;
  }

  if ((false)) {}

  return { type: type, payload: payload, options: options }
}

function install (_Vue) {
  if (Vue && _Vue === Vue) {
    if ((false)) {}
    return
  }
  Vue = _Vue;
  applyMixin(Vue);
}

/**
 * Reduce the code which written in Vue.js for getting the state.
 * @param {String} [namespace] - Module's namespace
 * @param {Object|Array} states # Object's item can be a function which accept state and getters for param, you can do something for state and getters in it.
 * @param {Object}
 */
var mapState = normalizeNamespace(function (namespace, states) {
  var res = {};
  if (false) {}
  normalizeMap(states).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    res[key] = function mappedState () {
      var state = this.$store.state;
      var getters = this.$store.getters;
      if (namespace) {
        var module = getModuleByNamespace(this.$store, 'mapState', namespace);
        if (!module) {
          return
        }
        state = module.context.state;
        getters = module.context.getters;
      }
      return typeof val === 'function'
        ? val.call(this, state, getters)
        : state[val]
    };
    // mark vuex getter for devtools
    res[key].vuex = true;
  });
  return res
});

/**
 * Reduce the code which written in Vue.js for committing the mutation
 * @param {String} [namespace] - Module's namespace
 * @param {Object|Array} mutations # Object's item can be a function which accept `commit` function as the first param, it can accept anthor params. You can commit mutation and do any other things in this function. specially, You need to pass anthor params from the mapped function.
 * @return {Object}
 */
var mapMutations = normalizeNamespace(function (namespace, mutations) {
  var res = {};
  if (false) {}
  normalizeMap(mutations).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    res[key] = function mappedMutation () {
      var args = [], len = arguments.length;
      while ( len-- ) args[ len ] = arguments[ len ];

      // Get the commit method from store
      var commit = this.$store.commit;
      if (namespace) {
        var module = getModuleByNamespace(this.$store, 'mapMutations', namespace);
        if (!module) {
          return
        }
        commit = module.context.commit;
      }
      return typeof val === 'function'
        ? val.apply(this, [commit].concat(args))
        : commit.apply(this.$store, [val].concat(args))
    };
  });
  return res
});

/**
 * Reduce the code which written in Vue.js for getting the getters
 * @param {String} [namespace] - Module's namespace
 * @param {Object|Array} getters
 * @return {Object}
 */
var mapGetters = normalizeNamespace(function (namespace, getters) {
  var res = {};
  if (false) {}
  normalizeMap(getters).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    // The namespace has been mutated by normalizeNamespace
    val = namespace + val;
    res[key] = function mappedGetter () {
      if (namespace && !getModuleByNamespace(this.$store, 'mapGetters', namespace)) {
        return
      }
      if (false) {}
      return this.$store.getters[val]
    };
    // mark vuex getter for devtools
    res[key].vuex = true;
  });
  return res
});

/**
 * Reduce the code which written in Vue.js for dispatch the action
 * @param {String} [namespace] - Module's namespace
 * @param {Object|Array} actions # Object's item can be a function which accept `dispatch` function as the first param, it can accept anthor params. You can dispatch action and do any other things in this function. specially, You need to pass anthor params from the mapped function.
 * @return {Object}
 */
var mapActions = normalizeNamespace(function (namespace, actions) {
  var res = {};
  if (false) {}
  normalizeMap(actions).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    res[key] = function mappedAction () {
      var args = [], len = arguments.length;
      while ( len-- ) args[ len ] = arguments[ len ];

      // get dispatch function from store
      var dispatch = this.$store.dispatch;
      if (namespace) {
        var module = getModuleByNamespace(this.$store, 'mapActions', namespace);
        if (!module) {
          return
        }
        dispatch = module.context.dispatch;
      }
      return typeof val === 'function'
        ? val.apply(this, [dispatch].concat(args))
        : dispatch.apply(this.$store, [val].concat(args))
    };
  });
  return res
});

/**
 * Rebinding namespace param for mapXXX function in special scoped, and return them by simple object
 * @param {String} namespace
 * @return {Object}
 */
var createNamespacedHelpers = function (namespace) { return ({
  mapState: mapState.bind(null, namespace),
  mapGetters: mapGetters.bind(null, namespace),
  mapMutations: mapMutations.bind(null, namespace),
  mapActions: mapActions.bind(null, namespace)
}); };

/**
 * Normalize the map
 * normalizeMap([1, 2, 3]) => [ { key: 1, val: 1 }, { key: 2, val: 2 }, { key: 3, val: 3 } ]
 * normalizeMap({a: 1, b: 2, c: 3}) => [ { key: 'a', val: 1 }, { key: 'b', val: 2 }, { key: 'c', val: 3 } ]
 * @param {Array|Object} map
 * @return {Object}
 */
function normalizeMap (map) {
  if (!isValidMap(map)) {
    return []
  }
  return Array.isArray(map)
    ? map.map(function (key) { return ({ key: key, val: key }); })
    : Object.keys(map).map(function (key) { return ({ key: key, val: map[key] }); })
}

/**
 * Validate whether given map is valid or not
 * @param {*} map
 * @return {Boolean}
 */
function isValidMap (map) {
  return Array.isArray(map) || isObject(map)
}

/**
 * Return a function expect two param contains namespace and map. it will normalize the namespace and then the param's function will handle the new namespace and the map.
 * @param {Function} fn
 * @return {Function}
 */
function normalizeNamespace (fn) {
  return function (namespace, map) {
    if (typeof namespace !== 'string') {
      map = namespace;
      namespace = '';
    } else if (namespace.charAt(namespace.length - 1) !== '/') {
      namespace += '/';
    }
    return fn(namespace, map)
  }
}

/**
 * Search a special module from store by namespace. if module not exist, print error message.
 * @param {Object} store
 * @param {String} helper
 * @param {String} namespace
 * @return {Object}
 */
function getModuleByNamespace (store, helper, namespace) {
  var module = store._modulesNamespaceMap[namespace];
  if (false) {}
  return module
}

// Credits: borrowed code from fcomb/redux-logger

function createLogger (ref) {
  if ( ref === void 0 ) ref = {};
  var collapsed = ref.collapsed; if ( collapsed === void 0 ) collapsed = true;
  var filter = ref.filter; if ( filter === void 0 ) filter = function (mutation, stateBefore, stateAfter) { return true; };
  var transformer = ref.transformer; if ( transformer === void 0 ) transformer = function (state) { return state; };
  var mutationTransformer = ref.mutationTransformer; if ( mutationTransformer === void 0 ) mutationTransformer = function (mut) { return mut; };
  var actionFilter = ref.actionFilter; if ( actionFilter === void 0 ) actionFilter = function (action, state) { return true; };
  var actionTransformer = ref.actionTransformer; if ( actionTransformer === void 0 ) actionTransformer = function (act) { return act; };
  var logMutations = ref.logMutations; if ( logMutations === void 0 ) logMutations = true;
  var logActions = ref.logActions; if ( logActions === void 0 ) logActions = true;
  var logger = ref.logger; if ( logger === void 0 ) logger = console;

  return function (store) {
    var prevState = deepCopy(store.state);

    if (typeof logger === 'undefined') {
      return
    }

    if (logMutations) {
      store.subscribe(function (mutation, state) {
        var nextState = deepCopy(state);

        if (filter(mutation, prevState, nextState)) {
          var formattedTime = getFormattedTime();
          var formattedMutation = mutationTransformer(mutation);
          var message = "mutation " + (mutation.type) + formattedTime;

          startMessage(logger, message, collapsed);
          logger.log('%c prev state', 'color: #9E9E9E; font-weight: bold', transformer(prevState));
          logger.log('%c mutation', 'color: #03A9F4; font-weight: bold', formattedMutation);
          logger.log('%c next state', 'color: #4CAF50; font-weight: bold', transformer(nextState));
          endMessage(logger);
        }

        prevState = nextState;
      });
    }

    if (logActions) {
      store.subscribeAction(function (action, state) {
        if (actionFilter(action, state)) {
          var formattedTime = getFormattedTime();
          var formattedAction = actionTransformer(action);
          var message = "action " + (action.type) + formattedTime;

          startMessage(logger, message, collapsed);
          logger.log('%c action', 'color: #03A9F4; font-weight: bold', formattedAction);
          endMessage(logger);
        }
      });
    }
  }
}

function startMessage (logger, message, collapsed) {
  var startMessage = collapsed
    ? logger.groupCollapsed
    : logger.group;

  // render
  try {
    startMessage.call(logger, message);
  } catch (e) {
    logger.log(message);
  }
}

function endMessage (logger) {
  try {
    logger.groupEnd();
  } catch (e) {
    logger.log('—— log end ——');
  }
}

function getFormattedTime () {
  var time = new Date();
  return (" @ " + (pad(time.getHours(), 2)) + ":" + (pad(time.getMinutes(), 2)) + ":" + (pad(time.getSeconds(), 2)) + "." + (pad(time.getMilliseconds(), 3)))
}

function repeat (str, times) {
  return (new Array(times + 1)).join(str)
}

function pad (num, maxLength) {
  return repeat('0', maxLength - num.toString().length) + num
}

var index = {
  Store: Store,
  install: install,
  version: '3.5.1',
  mapState: mapState,
  mapMutations: mapMutations,
  mapGetters: mapGetters,
  mapActions: mapActions,
  createNamespacedHelpers: createNamespacedHelpers,
  createLogger: createLogger
};

/* unused harmony default export */ var _unused_webpack_default_export = (index);


/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("c8ba")))

/***/ }),

/***/ "3420":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ModalLabelRow_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("5428");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ModalLabelRow_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ModalLabelRow_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ModalLabelRow_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "342f":
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__("d066");

module.exports = getBuiltIn('navigator', 'userAgent') || '';


/***/ }),

/***/ "35a1":
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__("f5df");
var Iterators = __webpack_require__("3f8c");
var wellKnownSymbol = __webpack_require__("b622");

var ITERATOR = wellKnownSymbol('iterator');

module.exports = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


/***/ }),

/***/ "37e8":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("83ab");
var definePropertyModule = __webpack_require__("9bf2");
var anObject = __webpack_require__("825a");
var objectKeys = __webpack_require__("df75");

// `Object.defineProperties` method
// https://tc39.github.io/ecma262/#sec-object.defineproperties
module.exports = DESCRIPTORS ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = objectKeys(Properties);
  var length = keys.length;
  var index = 0;
  var key;
  while (length > index) definePropertyModule.f(O, key = keys[index++], Properties[key]);
  return O;
};


/***/ }),

/***/ "3bbe":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("861d");

module.exports = function (it) {
  if (!isObject(it) && it !== null) {
    throw TypeError("Can't set " + String(it) + ' as a prototype');
  } return it;
};


/***/ }),

/***/ "3c64":
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__("24fb");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "3ca3":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var charAt = __webpack_require__("6547").charAt;
var InternalStateModule = __webpack_require__("69f3");
var defineIterator = __webpack_require__("7dd0");

var STRING_ITERATOR = 'String Iterator';
var setInternalState = InternalStateModule.set;
var getInternalState = InternalStateModule.getterFor(STRING_ITERATOR);

// `String.prototype[@@iterator]` method
// https://tc39.github.io/ecma262/#sec-string.prototype-@@iterator
defineIterator(String, 'String', function (iterated) {
  setInternalState(this, {
    type: STRING_ITERATOR,
    string: String(iterated),
    index: 0
  });
// `%StringIteratorPrototype%.next` method
// https://tc39.github.io/ecma262/#sec-%stringiteratorprototype%.next
}, function next() {
  var state = getInternalState(this);
  var string = state.string;
  var index = state.index;
  var point;
  if (index >= string.length) return { value: undefined, done: true };
  point = charAt(string, index);
  state.index += point.length;
  return { value: point, done: false };
});


/***/ }),

/***/ "3e20":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("df39");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("499e").default
var update = add("9ab99bf4", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ "3f8c":
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ "4160":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var forEach = __webpack_require__("17c2");

// `Array.prototype.forEach` method
// https://tc39.github.io/ecma262/#sec-array.prototype.foreach
$({ target: 'Array', proto: true, forced: [].forEach != forEach }, {
  forEach: forEach
});


/***/ }),

/***/ "428f":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");

module.exports = global;


/***/ }),

/***/ "44ad":
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__("d039");
var classof = __webpack_require__("c6b6");

var split = ''.split;

// fallback for non-array-like ES3 and non-enumerable old V8 strings
module.exports = fails(function () {
  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
  // eslint-disable-next-line no-prototype-builtins
  return !Object('z').propertyIsEnumerable(0);
}) ? function (it) {
  return classof(it) == 'String' ? split.call(it, '') : Object(it);
} : Object;


/***/ }),

/***/ "44d2":
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__("b622");
var create = __webpack_require__("7c73");
var definePropertyModule = __webpack_require__("9bf2");

var UNSCOPABLES = wellKnownSymbol('unscopables');
var ArrayPrototype = Array.prototype;

// Array.prototype[@@unscopables]
// https://tc39.github.io/ecma262/#sec-array.prototype-@@unscopables
if (ArrayPrototype[UNSCOPABLES] == undefined) {
  definePropertyModule.f(ArrayPrototype, UNSCOPABLES, {
    configurable: true,
    value: create(null)
  });
}

// add a key to Array.prototype[@@unscopables]
module.exports = function (key) {
  ArrayPrototype[UNSCOPABLES][key] = true;
};


/***/ }),

/***/ "44de":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");

module.exports = function (a, b) {
  var console = global.console;
  if (console && console.error) {
    arguments.length === 1 ? console.error(a) : console.error(a, b);
  }
};


/***/ }),

/***/ "46af":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("0f12");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("499e").default
var update = add("ffd33b84", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ "4840":
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__("825a");
var aFunction = __webpack_require__("1c0b");
var wellKnownSymbol = __webpack_require__("b622");

var SPECIES = wellKnownSymbol('species');

// `SpeciesConstructor` abstract operation
// https://tc39.github.io/ecma262/#sec-speciesconstructor
module.exports = function (O, defaultConstructor) {
  var C = anObject(O).constructor;
  var S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? defaultConstructor : aFunction(S);
};


/***/ }),

/***/ "48b9":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Gear_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("3e20");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Gear_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Gear_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Gear_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "4930":
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__("d039");

module.exports = !!Object.getOwnPropertySymbols && !fails(function () {
  // Chrome 38 Symbol has incorrect toString conversion
  // eslint-disable-next-line no-undef
  return !String(Symbol());
});


/***/ }),

/***/ "499e":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "default", function() { return /* binding */ addStylesClient; });

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

/***/ "4d64":
/***/ (function(module, exports, __webpack_require__) {

var toIndexedObject = __webpack_require__("fc6a");
var toLength = __webpack_require__("50c4");
var toAbsoluteIndex = __webpack_require__("23cb");

// `Array.prototype.{ indexOf, includes }` methods implementation
var createMethod = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIndexedObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) {
      if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};

module.exports = {
  // `Array.prototype.includes` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.includes
  includes: createMethod(true),
  // `Array.prototype.indexOf` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.indexof
  indexOf: createMethod(false)
};


/***/ }),

/***/ "4de4":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var $filter = __webpack_require__("b727").filter;
var arrayMethodHasSpeciesSupport = __webpack_require__("1dde");
var arrayMethodUsesToLength = __webpack_require__("ae40");

var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('filter');
// Edge 14- issue
var USES_TO_LENGTH = arrayMethodUsesToLength('filter');

// `Array.prototype.filter` method
// https://tc39.github.io/ecma262/#sec-array.prototype.filter
// with adding support of @@species
$({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT || !USES_TO_LENGTH }, {
  filter: function filter(callbackfn /* , thisArg */) {
    return $filter(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),

/***/ "4df4":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var bind = __webpack_require__("0366");
var toObject = __webpack_require__("7b0b");
var callWithSafeIterationClosing = __webpack_require__("9bdd");
var isArrayIteratorMethod = __webpack_require__("e95a");
var toLength = __webpack_require__("50c4");
var createProperty = __webpack_require__("8418");
var getIteratorMethod = __webpack_require__("35a1");

// `Array.from` method implementation
// https://tc39.github.io/ecma262/#sec-array.from
module.exports = function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {
  var O = toObject(arrayLike);
  var C = typeof this == 'function' ? this : Array;
  var argumentsLength = arguments.length;
  var mapfn = argumentsLength > 1 ? arguments[1] : undefined;
  var mapping = mapfn !== undefined;
  var iteratorMethod = getIteratorMethod(O);
  var index = 0;
  var length, result, step, iterator, next, value;
  if (mapping) mapfn = bind(mapfn, argumentsLength > 2 ? arguments[2] : undefined, 2);
  // if the target is not iterable or it's an array with the default iterator - use a simple case
  if (iteratorMethod != undefined && !(C == Array && isArrayIteratorMethod(iteratorMethod))) {
    iterator = iteratorMethod.call(O);
    next = iterator.next;
    result = new C();
    for (;!(step = next.call(iterator)).done; index++) {
      value = mapping ? callWithSafeIterationClosing(iterator, mapfn, [step.value, index], true) : step.value;
      createProperty(result, index, value);
    }
  } else {
    length = toLength(O.length);
    result = new C(length);
    for (;length > index; index++) {
      value = mapping ? mapfn(O[index], index) : O[index];
      createProperty(result, index, value);
    }
  }
  result.length = index;
  return result;
};


/***/ }),

/***/ "50c4":
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__("a691");

var min = Math.min;

// `ToLength` abstract operation
// https://tc39.github.io/ecma262/#sec-tolength
module.exports = function (argument) {
  return argument > 0 ? min(toInteger(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
};


/***/ }),

/***/ "5135":
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;

module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),

/***/ "5319":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var fixRegExpWellKnownSymbolLogic = __webpack_require__("d784");
var anObject = __webpack_require__("825a");
var toObject = __webpack_require__("7b0b");
var toLength = __webpack_require__("50c4");
var toInteger = __webpack_require__("a691");
var requireObjectCoercible = __webpack_require__("1d80");
var advanceStringIndex = __webpack_require__("8aa5");
var regExpExec = __webpack_require__("14c3");

var max = Math.max;
var min = Math.min;
var floor = Math.floor;
var SUBSTITUTION_SYMBOLS = /\$([$&'`]|\d\d?|<[^>]*>)/g;
var SUBSTITUTION_SYMBOLS_NO_NAMED = /\$([$&'`]|\d\d?)/g;

var maybeToString = function (it) {
  return it === undefined ? it : String(it);
};

// @@replace logic
fixRegExpWellKnownSymbolLogic('replace', 2, function (REPLACE, nativeReplace, maybeCallNative, reason) {
  var REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE = reason.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE;
  var REPLACE_KEEPS_$0 = reason.REPLACE_KEEPS_$0;
  var UNSAFE_SUBSTITUTE = REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE ? '$' : '$0';

  return [
    // `String.prototype.replace` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.replace
    function replace(searchValue, replaceValue) {
      var O = requireObjectCoercible(this);
      var replacer = searchValue == undefined ? undefined : searchValue[REPLACE];
      return replacer !== undefined
        ? replacer.call(searchValue, O, replaceValue)
        : nativeReplace.call(String(O), searchValue, replaceValue);
    },
    // `RegExp.prototype[@@replace]` method
    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@replace
    function (regexp, replaceValue) {
      if (
        (!REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE && REPLACE_KEEPS_$0) ||
        (typeof replaceValue === 'string' && replaceValue.indexOf(UNSAFE_SUBSTITUTE) === -1)
      ) {
        var res = maybeCallNative(nativeReplace, regexp, this, replaceValue);
        if (res.done) return res.value;
      }

      var rx = anObject(regexp);
      var S = String(this);

      var functionalReplace = typeof replaceValue === 'function';
      if (!functionalReplace) replaceValue = String(replaceValue);

      var global = rx.global;
      if (global) {
        var fullUnicode = rx.unicode;
        rx.lastIndex = 0;
      }
      var results = [];
      while (true) {
        var result = regExpExec(rx, S);
        if (result === null) break;

        results.push(result);
        if (!global) break;

        var matchStr = String(result[0]);
        if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
      }

      var accumulatedResult = '';
      var nextSourcePosition = 0;
      for (var i = 0; i < results.length; i++) {
        result = results[i];

        var matched = String(result[0]);
        var position = max(min(toInteger(result.index), S.length), 0);
        var captures = [];
        // NOTE: This is equivalent to
        //   captures = result.slice(1).map(maybeToString)
        // but for some reason `nativeSlice.call(result, 1, result.length)` (called in
        // the slice polyfill when slicing native arrays) "doesn't work" in safari 9 and
        // causes a crash (https://pastebin.com/N21QzeQA) when trying to debug it.
        for (var j = 1; j < result.length; j++) captures.push(maybeToString(result[j]));
        var namedCaptures = result.groups;
        if (functionalReplace) {
          var replacerArgs = [matched].concat(captures, position, S);
          if (namedCaptures !== undefined) replacerArgs.push(namedCaptures);
          var replacement = String(replaceValue.apply(undefined, replacerArgs));
        } else {
          replacement = getSubstitution(matched, S, position, captures, namedCaptures, replaceValue);
        }
        if (position >= nextSourcePosition) {
          accumulatedResult += S.slice(nextSourcePosition, position) + replacement;
          nextSourcePosition = position + matched.length;
        }
      }
      return accumulatedResult + S.slice(nextSourcePosition);
    }
  ];

  // https://tc39.github.io/ecma262/#sec-getsubstitution
  function getSubstitution(matched, str, position, captures, namedCaptures, replacement) {
    var tailPos = position + matched.length;
    var m = captures.length;
    var symbols = SUBSTITUTION_SYMBOLS_NO_NAMED;
    if (namedCaptures !== undefined) {
      namedCaptures = toObject(namedCaptures);
      symbols = SUBSTITUTION_SYMBOLS;
    }
    return nativeReplace.call(replacement, symbols, function (match, ch) {
      var capture;
      switch (ch.charAt(0)) {
        case '$': return '$';
        case '&': return matched;
        case '`': return str.slice(0, position);
        case "'": return str.slice(tailPos);
        case '<':
          capture = namedCaptures[ch.slice(1, -1)];
          break;
        default: // \d\d?
          var n = +ch;
          if (n === 0) return match;
          if (n > m) {
            var f = floor(n / 10);
            if (f === 0) return match;
            if (f <= m) return captures[f - 1] === undefined ? ch.charAt(1) : captures[f - 1] + ch.charAt(1);
            return match;
          }
          capture = captures[n - 1];
      }
      return capture === undefined ? '' : capture;
    });
  }
});


/***/ }),

/***/ "5366":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("6aa9");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("499e").default
var update = add("29cb9402", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ "5428":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("d6a5");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("499e").default
var update = add("05bfac5e", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ "5452":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("5366");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "5692":
/***/ (function(module, exports, __webpack_require__) {

var IS_PURE = __webpack_require__("c430");
var store = __webpack_require__("c6cd");

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: '3.6.5',
  mode: IS_PURE ? 'pure' : 'global',
  copyright: '© 2020 Denis Pushkarev (zloirock.ru)'
});


/***/ }),

/***/ "56ef":
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__("d066");
var getOwnPropertyNamesModule = __webpack_require__("241c");
var getOwnPropertySymbolsModule = __webpack_require__("7418");
var anObject = __webpack_require__("825a");

// all object keys, includes non-enumerable and symbols
module.exports = getBuiltIn('Reflect', 'ownKeys') || function ownKeys(it) {
  var keys = getOwnPropertyNamesModule.f(anObject(it));
  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
  return getOwnPropertySymbols ? keys.concat(getOwnPropertySymbols(it)) : keys;
};


/***/ }),

/***/ "5899":
/***/ (function(module, exports) {

// a string of all valid unicode whitespaces
// eslint-disable-next-line max-len
module.exports = '\u0009\u000A\u000B\u000C\u000D\u0020\u00A0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';


/***/ }),

/***/ "58a8":
/***/ (function(module, exports, __webpack_require__) {

var requireObjectCoercible = __webpack_require__("1d80");
var whitespaces = __webpack_require__("5899");

var whitespace = '[' + whitespaces + ']';
var ltrim = RegExp('^' + whitespace + whitespace + '*');
var rtrim = RegExp(whitespace + whitespace + '*$');

// `String.prototype.{ trim, trimStart, trimEnd, trimLeft, trimRight }` methods implementation
var createMethod = function (TYPE) {
  return function ($this) {
    var string = String(requireObjectCoercible($this));
    if (TYPE & 1) string = string.replace(ltrim, '');
    if (TYPE & 2) string = string.replace(rtrim, '');
    return string;
  };
};

module.exports = {
  // `String.prototype.{ trimLeft, trimStart }` methods
  // https://tc39.github.io/ecma262/#sec-string.prototype.trimstart
  start: createMethod(1),
  // `String.prototype.{ trimRight, trimEnd }` methods
  // https://tc39.github.io/ecma262/#sec-string.prototype.trimend
  end: createMethod(2),
  // `String.prototype.trim` method
  // https://tc39.github.io/ecma262/#sec-string.prototype.trim
  trim: createMethod(3)
};


/***/ }),

/***/ "5c0b":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("0554");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "5c6c":
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ "60da":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var DESCRIPTORS = __webpack_require__("83ab");
var fails = __webpack_require__("d039");
var objectKeys = __webpack_require__("df75");
var getOwnPropertySymbolsModule = __webpack_require__("7418");
var propertyIsEnumerableModule = __webpack_require__("d1e7");
var toObject = __webpack_require__("7b0b");
var IndexedObject = __webpack_require__("44ad");

var nativeAssign = Object.assign;
var defineProperty = Object.defineProperty;

// `Object.assign` method
// https://tc39.github.io/ecma262/#sec-object.assign
module.exports = !nativeAssign || fails(function () {
  // should have correct order of operations (Edge bug)
  if (DESCRIPTORS && nativeAssign({ b: 1 }, nativeAssign(defineProperty({}, 'a', {
    enumerable: true,
    get: function () {
      defineProperty(this, 'b', {
        value: 3,
        enumerable: false
      });
    }
  }), { b: 2 })).b !== 1) return true;
  // should work with symbols and should have deterministic property order (V8 bug)
  var A = {};
  var B = {};
  // eslint-disable-next-line no-undef
  var symbol = Symbol();
  var alphabet = 'abcdefghijklmnopqrst';
  A[symbol] = 7;
  alphabet.split('').forEach(function (chr) { B[chr] = chr; });
  return nativeAssign({}, A)[symbol] != 7 || objectKeys(nativeAssign({}, B)).join('') != alphabet;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars
  var T = toObject(target);
  var argumentsLength = arguments.length;
  var index = 1;
  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
  var propertyIsEnumerable = propertyIsEnumerableModule.f;
  while (argumentsLength > index) {
    var S = IndexedObject(arguments[index++]);
    var keys = getOwnPropertySymbols ? objectKeys(S).concat(getOwnPropertySymbols(S)) : objectKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) {
      key = keys[j++];
      if (!DESCRIPTORS || propertyIsEnumerable.call(S, key)) T[key] = S[key];
    }
  } return T;
} : nativeAssign;


/***/ }),

/***/ "6253":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Inspector_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("73d8");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Inspector_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Inspector_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Inspector_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "6547":
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__("a691");
var requireObjectCoercible = __webpack_require__("1d80");

// `String.prototype.{ codePointAt, at }` methods implementation
var createMethod = function (CONVERT_TO_STRING) {
  return function ($this, pos) {
    var S = String(requireObjectCoercible($this));
    var position = toInteger(pos);
    var size = S.length;
    var first, second;
    if (position < 0 || position >= size) return CONVERT_TO_STRING ? '' : undefined;
    first = S.charCodeAt(position);
    return first < 0xD800 || first > 0xDBFF || position + 1 === size
      || (second = S.charCodeAt(position + 1)) < 0xDC00 || second > 0xDFFF
        ? CONVERT_TO_STRING ? S.charAt(position) : first
        : CONVERT_TO_STRING ? S.slice(position, position + 2) : (first - 0xD800 << 10) + (second - 0xDC00) + 0x10000;
  };
};

module.exports = {
  // `String.prototype.codePointAt` method
  // https://tc39.github.io/ecma262/#sec-string.prototype.codepointat
  codeAt: createMethod(false),
  // `String.prototype.at` method
  // https://github.com/mathiasbynens/String.prototype.at
  charAt: createMethod(true)
};


/***/ }),

/***/ "654a":
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__("24fb");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "65f0":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("861d");
var isArray = __webpack_require__("e8b5");
var wellKnownSymbol = __webpack_require__("b622");

var SPECIES = wellKnownSymbol('species');

// `ArraySpeciesCreate` abstract operation
// https://tc39.github.io/ecma262/#sec-arrayspeciescreate
module.exports = function (originalArray, length) {
  var C;
  if (isArray(originalArray)) {
    C = originalArray.constructor;
    // cross-realm fallback
    if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;
    else if (isObject(C)) {
      C = C[SPECIES];
      if (C === null) C = undefined;
    }
  } return new (C === undefined ? Array : C)(length === 0 ? 0 : length);
};


/***/ }),

/***/ "6716":
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__("24fb");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".inspector{background:hsla(0,0%,100%,.6);position:fixed;z-index:50;pointer-events:none}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "69f3":
/***/ (function(module, exports, __webpack_require__) {

var NATIVE_WEAK_MAP = __webpack_require__("7f9a");
var global = __webpack_require__("da84");
var isObject = __webpack_require__("861d");
var createNonEnumerableProperty = __webpack_require__("9112");
var objectHas = __webpack_require__("5135");
var sharedKey = __webpack_require__("f772");
var hiddenKeys = __webpack_require__("d012");

var WeakMap = global.WeakMap;
var set, get, has;

var enforce = function (it) {
  return has(it) ? get(it) : set(it, {});
};

var getterFor = function (TYPE) {
  return function (it) {
    var state;
    if (!isObject(it) || (state = get(it)).type !== TYPE) {
      throw TypeError('Incompatible receiver, ' + TYPE + ' required');
    } return state;
  };
};

if (NATIVE_WEAK_MAP) {
  var store = new WeakMap();
  var wmget = store.get;
  var wmhas = store.has;
  var wmset = store.set;
  set = function (it, metadata) {
    wmset.call(store, it, metadata);
    return metadata;
  };
  get = function (it) {
    return wmget.call(store, it) || {};
  };
  has = function (it) {
    return wmhas.call(store, it);
  };
} else {
  var STATE = sharedKey('state');
  hiddenKeys[STATE] = true;
  set = function (it, metadata) {
    createNonEnumerableProperty(it, STATE, metadata);
    return metadata;
  };
  get = function (it) {
    return objectHas(it, STATE) ? it[STATE] : {};
  };
  has = function (it) {
    return objectHas(it, STATE);
  };
}

module.exports = {
  set: set,
  get: get,
  has: has,
  enforce: enforce,
  getterFor: getterFor
};


/***/ }),

/***/ "6a64":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_World_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("46af");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_World_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_World_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_World_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "6a7f":
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__("24fb");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".game-screen .left-sidebar-grid{z-index:10;position:fixed;top:50px;bottom:0;left:0;opacity:.85}.game-screen .right-sidebar-grid{z-index:10;position:fixed;top:50px;bottom:0;right:0;opacity:.85}.game-screen .dungeon-title{color:#d3d3d3;text-align:center;margin:10px 0;position:fixed;bottom:0;left:0;right:0}.game-screen .footer-grid{grid-column:2/3;grid-row:2/3;z-index:20;pointer-events:none}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "6aa9":
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__("24fb");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".header{position:fixed;top:0;display:flex;background:#000;color:#d3d3d3;width:100%;height:50px;justify-content:space-around;padding:5px}.header.header1-grid{grid-column:1/4;grid-row:1}.header input[type=range].slider{-webkit-appearance:none;width:100%;margin-top:10px;padding-right:10px}.header input[type=range].slider:focus{outline:none}.header input[type=range].slider::-webkit-slider-runnable-track{width:20%;height:5px;cursor:pointer;background:#fff;border-radius:100%;border:none}.header input[type=range].slider::-webkit-slider-thumb{border:2px solid #fff;height:20px;width:20px;border-radius:4px;background:#ff0;cursor:pointer;-webkit-appearance:none;margin-top:-10px}.header input[type=range].slider:focus::-webkit-slider-runnable-track{background:red}.header input[type=range].slider::-moz-range-track{width:20%;height:5px;cursor:pointer;background:#ebeced;border-radius:0;border:none}.header input[type=range].slider::-moz-range-thumb{border:2px solid #fff;height:20px;width:20px;border-radius:4px;background:#585859;cursor:pointer}.header input[type=range].slider::-ms-track{width:20%;height:5px;cursor:pointer;background:transparent;border-color:transparent;color:transparent}.header input[type=range].slider::-ms-fill-lower,.header input[type=range].slider::-ms-fill-upper{background:#fff;border:none;border-radius:0}.header input[type=range].slider::-ms-thumb{border:2px solid #fff;width:20px;border-radius:4px;background:#ff0;cursor:pointer;height:20px}.header input[type=range].slider:focus::-ms-fill-lower,.header input[type=range].slider:focus::-ms-fill-upper{background:red}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "6cf5":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_GameScreen_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("f7fe");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_GameScreen_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_GameScreen_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_GameScreen_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "6eeb":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var createNonEnumerableProperty = __webpack_require__("9112");
var has = __webpack_require__("5135");
var setGlobal = __webpack_require__("ce4e");
var inspectSource = __webpack_require__("8925");
var InternalStateModule = __webpack_require__("69f3");

var getInternalState = InternalStateModule.get;
var enforceInternalState = InternalStateModule.enforce;
var TEMPLATE = String(String).split('String');

(module.exports = function (O, key, value, options) {
  var unsafe = options ? !!options.unsafe : false;
  var simple = options ? !!options.enumerable : false;
  var noTargetGet = options ? !!options.noTargetGet : false;
  if (typeof value == 'function') {
    if (typeof key == 'string' && !has(value, 'name')) createNonEnumerableProperty(value, 'name', key);
    enforceInternalState(value).source = TEMPLATE.join(typeof key == 'string' ? key : '');
  }
  if (O === global) {
    if (simple) O[key] = value;
    else setGlobal(key, value);
    return;
  } else if (!unsafe) {
    delete O[key];
  } else if (!noTargetGet && O[key]) {
    simple = true;
  }
  if (simple) O[key] = value;
  else createNonEnumerableProperty(O, key, value);
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, 'toString', function toString() {
  return typeof this == 'function' && getInternalState(this).source || inspectSource(this);
});


/***/ }),

/***/ "7156":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("861d");
var setPrototypeOf = __webpack_require__("d2bb");

// makes subclassing work correct for wrapped built-ins
module.exports = function ($this, dummy, Wrapper) {
  var NewTarget, NewTargetPrototype;
  if (
    // it can work only with native `setPrototypeOf`
    setPrototypeOf &&
    // we haven't completely correct pre-ES6 way for getting `new.target`, so use this
    typeof (NewTarget = dummy.constructor) == 'function' &&
    NewTarget !== Wrapper &&
    isObject(NewTargetPrototype = NewTarget.prototype) &&
    NewTargetPrototype !== Wrapper.prototype
  ) setPrototypeOf($this, NewTargetPrototype);
  return $this;
};


/***/ }),

/***/ "73d8":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("6716");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("499e").default
var update = add("0e8bcc44", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ "7418":
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),

/***/ "746f":
/***/ (function(module, exports, __webpack_require__) {

var path = __webpack_require__("428f");
var has = __webpack_require__("5135");
var wrappedWellKnownSymbolModule = __webpack_require__("e538");
var defineProperty = __webpack_require__("9bf2").f;

module.exports = function (NAME) {
  var Symbol = path.Symbol || (path.Symbol = {});
  if (!has(Symbol, NAME)) defineProperty(Symbol, NAME, {
    value: wrappedWellKnownSymbolModule.f(NAME)
  });
};


/***/ }),

/***/ "7839":
/***/ (function(module, exports) {

// IE8- don't enum bug keys
module.exports = [
  'constructor',
  'hasOwnProperty',
  'isPrototypeOf',
  'propertyIsEnumerable',
  'toLocaleString',
  'toString',
  'valueOf'
];


/***/ }),

/***/ "79a1":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ModalContentRow_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("d8c7");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ModalContentRow_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ModalContentRow_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ModalContentRow_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "7b0b":
/***/ (function(module, exports, __webpack_require__) {

var requireObjectCoercible = __webpack_require__("1d80");

// `ToObject` abstract operation
// https://tc39.github.io/ecma262/#sec-toobject
module.exports = function (argument) {
  return Object(requireObjectCoercible(argument));
};


/***/ }),

/***/ "7c73":
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__("825a");
var defineProperties = __webpack_require__("37e8");
var enumBugKeys = __webpack_require__("7839");
var hiddenKeys = __webpack_require__("d012");
var html = __webpack_require__("1be4");
var documentCreateElement = __webpack_require__("cc12");
var sharedKey = __webpack_require__("f772");

var GT = '>';
var LT = '<';
var PROTOTYPE = 'prototype';
var SCRIPT = 'script';
var IE_PROTO = sharedKey('IE_PROTO');

var EmptyConstructor = function () { /* empty */ };

var scriptTag = function (content) {
  return LT + SCRIPT + GT + content + LT + '/' + SCRIPT + GT;
};

// Create object with fake `null` prototype: use ActiveX Object with cleared prototype
var NullProtoObjectViaActiveX = function (activeXDocument) {
  activeXDocument.write(scriptTag(''));
  activeXDocument.close();
  var temp = activeXDocument.parentWindow.Object;
  activeXDocument = null; // avoid memory leak
  return temp;
};

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var NullProtoObjectViaIFrame = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = documentCreateElement('iframe');
  var JS = 'java' + SCRIPT + ':';
  var iframeDocument;
  iframe.style.display = 'none';
  html.appendChild(iframe);
  // https://github.com/zloirock/core-js/issues/475
  iframe.src = String(JS);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(scriptTag('document.F=Object'));
  iframeDocument.close();
  return iframeDocument.F;
};

// Check for document.domain and active x support
// No need to use active x approach when document.domain is not set
// see https://github.com/es-shims/es5-shim/issues/150
// variation of https://github.com/kitcambridge/es5-shim/commit/4f738ac066346
// avoid IE GC bug
var activeXDocument;
var NullProtoObject = function () {
  try {
    /* global ActiveXObject */
    activeXDocument = document.domain && new ActiveXObject('htmlfile');
  } catch (error) { /* ignore */ }
  NullProtoObject = activeXDocument ? NullProtoObjectViaActiveX(activeXDocument) : NullProtoObjectViaIFrame();
  var length = enumBugKeys.length;
  while (length--) delete NullProtoObject[PROTOTYPE][enumBugKeys[length]];
  return NullProtoObject();
};

hiddenKeys[IE_PROTO] = true;

// `Object.create` method
// https://tc39.github.io/ecma262/#sec-object.create
module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    EmptyConstructor[PROTOTYPE] = anObject(O);
    result = new EmptyConstructor();
    EmptyConstructor[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = NullProtoObject();
  return Properties === undefined ? result : defineProperties(result, Properties);
};


/***/ }),

/***/ "7db0":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var $find = __webpack_require__("b727").find;
var addToUnscopables = __webpack_require__("44d2");
var arrayMethodUsesToLength = __webpack_require__("ae40");

var FIND = 'find';
var SKIPS_HOLES = true;

var USES_TO_LENGTH = arrayMethodUsesToLength(FIND);

// Shouldn't skip holes
if (FIND in []) Array(1)[FIND](function () { SKIPS_HOLES = false; });

// `Array.prototype.find` method
// https://tc39.github.io/ecma262/#sec-array.prototype.find
$({ target: 'Array', proto: true, forced: SKIPS_HOLES || !USES_TO_LENGTH }, {
  find: function find(callbackfn /* , that = undefined */) {
    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});

// https://tc39.github.io/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables(FIND);


/***/ }),

/***/ "7dd0":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var createIteratorConstructor = __webpack_require__("9ed3");
var getPrototypeOf = __webpack_require__("e163");
var setPrototypeOf = __webpack_require__("d2bb");
var setToStringTag = __webpack_require__("d44e");
var createNonEnumerableProperty = __webpack_require__("9112");
var redefine = __webpack_require__("6eeb");
var wellKnownSymbol = __webpack_require__("b622");
var IS_PURE = __webpack_require__("c430");
var Iterators = __webpack_require__("3f8c");
var IteratorsCore = __webpack_require__("ae93");

var IteratorPrototype = IteratorsCore.IteratorPrototype;
var BUGGY_SAFARI_ITERATORS = IteratorsCore.BUGGY_SAFARI_ITERATORS;
var ITERATOR = wellKnownSymbol('iterator');
var KEYS = 'keys';
var VALUES = 'values';
var ENTRIES = 'entries';

var returnThis = function () { return this; };

module.exports = function (Iterable, NAME, IteratorConstructor, next, DEFAULT, IS_SET, FORCED) {
  createIteratorConstructor(IteratorConstructor, NAME, next);

  var getIterationMethod = function (KIND) {
    if (KIND === DEFAULT && defaultIterator) return defaultIterator;
    if (!BUGGY_SAFARI_ITERATORS && KIND in IterablePrototype) return IterablePrototype[KIND];
    switch (KIND) {
      case KEYS: return function keys() { return new IteratorConstructor(this, KIND); };
      case VALUES: return function values() { return new IteratorConstructor(this, KIND); };
      case ENTRIES: return function entries() { return new IteratorConstructor(this, KIND); };
    } return function () { return new IteratorConstructor(this); };
  };

  var TO_STRING_TAG = NAME + ' Iterator';
  var INCORRECT_VALUES_NAME = false;
  var IterablePrototype = Iterable.prototype;
  var nativeIterator = IterablePrototype[ITERATOR]
    || IterablePrototype['@@iterator']
    || DEFAULT && IterablePrototype[DEFAULT];
  var defaultIterator = !BUGGY_SAFARI_ITERATORS && nativeIterator || getIterationMethod(DEFAULT);
  var anyNativeIterator = NAME == 'Array' ? IterablePrototype.entries || nativeIterator : nativeIterator;
  var CurrentIteratorPrototype, methods, KEY;

  // fix native
  if (anyNativeIterator) {
    CurrentIteratorPrototype = getPrototypeOf(anyNativeIterator.call(new Iterable()));
    if (IteratorPrototype !== Object.prototype && CurrentIteratorPrototype.next) {
      if (!IS_PURE && getPrototypeOf(CurrentIteratorPrototype) !== IteratorPrototype) {
        if (setPrototypeOf) {
          setPrototypeOf(CurrentIteratorPrototype, IteratorPrototype);
        } else if (typeof CurrentIteratorPrototype[ITERATOR] != 'function') {
          createNonEnumerableProperty(CurrentIteratorPrototype, ITERATOR, returnThis);
        }
      }
      // Set @@toStringTag to native iterators
      setToStringTag(CurrentIteratorPrototype, TO_STRING_TAG, true, true);
      if (IS_PURE) Iterators[TO_STRING_TAG] = returnThis;
    }
  }

  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEFAULT == VALUES && nativeIterator && nativeIterator.name !== VALUES) {
    INCORRECT_VALUES_NAME = true;
    defaultIterator = function values() { return nativeIterator.call(this); };
  }

  // define iterator
  if ((!IS_PURE || FORCED) && IterablePrototype[ITERATOR] !== defaultIterator) {
    createNonEnumerableProperty(IterablePrototype, ITERATOR, defaultIterator);
  }
  Iterators[NAME] = defaultIterator;

  // export additional methods
  if (DEFAULT) {
    methods = {
      values: getIterationMethod(VALUES),
      keys: IS_SET ? defaultIterator : getIterationMethod(KEYS),
      entries: getIterationMethod(ENTRIES)
    };
    if (FORCED) for (KEY in methods) {
      if (BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME || !(KEY in IterablePrototype)) {
        redefine(IterablePrototype, KEY, methods[KEY]);
      }
    } else $({ target: NAME, proto: true, forced: BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME }, methods);
  }

  return methods;
};


/***/ }),

/***/ "7f9a":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var inspectSource = __webpack_require__("8925");

var WeakMap = global.WeakMap;

module.exports = typeof WeakMap === 'function' && /native code/.test(inspectSource(WeakMap));


/***/ }),

/***/ "825a":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("861d");

module.exports = function (it) {
  if (!isObject(it)) {
    throw TypeError(String(it) + ' is not an object');
  } return it;
};


/***/ }),

/***/ "83ab":
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__("d039");

// Thank's IE8 for his funny defineProperty
module.exports = !fails(function () {
  return Object.defineProperty({}, 1, { get: function () { return 7; } })[1] != 7;
});


/***/ }),

/***/ "8418":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var toPrimitive = __webpack_require__("c04e");
var definePropertyModule = __webpack_require__("9bf2");
var createPropertyDescriptor = __webpack_require__("5c6c");

module.exports = function (object, key, value) {
  var propertyKey = toPrimitive(key);
  if (propertyKey in object) definePropertyModule.f(object, propertyKey, createPropertyDescriptor(0, value));
  else object[propertyKey] = value;
};


/***/ }),

/***/ "855c":
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__("24fb");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".modal-content-row{display:grid;grid-template-columns:auto auto 35px 35px 35px}.modal-content-row .box{background-color:#444;color:#fff;padding:5px;font-size:100%}.modal-content-row .center{text-align:center}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "861d":
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ "8875":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// addapted from the document.currentScript polyfill by Adam Miller
// MIT license
// source: https://github.com/amiller-gh/currentScript-polyfill

// added support for Firefox https://bugzilla.mozilla.org/show_bug.cgi?id=1620505

(function (root, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
}(typeof self !== 'undefined' ? self : this, function () {
  function getCurrentScript () {
    var descriptor = Object.getOwnPropertyDescriptor(document, 'currentScript')
    // for chrome
    if (!descriptor && 'currentScript' in document && document.currentScript) {
      return document.currentScript
    }

    // for other browsers with native support for currentScript
    if (descriptor && descriptor.get !== getCurrentScript && document.currentScript) {
      return document.currentScript
    }
  
    // IE 8-10 support script readyState
    // IE 11+ & Firefox support stack trace
    try {
      throw new Error();
    }
    catch (err) {
      // Find the second match for the "at" string to get file src url from stack.
      var ieStackRegExp = /.*at [^(]*\((.*):(.+):(.+)\)$/ig,
        ffStackRegExp = /@([^@]*):(\d+):(\d+)\s*$/ig,
        stackDetails = ieStackRegExp.exec(err.stack) || ffStackRegExp.exec(err.stack),
        scriptLocation = (stackDetails && stackDetails[1]) || false,
        line = (stackDetails && stackDetails[2]) || false,
        currentLocation = document.location.href.replace(document.location.hash, ''),
        pageSource,
        inlineScriptSourceRegExp,
        inlineScriptSource,
        scripts = document.getElementsByTagName('script'); // Live NodeList collection
  
      if (scriptLocation === currentLocation) {
        pageSource = document.documentElement.outerHTML;
        inlineScriptSourceRegExp = new RegExp('(?:[^\\n]+?\\n){0,' + (line - 2) + '}[^<]*<script>([\\d\\D]*?)<\\/script>[\\d\\D]*', 'i');
        inlineScriptSource = pageSource.replace(inlineScriptSourceRegExp, '$1').trim();
      }
  
      for (var i = 0; i < scripts.length; i++) {
        // If ready state is interactive, return the script tag
        if (scripts[i].readyState === 'interactive') {
          return scripts[i];
        }
  
        // If src matches, return the script tag
        if (scripts[i].src === scriptLocation) {
          return scripts[i];
        }
  
        // If inline source matches, return the script tag
        if (
          scriptLocation === currentLocation &&
          scripts[i].innerHTML &&
          scripts[i].innerHTML.trim() === inlineScriptSource
        ) {
          return scripts[i];
        }
      }
  
      // If no match, return null
      return null;
    }
  };

  return getCurrentScript
}));


/***/ }),

/***/ "8925":
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__("c6cd");

var functionToString = Function.toString;

// this helper broken in `3.4.1-3.4.4`, so we can't use `shared` helper
if (typeof store.inspectSource != 'function') {
  store.inspectSource = function (it) {
    return functionToString.call(it);
  };
}

module.exports = store.inspectSource;


/***/ }),

/***/ "8aa5":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var charAt = __webpack_require__("6547").charAt;

// `AdvanceStringIndex` abstract operation
// https://tc39.github.io/ecma262/#sec-advancestringindex
module.exports = function (S, index, unicode) {
  return index + (unicode ? charAt(S, index).length : 1);
};


/***/ }),

/***/ "90e3":
/***/ (function(module, exports) {

var id = 0;
var postfix = Math.random();

module.exports = function (key) {
  return 'Symbol(' + String(key === undefined ? '' : key) + ')_' + (++id + postfix).toString(36);
};


/***/ }),

/***/ "9112":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("83ab");
var definePropertyModule = __webpack_require__("9bf2");
var createPropertyDescriptor = __webpack_require__("5c6c");

module.exports = DESCRIPTORS ? function (object, key, value) {
  return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "9263":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var regexpFlags = __webpack_require__("ad6d");
var stickyHelpers = __webpack_require__("9f7f");

var nativeExec = RegExp.prototype.exec;
// This always refers to the native implementation, because the
// String#replace polyfill uses ./fix-regexp-well-known-symbol-logic.js,
// which loads this file before patching the method.
var nativeReplace = String.prototype.replace;

var patchedExec = nativeExec;

var UPDATES_LAST_INDEX_WRONG = (function () {
  var re1 = /a/;
  var re2 = /b*/g;
  nativeExec.call(re1, 'a');
  nativeExec.call(re2, 'a');
  return re1.lastIndex !== 0 || re2.lastIndex !== 0;
})();

var UNSUPPORTED_Y = stickyHelpers.UNSUPPORTED_Y || stickyHelpers.BROKEN_CARET;

// nonparticipating capturing group, copied from es5-shim's String#split patch.
var NPCG_INCLUDED = /()??/.exec('')[1] !== undefined;

var PATCH = UPDATES_LAST_INDEX_WRONG || NPCG_INCLUDED || UNSUPPORTED_Y;

if (PATCH) {
  patchedExec = function exec(str) {
    var re = this;
    var lastIndex, reCopy, match, i;
    var sticky = UNSUPPORTED_Y && re.sticky;
    var flags = regexpFlags.call(re);
    var source = re.source;
    var charsAdded = 0;
    var strCopy = str;

    if (sticky) {
      flags = flags.replace('y', '');
      if (flags.indexOf('g') === -1) {
        flags += 'g';
      }

      strCopy = String(str).slice(re.lastIndex);
      // Support anchored sticky behavior.
      if (re.lastIndex > 0 && (!re.multiline || re.multiline && str[re.lastIndex - 1] !== '\n')) {
        source = '(?: ' + source + ')';
        strCopy = ' ' + strCopy;
        charsAdded++;
      }
      // ^(? + rx + ) is needed, in combination with some str slicing, to
      // simulate the 'y' flag.
      reCopy = new RegExp('^(?:' + source + ')', flags);
    }

    if (NPCG_INCLUDED) {
      reCopy = new RegExp('^' + source + '$(?!\\s)', flags);
    }
    if (UPDATES_LAST_INDEX_WRONG) lastIndex = re.lastIndex;

    match = nativeExec.call(sticky ? reCopy : re, strCopy);

    if (sticky) {
      if (match) {
        match.input = match.input.slice(charsAdded);
        match[0] = match[0].slice(charsAdded);
        match.index = re.lastIndex;
        re.lastIndex += match[0].length;
      } else re.lastIndex = 0;
    } else if (UPDATES_LAST_INDEX_WRONG && match) {
      re.lastIndex = re.global ? match.index + match[0].length : lastIndex;
    }
    if (NPCG_INCLUDED && match && match.length > 1) {
      // Fix browsers whose `exec` methods don't consistently return `undefined`
      // for NPCG, like IE8. NOTE: This doesn' work for /(.?)?/
      nativeReplace.call(match[0], reCopy, function () {
        for (i = 1; i < arguments.length - 2; i++) {
          if (arguments[i] === undefined) match[i] = undefined;
        }
      });
    }

    return match;
  };
}

module.exports = patchedExec;


/***/ }),

/***/ "94ca":
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__("d039");

var replacement = /#|\.prototype\./;

var isForced = function (feature, detection) {
  var value = data[normalize(feature)];
  return value == POLYFILL ? true
    : value == NATIVE ? false
    : typeof detection == 'function' ? fails(detection)
    : !!detection;
};

var normalize = isForced.normalize = function (string) {
  return String(string).replace(replacement, '.').toLowerCase();
};

var data = isForced.data = {};
var NATIVE = isForced.NATIVE = 'N';
var POLYFILL = isForced.POLYFILL = 'P';

module.exports = isForced;


/***/ }),

/***/ "9623":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_StartScreen_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("9833");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_StartScreen_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_StartScreen_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_StartScreen_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "96a4":
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__("24fb");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "html{overflow:hidden}body,html{height:100%}body{overflow:auto;margin:0;background:#262626}#dungeon-crawl *{-ms-box-sizing:border-box;box-sizing:border-box;font-family:Helvetica,sans-serif}#dungeon-crawl .flex-row{display:flex;flex-flow:row wrap}#dungeon-crawl .flex-col{display:flex;flex-flow:column nowrap}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "96cf":
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function define(obj, key, value) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
    return obj[key];
  }
  try {
    // IE 8 has a broken Object.defineProperty that only works on DOM objects.
    define({}, "");
  } catch (err) {
    define = function(obj, key, value) {
      return obj[key] = value;
    };
  }

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunction.displayName = define(
    GeneratorFunctionPrototype,
    toStringTagSymbol,
    "GeneratorFunction"
  );

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      define(prototype, method, function(arg) {
        return this._invoke(method, arg);
      });
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      define(genFun, toStringTagSymbol, "GeneratorFunction");
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;

    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList),
      PromiseImpl
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  define(Gp, toStringTagSymbol, "Generator");

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
   true ? module.exports : undefined
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  Function("r", "regeneratorRuntime = r")(runtime);
}


/***/ }),

/***/ "9833":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("d240");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("499e").default
var update = add("117d5104", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ "99af":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var fails = __webpack_require__("d039");
var isArray = __webpack_require__("e8b5");
var isObject = __webpack_require__("861d");
var toObject = __webpack_require__("7b0b");
var toLength = __webpack_require__("50c4");
var createProperty = __webpack_require__("8418");
var arraySpeciesCreate = __webpack_require__("65f0");
var arrayMethodHasSpeciesSupport = __webpack_require__("1dde");
var wellKnownSymbol = __webpack_require__("b622");
var V8_VERSION = __webpack_require__("2d00");

var IS_CONCAT_SPREADABLE = wellKnownSymbol('isConcatSpreadable');
var MAX_SAFE_INTEGER = 0x1FFFFFFFFFFFFF;
var MAXIMUM_ALLOWED_INDEX_EXCEEDED = 'Maximum allowed index exceeded';

// We can't use this feature detection in V8 since it causes
// deoptimization and serious performance degradation
// https://github.com/zloirock/core-js/issues/679
var IS_CONCAT_SPREADABLE_SUPPORT = V8_VERSION >= 51 || !fails(function () {
  var array = [];
  array[IS_CONCAT_SPREADABLE] = false;
  return array.concat()[0] !== array;
});

var SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('concat');

var isConcatSpreadable = function (O) {
  if (!isObject(O)) return false;
  var spreadable = O[IS_CONCAT_SPREADABLE];
  return spreadable !== undefined ? !!spreadable : isArray(O);
};

var FORCED = !IS_CONCAT_SPREADABLE_SUPPORT || !SPECIES_SUPPORT;

// `Array.prototype.concat` method
// https://tc39.github.io/ecma262/#sec-array.prototype.concat
// with adding support of @@isConcatSpreadable and @@species
$({ target: 'Array', proto: true, forced: FORCED }, {
  concat: function concat(arg) { // eslint-disable-line no-unused-vars
    var O = toObject(this);
    var A = arraySpeciesCreate(O, 0);
    var n = 0;
    var i, k, length, len, E;
    for (i = -1, length = arguments.length; i < length; i++) {
      E = i === -1 ? O : arguments[i];
      if (isConcatSpreadable(E)) {
        len = toLength(E.length);
        if (n + len > MAX_SAFE_INTEGER) throw TypeError(MAXIMUM_ALLOWED_INDEX_EXCEEDED);
        for (k = 0; k < len; k++, n++) if (k in E) createProperty(A, n, E[k]);
      } else {
        if (n >= MAX_SAFE_INTEGER) throw TypeError(MAXIMUM_ALLOWED_INDEX_EXCEEDED);
        createProperty(A, n++, E);
      }
    }
    A.length = n;
    return A;
  }
});


/***/ }),

/***/ "9bdd":
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__("825a");

// call something on iterator step with safe closing on error
module.exports = function (iterator, fn, value, ENTRIES) {
  try {
    return ENTRIES ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch (error) {
    var returnMethod = iterator['return'];
    if (returnMethod !== undefined) anObject(returnMethod.call(iterator));
    throw error;
  }
};


/***/ }),

/***/ "9bf2":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("83ab");
var IE8_DOM_DEFINE = __webpack_require__("0cfb");
var anObject = __webpack_require__("825a");
var toPrimitive = __webpack_require__("c04e");

var nativeDefineProperty = Object.defineProperty;

// `Object.defineProperty` method
// https://tc39.github.io/ecma262/#sec-object.defineproperty
exports.f = DESCRIPTORS ? nativeDefineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return nativeDefineProperty(O, P, Attributes);
  } catch (error) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "9ed3":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var IteratorPrototype = __webpack_require__("ae93").IteratorPrototype;
var create = __webpack_require__("7c73");
var createPropertyDescriptor = __webpack_require__("5c6c");
var setToStringTag = __webpack_require__("d44e");
var Iterators = __webpack_require__("3f8c");

var returnThis = function () { return this; };

module.exports = function (IteratorConstructor, NAME, next) {
  var TO_STRING_TAG = NAME + ' Iterator';
  IteratorConstructor.prototype = create(IteratorPrototype, { next: createPropertyDescriptor(1, next) });
  setToStringTag(IteratorConstructor, TO_STRING_TAG, false, true);
  Iterators[TO_STRING_TAG] = returnThis;
  return IteratorConstructor;
};


/***/ }),

/***/ "9f7f":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var fails = __webpack_require__("d039");

// babel-minify transpiles RegExp('a', 'y') -> /a/y and it causes SyntaxError,
// so we use an intermediate function.
function RE(s, f) {
  return RegExp(s, f);
}

exports.UNSUPPORTED_Y = fails(function () {
  // babel-minify transpiles RegExp('a', 'y') -> /a/y and it causes SyntaxError
  var re = RE('a', 'y');
  re.lastIndex = 2;
  return re.exec('abcd') != null;
});

exports.BROKEN_CARET = fails(function () {
  // https://bugzilla.mozilla.org/show_bug.cgi?id=773687
  var re = RE('^r', 'gy');
  re.lastIndex = 2;
  return re.exec('str') != null;
});


/***/ }),

/***/ "a434":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var toAbsoluteIndex = __webpack_require__("23cb");
var toInteger = __webpack_require__("a691");
var toLength = __webpack_require__("50c4");
var toObject = __webpack_require__("7b0b");
var arraySpeciesCreate = __webpack_require__("65f0");
var createProperty = __webpack_require__("8418");
var arrayMethodHasSpeciesSupport = __webpack_require__("1dde");
var arrayMethodUsesToLength = __webpack_require__("ae40");

var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('splice');
var USES_TO_LENGTH = arrayMethodUsesToLength('splice', { ACCESSORS: true, 0: 0, 1: 2 });

var max = Math.max;
var min = Math.min;
var MAX_SAFE_INTEGER = 0x1FFFFFFFFFFFFF;
var MAXIMUM_ALLOWED_LENGTH_EXCEEDED = 'Maximum allowed length exceeded';

// `Array.prototype.splice` method
// https://tc39.github.io/ecma262/#sec-array.prototype.splice
// with adding support of @@species
$({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT || !USES_TO_LENGTH }, {
  splice: function splice(start, deleteCount /* , ...items */) {
    var O = toObject(this);
    var len = toLength(O.length);
    var actualStart = toAbsoluteIndex(start, len);
    var argumentsLength = arguments.length;
    var insertCount, actualDeleteCount, A, k, from, to;
    if (argumentsLength === 0) {
      insertCount = actualDeleteCount = 0;
    } else if (argumentsLength === 1) {
      insertCount = 0;
      actualDeleteCount = len - actualStart;
    } else {
      insertCount = argumentsLength - 2;
      actualDeleteCount = min(max(toInteger(deleteCount), 0), len - actualStart);
    }
    if (len + insertCount - actualDeleteCount > MAX_SAFE_INTEGER) {
      throw TypeError(MAXIMUM_ALLOWED_LENGTH_EXCEEDED);
    }
    A = arraySpeciesCreate(O, actualDeleteCount);
    for (k = 0; k < actualDeleteCount; k++) {
      from = actualStart + k;
      if (from in O) createProperty(A, k, O[from]);
    }
    A.length = actualDeleteCount;
    if (insertCount < actualDeleteCount) {
      for (k = actualStart; k < len - actualDeleteCount; k++) {
        from = k + actualDeleteCount;
        to = k + insertCount;
        if (from in O) O[to] = O[from];
        else delete O[to];
      }
      for (k = len; k > len - actualDeleteCount + insertCount; k--) delete O[k - 1];
    } else if (insertCount > actualDeleteCount) {
      for (k = len - actualDeleteCount; k > actualStart; k--) {
        from = k + actualDeleteCount - 1;
        to = k + insertCount - 1;
        if (from in O) O[to] = O[from];
        else delete O[to];
      }
    }
    for (k = 0; k < insertCount; k++) {
      O[k + actualStart] = arguments[k + 2];
    }
    O.length = len - actualDeleteCount + insertCount;
    return A;
  }
});


/***/ }),

/***/ "a4d3":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var global = __webpack_require__("da84");
var getBuiltIn = __webpack_require__("d066");
var IS_PURE = __webpack_require__("c430");
var DESCRIPTORS = __webpack_require__("83ab");
var NATIVE_SYMBOL = __webpack_require__("4930");
var USE_SYMBOL_AS_UID = __webpack_require__("fdbf");
var fails = __webpack_require__("d039");
var has = __webpack_require__("5135");
var isArray = __webpack_require__("e8b5");
var isObject = __webpack_require__("861d");
var anObject = __webpack_require__("825a");
var toObject = __webpack_require__("7b0b");
var toIndexedObject = __webpack_require__("fc6a");
var toPrimitive = __webpack_require__("c04e");
var createPropertyDescriptor = __webpack_require__("5c6c");
var nativeObjectCreate = __webpack_require__("7c73");
var objectKeys = __webpack_require__("df75");
var getOwnPropertyNamesModule = __webpack_require__("241c");
var getOwnPropertyNamesExternal = __webpack_require__("057f");
var getOwnPropertySymbolsModule = __webpack_require__("7418");
var getOwnPropertyDescriptorModule = __webpack_require__("06cf");
var definePropertyModule = __webpack_require__("9bf2");
var propertyIsEnumerableModule = __webpack_require__("d1e7");
var createNonEnumerableProperty = __webpack_require__("9112");
var redefine = __webpack_require__("6eeb");
var shared = __webpack_require__("5692");
var sharedKey = __webpack_require__("f772");
var hiddenKeys = __webpack_require__("d012");
var uid = __webpack_require__("90e3");
var wellKnownSymbol = __webpack_require__("b622");
var wrappedWellKnownSymbolModule = __webpack_require__("e538");
var defineWellKnownSymbol = __webpack_require__("746f");
var setToStringTag = __webpack_require__("d44e");
var InternalStateModule = __webpack_require__("69f3");
var $forEach = __webpack_require__("b727").forEach;

var HIDDEN = sharedKey('hidden');
var SYMBOL = 'Symbol';
var PROTOTYPE = 'prototype';
var TO_PRIMITIVE = wellKnownSymbol('toPrimitive');
var setInternalState = InternalStateModule.set;
var getInternalState = InternalStateModule.getterFor(SYMBOL);
var ObjectPrototype = Object[PROTOTYPE];
var $Symbol = global.Symbol;
var $stringify = getBuiltIn('JSON', 'stringify');
var nativeGetOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
var nativeDefineProperty = definePropertyModule.f;
var nativeGetOwnPropertyNames = getOwnPropertyNamesExternal.f;
var nativePropertyIsEnumerable = propertyIsEnumerableModule.f;
var AllSymbols = shared('symbols');
var ObjectPrototypeSymbols = shared('op-symbols');
var StringToSymbolRegistry = shared('string-to-symbol-registry');
var SymbolToStringRegistry = shared('symbol-to-string-registry');
var WellKnownSymbolsStore = shared('wks');
var QObject = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var USE_SETTER = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDescriptor = DESCRIPTORS && fails(function () {
  return nativeObjectCreate(nativeDefineProperty({}, 'a', {
    get: function () { return nativeDefineProperty(this, 'a', { value: 7 }).a; }
  })).a != 7;
}) ? function (O, P, Attributes) {
  var ObjectPrototypeDescriptor = nativeGetOwnPropertyDescriptor(ObjectPrototype, P);
  if (ObjectPrototypeDescriptor) delete ObjectPrototype[P];
  nativeDefineProperty(O, P, Attributes);
  if (ObjectPrototypeDescriptor && O !== ObjectPrototype) {
    nativeDefineProperty(ObjectPrototype, P, ObjectPrototypeDescriptor);
  }
} : nativeDefineProperty;

var wrap = function (tag, description) {
  var symbol = AllSymbols[tag] = nativeObjectCreate($Symbol[PROTOTYPE]);
  setInternalState(symbol, {
    type: SYMBOL,
    tag: tag,
    description: description
  });
  if (!DESCRIPTORS) symbol.description = description;
  return symbol;
};

var isSymbol = USE_SYMBOL_AS_UID ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  return Object(it) instanceof $Symbol;
};

var $defineProperty = function defineProperty(O, P, Attributes) {
  if (O === ObjectPrototype) $defineProperty(ObjectPrototypeSymbols, P, Attributes);
  anObject(O);
  var key = toPrimitive(P, true);
  anObject(Attributes);
  if (has(AllSymbols, key)) {
    if (!Attributes.enumerable) {
      if (!has(O, HIDDEN)) nativeDefineProperty(O, HIDDEN, createPropertyDescriptor(1, {}));
      O[HIDDEN][key] = true;
    } else {
      if (has(O, HIDDEN) && O[HIDDEN][key]) O[HIDDEN][key] = false;
      Attributes = nativeObjectCreate(Attributes, { enumerable: createPropertyDescriptor(0, false) });
    } return setSymbolDescriptor(O, key, Attributes);
  } return nativeDefineProperty(O, key, Attributes);
};

var $defineProperties = function defineProperties(O, Properties) {
  anObject(O);
  var properties = toIndexedObject(Properties);
  var keys = objectKeys(properties).concat($getOwnPropertySymbols(properties));
  $forEach(keys, function (key) {
    if (!DESCRIPTORS || $propertyIsEnumerable.call(properties, key)) $defineProperty(O, key, properties[key]);
  });
  return O;
};

var $create = function create(O, Properties) {
  return Properties === undefined ? nativeObjectCreate(O) : $defineProperties(nativeObjectCreate(O), Properties);
};

var $propertyIsEnumerable = function propertyIsEnumerable(V) {
  var P = toPrimitive(V, true);
  var enumerable = nativePropertyIsEnumerable.call(this, P);
  if (this === ObjectPrototype && has(AllSymbols, P) && !has(ObjectPrototypeSymbols, P)) return false;
  return enumerable || !has(this, P) || !has(AllSymbols, P) || has(this, HIDDEN) && this[HIDDEN][P] ? enumerable : true;
};

var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(O, P) {
  var it = toIndexedObject(O);
  var key = toPrimitive(P, true);
  if (it === ObjectPrototype && has(AllSymbols, key) && !has(ObjectPrototypeSymbols, key)) return;
  var descriptor = nativeGetOwnPropertyDescriptor(it, key);
  if (descriptor && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) {
    descriptor.enumerable = true;
  }
  return descriptor;
};

var $getOwnPropertyNames = function getOwnPropertyNames(O) {
  var names = nativeGetOwnPropertyNames(toIndexedObject(O));
  var result = [];
  $forEach(names, function (key) {
    if (!has(AllSymbols, key) && !has(hiddenKeys, key)) result.push(key);
  });
  return result;
};

var $getOwnPropertySymbols = function getOwnPropertySymbols(O) {
  var IS_OBJECT_PROTOTYPE = O === ObjectPrototype;
  var names = nativeGetOwnPropertyNames(IS_OBJECT_PROTOTYPE ? ObjectPrototypeSymbols : toIndexedObject(O));
  var result = [];
  $forEach(names, function (key) {
    if (has(AllSymbols, key) && (!IS_OBJECT_PROTOTYPE || has(ObjectPrototype, key))) {
      result.push(AllSymbols[key]);
    }
  });
  return result;
};

// `Symbol` constructor
// https://tc39.github.io/ecma262/#sec-symbol-constructor
if (!NATIVE_SYMBOL) {
  $Symbol = function Symbol() {
    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor');
    var description = !arguments.length || arguments[0] === undefined ? undefined : String(arguments[0]);
    var tag = uid(description);
    var setter = function (value) {
      if (this === ObjectPrototype) setter.call(ObjectPrototypeSymbols, value);
      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDescriptor(this, tag, createPropertyDescriptor(1, value));
    };
    if (DESCRIPTORS && USE_SETTER) setSymbolDescriptor(ObjectPrototype, tag, { configurable: true, set: setter });
    return wrap(tag, description);
  };

  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
    return getInternalState(this).tag;
  });

  redefine($Symbol, 'withoutSetter', function (description) {
    return wrap(uid(description), description);
  });

  propertyIsEnumerableModule.f = $propertyIsEnumerable;
  definePropertyModule.f = $defineProperty;
  getOwnPropertyDescriptorModule.f = $getOwnPropertyDescriptor;
  getOwnPropertyNamesModule.f = getOwnPropertyNamesExternal.f = $getOwnPropertyNames;
  getOwnPropertySymbolsModule.f = $getOwnPropertySymbols;

  wrappedWellKnownSymbolModule.f = function (name) {
    return wrap(wellKnownSymbol(name), name);
  };

  if (DESCRIPTORS) {
    // https://github.com/tc39/proposal-Symbol-description
    nativeDefineProperty($Symbol[PROTOTYPE], 'description', {
      configurable: true,
      get: function description() {
        return getInternalState(this).description;
      }
    });
    if (!IS_PURE) {
      redefine(ObjectPrototype, 'propertyIsEnumerable', $propertyIsEnumerable, { unsafe: true });
    }
  }
}

$({ global: true, wrap: true, forced: !NATIVE_SYMBOL, sham: !NATIVE_SYMBOL }, {
  Symbol: $Symbol
});

$forEach(objectKeys(WellKnownSymbolsStore), function (name) {
  defineWellKnownSymbol(name);
});

$({ target: SYMBOL, stat: true, forced: !NATIVE_SYMBOL }, {
  // `Symbol.for` method
  // https://tc39.github.io/ecma262/#sec-symbol.for
  'for': function (key) {
    var string = String(key);
    if (has(StringToSymbolRegistry, string)) return StringToSymbolRegistry[string];
    var symbol = $Symbol(string);
    StringToSymbolRegistry[string] = symbol;
    SymbolToStringRegistry[symbol] = string;
    return symbol;
  },
  // `Symbol.keyFor` method
  // https://tc39.github.io/ecma262/#sec-symbol.keyfor
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol');
    if (has(SymbolToStringRegistry, sym)) return SymbolToStringRegistry[sym];
  },
  useSetter: function () { USE_SETTER = true; },
  useSimple: function () { USE_SETTER = false; }
});

$({ target: 'Object', stat: true, forced: !NATIVE_SYMBOL, sham: !DESCRIPTORS }, {
  // `Object.create` method
  // https://tc39.github.io/ecma262/#sec-object.create
  create: $create,
  // `Object.defineProperty` method
  // https://tc39.github.io/ecma262/#sec-object.defineproperty
  defineProperty: $defineProperty,
  // `Object.defineProperties` method
  // https://tc39.github.io/ecma262/#sec-object.defineproperties
  defineProperties: $defineProperties,
  // `Object.getOwnPropertyDescriptor` method
  // https://tc39.github.io/ecma262/#sec-object.getownpropertydescriptors
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor
});

$({ target: 'Object', stat: true, forced: !NATIVE_SYMBOL }, {
  // `Object.getOwnPropertyNames` method
  // https://tc39.github.io/ecma262/#sec-object.getownpropertynames
  getOwnPropertyNames: $getOwnPropertyNames,
  // `Object.getOwnPropertySymbols` method
  // https://tc39.github.io/ecma262/#sec-object.getownpropertysymbols
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// Chrome 38 and 39 `Object.getOwnPropertySymbols` fails on primitives
// https://bugs.chromium.org/p/v8/issues/detail?id=3443
$({ target: 'Object', stat: true, forced: fails(function () { getOwnPropertySymbolsModule.f(1); }) }, {
  getOwnPropertySymbols: function getOwnPropertySymbols(it) {
    return getOwnPropertySymbolsModule.f(toObject(it));
  }
});

// `JSON.stringify` method behavior with symbols
// https://tc39.github.io/ecma262/#sec-json.stringify
if ($stringify) {
  var FORCED_JSON_STRINGIFY = !NATIVE_SYMBOL || fails(function () {
    var symbol = $Symbol();
    // MS Edge converts symbol values to JSON as {}
    return $stringify([symbol]) != '[null]'
      // WebKit converts symbol values to JSON as null
      || $stringify({ a: symbol }) != '{}'
      // V8 throws on boxed symbols
      || $stringify(Object(symbol)) != '{}';
  });

  $({ target: 'JSON', stat: true, forced: FORCED_JSON_STRINGIFY }, {
    // eslint-disable-next-line no-unused-vars
    stringify: function stringify(it, replacer, space) {
      var args = [it];
      var index = 1;
      var $replacer;
      while (arguments.length > index) args.push(arguments[index++]);
      $replacer = replacer;
      if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
      if (!isArray(replacer)) replacer = function (key, value) {
        if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
        if (!isSymbol(value)) return value;
      };
      args[1] = replacer;
      return $stringify.apply(null, args);
    }
  });
}

// `Symbol.prototype[@@toPrimitive]` method
// https://tc39.github.io/ecma262/#sec-symbol.prototype-@@toprimitive
if (!$Symbol[PROTOTYPE][TO_PRIMITIVE]) {
  createNonEnumerableProperty($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
}
// `Symbol.prototype[@@toStringTag]` property
// https://tc39.github.io/ecma262/#sec-symbol.prototype-@@tostringtag
setToStringTag($Symbol, SYMBOL);

hiddenKeys[HIDDEN] = true;


/***/ }),

/***/ "a630":
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__("23e7");
var from = __webpack_require__("4df4");
var checkCorrectnessOfIteration = __webpack_require__("1c7e");

var INCORRECT_ITERATION = !checkCorrectnessOfIteration(function (iterable) {
  Array.from(iterable);
});

// `Array.from` method
// https://tc39.github.io/ecma262/#sec-array.from
$({ target: 'Array', stat: true, forced: INCORRECT_ITERATION }, {
  from: from
});


/***/ }),

/***/ "a640":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var fails = __webpack_require__("d039");

module.exports = function (METHOD_NAME, argument) {
  var method = [][METHOD_NAME];
  return !!method && fails(function () {
    // eslint-disable-next-line no-useless-call,no-throw-literal
    method.call(null, argument || function () { throw 1; }, 1);
  });
};


/***/ }),

/***/ "a691":
/***/ (function(module, exports) {

var ceil = Math.ceil;
var floor = Math.floor;

// `ToInteger` abstract operation
// https://tc39.github.io/ecma262/#sec-tointeger
module.exports = function (argument) {
  return isNaN(argument = +argument) ? 0 : (argument > 0 ? floor : ceil)(argument);
};


/***/ }),

/***/ "a9e3":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var DESCRIPTORS = __webpack_require__("83ab");
var global = __webpack_require__("da84");
var isForced = __webpack_require__("94ca");
var redefine = __webpack_require__("6eeb");
var has = __webpack_require__("5135");
var classof = __webpack_require__("c6b6");
var inheritIfRequired = __webpack_require__("7156");
var toPrimitive = __webpack_require__("c04e");
var fails = __webpack_require__("d039");
var create = __webpack_require__("7c73");
var getOwnPropertyNames = __webpack_require__("241c").f;
var getOwnPropertyDescriptor = __webpack_require__("06cf").f;
var defineProperty = __webpack_require__("9bf2").f;
var trim = __webpack_require__("58a8").trim;

var NUMBER = 'Number';
var NativeNumber = global[NUMBER];
var NumberPrototype = NativeNumber.prototype;

// Opera ~12 has broken Object#toString
var BROKEN_CLASSOF = classof(create(NumberPrototype)) == NUMBER;

// `ToNumber` abstract operation
// https://tc39.github.io/ecma262/#sec-tonumber
var toNumber = function (argument) {
  var it = toPrimitive(argument, false);
  var first, third, radix, maxCode, digits, length, index, code;
  if (typeof it == 'string' && it.length > 2) {
    it = trim(it);
    first = it.charCodeAt(0);
    if (first === 43 || first === 45) {
      third = it.charCodeAt(2);
      if (third === 88 || third === 120) return NaN; // Number('+0x1') should be NaN, old V8 fix
    } else if (first === 48) {
      switch (it.charCodeAt(1)) {
        case 66: case 98: radix = 2; maxCode = 49; break; // fast equal of /^0b[01]+$/i
        case 79: case 111: radix = 8; maxCode = 55; break; // fast equal of /^0o[0-7]+$/i
        default: return +it;
      }
      digits = it.slice(2);
      length = digits.length;
      for (index = 0; index < length; index++) {
        code = digits.charCodeAt(index);
        // parseInt parses a string to a first unavailable symbol
        // but ToNumber should return NaN if a string contains unavailable symbols
        if (code < 48 || code > maxCode) return NaN;
      } return parseInt(digits, radix);
    }
  } return +it;
};

// `Number` constructor
// https://tc39.github.io/ecma262/#sec-number-constructor
if (isForced(NUMBER, !NativeNumber(' 0o1') || !NativeNumber('0b1') || NativeNumber('+0x1'))) {
  var NumberWrapper = function Number(value) {
    var it = arguments.length < 1 ? 0 : value;
    var dummy = this;
    return dummy instanceof NumberWrapper
      // check on 1..constructor(foo) case
      && (BROKEN_CLASSOF ? fails(function () { NumberPrototype.valueOf.call(dummy); }) : classof(dummy) != NUMBER)
        ? inheritIfRequired(new NativeNumber(toNumber(it)), dummy, NumberWrapper) : toNumber(it);
  };
  for (var keys = DESCRIPTORS ? getOwnPropertyNames(NativeNumber) : (
    // ES3:
    'MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,' +
    // ES2015 (in case, if modules with ES2015 Number statics required before):
    'EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,' +
    'MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger'
  ).split(','), j = 0, key; keys.length > j; j++) {
    if (has(NativeNumber, key = keys[j]) && !has(NumberWrapper, key)) {
      defineProperty(NumberWrapper, key, getOwnPropertyDescriptor(NativeNumber, key));
    }
  }
  NumberWrapper.prototype = NumberPrototype;
  NumberPrototype.constructor = NumberWrapper;
  redefine(global, NUMBER, NumberWrapper);
}


/***/ }),

/***/ "ac1f":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var exec = __webpack_require__("9263");

$({ target: 'RegExp', proto: true, forced: /./.exec !== exec }, {
  exec: exec
});


/***/ }),

/***/ "ad6d":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var anObject = __webpack_require__("825a");

// `RegExp.prototype.flags` getter implementation
// https://tc39.github.io/ecma262/#sec-get-regexp.prototype.flags
module.exports = function () {
  var that = anObject(this);
  var result = '';
  if (that.global) result += 'g';
  if (that.ignoreCase) result += 'i';
  if (that.multiline) result += 'm';
  if (that.dotAll) result += 's';
  if (that.unicode) result += 'u';
  if (that.sticky) result += 'y';
  return result;
};


/***/ }),

/***/ "ae40":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("83ab");
var fails = __webpack_require__("d039");
var has = __webpack_require__("5135");

var defineProperty = Object.defineProperty;
var cache = {};

var thrower = function (it) { throw it; };

module.exports = function (METHOD_NAME, options) {
  if (has(cache, METHOD_NAME)) return cache[METHOD_NAME];
  if (!options) options = {};
  var method = [][METHOD_NAME];
  var ACCESSORS = has(options, 'ACCESSORS') ? options.ACCESSORS : false;
  var argument0 = has(options, 0) ? options[0] : thrower;
  var argument1 = has(options, 1) ? options[1] : undefined;

  return cache[METHOD_NAME] = !!method && !fails(function () {
    if (ACCESSORS && !DESCRIPTORS) return true;
    var O = { length: -1 };

    if (ACCESSORS) defineProperty(O, 1, { enumerable: true, get: thrower });
    else O[1] = 1;

    method.call(O, argument0, argument1);
  });
};


/***/ }),

/***/ "ae93":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var getPrototypeOf = __webpack_require__("e163");
var createNonEnumerableProperty = __webpack_require__("9112");
var has = __webpack_require__("5135");
var wellKnownSymbol = __webpack_require__("b622");
var IS_PURE = __webpack_require__("c430");

var ITERATOR = wellKnownSymbol('iterator');
var BUGGY_SAFARI_ITERATORS = false;

var returnThis = function () { return this; };

// `%IteratorPrototype%` object
// https://tc39.github.io/ecma262/#sec-%iteratorprototype%-object
var IteratorPrototype, PrototypeOfArrayIteratorPrototype, arrayIterator;

if ([].keys) {
  arrayIterator = [].keys();
  // Safari 8 has buggy iterators w/o `next`
  if (!('next' in arrayIterator)) BUGGY_SAFARI_ITERATORS = true;
  else {
    PrototypeOfArrayIteratorPrototype = getPrototypeOf(getPrototypeOf(arrayIterator));
    if (PrototypeOfArrayIteratorPrototype !== Object.prototype) IteratorPrototype = PrototypeOfArrayIteratorPrototype;
  }
}

if (IteratorPrototype == undefined) IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
if (!IS_PURE && !has(IteratorPrototype, ITERATOR)) {
  createNonEnumerableProperty(IteratorPrototype, ITERATOR, returnThis);
}

module.exports = {
  IteratorPrototype: IteratorPrototype,
  BUGGY_SAFARI_ITERATORS: BUGGY_SAFARI_ITERATORS
};


/***/ }),

/***/ "b041":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var TO_STRING_TAG_SUPPORT = __webpack_require__("00ee");
var classof = __webpack_require__("f5df");

// `Object.prototype.toString` method implementation
// https://tc39.github.io/ecma262/#sec-object.prototype.tostring
module.exports = TO_STRING_TAG_SUPPORT ? {}.toString : function toString() {
  return '[object ' + classof(this) + ']';
};


/***/ }),

/***/ "b0c0":
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__("83ab");
var defineProperty = __webpack_require__("9bf2").f;

var FunctionPrototype = Function.prototype;
var FunctionPrototypeToString = FunctionPrototype.toString;
var nameRE = /^\s*function ([^ (]*)/;
var NAME = 'name';

// Function instances `.name` property
// https://tc39.github.io/ecma262/#sec-function-instances-name
if (DESCRIPTORS && !(NAME in FunctionPrototype)) {
  defineProperty(FunctionPrototype, NAME, {
    configurable: true,
    get: function () {
      try {
        return FunctionPrototypeToString.call(this).match(nameRE)[1];
      } catch (error) {
        return '';
      }
    }
  });
}


/***/ }),

/***/ "b575":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var getOwnPropertyDescriptor = __webpack_require__("06cf").f;
var classof = __webpack_require__("c6b6");
var macrotask = __webpack_require__("2cf4").set;
var IS_IOS = __webpack_require__("1cdc");

var MutationObserver = global.MutationObserver || global.WebKitMutationObserver;
var process = global.process;
var Promise = global.Promise;
var IS_NODE = classof(process) == 'process';
// Node.js 11 shows ExperimentalWarning on getting `queueMicrotask`
var queueMicrotaskDescriptor = getOwnPropertyDescriptor(global, 'queueMicrotask');
var queueMicrotask = queueMicrotaskDescriptor && queueMicrotaskDescriptor.value;

var flush, head, last, notify, toggle, node, promise, then;

// modern engines have queueMicrotask method
if (!queueMicrotask) {
  flush = function () {
    var parent, fn;
    if (IS_NODE && (parent = process.domain)) parent.exit();
    while (head) {
      fn = head.fn;
      head = head.next;
      try {
        fn();
      } catch (error) {
        if (head) notify();
        else last = undefined;
        throw error;
      }
    } last = undefined;
    if (parent) parent.enter();
  };

  // Node.js
  if (IS_NODE) {
    notify = function () {
      process.nextTick(flush);
    };
  // browsers with MutationObserver, except iOS - https://github.com/zloirock/core-js/issues/339
  } else if (MutationObserver && !IS_IOS) {
    toggle = true;
    node = document.createTextNode('');
    new MutationObserver(flush).observe(node, { characterData: true });
    notify = function () {
      node.data = toggle = !toggle;
    };
  // environments with maybe non-completely correct, but existent Promise
  } else if (Promise && Promise.resolve) {
    // Promise.resolve without an argument throws an error in LG WebOS 2
    promise = Promise.resolve(undefined);
    then = promise.then;
    notify = function () {
      then.call(promise, flush);
    };
  // for other environments - macrotask based on:
  // - setImmediate
  // - MessageChannel
  // - window.postMessag
  // - onreadystatechange
  // - setTimeout
  } else {
    notify = function () {
      // strange IE + webpack dev server bug - use .call(global)
      macrotask.call(global, flush);
    };
  }
}

module.exports = queueMicrotask || function (fn) {
  var task = { fn: fn, next: undefined };
  if (last) last.next = task;
  if (!head) {
    head = task;
    notify();
  } last = task;
};


/***/ }),

/***/ "b622":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var shared = __webpack_require__("5692");
var has = __webpack_require__("5135");
var uid = __webpack_require__("90e3");
var NATIVE_SYMBOL = __webpack_require__("4930");
var USE_SYMBOL_AS_UID = __webpack_require__("fdbf");

var WellKnownSymbolsStore = shared('wks');
var Symbol = global.Symbol;
var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol : Symbol && Symbol.withoutSetter || uid;

module.exports = function (name) {
  if (!has(WellKnownSymbolsStore, name)) {
    if (NATIVE_SYMBOL && has(Symbol, name)) WellKnownSymbolsStore[name] = Symbol[name];
    else WellKnownSymbolsStore[name] = createWellKnownSymbol('Symbol.' + name);
  } return WellKnownSymbolsStore[name];
};


/***/ }),

/***/ "b64b":
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__("23e7");
var toObject = __webpack_require__("7b0b");
var nativeKeys = __webpack_require__("df75");
var fails = __webpack_require__("d039");

var FAILS_ON_PRIMITIVES = fails(function () { nativeKeys(1); });

// `Object.keys` method
// https://tc39.github.io/ecma262/#sec-object.keys
$({ target: 'Object', stat: true, forced: FAILS_ON_PRIMITIVES }, {
  keys: function keys(it) {
    return nativeKeys(toObject(it));
  }
});


/***/ }),

/***/ "b727":
/***/ (function(module, exports, __webpack_require__) {

var bind = __webpack_require__("0366");
var IndexedObject = __webpack_require__("44ad");
var toObject = __webpack_require__("7b0b");
var toLength = __webpack_require__("50c4");
var arraySpeciesCreate = __webpack_require__("65f0");

var push = [].push;

// `Array.prototype.{ forEach, map, filter, some, every, find, findIndex }` methods implementation
var createMethod = function (TYPE) {
  var IS_MAP = TYPE == 1;
  var IS_FILTER = TYPE == 2;
  var IS_SOME = TYPE == 3;
  var IS_EVERY = TYPE == 4;
  var IS_FIND_INDEX = TYPE == 6;
  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
  return function ($this, callbackfn, that, specificCreate) {
    var O = toObject($this);
    var self = IndexedObject(O);
    var boundFunction = bind(callbackfn, that, 3);
    var length = toLength(self.length);
    var index = 0;
    var create = specificCreate || arraySpeciesCreate;
    var target = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined;
    var value, result;
    for (;length > index; index++) if (NO_HOLES || index in self) {
      value = self[index];
      result = boundFunction(value, index, O);
      if (TYPE) {
        if (IS_MAP) target[index] = result; // map
        else if (result) switch (TYPE) {
          case 3: return true;              // some
          case 5: return value;             // find
          case 6: return index;             // findIndex
          case 2: push.call(target, value); // filter
        } else if (IS_EVERY) return false;  // every
      }
    }
    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : target;
  };
};

module.exports = {
  // `Array.prototype.forEach` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.foreach
  forEach: createMethod(0),
  // `Array.prototype.map` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.map
  map: createMethod(1),
  // `Array.prototype.filter` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.filter
  filter: createMethod(2),
  // `Array.prototype.some` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.some
  some: createMethod(3),
  // `Array.prototype.every` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.every
  every: createMethod(4),
  // `Array.prototype.find` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.find
  find: createMethod(5),
  // `Array.prototype.findIndex` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.findIndex
  findIndex: createMethod(6)
};


/***/ }),

/***/ "b7de":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("654a");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("499e").default
var update = add("0174b9c4", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ "bb2f":
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__("d039");

module.exports = !fails(function () {
  return Object.isExtensible(Object.preventExtensions({}));
});


/***/ }),

/***/ "bb78":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Bag_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("fb4f");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Bag_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Bag_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Bag_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "bc97":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Stats_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("e09a");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Stats_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Stats_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Stats_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "c04e":
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__("861d");

// `ToPrimitive` abstract operation
// https://tc39.github.io/ecma262/#sec-toprimitive
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (input, PREFERRED_STRING) {
  if (!isObject(input)) return input;
  var fn, val;
  if (PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;
  if (typeof (fn = input.valueOf) == 'function' && !isObject(val = fn.call(input))) return val;
  if (!PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "c430":
/***/ (function(module, exports) {

module.exports = false;


/***/ }),

/***/ "c6b6":
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ "c6cd":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var setGlobal = __webpack_require__("ce4e");

var SHARED = '__core-js_shared__';
var store = global[SHARED] || setGlobal(SHARED, {});

module.exports = store;


/***/ }),

/***/ "c740":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var $findIndex = __webpack_require__("b727").findIndex;
var addToUnscopables = __webpack_require__("44d2");
var arrayMethodUsesToLength = __webpack_require__("ae40");

var FIND_INDEX = 'findIndex';
var SKIPS_HOLES = true;

var USES_TO_LENGTH = arrayMethodUsesToLength(FIND_INDEX);

// Shouldn't skip holes
if (FIND_INDEX in []) Array(1)[FIND_INDEX](function () { SKIPS_HOLES = false; });

// `Array.prototype.findIndex` method
// https://tc39.github.io/ecma262/#sec-array.prototype.findindex
$({ target: 'Array', proto: true, forced: SKIPS_HOLES || !USES_TO_LENGTH }, {
  findIndex: function findIndex(callbackfn /* , that = undefined */) {
    return $findIndex(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});

// https://tc39.github.io/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables(FIND_INDEX);


/***/ }),

/***/ "c8ba":
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "ca84":
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__("5135");
var toIndexedObject = __webpack_require__("fc6a");
var indexOf = __webpack_require__("4d64").indexOf;
var hiddenKeys = __webpack_require__("d012");

module.exports = function (object, names) {
  var O = toIndexedObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) !has(hiddenKeys, key) && has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~indexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),

/***/ "cc12":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var isObject = __webpack_require__("861d");

var document = global.document;
// typeof document.createElement is 'object' in old IE
var EXISTS = isObject(document) && isObject(document.createElement);

module.exports = function (it) {
  return EXISTS ? document.createElement(it) : {};
};


/***/ }),

/***/ "cca6":
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__("23e7");
var assign = __webpack_require__("60da");

// `Object.assign` method
// https://tc39.github.io/ecma262/#sec-object.assign
$({ target: 'Object', stat: true, forced: Object.assign !== assign }, {
  assign: assign
});


/***/ }),

/***/ "cdf9":
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__("825a");
var isObject = __webpack_require__("861d");
var newPromiseCapability = __webpack_require__("f069");

module.exports = function (C, x) {
  anObject(C);
  if (isObject(x) && x.constructor === C) return x;
  var promiseCapability = newPromiseCapability.f(C);
  var resolve = promiseCapability.resolve;
  resolve(x);
  return promiseCapability.promise;
};


/***/ }),

/***/ "ce4e":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var createNonEnumerableProperty = __webpack_require__("9112");

module.exports = function (key, value) {
  try {
    createNonEnumerableProperty(global, key, value);
  } catch (error) {
    global[key] = value;
  } return value;
};


/***/ }),

/***/ "d012":
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ "d039":
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (error) {
    return true;
  }
};


/***/ }),

/***/ "d066":
/***/ (function(module, exports, __webpack_require__) {

var path = __webpack_require__("428f");
var global = __webpack_require__("da84");

var aFunction = function (variable) {
  return typeof variable == 'function' ? variable : undefined;
};

module.exports = function (namespace, method) {
  return arguments.length < 2 ? aFunction(path[namespace]) || aFunction(global[namespace])
    : path[namespace] && path[namespace][method] || global[namespace] && global[namespace][method];
};


/***/ }),

/***/ "d1e7":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var nativePropertyIsEnumerable = {}.propertyIsEnumerable;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// Nashorn ~ JDK8 bug
var NASHORN_BUG = getOwnPropertyDescriptor && !nativePropertyIsEnumerable.call({ 1: 2 }, 1);

// `Object.prototype.propertyIsEnumerable` method implementation
// https://tc39.github.io/ecma262/#sec-object.prototype.propertyisenumerable
exports.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
  var descriptor = getOwnPropertyDescriptor(this, V);
  return !!descriptor && descriptor.enumerable;
} : nativePropertyIsEnumerable;


/***/ }),

/***/ "d240":
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__("24fb");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "d28b":
/***/ (function(module, exports, __webpack_require__) {

var defineWellKnownSymbol = __webpack_require__("746f");

// `Symbol.iterator` well-known symbol
// https://tc39.github.io/ecma262/#sec-symbol.iterator
defineWellKnownSymbol('iterator');


/***/ }),

/***/ "d2bb":
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__("825a");
var aPossiblePrototype = __webpack_require__("3bbe");

// `Object.setPrototypeOf` method
// https://tc39.github.io/ecma262/#sec-object.setprototypeof
// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
module.exports = Object.setPrototypeOf || ('__proto__' in {} ? function () {
  var CORRECT_SETTER = false;
  var test = {};
  var setter;
  try {
    setter = Object.getOwnPropertyDescriptor(Object.prototype, '__proto__').set;
    setter.call(test, []);
    CORRECT_SETTER = test instanceof Array;
  } catch (error) { /* empty */ }
  return function setPrototypeOf(O, proto) {
    anObject(O);
    aPossiblePrototype(proto);
    if (CORRECT_SETTER) setter.call(O, proto);
    else O.__proto__ = proto;
    return O;
  };
}() : undefined);


/***/ }),

/***/ "d3b7":
/***/ (function(module, exports, __webpack_require__) {

var TO_STRING_TAG_SUPPORT = __webpack_require__("00ee");
var redefine = __webpack_require__("6eeb");
var toString = __webpack_require__("b041");

// `Object.prototype.toString` method
// https://tc39.github.io/ecma262/#sec-object.prototype.tostring
if (!TO_STRING_TAG_SUPPORT) {
  redefine(Object.prototype, 'toString', toString, { unsafe: true });
}


/***/ }),

/***/ "d44e":
/***/ (function(module, exports, __webpack_require__) {

var defineProperty = __webpack_require__("9bf2").f;
var has = __webpack_require__("5135");
var wellKnownSymbol = __webpack_require__("b622");

var TO_STRING_TAG = wellKnownSymbol('toStringTag');

module.exports = function (it, TAG, STATIC) {
  if (it && !has(it = STATIC ? it : it.prototype, TO_STRING_TAG)) {
    defineProperty(it, TO_STRING_TAG, { configurable: true, value: TAG });
  }
};


/***/ }),

/***/ "d58f":
/***/ (function(module, exports, __webpack_require__) {

var aFunction = __webpack_require__("1c0b");
var toObject = __webpack_require__("7b0b");
var IndexedObject = __webpack_require__("44ad");
var toLength = __webpack_require__("50c4");

// `Array.prototype.{ reduce, reduceRight }` methods implementation
var createMethod = function (IS_RIGHT) {
  return function (that, callbackfn, argumentsLength, memo) {
    aFunction(callbackfn);
    var O = toObject(that);
    var self = IndexedObject(O);
    var length = toLength(O.length);
    var index = IS_RIGHT ? length - 1 : 0;
    var i = IS_RIGHT ? -1 : 1;
    if (argumentsLength < 2) while (true) {
      if (index in self) {
        memo = self[index];
        index += i;
        break;
      }
      index += i;
      if (IS_RIGHT ? index < 0 : length <= index) {
        throw TypeError('Reduce of empty array with no initial value');
      }
    }
    for (;IS_RIGHT ? index >= 0 : length > index; index += i) if (index in self) {
      memo = callbackfn(memo, self[index], index, O);
    }
    return memo;
  };
};

module.exports = {
  // `Array.prototype.reduce` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.reduce
  left: createMethod(false),
  // `Array.prototype.reduceRight` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.reduceright
  right: createMethod(true)
};


/***/ }),

/***/ "d6a5":
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__("24fb");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".modal-label-row{display:grid;grid-template-columns:auto auto 35px 35px 35px}.modal-label-row .label{color:#444;padding:0 5px;font-size:100%}.modal-label-row .center{text-align:center}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "d784":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// TODO: Remove from `core-js@4` since it's moved to entry points
__webpack_require__("ac1f");
var redefine = __webpack_require__("6eeb");
var fails = __webpack_require__("d039");
var wellKnownSymbol = __webpack_require__("b622");
var regexpExec = __webpack_require__("9263");
var createNonEnumerableProperty = __webpack_require__("9112");

var SPECIES = wellKnownSymbol('species');

var REPLACE_SUPPORTS_NAMED_GROUPS = !fails(function () {
  // #replace needs built-in support for named groups.
  // #match works fine because it just return the exec results, even if it has
  // a "grops" property.
  var re = /./;
  re.exec = function () {
    var result = [];
    result.groups = { a: '7' };
    return result;
  };
  return ''.replace(re, '$<a>') !== '7';
});

// IE <= 11 replaces $0 with the whole match, as if it was $&
// https://stackoverflow.com/questions/6024666/getting-ie-to-replace-a-regex-with-the-literal-string-0
var REPLACE_KEEPS_$0 = (function () {
  return 'a'.replace(/./, '$0') === '$0';
})();

var REPLACE = wellKnownSymbol('replace');
// Safari <= 13.0.3(?) substitutes nth capture where n>m with an empty string
var REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE = (function () {
  if (/./[REPLACE]) {
    return /./[REPLACE]('a', '$0') === '';
  }
  return false;
})();

// Chrome 51 has a buggy "split" implementation when RegExp#exec !== nativeExec
// Weex JS has frozen built-in prototypes, so use try / catch wrapper
var SPLIT_WORKS_WITH_OVERWRITTEN_EXEC = !fails(function () {
  var re = /(?:)/;
  var originalExec = re.exec;
  re.exec = function () { return originalExec.apply(this, arguments); };
  var result = 'ab'.split(re);
  return result.length !== 2 || result[0] !== 'a' || result[1] !== 'b';
});

module.exports = function (KEY, length, exec, sham) {
  var SYMBOL = wellKnownSymbol(KEY);

  var DELEGATES_TO_SYMBOL = !fails(function () {
    // String methods call symbol-named RegEp methods
    var O = {};
    O[SYMBOL] = function () { return 7; };
    return ''[KEY](O) != 7;
  });

  var DELEGATES_TO_EXEC = DELEGATES_TO_SYMBOL && !fails(function () {
    // Symbol-named RegExp methods call .exec
    var execCalled = false;
    var re = /a/;

    if (KEY === 'split') {
      // We can't use real regex here since it causes deoptimization
      // and serious performance degradation in V8
      // https://github.com/zloirock/core-js/issues/306
      re = {};
      // RegExp[@@split] doesn't call the regex's exec method, but first creates
      // a new one. We need to return the patched regex when creating the new one.
      re.constructor = {};
      re.constructor[SPECIES] = function () { return re; };
      re.flags = '';
      re[SYMBOL] = /./[SYMBOL];
    }

    re.exec = function () { execCalled = true; return null; };

    re[SYMBOL]('');
    return !execCalled;
  });

  if (
    !DELEGATES_TO_SYMBOL ||
    !DELEGATES_TO_EXEC ||
    (KEY === 'replace' && !(
      REPLACE_SUPPORTS_NAMED_GROUPS &&
      REPLACE_KEEPS_$0 &&
      !REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE
    )) ||
    (KEY === 'split' && !SPLIT_WORKS_WITH_OVERWRITTEN_EXEC)
  ) {
    var nativeRegExpMethod = /./[SYMBOL];
    var methods = exec(SYMBOL, ''[KEY], function (nativeMethod, regexp, str, arg2, forceStringMethod) {
      if (regexp.exec === regexpExec) {
        if (DELEGATES_TO_SYMBOL && !forceStringMethod) {
          // The native String method already delegates to @@method (this
          // polyfilled function), leasing to infinite recursion.
          // We avoid it by directly calling the native @@method method.
          return { done: true, value: nativeRegExpMethod.call(regexp, str, arg2) };
        }
        return { done: true, value: nativeMethod.call(str, regexp, arg2) };
      }
      return { done: false };
    }, {
      REPLACE_KEEPS_$0: REPLACE_KEEPS_$0,
      REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE: REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE
    });
    var stringMethod = methods[0];
    var regexMethod = methods[1];

    redefine(String.prototype, KEY, stringMethod);
    redefine(RegExp.prototype, SYMBOL, length == 2
      // 21.2.5.8 RegExp.prototype[@@replace](string, replaceValue)
      // 21.2.5.11 RegExp.prototype[@@split](string, limit)
      ? function (string, arg) { return regexMethod.call(string, this, arg); }
      // 21.2.5.6 RegExp.prototype[@@match](string)
      // 21.2.5.9 RegExp.prototype[@@search](string)
      : function (string) { return regexMethod.call(string, this); }
    );
  }

  if (sham) createNonEnumerableProperty(RegExp.prototype[SYMBOL], 'sham', true);
};


/***/ }),

/***/ "d81d":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var $map = __webpack_require__("b727").map;
var arrayMethodHasSpeciesSupport = __webpack_require__("1dde");
var arrayMethodUsesToLength = __webpack_require__("ae40");

var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('map');
// FF49- issue
var USES_TO_LENGTH = arrayMethodUsesToLength('map');

// `Array.prototype.map` method
// https://tc39.github.io/ecma262/#sec-array.prototype.map
// with adding support of @@species
$({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT || !USES_TO_LENGTH }, {
  map: function map(callbackfn /* , thisArg */) {
    return $map(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),

/***/ "d8c7":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("855c");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("499e").default
var update = add("94d91404", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ "da84":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var check = function (it) {
  return it && it.Math == Math && it;
};

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
module.exports =
  // eslint-disable-next-line no-undef
  check(typeof globalThis == 'object' && globalThis) ||
  check(typeof window == 'object' && window) ||
  check(typeof self == 'object' && self) ||
  check(typeof global == 'object' && global) ||
  // eslint-disable-next-line no-new-func
  Function('return this')();

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("c8ba")))

/***/ }),

/***/ "dbb4":
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__("23e7");
var DESCRIPTORS = __webpack_require__("83ab");
var ownKeys = __webpack_require__("56ef");
var toIndexedObject = __webpack_require__("fc6a");
var getOwnPropertyDescriptorModule = __webpack_require__("06cf");
var createProperty = __webpack_require__("8418");

// `Object.getOwnPropertyDescriptors` method
// https://tc39.github.io/ecma262/#sec-object.getownpropertydescriptors
$({ target: 'Object', stat: true, sham: !DESCRIPTORS }, {
  getOwnPropertyDescriptors: function getOwnPropertyDescriptors(object) {
    var O = toIndexedObject(object);
    var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
    var keys = ownKeys(O);
    var result = {};
    var index = 0;
    var key, descriptor;
    while (keys.length > index) {
      descriptor = getOwnPropertyDescriptor(O, key = keys[index++]);
      if (descriptor !== undefined) createProperty(result, key, descriptor);
    }
    return result;
  }
});


/***/ }),

/***/ "dc15":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Market_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("232f");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Market_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Market_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Market_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "dca8":
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__("23e7");
var FREEZING = __webpack_require__("bb2f");
var fails = __webpack_require__("d039");
var isObject = __webpack_require__("861d");
var onFreeze = __webpack_require__("f183").onFreeze;

var nativeFreeze = Object.freeze;
var FAILS_ON_PRIMITIVES = fails(function () { nativeFreeze(1); });

// `Object.freeze` method
// https://tc39.github.io/ecma262/#sec-object.freeze
$({ target: 'Object', stat: true, forced: FAILS_ON_PRIMITIVES, sham: !FREEZING }, {
  freeze: function freeze(it) {
    return nativeFreeze && isObject(it) ? nativeFreeze(onFreeze(it)) : it;
  }
});


/***/ }),

/***/ "ddb0":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");
var DOMIterables = __webpack_require__("fdbc");
var ArrayIteratorMethods = __webpack_require__("e260");
var createNonEnumerableProperty = __webpack_require__("9112");
var wellKnownSymbol = __webpack_require__("b622");

var ITERATOR = wellKnownSymbol('iterator');
var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var ArrayValues = ArrayIteratorMethods.values;

for (var COLLECTION_NAME in DOMIterables) {
  var Collection = global[COLLECTION_NAME];
  var CollectionPrototype = Collection && Collection.prototype;
  if (CollectionPrototype) {
    // some Chrome versions have non-configurable methods on DOMTokenList
    if (CollectionPrototype[ITERATOR] !== ArrayValues) try {
      createNonEnumerableProperty(CollectionPrototype, ITERATOR, ArrayValues);
    } catch (error) {
      CollectionPrototype[ITERATOR] = ArrayValues;
    }
    if (!CollectionPrototype[TO_STRING_TAG]) {
      createNonEnumerableProperty(CollectionPrototype, TO_STRING_TAG, COLLECTION_NAME);
    }
    if (DOMIterables[COLLECTION_NAME]) for (var METHOD_NAME in ArrayIteratorMethods) {
      // some Chrome versions have non-configurable methods on DOMTokenList
      if (CollectionPrototype[METHOD_NAME] !== ArrayIteratorMethods[METHOD_NAME]) try {
        createNonEnumerableProperty(CollectionPrototype, METHOD_NAME, ArrayIteratorMethods[METHOD_NAME]);
      } catch (error) {
        CollectionPrototype[METHOD_NAME] = ArrayIteratorMethods[METHOD_NAME];
      }
    }
  }
}


/***/ }),

/***/ "df39":
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__("24fb");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".gear{background:hsla(0,0%,100%,.5)}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "df75":
/***/ (function(module, exports, __webpack_require__) {

var internalObjectKeys = __webpack_require__("ca84");
var enumBugKeys = __webpack_require__("7839");

// `Object.keys` method
// https://tc39.github.io/ecma262/#sec-object.keys
module.exports = Object.keys || function keys(O) {
  return internalObjectKeys(O, enumBugKeys);
};


/***/ }),

/***/ "e01a":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// `Symbol.prototype.description` getter
// https://tc39.github.io/ecma262/#sec-symbol.prototype.description

var $ = __webpack_require__("23e7");
var DESCRIPTORS = __webpack_require__("83ab");
var global = __webpack_require__("da84");
var has = __webpack_require__("5135");
var isObject = __webpack_require__("861d");
var defineProperty = __webpack_require__("9bf2").f;
var copyConstructorProperties = __webpack_require__("e893");

var NativeSymbol = global.Symbol;

if (DESCRIPTORS && typeof NativeSymbol == 'function' && (!('description' in NativeSymbol.prototype) ||
  // Safari 12 bug
  NativeSymbol().description !== undefined
)) {
  var EmptyStringDescriptionStore = {};
  // wrap Symbol constructor for correct work with undefined description
  var SymbolWrapper = function Symbol() {
    var description = arguments.length < 1 || arguments[0] === undefined ? undefined : String(arguments[0]);
    var result = this instanceof SymbolWrapper
      ? new NativeSymbol(description)
      // in Edge 13, String(Symbol(undefined)) === 'Symbol(undefined)'
      : description === undefined ? NativeSymbol() : NativeSymbol(description);
    if (description === '') EmptyStringDescriptionStore[result] = true;
    return result;
  };
  copyConstructorProperties(SymbolWrapper, NativeSymbol);
  var symbolPrototype = SymbolWrapper.prototype = NativeSymbol.prototype;
  symbolPrototype.constructor = SymbolWrapper;

  var symbolToString = symbolPrototype.toString;
  var native = String(NativeSymbol('test')) == 'Symbol(test)';
  var regexp = /^Symbol\((.*)\)[^)]+$/;
  defineProperty(symbolPrototype, 'description', {
    configurable: true,
    get: function description() {
      var symbol = isObject(this) ? this.valueOf() : this;
      var string = symbolToString.call(symbol);
      if (has(EmptyStringDescriptionStore, symbol)) return '';
      var desc = native ? string.slice(7, -1) : string.replace(regexp, '$1');
      return desc === '' ? undefined : desc;
    }
  });

  $({ global: true, forced: true }, {
    Symbol: SymbolWrapper
  });
}


/***/ }),

/***/ "e09a":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("3c64");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("499e").default
var update = add("029f9bde", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ "e163":
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__("5135");
var toObject = __webpack_require__("7b0b");
var sharedKey = __webpack_require__("f772");
var CORRECT_PROTOTYPE_GETTER = __webpack_require__("e177");

var IE_PROTO = sharedKey('IE_PROTO');
var ObjectPrototype = Object.prototype;

// `Object.getPrototypeOf` method
// https://tc39.github.io/ecma262/#sec-object.getprototypeof
module.exports = CORRECT_PROTOTYPE_GETTER ? Object.getPrototypeOf : function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectPrototype : null;
};


/***/ }),

/***/ "e177":
/***/ (function(module, exports, __webpack_require__) {

var fails = __webpack_require__("d039");

module.exports = !fails(function () {
  function F() { /* empty */ }
  F.prototype.constructor = null;
  return Object.getPrototypeOf(new F()) !== F.prototype;
});


/***/ }),

/***/ "e260":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var toIndexedObject = __webpack_require__("fc6a");
var addToUnscopables = __webpack_require__("44d2");
var Iterators = __webpack_require__("3f8c");
var InternalStateModule = __webpack_require__("69f3");
var defineIterator = __webpack_require__("7dd0");

var ARRAY_ITERATOR = 'Array Iterator';
var setInternalState = InternalStateModule.set;
var getInternalState = InternalStateModule.getterFor(ARRAY_ITERATOR);

// `Array.prototype.entries` method
// https://tc39.github.io/ecma262/#sec-array.prototype.entries
// `Array.prototype.keys` method
// https://tc39.github.io/ecma262/#sec-array.prototype.keys
// `Array.prototype.values` method
// https://tc39.github.io/ecma262/#sec-array.prototype.values
// `Array.prototype[@@iterator]` method
// https://tc39.github.io/ecma262/#sec-array.prototype-@@iterator
// `CreateArrayIterator` internal method
// https://tc39.github.io/ecma262/#sec-createarrayiterator
module.exports = defineIterator(Array, 'Array', function (iterated, kind) {
  setInternalState(this, {
    type: ARRAY_ITERATOR,
    target: toIndexedObject(iterated), // target
    index: 0,                          // next index
    kind: kind                         // kind
  });
// `%ArrayIteratorPrototype%.next` method
// https://tc39.github.io/ecma262/#sec-%arrayiteratorprototype%.next
}, function () {
  var state = getInternalState(this);
  var target = state.target;
  var kind = state.kind;
  var index = state.index++;
  if (!target || index >= target.length) {
    state.target = undefined;
    return { value: undefined, done: true };
  }
  if (kind == 'keys') return { value: index, done: false };
  if (kind == 'values') return { value: target[index], done: false };
  return { value: [index, target[index]], done: false };
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values%
// https://tc39.github.io/ecma262/#sec-createunmappedargumentsobject
// https://tc39.github.io/ecma262/#sec-createmappedargumentsobject
Iterators.Arguments = Iterators.Array;

// https://tc39.github.io/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),

/***/ "e2cc":
/***/ (function(module, exports, __webpack_require__) {

var redefine = __webpack_require__("6eeb");

module.exports = function (target, src, options) {
  for (var key in src) redefine(target, key, src[key], options);
  return target;
};


/***/ }),

/***/ "e439":
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__("23e7");
var fails = __webpack_require__("d039");
var toIndexedObject = __webpack_require__("fc6a");
var nativeGetOwnPropertyDescriptor = __webpack_require__("06cf").f;
var DESCRIPTORS = __webpack_require__("83ab");

var FAILS_ON_PRIMITIVES = fails(function () { nativeGetOwnPropertyDescriptor(1); });
var FORCED = !DESCRIPTORS || FAILS_ON_PRIMITIVES;

// `Object.getOwnPropertyDescriptor` method
// https://tc39.github.io/ecma262/#sec-object.getownpropertydescriptor
$({ target: 'Object', stat: true, forced: FORCED, sham: !DESCRIPTORS }, {
  getOwnPropertyDescriptor: function getOwnPropertyDescriptor(it, key) {
    return nativeGetOwnPropertyDescriptor(toIndexedObject(it), key);
  }
});


/***/ }),

/***/ "e538":
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__("b622");

exports.f = wellKnownSymbol;


/***/ }),

/***/ "e667":
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return { error: false, value: exec() };
  } catch (error) {
    return { error: true, value: error };
  }
};


/***/ }),

/***/ "e6cf":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var IS_PURE = __webpack_require__("c430");
var global = __webpack_require__("da84");
var getBuiltIn = __webpack_require__("d066");
var NativePromise = __webpack_require__("fea9");
var redefine = __webpack_require__("6eeb");
var redefineAll = __webpack_require__("e2cc");
var setToStringTag = __webpack_require__("d44e");
var setSpecies = __webpack_require__("2626");
var isObject = __webpack_require__("861d");
var aFunction = __webpack_require__("1c0b");
var anInstance = __webpack_require__("19aa");
var classof = __webpack_require__("c6b6");
var inspectSource = __webpack_require__("8925");
var iterate = __webpack_require__("2266");
var checkCorrectnessOfIteration = __webpack_require__("1c7e");
var speciesConstructor = __webpack_require__("4840");
var task = __webpack_require__("2cf4").set;
var microtask = __webpack_require__("b575");
var promiseResolve = __webpack_require__("cdf9");
var hostReportErrors = __webpack_require__("44de");
var newPromiseCapabilityModule = __webpack_require__("f069");
var perform = __webpack_require__("e667");
var InternalStateModule = __webpack_require__("69f3");
var isForced = __webpack_require__("94ca");
var wellKnownSymbol = __webpack_require__("b622");
var V8_VERSION = __webpack_require__("2d00");

var SPECIES = wellKnownSymbol('species');
var PROMISE = 'Promise';
var getInternalState = InternalStateModule.get;
var setInternalState = InternalStateModule.set;
var getInternalPromiseState = InternalStateModule.getterFor(PROMISE);
var PromiseConstructor = NativePromise;
var TypeError = global.TypeError;
var document = global.document;
var process = global.process;
var $fetch = getBuiltIn('fetch');
var newPromiseCapability = newPromiseCapabilityModule.f;
var newGenericPromiseCapability = newPromiseCapability;
var IS_NODE = classof(process) == 'process';
var DISPATCH_EVENT = !!(document && document.createEvent && global.dispatchEvent);
var UNHANDLED_REJECTION = 'unhandledrejection';
var REJECTION_HANDLED = 'rejectionhandled';
var PENDING = 0;
var FULFILLED = 1;
var REJECTED = 2;
var HANDLED = 1;
var UNHANDLED = 2;
var Internal, OwnPromiseCapability, PromiseWrapper, nativeThen;

var FORCED = isForced(PROMISE, function () {
  var GLOBAL_CORE_JS_PROMISE = inspectSource(PromiseConstructor) !== String(PromiseConstructor);
  if (!GLOBAL_CORE_JS_PROMISE) {
    // V8 6.6 (Node 10 and Chrome 66) have a bug with resolving custom thenables
    // https://bugs.chromium.org/p/chromium/issues/detail?id=830565
    // We can't detect it synchronously, so just check versions
    if (V8_VERSION === 66) return true;
    // Unhandled rejections tracking support, NodeJS Promise without it fails @@species test
    if (!IS_NODE && typeof PromiseRejectionEvent != 'function') return true;
  }
  // We need Promise#finally in the pure version for preventing prototype pollution
  if (IS_PURE && !PromiseConstructor.prototype['finally']) return true;
  // We can't use @@species feature detection in V8 since it causes
  // deoptimization and performance degradation
  // https://github.com/zloirock/core-js/issues/679
  if (V8_VERSION >= 51 && /native code/.test(PromiseConstructor)) return false;
  // Detect correctness of subclassing with @@species support
  var promise = PromiseConstructor.resolve(1);
  var FakePromise = function (exec) {
    exec(function () { /* empty */ }, function () { /* empty */ });
  };
  var constructor = promise.constructor = {};
  constructor[SPECIES] = FakePromise;
  return !(promise.then(function () { /* empty */ }) instanceof FakePromise);
});

var INCORRECT_ITERATION = FORCED || !checkCorrectnessOfIteration(function (iterable) {
  PromiseConstructor.all(iterable)['catch'](function () { /* empty */ });
});

// helpers
var isThenable = function (it) {
  var then;
  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
};

var notify = function (promise, state, isReject) {
  if (state.notified) return;
  state.notified = true;
  var chain = state.reactions;
  microtask(function () {
    var value = state.value;
    var ok = state.state == FULFILLED;
    var index = 0;
    // variable length - can't use forEach
    while (chain.length > index) {
      var reaction = chain[index++];
      var handler = ok ? reaction.ok : reaction.fail;
      var resolve = reaction.resolve;
      var reject = reaction.reject;
      var domain = reaction.domain;
      var result, then, exited;
      try {
        if (handler) {
          if (!ok) {
            if (state.rejection === UNHANDLED) onHandleUnhandled(promise, state);
            state.rejection = HANDLED;
          }
          if (handler === true) result = value;
          else {
            if (domain) domain.enter();
            result = handler(value); // can throw
            if (domain) {
              domain.exit();
              exited = true;
            }
          }
          if (result === reaction.promise) {
            reject(TypeError('Promise-chain cycle'));
          } else if (then = isThenable(result)) {
            then.call(result, resolve, reject);
          } else resolve(result);
        } else reject(value);
      } catch (error) {
        if (domain && !exited) domain.exit();
        reject(error);
      }
    }
    state.reactions = [];
    state.notified = false;
    if (isReject && !state.rejection) onUnhandled(promise, state);
  });
};

var dispatchEvent = function (name, promise, reason) {
  var event, handler;
  if (DISPATCH_EVENT) {
    event = document.createEvent('Event');
    event.promise = promise;
    event.reason = reason;
    event.initEvent(name, false, true);
    global.dispatchEvent(event);
  } else event = { promise: promise, reason: reason };
  if (handler = global['on' + name]) handler(event);
  else if (name === UNHANDLED_REJECTION) hostReportErrors('Unhandled promise rejection', reason);
};

var onUnhandled = function (promise, state) {
  task.call(global, function () {
    var value = state.value;
    var IS_UNHANDLED = isUnhandled(state);
    var result;
    if (IS_UNHANDLED) {
      result = perform(function () {
        if (IS_NODE) {
          process.emit('unhandledRejection', value, promise);
        } else dispatchEvent(UNHANDLED_REJECTION, promise, value);
      });
      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
      state.rejection = IS_NODE || isUnhandled(state) ? UNHANDLED : HANDLED;
      if (result.error) throw result.value;
    }
  });
};

var isUnhandled = function (state) {
  return state.rejection !== HANDLED && !state.parent;
};

var onHandleUnhandled = function (promise, state) {
  task.call(global, function () {
    if (IS_NODE) {
      process.emit('rejectionHandled', promise);
    } else dispatchEvent(REJECTION_HANDLED, promise, state.value);
  });
};

var bind = function (fn, promise, state, unwrap) {
  return function (value) {
    fn(promise, state, value, unwrap);
  };
};

var internalReject = function (promise, state, value, unwrap) {
  if (state.done) return;
  state.done = true;
  if (unwrap) state = unwrap;
  state.value = value;
  state.state = REJECTED;
  notify(promise, state, true);
};

var internalResolve = function (promise, state, value, unwrap) {
  if (state.done) return;
  state.done = true;
  if (unwrap) state = unwrap;
  try {
    if (promise === value) throw TypeError("Promise can't be resolved itself");
    var then = isThenable(value);
    if (then) {
      microtask(function () {
        var wrapper = { done: false };
        try {
          then.call(value,
            bind(internalResolve, promise, wrapper, state),
            bind(internalReject, promise, wrapper, state)
          );
        } catch (error) {
          internalReject(promise, wrapper, error, state);
        }
      });
    } else {
      state.value = value;
      state.state = FULFILLED;
      notify(promise, state, false);
    }
  } catch (error) {
    internalReject(promise, { done: false }, error, state);
  }
};

// constructor polyfill
if (FORCED) {
  // 25.4.3.1 Promise(executor)
  PromiseConstructor = function Promise(executor) {
    anInstance(this, PromiseConstructor, PROMISE);
    aFunction(executor);
    Internal.call(this);
    var state = getInternalState(this);
    try {
      executor(bind(internalResolve, this, state), bind(internalReject, this, state));
    } catch (error) {
      internalReject(this, state, error);
    }
  };
  // eslint-disable-next-line no-unused-vars
  Internal = function Promise(executor) {
    setInternalState(this, {
      type: PROMISE,
      done: false,
      notified: false,
      parent: false,
      reactions: [],
      rejection: false,
      state: PENDING,
      value: undefined
    });
  };
  Internal.prototype = redefineAll(PromiseConstructor.prototype, {
    // `Promise.prototype.then` method
    // https://tc39.github.io/ecma262/#sec-promise.prototype.then
    then: function then(onFulfilled, onRejected) {
      var state = getInternalPromiseState(this);
      var reaction = newPromiseCapability(speciesConstructor(this, PromiseConstructor));
      reaction.ok = typeof onFulfilled == 'function' ? onFulfilled : true;
      reaction.fail = typeof onRejected == 'function' && onRejected;
      reaction.domain = IS_NODE ? process.domain : undefined;
      state.parent = true;
      state.reactions.push(reaction);
      if (state.state != PENDING) notify(this, state, false);
      return reaction.promise;
    },
    // `Promise.prototype.catch` method
    // https://tc39.github.io/ecma262/#sec-promise.prototype.catch
    'catch': function (onRejected) {
      return this.then(undefined, onRejected);
    }
  });
  OwnPromiseCapability = function () {
    var promise = new Internal();
    var state = getInternalState(promise);
    this.promise = promise;
    this.resolve = bind(internalResolve, promise, state);
    this.reject = bind(internalReject, promise, state);
  };
  newPromiseCapabilityModule.f = newPromiseCapability = function (C) {
    return C === PromiseConstructor || C === PromiseWrapper
      ? new OwnPromiseCapability(C)
      : newGenericPromiseCapability(C);
  };

  if (!IS_PURE && typeof NativePromise == 'function') {
    nativeThen = NativePromise.prototype.then;

    // wrap native Promise#then for native async functions
    redefine(NativePromise.prototype, 'then', function then(onFulfilled, onRejected) {
      var that = this;
      return new PromiseConstructor(function (resolve, reject) {
        nativeThen.call(that, resolve, reject);
      }).then(onFulfilled, onRejected);
    // https://github.com/zloirock/core-js/issues/640
    }, { unsafe: true });

    // wrap fetch result
    if (typeof $fetch == 'function') $({ global: true, enumerable: true, forced: true }, {
      // eslint-disable-next-line no-unused-vars
      fetch: function fetch(input /* , init */) {
        return promiseResolve(PromiseConstructor, $fetch.apply(global, arguments));
      }
    });
  }
}

$({ global: true, wrap: true, forced: FORCED }, {
  Promise: PromiseConstructor
});

setToStringTag(PromiseConstructor, PROMISE, false, true);
setSpecies(PROMISE);

PromiseWrapper = getBuiltIn(PROMISE);

// statics
$({ target: PROMISE, stat: true, forced: FORCED }, {
  // `Promise.reject` method
  // https://tc39.github.io/ecma262/#sec-promise.reject
  reject: function reject(r) {
    var capability = newPromiseCapability(this);
    capability.reject.call(undefined, r);
    return capability.promise;
  }
});

$({ target: PROMISE, stat: true, forced: IS_PURE || FORCED }, {
  // `Promise.resolve` method
  // https://tc39.github.io/ecma262/#sec-promise.resolve
  resolve: function resolve(x) {
    return promiseResolve(IS_PURE && this === PromiseWrapper ? PromiseConstructor : this, x);
  }
});

$({ target: PROMISE, stat: true, forced: INCORRECT_ITERATION }, {
  // `Promise.all` method
  // https://tc39.github.io/ecma262/#sec-promise.all
  all: function all(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var resolve = capability.resolve;
    var reject = capability.reject;
    var result = perform(function () {
      var $promiseResolve = aFunction(C.resolve);
      var values = [];
      var counter = 0;
      var remaining = 1;
      iterate(iterable, function (promise) {
        var index = counter++;
        var alreadyCalled = false;
        values.push(undefined);
        remaining++;
        $promiseResolve.call(C, promise).then(function (value) {
          if (alreadyCalled) return;
          alreadyCalled = true;
          values[index] = value;
          --remaining || resolve(values);
        }, reject);
      });
      --remaining || resolve(values);
    });
    if (result.error) reject(result.value);
    return capability.promise;
  },
  // `Promise.race` method
  // https://tc39.github.io/ecma262/#sec-promise.race
  race: function race(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var reject = capability.reject;
    var result = perform(function () {
      var $promiseResolve = aFunction(C.resolve);
      iterate(iterable, function (promise) {
        $promiseResolve.call(C, promise).then(capability.resolve, reject);
      });
    });
    if (result.error) reject(result.value);
    return capability.promise;
  }
});


/***/ }),

/***/ "e893":
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__("5135");
var ownKeys = __webpack_require__("56ef");
var getOwnPropertyDescriptorModule = __webpack_require__("06cf");
var definePropertyModule = __webpack_require__("9bf2");

module.exports = function (target, source) {
  var keys = ownKeys(source);
  var defineProperty = definePropertyModule.f;
  var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    if (!has(target, key)) defineProperty(target, key, getOwnPropertyDescriptor(source, key));
  }
};


/***/ }),

/***/ "e8b5":
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__("c6b6");

// `IsArray` abstract operation
// https://tc39.github.io/ecma262/#sec-isarray
module.exports = Array.isArray || function isArray(arg) {
  return classof(arg) == 'Array';
};


/***/ }),

/***/ "e917":
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__("24fb");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".bag{background:hsla(0,0%,100%,.5)}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "e95a":
/***/ (function(module, exports, __webpack_require__) {

var wellKnownSymbol = __webpack_require__("b622");
var Iterators = __webpack_require__("3f8c");

var ITERATOR = wellKnownSymbol('iterator');
var ArrayPrototype = Array.prototype;

// check on default Array iterator
module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayPrototype[ITERATOR] === it);
};


/***/ }),

/***/ "f069":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var aFunction = __webpack_require__("1c0b");

var PromiseCapability = function (C) {
  var resolve, reject;
  this.promise = new C(function ($$resolve, $$reject) {
    if (resolve !== undefined || reject !== undefined) throw TypeError('Bad Promise constructor');
    resolve = $$resolve;
    reject = $$reject;
  });
  this.resolve = aFunction(resolve);
  this.reject = aFunction(reject);
};

// 25.4.1.5 NewPromiseCapability(C)
module.exports.f = function (C) {
  return new PromiseCapability(C);
};


/***/ }),

/***/ "f183":
/***/ (function(module, exports, __webpack_require__) {

var hiddenKeys = __webpack_require__("d012");
var isObject = __webpack_require__("861d");
var has = __webpack_require__("5135");
var defineProperty = __webpack_require__("9bf2").f;
var uid = __webpack_require__("90e3");
var FREEZING = __webpack_require__("bb2f");

var METADATA = uid('meta');
var id = 0;

var isExtensible = Object.isExtensible || function () {
  return true;
};

var setMetadata = function (it) {
  defineProperty(it, METADATA, { value: {
    objectID: 'O' + ++id, // object ID
    weakData: {}          // weak collections IDs
  } });
};

var fastKey = function (it, create) {
  // return a primitive with prefix
  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!has(it, METADATA)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F';
    // not necessary to add metadata
    if (!create) return 'E';
    // add missing metadata
    setMetadata(it);
  // return object ID
  } return it[METADATA].objectID;
};

var getWeakData = function (it, create) {
  if (!has(it, METADATA)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true;
    // not necessary to add metadata
    if (!create) return false;
    // add missing metadata
    setMetadata(it);
  // return the store of weak collections IDs
  } return it[METADATA].weakData;
};

// add metadata on freeze-family methods calling
var onFreeze = function (it) {
  if (FREEZING && meta.REQUIRED && isExtensible(it) && !has(it, METADATA)) setMetadata(it);
  return it;
};

var meta = module.exports = {
  REQUIRED: false,
  fastKey: fastKey,
  getWeakData: getWeakData,
  onFreeze: onFreeze
};

hiddenKeys[METADATA] = true;


/***/ }),

/***/ "f5df":
/***/ (function(module, exports, __webpack_require__) {

var TO_STRING_TAG_SUPPORT = __webpack_require__("00ee");
var classofRaw = __webpack_require__("c6b6");
var wellKnownSymbol = __webpack_require__("b622");

var TO_STRING_TAG = wellKnownSymbol('toStringTag');
// ES3 wrong here
var CORRECT_ARGUMENTS = classofRaw(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (error) { /* empty */ }
};

// getting tag from ES6+ `Object.prototype.toString`
module.exports = TO_STRING_TAG_SUPPORT ? classofRaw : function (it) {
  var O, tag, result;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (tag = tryGet(O = Object(it), TO_STRING_TAG)) == 'string' ? tag
    // builtinTag case
    : CORRECT_ARGUMENTS ? classofRaw(O)
    // ES3 arguments fallback
    : (result = classofRaw(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : result;
};


/***/ }),

/***/ "f772":
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__("5692");
var uid = __webpack_require__("90e3");

var keys = shared('keys');

module.exports = function (key) {
  return keys[key] || (keys[key] = uid(key));
};


/***/ }),

/***/ "f7fe":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("6a7f");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("499e").default
var update = add("1e775f24", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ "fb15":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var currentScript = window.document.currentScript
  if (true) {
    var getCurrentScript = __webpack_require__("8875")
    currentScript = getCurrentScript()

    // for backward compatibility, because previously we directly included the polyfill
    if (!('currentScript' in document)) {
      Object.defineProperty(document, 'currentScript', { get: getCurrentScript })
    }
  }

  var src = currentScript && currentScript.src.match(/(.+\/)[^/]+\.js(\?.*)?$/)
  if (src) {
    __webpack_require__.p = src[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// CONCATENATED MODULE: ./node_modules/register-service-worker/index.js
// Register a service worker to serve assets from local cache.

// This lets the app load faster on subsequent visits in production, and gives
// it offline capabilities. However, it also means that developers (and users)
// will only see deployed updates on the "N+1" visit to a page, since previously
// cached resources are updated in the background.

var isLocalhost = function () { return Boolean(
  window.location.hostname === 'localhost' ||
    // [::1] is the IPv6 localhost address.
    window.location.hostname === '[::1]' ||
    // 127.0.0.1/8 is considered localhost for IPv4.
    window.location.hostname.match(
      /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
    )
); }

var waitWindowLoad
// https://github.com/yyx990803/register-service-worker/pull/33#discussion_r394181861
if (typeof window !== 'undefined') {
  // Typically, a browser that supports `serviceWorker` should also have supported
  // `Promise`. But as this package can be used in environments without service
  // worker support (in that case it would do nothing), there's a chance that
  // `Promise` does not exist. So we must check for its existence first.
  if (typeof Promise !== 'undefined') {
    waitWindowLoad = new Promise(function (resolve) { return window.addEventListener('load', resolve); })
  } else {
    waitWindowLoad = { then: function (cb) { return window.addEventListener('load', cb); } }
  }
}

function register (swUrl, hooks) {
  if ( hooks === void 0 ) hooks = {};

  var registrationOptions = hooks.registrationOptions; if ( registrationOptions === void 0 ) registrationOptions = {};
  delete hooks.registrationOptions

  var emit = function (hook) {
    var args = [], len = arguments.length - 1;
    while ( len-- > 0 ) args[ len ] = arguments[ len + 1 ];

    if (hooks && hooks[hook]) {
      hooks[hook].apply(hooks, args)
    }
  }

  if ('serviceWorker' in navigator) {
    waitWindowLoad.then(function () {
      if (isLocalhost()) {
        // This is running on localhost. Lets check if a service worker still exists or not.
        checkValidServiceWorker(swUrl, emit, registrationOptions)
        navigator.serviceWorker.ready.then(function (registration) {
          emit('ready', registration)
        })
      } else {
        // Is not local host. Just register service worker
        registerValidSW(swUrl, emit, registrationOptions)
        navigator.serviceWorker.ready.then(function (registration) {
          emit('ready', registration)
        })
      }
    })
  }
}

function handleError (emit, error) {
  if (!navigator.onLine) {
    emit('offline')
  }
  emit('error', error)
}

function registerValidSW (swUrl, emit, registrationOptions) {
  navigator.serviceWorker
    .register(swUrl, registrationOptions)
    .then(function (registration) {
      emit('registered', registration)
      if (registration.waiting) {
        emit('updated', registration)
        return
      }
      registration.onupdatefound = function () {
        emit('updatefound', registration)
        var installingWorker = registration.installing
        installingWorker.onstatechange = function () {
          if (installingWorker.state === 'installed') {
            if (navigator.serviceWorker.controller) {
              // At this point, the old content will have been purged and
              // the fresh content will have been added to the cache.
              // It's the perfect time to display a "New content is
              // available; please refresh." message in your web app.
              emit('updated', registration)
            } else {
              // At this point, everything has been precached.
              // It's the perfect time to display a
              // "Content is cached for offline use." message.
              emit('cached', registration)
            }
          }
        }
      }
    })
    .catch(function (error) { return handleError(emit, error); })
}

function checkValidServiceWorker (swUrl, emit, registrationOptions) {
  // Check if the service worker can be found.
  fetch(swUrl)
    .then(function (response) {
      // Ensure service worker exists, and that we really are getting a JS file.
      if (response.status === 404) {
        // No service worker found.
        emit('error', new Error(("Service worker not found at " + swUrl)))
        unregister()
      } else if (response.headers.get('content-type').indexOf('javascript') === -1) {
        emit('error', new Error(
          "Expected " + swUrl + " to have javascript content-type, " +
          "but received " + (response.headers.get('content-type'))))
        unregister()
      } else {
        // Service worker found. Proceed as normal.
        registerValidSW(swUrl, emit, registrationOptions)
      }
    })
    .catch(function (error) { return handleError(emit, error); })
}

function unregister () {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.ready.then(function (registration) {
      registration.unregister()
    })
  }
}

// CONCATENATED MODULE: ./src/registerServiceWorker.js
/* eslint-disable no-console */


if (true) {
  register("".concat("/", "service-worker.js"), {
    ready: function ready() {
      console.log('App is being served from cache by a service worker.\n' + 'For more details, visit https://goo.gl/AFskqB');
    },
    registered: function registered() {
      console.log('Service worker has been registered.');
    },
    cached: function cached() {
      console.log('Content has been cached for offline use.');
    },
    updatefound: function updatefound() {
      console.log('New content is downloading.');
    },
    updated: function updated() {
      console.log('New content is available; please refresh.');
    },
    offline: function offline() {
      console.log('No internet connection found. App is running in offline mode.');
    },
    error: function error(_error) {
      console.error('Error during service worker registration:', _error);
    }
  });
}
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"e2d3ca34-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/App.vue?vue&type=template&id=469ee6c9&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"dungeon-crawl"}},[(_vm.screen === 'start')?_c('StartScreen',{on:{"start":function($event){_vm.screen = 'game'}}}):_vm._e(),(_vm.screen === 'setup')?_c('SetupScreen'):_vm._e(),(_vm.screen === 'game')?_c('GameScreen',{on:{"restart":function($event){_vm.screen = 'start'}}}):_vm._e()],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/App.vue?vue&type=template&id=469ee6c9&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.filter.js
var es_array_filter = __webpack_require__("4de4");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.reduce.js
var es_array_reduce = __webpack_require__("13d5");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.function.name.js
var es_function_name = __webpack_require__("b0c0");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.assign.js
var es_object_assign = __webpack_require__("cca6");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.symbol.js
var es_symbol = __webpack_require__("a4d3");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.for-each.js
var es_array_for_each = __webpack_require__("4160");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.get-own-property-descriptor.js
var es_object_get_own_property_descriptor = __webpack_require__("e439");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.get-own-property-descriptors.js
var es_object_get_own_property_descriptors = __webpack_require__("dbb4");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.keys.js
var es_object_keys = __webpack_require__("b64b");

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-collections.for-each.js
var web_dom_collections_for_each = __webpack_require__("159b");

// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/defineProperty.js
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js









function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.to-string.js
var es_object_to_string = __webpack_require__("d3b7");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.promise.js
var es_promise = __webpack_require__("e6cf");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.freeze.js
var es_object_freeze = __webpack_require__("dca8");

// CONCATENATED MODULE: ./src/lib/constants.js


var TILE_BORDER = 0.08;
var TOWN_EVERY = 5;
var MONSTER_LIST = Object.freeze([//group '0' common
[{
  type: 'elk',
  strength: 3,
  speed: 5,
  tenacity: 1,
  intel: 1,
  gold: 0,
  tools: false,
  food: 50
}, {
  type: 'rat',
  strength: 1,
  speed: 5,
  tenacity: 1,
  intel: 1,
  gold: 0,
  tools: false,
  food: 10
}, {
  type: 'spider',
  strength: 1,
  speed: 2,
  tenacity: 1,
  intel: 1,
  gold: 0,
  tools: false,
  food: 5
}, {
  type: 'zombie',
  strength: 2,
  speed: 1,
  tenacity: 4,
  intel: 0,
  gold: 1,
  tools: true,
  food: 0
}, {
  type: 'bandit',
  strength: 2,
  speed: 2,
  tenacity: 1,
  intel: 5,
  gold: 10,
  tools: true,
  food: 0
}, {
  type: 'wolf',
  strength: 2,
  speed: 4,
  tenacity: 3,
  intel: 4,
  gold: 0,
  tools: false,
  food: 20
}, {
  type: 'goblin',
  strength: 3,
  speed: 3,
  tenacity: 1,
  intel: 2,
  gold: 3,
  tools: true,
  food: 0
}], // group '1' main stays
[{
  type: 'orc',
  strength: 4,
  speed: 3,
  tenacity: 3,
  intel: 2,
  gold: 3,
  tools: true,
  food: 0
}, {
  type: 'troll',
  strength: 5,
  speed: 1,
  tenacity: 5,
  intel: 3,
  gold: 5,
  tools: true,
  food: 0
}, {
  type: 'ogre',
  strength: 6,
  speed: 2,
  tenacity: 4,
  intel: 2,
  gold: 6,
  tools: true,
  food: 0
}, {
  type: 'bear',
  strength: 6,
  speed: 4,
  tenacity: 3,
  intel: 3,
  gold: 0,
  tools: false,
  food: 100
}], // group '2' rare
[{
  type: 'werewolf',
  strength: 4,
  speed: 4,
  tenacity: 7,
  intel: 3,
  gold: 0,
  tools: false,
  food: 0
}, {
  type: 'griffin',
  strength: 5,
  speed: 4,
  tenacity: 2,
  intel: 5,
  gold: 20,
  tools: false,
  food: 10
}, {
  type: 'minotaur',
  strength: 5,
  speed: 3,
  tenacity: 5,
  intel: 5,
  gold: 0,
  tools: true,
  food: 10
}, {
  type: 'dark knight',
  strength: 4,
  speed: 3,
  tenacity: 4,
  intel: 7,
  gold: 10,
  tools: true,
  food: 0
}], // group '3' bosses
[{
  type: 'cyclopse',
  strength: 8,
  speed: 2,
  tenacity: 7,
  intel: 3,
  gold: 50,
  tools: true,
  food: 0
}, {
  type: 'barlog',
  strength: 9,
  speed: 2,
  tenacity: 3,
  intel: 5,
  gold: 100,
  tools: true,
  food: 0
}, {
  type: 'dragon',
  strength: 10,
  speed: 5,
  tenacity: 10,
  intel: 10,
  gold: 200,
  tools: false,
  food: 0
}]]);
var WEAPON_LIST = Object.freeze([{
  type: 'weapon',
  name: 'fist',
  size: 0,
  attack: 0,
  defense: 0,
  rarity: 1,
  speed: 7,
  sort: 1
}, {
  type: 'weapon',
  name: 'club',
  size: 2,
  attack: 2,
  defense: 2,
  rarity: 2,
  speed: 2,
  sort: 1
}, {
  type: 'weapon',
  name: 'dagger',
  size: 1,
  attack: 3,
  defense: 1,
  rarity: 3,
  speed: 5,
  sort: 1
}, {
  type: 'weapon',
  name: 'hatchet',
  size: 1,
  attack: 3,
  defense: 3,
  rarity: 3,
  speed: 5,
  sort: 1
}, {
  type: 'weapon',
  name: 'mace',
  size: 5,
  attack: 5,
  defense: 1,
  rarity: 4,
  speed: 2,
  sort: 1
}, {
  type: 'weapon',
  name: 'broad sword',
  size: 5,
  attack: 7,
  defense: 5,
  rarity: 5,
  speed: 2,
  sort: 1
}, {
  type: 'weapon',
  name: 'battle axe',
  size: 5,
  attack: 8,
  defense: 5,
  rarity: 6,
  speed: 1,
  sort: 1
}, {
  type: 'weapon',
  name: 'haladie knife',
  size: 4,
  attack: 5,
  defense: 5,
  rarity: 7,
  speed: 5,
  sort: 1
}, {
  type: 'weapon',
  name: 'numchucks',
  size: 1,
  attack: 4,
  defense: 5,
  rarity: 8,
  speed: 10,
  sort: 1
}, {
  type: 'weapon',
  name: 'katana',
  size: 4,
  attack: 7,
  defense: 4,
  rarity: 9,
  speed: 4,
  sort: 1
}, {
  type: 'weapon',
  name: 'claymore',
  size: 5,
  attack: 10,
  defense: 5,
  rarity: 10,
  speed: 1,
  sort: 1
}]);
var MATERIAL_LIST = Object.freeze([{
  material: 'leather',
  defense: 1,
  rarity: 0
}, {
  material: 'brass',
  defense: 2,
  rarity: 1
}, {
  material: 'bronze',
  defense: 3,
  rarity: 2
}, {
  material: 'iron',
  defense: 4,
  rarity: 3
}, {
  material: 'steel',
  defense: 5,
  rarity: 4
}, {
  material: 'golden',
  defense: 2,
  rarity: 5
}, {
  material: 'mithril',
  defense: 6,
  rarity: 6
}]);
var GEAR_LIST = Object.freeze([[// head
{
  type: 'head',
  name: 'cap',
  defense: 1,
  size: 1,
  rarity: 1,
  sort: 2
}, {
  type: 'head',
  name: 'helmet',
  defense: 2,
  size: 3,
  rarity: 5,
  sort: 2
}, {
  type: 'head',
  name: 'chainmail coif',
  defense: 4,
  size: 2,
  rarity: 10,
  sort: 2
}], [// torso
{
  type: 'torso',
  name: 'tunic',
  defense: 1,
  size: 1,
  rarity: 1,
  sort: 3
}, {
  type: 'torso',
  name: 'breastplate',
  defense: 5,
  size: 4,
  speed: -1,
  rarity: 5,
  sort: 3
}, {
  type: 'torso',
  name: 'chainmail tunic',
  defense: 4,
  size: 2,
  rarity: 10,
  sort: 3
}], [//hands/arms
{
  type: 'arms',
  name: 'gloves',
  defense: 1,
  size: 1,
  rarity: 1,
  sort: 4
}, {
  type: 'arms',
  name: 'gauntlet',
  defense: 5,
  size: 1,
  rarity: 5,
  sort: 4
}, {
  type: 'arms',
  name: 'spiked gauntlet',
  defense: 5,
  attack: 2,
  size: 1,
  rarity: 10,
  sort: 4
}], [// feet/shoes
{
  type: 'feet',
  name: 'sandals',
  defense: 1,
  size: 1,
  speed: 2,
  rarity: 1,
  sort: 5
}, {
  type: 'feet',
  name: 'boots',
  defense: 5,
  size: 2,
  rarity: 5,
  sort: 5
}, {
  type: 'feet',
  name: "Mercury's winged sandals",
  defense: 1,
  size: 2,
  speed: 5,
  rarity: 10,
  sort: 5
}], [// rings of power
{
  type: 'ring',
  name: 'invisibility',
  // invisible to enemies?
  strength: 0,
  speed: 0,
  tenacity: 0,
  intel: 0,
  defense: 0,
  size: 0,
  rarity: 500,
  sort: 6
}, {
  type: 'ring',
  name: 'might',
  strength: 10,
  speed: 0,
  tenacity: -5,
  intel: 0,
  defense: 0,
  size: 0,
  rarity: 500,
  sort: 6
}, {
  type: 'ring',
  name: 'protection',
  strength: 0,
  speed: 0,
  tenacity: 0,
  intel: 0,
  defense: 10,
  size: 0,
  rarity: 500,
  sort: 6
}, {
  type: 'ring',
  name: 'wisdom',
  strength: 0,
  speed: 0,
  tenacity: 0,
  intel: 10,
  defense: 0,
  size: 0,
  rarity: 500,
  sort: 6
}, {
  type: 'ring',
  name: 'swiftness',
  strength: 0,
  speed: 8,
  tenacity: 2,
  intel: 0,
  defense: 0,
  size: 0,
  rarity: 500,
  sort: 6
}, {
  type: 'ring',
  name: 'agility',
  strength: 0,
  speed: 5,
  tenacity: 0,
  intel: 5,
  defense: 0,
  size: 0,
  rarity: 500,
  sort: 6
}]]); // Each value is a relative location (row, col) from character whos vision is being calculated
// start = wall or vision obstructing object
// full = vision fully obstructed
// half = vision halfway obstructed. if two or more halves overlap, vision is fully obstructed

var SHADOW_LIST = Object.freeze([{
  start: {
    row: 0,
    col: 1
  },
  full: [{
    row: 0,
    col: 2
  }, {
    row: 0,
    col: 3
  }, {
    row: 0,
    col: 4
  }, {
    row: 0,
    col: 5
  }, {
    row: -1,
    col: 4
  }, {
    row: -1,
    col: 5
  }, {
    row: 1,
    col: 4
  }, {
    row: 1,
    col: 5
  }],
  half: [{
    row: 1,
    col: 2
  }, {
    row: 1,
    col: 3
  }, {
    row: 2,
    col: 3
  }, {
    row: 2,
    col: 4
  }, {
    row: 2,
    col: 5
  }, {
    row: 3,
    col: 5
  }, {
    row: -1,
    col: 2
  }, {
    row: -1,
    col: 3
  }, {
    row: -2,
    col: 3
  }, {
    row: -2,
    col: 4
  }, {
    row: -2,
    col: 5
  }, {
    row: -3,
    col: 5
  }]
}, {
  start: {
    row: 1,
    col: 1
  },
  full: [{
    row: 2,
    col: 2
  }, {
    row: 3,
    col: 3
  }, {
    row: 4,
    col: 4
  }, {
    row: 4,
    col: 3
  }, {
    row: 3,
    col: 4
  }],
  half: [{
    row: 1,
    col: 2
  }, {
    row: 2,
    col: 1
  }, {
    row: 1,
    col: 3
  }, {
    row: 3,
    col: 1
  }, {
    row: 2,
    col: 3
  }, {
    row: 3,
    col: 2
  }, {
    row: 4,
    col: 2
  }, {
    row: 2,
    col: 4
  }, {
    row: 5,
    col: 2
  }, {
    row: 2,
    col: 5
  }, {
    row: 5,
    col: 3
  }, {
    row: 3,
    col: 5
  }]
}, {
  start: {
    row: 0,
    col: 2
  },
  full: [{
    row: 0,
    col: 3
  }, {
    row: 0,
    col: 4
  }, {
    row: 0,
    col: 5
  }, {
    row: -1,
    col: 5
  }, {
    row: 1,
    col: 5
  }],
  half: [{
    row: 1,
    col: 2
  }, {
    row: 1,
    col: 3
  }, {
    row: 1,
    col: 4
  }, {
    row: 2,
    col: 5
  }, {
    row: -1,
    col: 2
  }, {
    row: -1,
    col: 3
  }, {
    row: -1,
    col: 4
  }, {
    row: -2,
    col: 5
  }]
}, {
  start: {
    row: 2,
    col: 2
  },
  full: [{
    row: 3,
    col: 3
  }, {
    row: 4,
    col: 4
  }],
  half: [{
    row: 2,
    col: 3
  }, {
    row: 3,
    col: 2
  }, {
    row: 2,
    col: 4
  }, {
    row: 4,
    col: 2
  }, {
    row: 3,
    col: 4
  }, {
    row: 4,
    col: 3
  }, {
    row: 3,
    col: 5
  }, {
    row: 5,
    col: 3
  }, {
    row: 2,
    col: 5
  }, {
    row: 5,
    col: 2
  }]
}, {
  start: {
    row: 1,
    col: 2
  },
  full: [{
    row: 1,
    col: 3
  }, {
    row: 2,
    col: 3
  }, {
    row: 2,
    col: 4
  }, {
    row: 2,
    col: 5
  }, {
    row: 3,
    col: 4
  }, {
    row: 3,
    col: 5
  }],
  half: [{
    row: 1,
    col: 4
  }, {
    row: 1,
    col: 5
  }, {
    row: 2,
    col: 2
  }, {
    row: 3,
    col: 3
  }, {
    row: 4,
    col: 4
  }]
}, {
  start: {
    row: 0,
    col: 3
  },
  full: [{
    row: 0,
    col: 4
  }, {
    row: 0,
    col: 5
  }],
  half: [{
    row: 1,
    col: 3
  }, {
    row: 1,
    col: 4
  }, {
    row: 1,
    col: 5
  }, {
    row: -1,
    col: 3
  }, {
    row: -1,
    col: 4
  }, {
    row: -1,
    col: 5
  }]
}, {
  start: {
    row: 3,
    col: 3
  },
  full: [{
    row: 4,
    col: 4
  }],
  half: [{
    row: 3,
    col: 4
  }, {
    row: 3,
    col: 5
  }, {
    row: 4,
    col: 3
  }, {
    row: 5,
    col: 3
  }]
}, {
  start: {
    row: 2,
    col: 3
  },
  full: [{
    row: 3,
    col: 4
  }, {
    row: 3,
    col: 5
  }],
  half: [{
    row: 3,
    col: 3
  }, {
    row: 4,
    col: 4
  }, {
    row: 2,
    col: 4
  }, {
    row: 2,
    col: 5
  }]
}, {
  start: {
    row: 1,
    col: 3
  },
  full: [{
    row: 2,
    col: 4
  }, {
    row: 2,
    col: 5
  }, {
    row: 3,
    col: 5
  }],
  half: [{
    row: 2,
    col: 3
  }, {
    row: 3,
    col: 4
  }, {
    row: 1,
    col: 4
  }, {
    row: 1,
    col: 5
  }]
}, {
  start: {
    row: 0,
    col: 4
  },
  full: [{
    row: 0,
    col: 5
  }],
  half: [{
    row: 1,
    col: 4
  }, {
    row: 1,
    col: 5
  }, {
    row: -1,
    col: 4
  }, {
    row: -1,
    col: 5
  }]
}, {
  start: {
    row: 3,
    col: 4
  },
  full: [],
  half: [{
    row: 4,
    col: 4
  }, {
    row: 3,
    col: 5
  }]
}, {
  start: {
    row: 2,
    col: 4
  },
  full: [{
    row: 3,
    col: 5
  }],
  half: [{
    row: 2,
    col: 5
  }, {
    row: 3,
    col: 4
  }, {
    row: 4,
    col: 4
  }]
}, {
  start: {
    row: 1,
    col: 4
  },
  full: [{
    row: 1,
    col: 5
  }, {
    row: 2,
    col: 5
  }],
  half: [{
    row: 2,
    col: 4
  }, {
    row: 3,
    col: 5
  }]
}]);
// CONCATENATED MODULE: ./src/lib/utils.js





 // random whole number generator, inclusive on min and max

function getRand(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function sleep(time) {
  return new Promise(function (resolve) {
    return setTimeout(resolve, time);
  });
}

function add(a, b) {
  // add two coordinates
  return {
    row: a.row + b.row,
    col: a.col + b.col
  };
}

function smallest(a, b) {
  if (a > b) return b;else return a;
}

function biggest(a, b) {
  if (a > b) return a;else return b;
} // given monster's prototype gold, returns random gold+/-gold


function randomGold(gold) {
  var sign = getRand(1, 2) === 2 ? 1 : -1;
  return Math.round(gold + sign * gold / getRand(1, 10));
}

function getWeapon(tools) {
  var level = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  //getting weapon for monster, else getting weapon for market
  // level = $level; //TODO: ?????
  var num = getRand(1, smallest(10, 1 + Math.round(level / 1.5))); //limits weapons available based on player level

  if (!tools) {
    // non tool carrying monster
    return WEAPON_LIST[0];
  } else {
    var tempArray = WEAPON_LIST.filter(function (item) {
      return item.rarity <= num;
    });
    var num2 = getRand(0, tempArray.length - 1);
    return tempArray.filter(function (item, index) {
      return index === num2;
    })[0];
  }
}

function getArmor(tools) {
  var level = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

  if (!tools) {
    // non tool carrying monster
    return {
      name: 'no armor',
      defense: 0
    };
  } else {
    var mNum = getRand(0, smallest(6, Math.floor(level / 1.5))); //limits material available based on player level
    //console.log(mNum)

    var materials = MATERIAL_LIST.filter(function (item) {
      return item.rarity <= mNum;
    }); //console.log(material)

    mNum = getRand(0, materials.length - 1);
    var mtrl = materials.filter(function (item, index) {
      return index === mNum;
    })[0]; //console.log(material.material)

    var aNum = getRand(0, GEAR_LIST.length - 2); //get index of head, torso, arms or feet (exclude rings)
    //console.log(aNum)

    var bodyParts = GEAR_LIST.filter(function (part, index) {
      return index === aNum;
    })[0]; //get array or head, torso, arms or feet

    var bP; //console.log(bodyPart)

    if (mtrl.material === 'leather') {
      // if material is leather, get most common gear
      bP = bodyParts[0];
    } else {
      aNum = getRand(3, smallest(10, level)); //limits piece available based on player level
      //console.log(aNum);

      bP = aNum === 10 ? bodyParts[2] : bodyParts[1];
    }

    return Object.assign({}, mtrl, bP, {
      rarity: mtrl.rarity + bP.rarity,
      defense: mtrl.defense + bP.defense
    });
  }
}
// CONCATENATED MODULE: ./src/state/app.js




var defaultState = {
  tileSize: 25,
  rarityTolerance: 0,
  // weapons/armor below this rarity will be ignored
  playerBuilt: true,
  // becomes true after initial setup
  gameOver: false,
  toolTip: 0,
  // count: 0 = false, 1+ = true
  mouseX: 0,
  mouseY: 0,
  toolTipObject: {},
  displayMarket: false,
  displayGear: false,
  dimensions: {
    h: 0,
    w: 0
  }
};

var app_state = function state() {
  return _objectSpread2({}, defaultState);
};

var app_getters = {
  tileSize: function tileSize(state) {
    return state.tileSize;
  },
  rarityTolerance: function rarityTolerance(state) {
    return state.rarityTolerance;
  },
  playerBuilt: function playerBuilt(state) {
    return state.playerBuilt;
  },
  gameOver: function gameOver(state) {
    return state.gameOver;
  },
  toolTip: function toolTip(state) {
    return state.toolTip > 0;
  },
  mouseX: function mouseX(state) {
    return state.mouseX;
  },
  mouseY: function mouseY(state) {
    return state.mouseY;
  },
  toolTipObject: function toolTipObject(state) {
    return state.toolTipObject;
  },
  displayMarket: function displayMarket(state) {
    return state.displayMarket;
  },
  displayGear: function displayGear(state) {
    return state.displayGear;
  },
  dimensions: function dimensions(state) {
    return state.dimensions;
  },
  grid: function grid(state) {
    return getGridSize(state.dimensions, state.tileSize);
  }
};
var mutations = {
  restart: function restart(state) {
    Object.assign(state, _objectSpread2(_objectSpread2({}, defaultState), {}, {
      dimensions: state.dimensions
    }));
  },
  setTileSize: function setTileSize(state, val) {
    state.tileSize = +val;
  },
  setRarityTolerance: function setRarityTolerance(state, val) {
    state.rarityTolerance = val;
  },
  setPlayerBuilt: function setPlayerBuilt(state, val) {
    state.playerBuilt = val;
  },
  setGameOver: function setGameOver(state, val) {
    state.gameOver = val;
  },
  setToolTip: function setToolTip(state, val) {
    state.toolTip = val;
  },
  setMouseX: function setMouseX(state, val) {
    state.mouseX = val;
  },
  setMouseY: function setMouseY(state, val) {
    state.mouseY = val;
  },
  setToolTipObject: function setToolTipObject(state, val) {
    state.toolTipObject = val;
  },
  setDisplayMarket: function setDisplayMarket(state, val) {
    state.displayMarket = val;
  },
  setDisplayGear: function setDisplayGear(state, val) {
    state.displayGear = val;
  },
  setDimensions: function setDimensions(state, val) {
    state.dimensions = val;
  }
};
var actions = {
  restart: function restart(_ref) {
    var commit = _ref.commit;
    commit('restart');
  },
  updateToolTip: function updateToolTip(_ref2, _ref3) {
    var state = _ref2.state,
        commit = _ref2.commit;
    var mouseX = _ref3.mouseX,
        mouseY = _ref3.mouseY,
        toolTipObject = _ref3.toolTipObject;
    commit('setMouseX', mouseX);
    commit('setMouseY', mouseY);
    commit('setToolTipObject', toolTipObject);
    commit('setToolTip', state.toolTip + 1);
    sleep(4000).then(function () {
      commit('setToolTip', state.toolTip - 1);
    });
  }
};
/* harmony default export */ var app = ({
  state: app_state,
  getters: app_getters,
  mutations: mutations,
  actions: actions,
  namespaced: true
});
/*******************************************************************************
 *
 * HELPERS
 *
 *******************************************************************************/

function getGridSize(window, cellSize) {
  var headerH = 50; // header height in pixels

  var footerH = 0; // footer height in pixels

  var cellMargin = cellSize * TILE_BORDER; // margin between tiles

  var tileSize = +cellSize + 2 * cellMargin; // add margin to tilesize

  var rows = Math.ceil((window.h - headerH - footerH) / tileSize);
  var cols = Math.ceil(window.w / tileSize);
  return {
    height: rows,
    width: cols
  };
}
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.concat.js
var es_array_concat = __webpack_require__("99af");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.find.js
var es_array_find = __webpack_require__("7db0");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.find-index.js
var es_array_find_index = __webpack_require__("c740");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.map.js
var es_array_map = __webpack_require__("d81d");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.splice.js
var es_array_splice = __webpack_require__("a434");

// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.symbol.description.js
var es_symbol_description = __webpack_require__("e01a");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.symbol.iterator.js
var es_symbol_iterator = __webpack_require__("d28b");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.from.js
var es_array_from = __webpack_require__("a630");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.iterator.js
var es_array_iterator = __webpack_require__("e260");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.iterator.js
var es_string_iterator = __webpack_require__("3ca3");

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-collections.iterator.js
var web_dom_collections_iterator = __webpack_require__("ddb0");

// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/iterableToArray.js








function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
}
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.slice.js
var es_array_slice = __webpack_require__("fb6a");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.regexp.to-string.js
var es_regexp_to_string = __webpack_require__("25f0");

// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js







function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js




function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
// CONCATENATED MODULE: ./src/state/player.js














 // import { rarityTolerance } from './app';

var timerVar;
var player_defaultState = {
  type: 'player',
  name: 'Devin',
  level: 0,
  // current dungeon level location :town
  locale: {
    col: 8,
    row: 2
  },
  // row/column coordinates
  strength: 5,
  // Attack, Health
  speed: 5,
  // MaxMoves, Dodge, MaxAttacks
  tenacity: 5,
  // Health, MaxMoves
  intel: 5,
  // Dodge, Attack
  experience: 0,
  // used to calculate player level
  movesRemain: 2,
  // MaxMoves minus moves already taken
  attacksRemain: 2,
  // MaxAttacks minus attacks already taken
  health: 20,
  // MaxHealth minus damage taken
  body: [{
    type: 'ring',
    name: 'wedding band',
    speed: 0,
    strength: 0,
    intel: 0,
    tenacity: 0,
    defense: 0,
    sort: 6
  }, // WEAPON_LIST[0]
  {
    type: 'weapon',
    name: 'fist',
    size: 0,
    attack: 0,
    defense: 0,
    rarity: 1,
    speed: 7,
    sort: 1
  }],
  bag: [{
    type: 'gold',
    amount: 10
  }, {
    // array of item objects
    type: 'food',
    amount: 5
  }, {
    type: 'rock',
    size: 5
  }],
  hand: [],
  // temp storing place when moving items
  flash: 0,
  // flashes true if being attacked - for animation
  alerts: [] //['+5 Food', '+20 Gold',

};

var player_state = function state() {
  return _objectSpread2({}, player_defaultState);
};

var player_getters = {
  type: function type(state) {
    return state.type;
  },
  name: function name(state) {
    return state.name;
  },
  level: function level(state) {
    return state.level;
  },
  locale: function locale(state) {
    return state.locale;
  },
  strength: function strength(state) {
    return state.strength;
  },
  speed: function speed(state) {
    return state.speed;
  },
  tenacity: function tenacity(state) {
    return state.tenacity;
  },
  intel: function intel(state) {
    return state.intel;
  },
  experience: function experience(state) {
    return state.experience;
  },
  movesRemain: function movesRemain(state) {
    return state.movesRemain;
  },
  attacksRemain: function attacksRemain(state) {
    return state.attacksRemain;
  },
  health: function health(state) {
    return state.health;
  },
  body: function body(state) {
    return state.body;
  },
  bag: function bag(state) {
    return state.bag;
  },
  hand: function hand(state) {
    return state.hand;
  },
  flash: function flash(state) {
    return state.flash % 2 === 1;
  },
  // flashes on odds
  alerts: function alerts(state) {
    return state.alerts;
  },
  gold: function gold(state) {
    var _state$bag$find;

    return (_state$bag$find = state.bag.find(function (item) {
      return item.type === 'gold';
    })) === null || _state$bag$find === void 0 ? void 0 : _state$bag$find.amount;
  },
  food: function food(state) {
    var _state$bag$find2;

    return (_state$bag$find2 = state.bag.find(function (item) {
      return item.type === 'food';
    })) === null || _state$bag$find2 === void 0 ? void 0 : _state$bag$find2.amount;
  },
  expLevel: expLevel,
  maxHealth: maxHealth,
  hunger: hunger,
  maxAttacks: maxAttacks,
  attackPoints: player_attackPoints,
  defense: player_defense,
  dodge: player_dodge,
  carryCapacity: carryCapacity,
  carryAmount: carryAmount,
  totalFoodCapacity: totalFoodCapacity,
  goldCarryCapacity: goldCarryCapacity,
  foodCarryCapacity: foodCarryCapacity,
  // take params
  isPlayer: isPlayer
};
var player_mutations = {
  restart: function restart(state) {
    Object.assign(state, _objectSpread2({}, player_defaultState));
  },
  setLocale: function setLocale(state, val) {
    state.locale = val;
  },
  setMovesRemain: function setMovesRemain(state, val) {
    state.movesRemain = val;
  },
  setAttacksRemain: function setAttacksRemain(state, val) {
    state.attacksRemain = val;
  },
  setLevel: function setLevel(state, val) {
    state.level = val;
  },
  setExperience: function setExperience(state, val) {
    state.experience = val;
  },
  setAlerts: function setAlerts(state, val) {
    state.alerts = val;
  },
  setFlash: function setFlash(state, val) {
    state.flash = val;
  },
  setHand: function setHand(state, val) {
    state.hand = val;
  },
  setBag: function setBag(state, val) {
    state.bag = val;
  },
  setBody: function setBody(state, val) {
    state.body = val;
  },
  setStrength: function setStrength(state, val) {
    state.strength = val;
  },
  setSpeed: function setSpeed(state, val) {
    state.speed = val;
  },
  setTenacity: function setTenacity(state, val) {
    state.tenacity = val;
  },
  setIntel: function setIntel(state, val) {
    state.intel = val;
  },
  setHealth: function setHealth(state, val) {
    state.health = val;
  }
};
var player_actions = {
  // someAction: ({
  //   state,
  //   rootState,
  //   commit,
  //   dispatch,
  //   getters,
  //   rootGetters,
  // }) => {},
  restart: function restart(_ref) {
    var commit = _ref.commit;
    commit('restart');
  },
  movePlayer: function movePlayer(_ref2, target) {
    var state = _ref2.state,
        commit = _ref2.commit;
    commit('setLocale', target);
    commit('setMovesRemain', state.movesRemain - 1);
  },
  useAttack: function useAttack(_ref3) {
    var state = _ref3.state,
        commit = _ref3.commit;
    commit('setAttacksRemain', state.attacksRemain - 1);
    commit('setMovesRemain', state.movesRemain - 1);
  },
  loseHealth: function loseHealth(_ref4, damage) {
    var state = _ref4.state,
        commit = _ref4.commit;
    commit('setHealth', state.health - damage);
    commit('setFlash', state.flash + 2);
    clearTimeout(timerVar);
    timerVar = setInterval(function () {
      state.flash <= 0 ? clearTimeout(timerVar) : null;
      commit('setFlash', state.flash - 1);
    }, 100);
  },
  changeLevel: function changeLevel(_ref5, toLevel) {
    var state = _ref5.state,
        commit = _ref5.commit;
    commit('setLevel', toLevel);
    commit('dungeon-crawl/world/setLevel', toLevel, {
      root: true
    });
    commit('dungeon-crawl/monsters/setLevel', toLevel, {
      root: true
    });
    commit('dungeon-crawl/market/setLevel', toLevel, {
      root: true
    });
    commit('setMovesRemain', maxMoves(state) + 2);
  },
  gainExperience: function gainExperience(_ref6, exp) {
    var state = _ref6.state,
        commit = _ref6.commit;
    commit('setExperience', state.experience + exp);
  },
  addPlayerAlert: function addPlayerAlert(_ref7, alert) {
    var state = _ref7.state,
        commit = _ref7.commit,
        dispatch = _ref7.dispatch;
    var newAlerts = [alert].concat(_toConsumableArray(state.alerts));
    commit('setAlerts', newAlerts);
    dispatch('clearPlayerAlerts');
  },
  clearPlayerAlerts: function clearPlayerAlerts(_ref8) {
    var _state$alerts;

    var state = _ref8.state,
        commit = _ref8.commit;
    if (!((_state$alerts = state.alerts) === null || _state$alerts === void 0 ? void 0 : _state$alerts.length)) return;
    clearTimeout(timerVar);
    timerVar = setInterval(function () {
      console.log(state.alerts);

      var newAlerts = _toConsumableArray(state.alerts);

      newAlerts.pop();
      commit('setAlerts', newAlerts);
      newAlerts.length === 0 ? clearTimeout(timerVar) : null;
    }, biggest(900 - state.alerts.length * 100, 200));
  },
  // put item in hand
  pickUpItem: function pickUpItem(_ref9, _ref10) {
    var state = _ref9.state,
        commit = _ref9.commit,
        dispatch = _ref9.dispatch;
    var item = _ref10.item,
        index = _ref10.index;
    // Take item from monster
    dispatch('dungeon-crawl/monsters/takeItemFromMonster', {
      item: item,
      index: index
    }, {
      root: true
    }); // And put in player's hand or mouth

    var newHand = [].concat(_toConsumableArray(state.hand), [item]);
    commit('setHand', newHand);
  },
  // put item from hand in bag
  storeItem: function storeItem(_ref11) {
    var state = _ref11.state,
        getters = _ref11.getters,
        commit = _ref11.commit;
    var newBag = [];

    var newHand = _toConsumableArray(state.hand);

    var item = newHand.shift();

    if (item.type === 'food' || item.type === 'gold') {
      //console.log("adding "+item.type+" to bag")
      var capacity = item.type === 'food' ? getters.foodCarryCapacity : getters.goldCarryCapacity;
      var amount = Math.round(smallest(item.amount, capacity) * 100) / 100;
      console.log(amount);
      newBag = state.bag.map(function (bagItem) {
        return bagItem.type === item.type ? _objectSpread2(_objectSpread2({}, bagItem), {}, {
          amount: Math.round((bagItem.amount + amount) * 10) / 10
        }) : bagItem;
      });
    } else {
      newBag = [].concat(_toConsumableArray(state.bag), [item]);
    }

    commit('setBag', newBag);
    commit('setHand', newHand);
  },
  // put item from hand to body
  armItem: function armItem(_ref12) {
    var state = _ref12.state,
        commit = _ref12.commit;

    var newHand = _toConsumableArray(state.hand);

    var item = newHand.shift();

    if (item.type === 'food') {
      commit('setHealth', state.health + item.amount);
      commit('setHand', newHand);
      return;
    }

    var newBody = _toConsumableArray(state.body);

    var index = newBody.findIndex(function (i) {
      return i.type === item.type;
    });
    newBody.splice(index, index + 1 === 0 ? 0 : 1, item);
    newBody.sort(function (a, b) {
      return a.sort - b.sort;
    });
    commit('setBody', newBody);
    commit('setHand', newHand);
    commit('setMovesRemain', state.movesRemain - 1);
  },
  // move item from body to hand
  removeItem: function removeItem(_ref13, _ref14) {
    var state = _ref13.state,
        commit = _ref13.commit;
    var index = _ref14.index;
    var item = state.body[index];
    var newHand = [].concat(_toConsumableArray(state.hand), [item]);

    var newBody = _toConsumableArray(state.body);

    if (item.type === 'weapon') newBody.splice(index, 1, WEAPON_LIST[0]);else newBody.splice(index, 1);
    commit('setBody', newBody);
    commit('setHand', newHand);
  },
  // move item from bag to hand
  pullItem: function pullItem(_ref15, _ref16) {
    var state = _ref15.state,
        commit = _ref15.commit;
    var index = _ref16.index,
        amount = _ref16.amount;

    var item = _objectSpread2({}, state.bag[index]);

    if (item.amount) {
      item.amount = amount;
    }

    var newHand = [].concat(_toConsumableArray(state.hand), [item]);
    var newBag;
    if (item.type === 'food' || item.type === 'gold') // if food/gold reduce amount of item
      newBag = state.bag.map(function (bagItem) {
        return bagItem.type === item.type ? _objectSpread2(_objectSpread2({}, bagItem), {}, {
          amount: bagItem.amount - amount
        }) : bagItem;
      });else {
      // else remove item
      newBag = _toConsumableArray(state.bag);
      newBag.splice(index, 1);
    }
    commit('setBag', newBag);
    commit('setHand', newHand);
  },
  // remove item from hand
  dropItem: function dropItem(_ref17) {
    var state = _ref17.state,
        commit = _ref17.commit;

    var newHand = _toConsumableArray(state.hand);

    var item = newHand.shift();
    commit('setHand', newHand);
    return item;
  },
  pickUpItems: function pickUpItems(_ref18, target) {
    var getters = _ref18.getters,
        rootGetters = _ref18.rootGetters,
        dispatch = _ref18.dispatch;
    var monsters = rootGetters['dungeon-crawl/monsters/currentMonsters']; //console.log("pick up items at "+target);
    // find all monsters on square

    var monstIDs = [];
    monsters.forEach(function (m, i) {
      if (m.locale.col == target.col && m.locale.row == target.row) monstIDs.push(i);
    }); // pick up items (food, gold, weapons, gear)

    monstIDs.forEach(function (index) {
      var food = monsters[index].food;
      var gold = monsters[index].gold;
      var weapon = monsters[index].weapon;
      var armor = monsters[index].armor; // auto pick up food

      if (food > 0) {
        var belly = getters.hunger;
        var doggyBag = getters.foodCarryCapacity;
        var foodInHand = smallest(food, belly + doggyBag);
        dispatch('addPlayerAlert', "+".concat(foodInHand, " food"));

        if (belly > 0) {
          // eat what food you can
          //console.log("eating "+smallest(foodInHand, belly)+" food")
          dispatch('pickUpItem', {
            item: {
              type: 'food',
              amount: smallest(foodInHand, belly)
            },
            index: index
          });
          dispatch('armItem');
          foodInHand -= smallest(foodInHand, belly);
        }

        if (foodInHand > 0) {
          // put what you can in bag
          //console.log("storing "+foodInHand+" food in bag")
          dispatch('pickUpItem', {
            item: {
              type: 'food',
              amount: foodInHand
            },
            index: index
          });
          dispatch('storeItem');
        }
      } // auto pick up gold


      if (gold > 0) {
        var purse = goldCarryCapacity;
        var goldInHand = smallest(gold, purse);

        if (goldInHand > 0) {
          //console.log("picking up "+goldInHand+" gold");
          dispatch('addPlayerAlert', "+".concat(goldInHand, " gold"));
          dispatch('pickUpItem', {
            item: {
              type: 'gold',
              amount: goldInHand
            },
            index: index
          });
          dispatch('storeItem');
        }
      } // auto pick up weapon


      if (weapon.rarity >= rootGetters['dungeon-crawl/app/rarityTolerance'] && weapon.name != 'fist') {
        if (getters.body.filter(function (i) {
          return i.type === 'weapon';
        })[0].name === 'fist') {
          // console.log("pick up and arm "+ weapon.name);
          dispatch('addPlayerAlert', '+ new weapon');
          dispatch('pickUpItem', {
            item: weapon,
            index: index
          });
          dispatch('armItem');
        } else if (getters.carryCapacity - getters.carryAmount >= weapon.size) {
          // console.log("pick up and store "+ weapon.name);
          dispatch('addPlayerAlert', '+ new weapon');
          dispatch('pickUpItem', {
            item: weapon,
            index: index
          });
          dispatch('storeItem');
        }
      } // auto pick up armor


      if (armor.rarity >= rootGetters['dungeon-crawl/app/rarityTolerance']) {
        if (getters.body.find(function (i) {
          return i.type == [armor.type];
        }) === undefined) {
          // console.log(`pick up and arm ${armor.material} ${armor.name}`);
          dispatch('addPlayerAlert', "+ new ".concat(armor.material, " armor"));
          dispatch('pickUpItem', {
            item: armor,
            index: index
          });
          dispatch('armItem');
        } else if (getters.carryCapacity - getters.carryAmount >= armor.size) {
          // console.log("pick up and store "+ armor.material+" "+armor.name);
          dispatch('addPlayerAlert', "+ new ".concat(armor.material, " armor"));
          dispatch('pickUpItem', {
            item: armor,
            index: index
          });
          dispatch('storeItem');
        }
      }
    });
  },
  resetMoves: function resetMoves(_ref19) {
    var state = _ref19.state,
        commit = _ref19.commit;
    commit('setMovesRemain', maxMoves(state));
    commit('setAttacksRemain', maxAttacks(state));
  }
};
/* harmony default export */ var player = ({
  state: player_state,
  getters: player_getters,
  mutations: player_mutations,
  actions: player_actions,
  namespaced: true
});
/*******************************************************************************
 *
 * GETTERS
 *
 *******************************************************************************/

function expLevel(state) {
  return Math.floor((-1 + Math.sqrt(1 + 8 * state.experience / 50)) / 2) + 1;
}

function maxHealth(state) {
  return (state.strength + state.tenacity) * (expLevel(state) + 1);
}

function hunger(state) {
  return maxHealth(state) - state.health;
}

function player_attackPoints(state) {
  var weaponAttack = state.body.filter(function (i) {
    return i.type === 'weapon';
  })[0].attack;
  return Math.round((state.strength + state.intel) * ((weaponAttack + 10) / 10) * ((expLevel(state) + 1) / 4));
}

function player_defense(state) {
  var gearDefense = state.body.reduce(function (sum, i) {
    return sum + i.defense;
  }, 0);
  return (state.tenacity + state.strength + gearDefense) / 100;
}

function player_dodge(state) {
  return state.speed * state.intel;
}

function maxMoves(state) {
  return Math.ceil((state.speed + state.tenacity * 2) / 4);
}

function maxAttacks(state) {
  var weaponSpeed = state.body.filter(function (i) {
    return i.type === 'weapon';
  })[0].speed;
  return smallest(Math.ceil((state.speed + weaponSpeed) / 5), maxMoves(state));
}

function carryCapacity(state) {
  return 10 + state.strength * 2;
}

function carryAmount(state) {
  // loop through bag items
  var bagItems = state.bag.reduce(function (sum, item) {
    if (item.type === 'food') return sum + Math.ceil(item.amount / 32); // 32 food takes 1 spot
    else if (item.type === 'gold') return sum + Math.ceil(item.amount / 100); // 100 gold takes 1 spot
      else return sum + item.size; // other bag items take up 1 spot/size
  }, 0);
  return bagItems;
} // belly + bag capacity


function totalFoodCapacity(state) {
  return maxHealth(state) - state.health + (carryCapacity(state) - carryAmount(state) * 10);
}

function goldCarryCapacity(state) {
  return (carryCapacity(state) - carryAmount(state)) * 50;
} // bag food capacity


function foodCarryCapacity(state) {
  return (carryCapacity(state) - carryAmount(state)) * 10;
} // given location target (row,col) returns true if player is on that location, false if not


function isPlayer(state) {
  return function (target) {
    if (target.col == state.locale.col && target.row == state.locale.row) return true;else return false;
  };
}
// CONCATENATED MODULE: ./src/state/world.js



var world_state = function state() {
  return {
    world: [createTownLevel(0)],
    playerLevel: 0
  };
};

var world_getters = {
  world: function world(state) {
    return state.world;
  },
  currentWorld: function currentWorld(state) {
    return state.world[state.playerLevel] || [];
  },
  isTownLevel: function isTownLevel(state) {
    return state.playerLevel % TOWN_EVERY === 0;
  },
  levels: function levels(state) {
    return state.world.length;
  },
  // take params
  isInBounds: isInBounds,
  getLevel: getLevel
};
var world_mutations = {
  setWorld: function setWorld(state, world) {
    state.world = world;
  },
  setLevel: function setLevel(state, val) {
    state.playerLevel = val;
  }
};
var world_actions = {
  restart: function restart(_ref) {
    var commit = _ref.commit;
    commit('setWorld', [createTownLevel(0)]);
    commit('setLevel', 0);
  },
  addNewLevel: function addNewLevel(_ref2, toLevel) {
    var state = _ref2.state,
        commit = _ref2.commit;
    var level = state.playerLevel;
    var newWorld = JSON.parse(JSON.stringify(state.world));
    if (level % TOWN_EVERY > 0) newWorld.push(createDungeonLevel(toLevel));else newWorld.push(createTownLevel(toLevel));
    commit('setWorld', newWorld);
  },
  updateVisibility: function updateVisibility(_ref3, target) {
    var state = _ref3.state,
        getters = _ref3.getters;
    var level = state.playerLevel;
    if (level % TOWN_EVERY <= 0) return;
    var shadowSize = 5; //1-5

    var dungeon = state.world[level];
    var coords;
    var shadows = SHADOW_LIST; // takes relative coordinates and converts to absolute coordinates then changes to visible

    function makeFog(_ref4, q) {
      var relativeRow = _ref4.relativeRow,
          relativeCol = _ref4.relativeCol;

      //find matching shaddows
      for (var i = 0; i < shadows.length; i++) {
        if (shadows[i].start.row === relativeRow && shadows[i].start.col === relativeCol) {
          for (var j = 0; j < shadows[i].full.length; j++) {
            var rShadAbs = void 0,
                cShadAbs = void 0;
            var shadow = shadows[i].full[j];

            if (q === 1) {
              rShadAbs = shadow.row + target.row;
              cShadAbs = shadow.col + target.col;
            } else if (q === 2) {
              rShadAbs = shadow.col + target.row;
              cShadAbs = -shadow.row + target.col;
            } else if (q === 3) {
              rShadAbs = -shadow.row + target.row;
              cShadAbs = -shadow.col + target.col;
            } else if (q === 4) {
              rShadAbs = -shadow.col + target.row;
              cShadAbs = shadow.row + target.col;
            } else if (q === 5) {
              rShadAbs = shadow.col + target.row;
              cShadAbs = shadow.row + target.col;
            } else if (q === 6) {
              rShadAbs = shadow.row + target.row;
              cShadAbs = -shadow.col + target.col;
            } else if (q === 7) {
              rShadAbs = -shadow.col + target.row;
              cShadAbs = -shadow.row + target.col;
            } else if (q === 8) {
              rShadAbs = -shadow.row + target.row;
              cShadAbs = shadow.col + target.col;
            }

            if (getters.isInBounds({
              row: rShadAbs,
              col: cShadAbs
            })) {
              dungeon[rShadAbs][cShadAbs].fog += 1;
            }
          }

          for (var _j = 0; _j < shadows[i].half.length; _j++) {
            var _rShadAbs = void 0,
                _cShadAbs = void 0;

            var _shadow = shadows[i].half[_j];

            if (q === 1) {
              _rShadAbs = _shadow.row + target.row;
              _cShadAbs = _shadow.col + target.col;
            } else if (q === 2) {
              _rShadAbs = _shadow.col + target.row;
              _cShadAbs = -_shadow.row + target.col;
            } else if (q === 3) {
              _rShadAbs = -_shadow.row + target.row;
              _cShadAbs = -_shadow.col + target.col;
            } else if (q === 4) {
              _rShadAbs = -_shadow.col + target.row;
              _cShadAbs = _shadow.row + target.col;
            } else if (q === 5) {
              _rShadAbs = _shadow.col + target.row;
              _cShadAbs = _shadow.row + target.col;
            } else if (q === 6) {
              _rShadAbs = _shadow.row + target.row;
              _cShadAbs = -_shadow.col + target.col;
            } else if (q === 7) {
              _rShadAbs = -_shadow.col + target.row;
              _cShadAbs = -_shadow.row + target.col;
            } else if (q === 8) {
              _rShadAbs = -_shadow.row + target.row;
              _cShadAbs = _shadow.col + target.col;
            }

            if (getters.isInBounds({
              row: _rShadAbs,
              col: _cShadAbs
            })) {
              dungeon[_rShadAbs][_cShadAbs].fog += 0.5;
            }
          }
        }
      }
    }

    function writeToMap() {
      var rRel = coords.row;
      var cRel = coords.col;
      var rAbs = rRel + target.row;
      var cAbs = cRel + target.col;

      if (getters.isInBounds({
        row: rAbs,
        col: cAbs
      })) {
        if (dungeon[rAbs][cAbs].type === 'wall') {
          // mark shadows
          if (rRel >= 0 && rRel <= 3 && cRel >= 1 && cRel <= 4 && Math.abs(cRel) >= Math.abs(rRel)) {
            makeFog({
              relativeRow: rRel,
              relativeCol: cRel
            }, 1); //  r, c
          } else if (rRel >= 1 && rRel <= 4 && cRel <= 0 && cRel >= -3 && Math.abs(cRel) <= Math.abs(rRel)) {
            makeFog({
              relativeRow: -cRel,
              relativeCol: rRel
            }, 2); //  c,-r
          } else if (rRel <= 0 && rRel >= -3 && cRel <= -1 && cRel >= -4 && Math.abs(cRel) >= Math.abs(rRel)) {
            makeFog({
              relativeRow: -rRel,
              relativeCol: -cRel
            }, 3); // -r,-c
          } else if (rRel <= -1 && rRel >= -4 && cRel >= 0 && cRel <= 3 && Math.abs(cRel) <= Math.abs(rRel)) {
            makeFog({
              relativeRow: cRel,
              relativeCol: -rRel
            }, 4); // -c, r
          } else if (rRel >= 2 && rRel <= 4 && cRel >= 1 && cRel <= 3 && Math.abs(cRel) < Math.abs(rRel)) {
            makeFog({
              relativeRow: cRel,
              relativeCol: rRel
            }, 5); //  c, r
          } else if (rRel >= 1 && rRel <= 3 && cRel <= -2 && cRel >= -4 && Math.abs(cRel) > Math.abs(rRel)) {
            makeFog({
              relativeRow: rRel,
              relativeCol: -cRel
            }, 6); //  r,-c
          } else if (rRel <= 2 && rRel >= -4 && cRel <= -1 && cRel >= -3 && Math.abs(cRel) < Math.abs(rRel)) {
            makeFog({
              relativeRow: -cRel,
              relativeCol: -rRel
            }, 7); // -c,-r
          } else if (rRel <= 1 && rRel >= -3 && cRel >= 2 && cRel <= 4 && Math.abs(cRel) > Math.abs(rRel)) {
            makeFog({
              relativeRow: -rRel,
              relativeCol: cRel
            }, 8); // -r, c
          }
        }

        if (dungeon[rAbs][cAbs].fog < 2) {
          dungeon[rAbs][cAbs].vis = true;
          dungeon[rAbs][cAbs].fog = 0;
        }
      }
    } // reset fog


    for (var i = -(shadowSize + 1); i <= shadowSize + 1; i++) {
      for (var j = -(shadowSize + 1); j <= shadowSize + 1; j++) {
        var row = target.row + i;
        var col = target.col + j;

        if (getters.isInBounds({
          row: row,
          col: col
        })) {
          dungeon[row][col].fog = 1;
        }
      }
    } // loops once per shadow radius, starting with inner-most radius, ending with outer-most radius


    for (var _i = 1; _i <= shadowSize; _i++) {
      coords = {
        row: -_i,
        col: -_i
      };

      for (var _j2 = 0; _j2 < _i * 2; _j2++) {
        // top side
        coords.col++;
        if (Math.abs(coords.row) + Math.abs(coords.col) <= shadowSize * 2 - Math.floor(shadowSize / 2)) writeToMap();
      }

      for (var _j3 = 0; _j3 < _i * 2; _j3++) {
        // right side
        coords.row++;
        if (Math.abs(coords.row) + Math.abs(coords.col) <= shadowSize * 2 - Math.floor(shadowSize / 2)) writeToMap();
      }

      for (var _j4 = 0; _j4 < _i * 2; _j4++) {
        // bottom side
        coords.col--;
        if (Math.abs(coords.row) + Math.abs(coords.col) <= shadowSize * 2 - Math.floor(shadowSize / 2)) writeToMap();
      }

      for (var _j5 = 0; _j5 < _i * 2; _j5++) {
        // left side
        coords.row--;
        if (Math.abs(coords.row) + Math.abs(coords.col) <= shadowSize * 2 - Math.floor(shadowSize / 2)) writeToMap();
      }
    }

    dungeon[target.row][target.col].vis = true; // make players location (0,0) visible

    dungeon[target.row][target.col].fog = 0; // make players location (0,0) un-foggy
  }
};
/* harmony default export */ var world = ({
  state: world_state,
  getters: world_getters,
  mutations: world_mutations,
  actions: world_actions,
  namespaced: true
});
/*******************************************************************************
 *
 * HELPERS
 *
 *******************************************************************************/

function createTownLevel(level) {
  var rows = 11;
  var cols = 11;
  var newLevel = [];

  for (var r = 0; r < rows; r++) {
    newLevel.push([]);

    for (var c = 0; c < cols; c++) {
      if (r === 0 || r === rows - 1 || c === 0 || c === cols - 1) {
        newLevel[r].push({
          type: 'wall',
          vis: true,
          fog: 0
        });
      } else newLevel[r].push({
        type: 'floor',
        vis: true,
        fog: 0
      });
    }
  } // create market


  newLevel[2][2].type = 'market'; // create gete to next level

  newLevel[8][2].type = 'gate';
  newLevel[8][2].toLevel = level + 1; // create gate to previous level

  if (level > 1) {
    newLevel[2][8].type = 'gate';
    newLevel[2][8].toLevel = level - 1;
  }

  return newLevel;
}

function createDungeonLevel(toLevel) {
  var rows = 50;
  var cols = 50;
  var newLevel = [];
  var minRoomSize = 4;
  var maxRoomSize = 15;
  var maxRooms = 20;
  var numRooms = 0;
  var exits = 0;

  function placeExit(r, c) {
    var row = r > rows - 2 ? rows - 2 : r;
    var col = c > cols - 2 ? cols - 2 : c;
    var newToLevel = exits === 0 ? toLevel - 1 : toLevel + 1;
    newLevel[row][col].type = 'gate';
    newLevel[row][col].toLevel = newToLevel;
    exits++;
  } // create blank canvas (all walls)


  for (var r = 0; r < rows; r++) {
    newLevel.push([]);

    for (var c = 0; c < cols; c++) {
      newLevel[r].push({
        type: 'wall',
        vis: false,
        fog: 1
      });
    }
  } // carve out rooms and hallways


  for (var _r = 0; _r < rows; _r++) {
    for (var _c = 0; _c < cols; _c++) {
      if (_r > 0 && _r < rows - 1 && _c > 0 && _c < cols - 1) {
        // create 1st room at (1,1) all other rooms random
        if (getRand(0, rows * cols / maxRooms) === 0 || _r === 1 && _c === 1) {
          var height = getRand(minRoomSize, maxRoomSize);
          var width = getRand(minRoomSize, maxRoomSize);

          for (var y = 0; y < height; y++) {
            for (var x = 0; x < width; x++) {
              if (getRand(0, 10)) {
                var row = _r + y > rows - 2 ? rows - 2 : _r + y;
                var col = _c + x > cols - 2 ? cols - 2 : _c + x;

                if (newLevel[row][col].type !== 'gate') {
                  newLevel[row][col].type = 'floor';
                  if (getRand(0, 600) === 0 && exits < 2) placeExit(_r + y, _c + x);
                }
              }
            }
          }

          numRooms++; // create hallway to nearest room

          if (numRooms > 0) {
            var targetX = 1;
            var targetY = 1; // build tunnel from topleft corner of room to target coordinates

            for (var _y = _r; _y >= 1; _y--) {
              //start diggin up, while checking left
              if (newLevel[_y][_c].type !== 'gate') newLevel[_y][_c].type = 'floor';

              for (var _x = _c; _x >= 1; _x--) {
                if (newLevel[_y][_x - 1].type === 'floor') {
                  targetX = _x - 1;
                  targetY = _y;
                  _x = 1;
                  _y = 1;
                }
              }
            } // when find room to left, carve hallway to right


            for (var _x2 = targetX; _x2 <= _c; _x2++) {
              if (newLevel[targetY][_x2].type !== 'gate') newLevel[targetY][_x2].type = 'floor';
            }
          }
        }
      }
    }
  } // ensure all exits were placed


  if (exits < 2) {
    for (var _r2 = rows - 1; _r2 > 1; _r2 -= 10) {
      for (var _c2 = cols - 1; _c2 > 1; _c2 -= 10) {
        if (exits >= 2) break;
        if (newLevel[_r2][_c2].type === 'floor') placeExit(_r2, _c2);
      }
    }
  }

  return newLevel;
}
/*******************************************************************************
 *
 * GETTERS
 *
 *******************************************************************************/
// given location target (row,col) returns true if cell is within map bounds false if not


function isInBounds(state) {
  return function (target) {
    var currentWorld = world_getters.currentWorld(state);
    var rows = currentWorld.length;
    var cols = currentWorld[0].length;
    return target.row >= 0 && target.col >= 0 && target.row < rows && target.col < cols;
  };
}

function getLevel(state) {
  return function (level) {
    var _state$world;

    return (_state$world = state.world) === null || _state$world === void 0 ? void 0 : _state$world[level];
  };
}
// CONCATENATED MODULE: ./src/state/market.js






var market_state = function state() {
  return {
    market: createMarket(0),
    playerLevel: 0
  };
};

var market_getters = {
  market: function market(state) {
    return state.market;
  },
  currentMarket: function currentMarket(state) {
    return state.market[state.playerLevel / TOWN_EVERY];
  }
};
var market_mutations = {
  setMarket: function setMarket(state, val) {
    state.market = val;
  },
  setLevel: function setLevel(state, val) {
    state.playerLevel = val;
  }
};
var market_actions = {
  restart: function restart(_ref) {
    var commit = _ref.commit;
    commit('setMarket', createMarket(0));
    commit('setLevel', 0);
  },
  populateMarket: function populateMarket(_ref2, level) {
    var state = _ref2.state,
        commit = _ref2.commit;
    var newMarket = JSON.parse(JSON.stringify(state.market));
    newMarket.push(createMarket(level)[0]);
    commit('setMarket', newMarket);
  },
  sellToMarket: function sellToMarket(_ref3, _ref4) {
    var state = _ref3.state,
        rootGetters = _ref3.rootGetters,
        commit = _ref3.commit;
    var item = _ref4.item;
    var newMarket = JSON.parse(JSON.stringify(state.market));
    var marketId = state.playerLevel / TOWN_EVERY;
    var gold = rootGetters['dungeon-crawl/getPlayerPrice'](item);
    console.log(gold);
    if (item.type === 'food') newMarket[marketId].bag[0].amount += 1;else newMarket[marketId].bag.push(item);
    newMarket[marketId].gold -= gold;
    commit('setMarket', newMarket);
    return {
      type: 'gold',
      amount: gold
    };
  },
  buyFromMarket: function buyFromMarket(_ref5, _ref6) {
    var state = _ref5.state,
        commit = _ref5.commit;
    var gold = _ref6.gold,
        index = _ref6.index;
    var newMarket = JSON.parse(JSON.stringify(state.market));
    var marketId = state.playerLevel / TOWN_EVERY;

    var item = _objectSpread2({}, newMarket[marketId].bag[index]);

    if (item.type === 'food') {
      newMarket[marketId].bag[index].amount -= 1;
      item.amount = 1;
    } else {
      newMarket[marketId].bag.splice(index, 1);
    }

    newMarket[marketId].gold += gold;
    commit('setMarket', newMarket);
    return item;
  }
};
/* harmony default export */ var state_market = ({
  state: market_state,
  getters: market_getters,
  mutations: market_mutations,
  actions: market_actions,
  namespaced: true
});
/*******************************************************************************
 *
 * HELPERS
 *
 *******************************************************************************/
// returns array of 1 gold object, 1 food object, 0-12 gear objects

function createMarket(level) {
  var market = [];
  level += 3;
  market.push({
    gold: randomGold(50 * level),
    bag: []
  });
  market[0].bag.push({
    type: 'food',
    amount: randomGold(10 * level)
  });

  for (var i = 0; i < 1 + randomGold(3); i++) {
    var weapon = getWeapon(true, level);
    weapon.name === 'fist' ? null : market[0].bag.push(weapon);
  }

  for (var _i = 0; _i < 1 + randomGold(3); _i++) {
    var armor = getArmor(true, level);
    market[0].bag.push(armor);
  }

  return market;
}
// EXTERNAL MODULE: ./node_modules/regenerator-runtime/runtime.js
var runtime = __webpack_require__("96cf");

// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js



function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/typeof.js







function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}
// CONCATENATED MODULE: ./src/state/monsters.js








 // createMonster({
//   monster: MONSTER_LIST[0][getRand(0, MONSTER_LIST[0].length - 1)],
//   coords: { row: 8, col: 8 }],
// }),

var monsters_state = function state() {
  return {
    monsters: [[]],
    playerLevel: 0
  };
};

var monsters_getters = {
  monsters: function monsters(state) {
    return state.monsters;
  },
  currentMonsters: function currentMonsters(state) {
    return state.monsters[state.playerLevel] || [];
  },
  isMonster: isMonster
};
var monsters_mutations = {
  setMonsters: function setMonsters(state, val) {
    state.monsters = val;
  },
  setLevel: function setLevel(state, val) {
    state.playerLevel = val;
  }
};
var monsters_actions = {
  restart: function restart(_ref) {
    var commit = _ref.commit;
    commit('setMonsters', [[]]);
    commit('setLevel', 0);
  },
  populateLevel: populateLevel,
  monsterLoseHealth: monsterLoseHealth,
  takeItemFromMonster: takeItemFromMonster,
  monsterFlashOver: monsterFlashOver,
  monsterTurn: monsterTurn,
  resetMoves: resetMoves,
  createMonster: createMonster
};
/* harmony default export */ var state_monsters = ({
  state: monsters_state,
  getters: monsters_getters,
  mutations: monsters_mutations,
  actions: monsters_actions,
  namespaced: true
});
/*******************************************************************************
 *
 * HELPERS
 *
 *******************************************************************************/

function createMonster(_ref2, _ref3) {
  var rootGetters = _ref2.rootGetters;
  var monster = _ref3.monster,
      coords = _ref3.coords;

  var tempMonster = _objectSpread2(_objectSpread2({}, monster), {}, {
    alert: [],
    //['-23 Health', 'Dodge!'],
    flash: false,
    // flashes true if being attacked - for animation
    locale: coords,
    // monsters location on map
    gold: randomGold(monster.gold),
    // Gold carrying on person
    armor: getArmor(monster.tools),
    // Array of armor objects on person
    weapon: getWeapon(monster.tools),
    // Weapon on person
    movesRemain: rootGetters['dungeon-crawl/getMaxMoves'](monster),
    // MaxMoves minus moves already taken
    health: rootGetters['dungeon-crawl/getMaxHealth'](monster) // MaxHealth minus damage taken

  });

  tempMonster.attacksRemain = rootGetters['dungeon-crawl/getMaxAttacks'](tempMonster);
  return tempMonster;
}
/*******************************************************************************
 *
 * GETTERS
 *
 *******************************************************************************/


function isMonster(state) {
  return function (target) {
    var currentMonsters = monsters_getters.currentMonsters(state);

    function formatMonster(m, i) {
      return {
        index: i,
        isAlive: m.health > 0,
        hasFlash: m.flash,
        hasGear: m.food > 0 || m.gold > 0 || m.weapon.name != 'fist' && m.armor.rarity >= monsters_getters.rarityTolerance || m.armor.name != 'no armor' && m.armor.rarity >= monsters_getters.rarityTolerance
      };
    }

    var monster = null; // we have row/col coords

    if (_typeof(target) === 'object') {
      if (!(currentMonsters === null || currentMonsters === void 0 ? void 0 : currentMonsters.length)) return monster;

      for (var i = 0; i < currentMonsters.length; i++) {
        var m = currentMonsters[i];
        if (target.row !== m.locale.row || target.col !== m.locale.col) continue;
        monster = formatMonster(m, i); // console.log(monster);

        i = currentMonsters.length;
      }
    } // we have a monster index
    else {
        var _m = currentMonsters === null || currentMonsters === void 0 ? void 0 : currentMonsters[target];

        monster = _m ? formatMonster(_m, target) : null;
      } // return an abbreviated monster object or null


    return monster;
  };
}
/*******************************************************************************
 *
 * ACTIONS
 *
 *******************************************************************************/


function populateLevel(_x, _x2) {
  return _populateLevel.apply(this, arguments);
}

function _populateLevel() {
  _populateLevel = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(_ref4, toLevel) {
    var state, commit, dispatch, rootGetters, newMonsters, monsterLevelList, currentWorld, remainder, rarity, r, c, newMonster, percent, _newMonster;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            state = _ref4.state, commit = _ref4.commit, dispatch = _ref4.dispatch, rootGetters = _ref4.rootGetters;
            newMonsters = JSON.parse(JSON.stringify(state.monsters));
            monsterLevelList = [];
            currentWorld = rootGetters['dungeon-crawl/world/world'][toLevel];
            remainder = toLevel % TOWN_EVERY;
            r = 1;

          case 6:
            if (!(r < currentWorld.length - 2)) {
              _context.next = 27;
              break;
            }

            c = 1;

          case 8:
            if (!(c < currentWorld.length - 2)) {
              _context.next = 24;
              break;
            }

            if (!(currentWorld[r][c].type === 'gate' && remainder == TOWN_EVERY - 1 && currentWorld[r][c].toLevel === toLevel + 1)) {
              _context.next = 14;
              break;
            }

            _context.next = 12;
            return dispatch('createMonster', {
              monster: MONSTER_LIST[3][getRand(0, MONSTER_LIST[3].length - 1)],
              coords: {
                row: r,
                col: c
              }
            });

          case 12:
            newMonster = _context.sent;
            monsterLevelList.push(newMonster);

          case 14:
            if (!(currentWorld[r][c].type === 'floor')) {
              _context.next = 21;
              break;
            }

            if (!(getRand(0, 50) === 0)) {
              _context.next = 21;
              break;
            }

            // 1 monster every 50 squares
            if (remainder === 0) rarity = 0;else {
              percent = getRand(0, 100);

              if (remainder === 1) {
                if (percent <= 90) rarity = 0;else rarity = 1;
              }

              if (remainder === 2) {
                if (percent <= 50) rarity = 0;else if (percent <= 90) rarity = 1;else rarity = 2;
              }

              if (remainder === 3) {
                if (percent <= 30) rarity = 0;else if (percent <= 60) rarity = 1;else rarity = 2;
              }

              if (remainder === 4) {
                if (percent <= 50) rarity = 0;else if (percent <= 30) rarity = 1;else rarity = 2;
              }
            }
            _context.next = 19;
            return dispatch('createMonster', {
              monster: MONSTER_LIST[rarity][getRand(0, MONSTER_LIST[rarity].length - 1)],
              coords: {
                row: r,
                col: c
              }
            });

          case 19:
            _newMonster = _context.sent;
            monsterLevelList.push(_newMonster);

          case 21:
            c++;
            _context.next = 8;
            break;

          case 24:
            r++;
            _context.next = 6;
            break;

          case 27:
            newMonsters.push(monsterLevelList);
            commit('setMonsters', newMonsters);

          case 29:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _populateLevel.apply(this, arguments);
}

function monsterLoseHealth(_ref5, _ref6) {
  var state = _ref5.state,
      commit = _ref5.commit,
      dispatch = _ref5.dispatch;
  var index = _ref6.index,
      damage = _ref6.damage;
  // locate monster
  var level = state.playerLevel;
  var newMonsters = JSON.parse(JSON.stringify(state.monsters));
  var newMonster = newMonsters[level][index]; // decrease monster health

  newMonster.health -= damage; // turn on flash

  newMonster.flash = true;
  sleep(100).then(function () {
    return dispatch('monsterFlashOver', index);
  });
  commit('setMonsters', newMonsters);
}

function takeItemFromMonster(_ref7, _ref8) {
  var state = _ref7.state,
      commit = _ref7.commit;
  var item = _ref8.item,
      index = _ref8.index;
  if (index === null || index === undefined) return; // locate monster

  var level = state.playerLevel;
  var newMonsters = JSON.parse(JSON.stringify(state.monsters));
  var newMonster = newMonsters[level][index]; // take food/gold from monster

  if (item.type === 'food' || item.type === 'gold') newMonster[item.type] -= item.amount; // take weapon from monster
  else if (item.type === 'weapon') newMonster.weapon = WEAPON_LIST[0]; // take armor from monster
    else newMonster.armor = 'no armor';
  commit('setMonsters', newMonsters);
}

function monsterFlashOver(_ref9, index) {
  var state = _ref9.state,
      commit = _ref9.commit;
  // locate monster
  var level = state.playerLevel;
  var newMonsters = JSON.parse(JSON.stringify(state.monsters));
  var newMonster = newMonsters[level][index]; // turn off flash

  newMonster.flash = false;
  commit('setMonsters', newMonsters);
}

function resetMoves(_ref10, index) {
  var state = _ref10.state,
      commit = _ref10.commit,
      rootGetters = _ref10.rootGetters;
  var level = state.playerLevel;
  var newMonsters = JSON.parse(JSON.stringify(state.monsters));
  var monster = newMonsters[level][index];
  monster.movesRemain = rootGetters['dungeon-crawl/getMaxMoves'](monster);
  commit('setMonsters', newMonsters);
} // for monster index i, exaust moves, then attack


function monsterTurn(_x3, _x4) {
  return _monsterTurn.apply(this, arguments);
}

function _monsterTurn() {
  _monsterTurn = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(_ref11, mi) {
    var dispatch, getters, rootGetters, currentWorld, monsters, m, pL, mL, moves, attacks, target, deltaL, isByPlayer, moveRecursive, damage;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            moveRecursive = function _moveRecursive() {
              if (moves <= 0) return;
              if (isByPlayer(mL, pL)) return; // check moves

              for (var r = -1; r < 2; r++) {
                for (var c = -1; c < 2; c++) {
                  if (r === 0 && c === 0) continue;
                  target.push(deltaL(add(mL, {
                    row: r,
                    col: c
                  }), pL));
                }
              }

              target = target.sort(function (a, b) {
                return Math.abs(a.row) + Math.abs(a.col) - (Math.abs(b.row) + Math.abs(b.col));
              }).slice(0, 3).map(function (item) {
                return add(item, pL);
              }); // make best move

              for (var t = 0; t < 3; t++) {
                var _m2 = getters.isMonster(target[t]);

                if (currentWorld[target[t].row][target[t].col].type === 'floor' && !(_m2 === null || _m2 === void 0 ? void 0 : _m2.isAlive) && !rootGetters['dungeon-crawl/player/isPlayer'](target[t])) {
                  mL.row = target[t].row;
                  mL.col = target[t].col;
                  t = 3;
                }
              }

              target = [];
              moves--;
              sleep(200).then(moveRecursive);
            };

            isByPlayer = function _isByPlayer(a, b) {
              return Math.abs(deltaL(a, b).row) <= 1 && Math.abs(deltaL(a, b).col) <= 1;
            };

            deltaL = function _deltaL(a, b) {
              return {
                row: a.row - b.row,
                col: a.col - b.col
              };
            };

            dispatch = _ref11.dispatch, getters = _ref11.getters, rootGetters = _ref11.rootGetters;
            currentWorld = rootGetters['dungeon-crawl/world/currentWorld'];
            monsters = getters.currentMonsters;
            m = monsters[mi];
            pL = rootGetters['dungeon-crawl/player/locale'];
            mL = m.locale;
            moves = m.movesRemain;
            attacks = m.attacksRemain;
            target = [];
            moveRecursive(); // max out monster attacks

          case 13:
            if (!(moves > 0 && attacks > 0 && isByPlayer(mL, pL))) {
              _context2.next = 22;
              break;
            }

            _context2.next = 16;
            return dispatch('dungeon-crawl/battle', {
              index: mi,
              attacker: true
            }, {
              root: true
            });

          case 16:
            damage = _context2.sent;

            if (damage) {
              dispatch('dungeon-crawl/player/loseHealth', damage, {
                root: true
              });
            }

            moves--;
            attacks--;
            _context2.next = 13;
            break;

          case 22:
            dispatch('resetMoves', mi);

          case 23:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _monsterTurn.apply(this, arguments);
}
// CONCATENATED MODULE: ./src/state/index.js








 // import { WEAPON_LIST, MATERIAL_LIST, GEAR_LIST } from '../lib/constants';

/* harmony default export */ var src_state = ({
  modules: {
    app: app,
    player: player,
    world: world,
    market: state_market,
    monsters: state_monsters
  },
  getters: {
    getName: getName,
    getExpLevel: getExpLevel,
    getAttackPoints: getAttackPoints,
    getDefense: getDefense,
    getDodge: getDodge,
    getCarryAmount: getCarryAmount,
    getMarketPrice: getMarketPrice,
    getPlayerPrice: getPlayerPrice,
    getPrice: getPrice,
    getMaxMoves: getMaxMoves,
    getMaxAttacks: getMaxAttacks,
    getMaxHealth: getMaxHealth,
    getExpFromMonst: getExpFromMonst
  },
  actions: {
    battle: battle,
    restart: state_restart
  },
  namespaced: true
});
/*******************************************************************************
 *
 * GETTTERS
 *
 *******************************************************************************/

function getName()
/* state */
{
  return function (item) {
    if (item.type === 'weapon' || item.type === 'ring') // weapon
      return item.name;else if (item.type === 'gold') return '$' + item.amount;else if (item.type === 'food') return item.amount + ' oz meat';else if (!item.name) // gold/food/rock
      return item.type; // armor
    else return item.material + ' ' + item.name;
  };
} // returns char level


function getExpLevel(state) {
  return function (char) {
    if (char.type === 'player') {
      return player.getters.expLevel;
    }

    return state.player.level + 1;
  };
} // returns attack points of character


function getAttackPoints(state) {
  return function (char) {
    if (char.type === 'player') {
      return player.getters.attackPoints;
    }

    return Math.round((char.strength + char.intel) * ((char.weapon.attack + 10) / 10) * ((getExpLevel(state)(char) + 1) / 4));
  };
}

function getDefense()
/* state */
{
  return function (char) {
    if (char.type === 'player') {
      return player.getters.defense;
    }

    return (char.tenacity + char.strength + char.weapon.defense + char.armor.defense) / 100;
  };
}

function getDodge()
/* state */
{
  return function (char) {
    if (char.type === 'player') {
      return player.getters.dodge;
    } // speed, intel //TODO: account for ring of agility


    return char.speed * char.intel;
  };
}

function getCarryAmount()
/* state */
{
  return function (char) {
    var bagItems = char.bag.reduce(function (sum, item) {
      // loop through bag items
      if (item.type === 'food') return sum + Math.ceil(item.amount / 32); // 32 food takes 1 spot
      else if (item.type === 'gold') return sum + Math.ceil(item.amount / 100); // 100 gold takes 1 spot
        else return sum + item.size;
    }, 0); // other bag items take up 1 spot/size

    return bagItems;
  };
}

function getMarketPrice(state) {
  return function (item) {
    return getPrice(state)({
      item: item,
      dif: 1.25
    });
  };
}

function getPlayerPrice(state) {
  return function (item) {
    return getPrice(state)({
      item: item,
      dif: 0.75
    });
  };
}

function getPrice(state) {
  return function (_ref) {
    var item = _ref.item,
        dif = _ref.dif;
    var price;
    var rarity;

    if (item.type === 'food') {
      var pFood = state.player.bag.filter(function (thing) {
        return thing.type === 'food';
      })[0].amount;
      var mFood = item.amount;
      rarity = biggest(1, 8 - Math.round((pFood + mFood) / 25));
      price = rarity / 10;
      return Math.round(price * dif * 10) / 10;
    } else {
      price = item.rarity * 20;
      price = price * dif;
      if (dif > 0) price = Math.round(price * (1 - (state.player.intel - 1) * 0.05));
      return Math.round(price * 10) / 10;
    }
  };
} // given char returns max moves


function getMaxMoves()
/* state */
{
  return function (char) {
    if (char.type === 'player') {
      return player.getters.maxMoves;
    } // speed, tenacity


    return Math.round((char.speed + char.tenacity * 2) / 4);
  };
} // given char returns max moves


function getMaxAttacks()
/* state */
{
  return function (char) {
    if (char.type === 'player') {
      return player.getters.maxAttacks;
    }

    return smallest(Math.ceil((char.speed + char.weapon.speed) / 5), getMaxMoves(char));
  };
} // given char returns max health


function getMaxHealth(state) {
  return function (char) {
    if (char.type === 'player') {
      return player.getters.maxHealth;
    } //TODO: strength, tenacity, level


    return 30 + (char.strength + char.tenacity) * (getExpLevel(state)(char) + 1);
  };
} // given monster, returns that monsters experience points


function getExpFromMonst(state) {
  return function (monster) {
    return Math.round((monster.strength + monster.tenacity + monster.speed + monster.intel) * (getExpLevel(state)(monster) + 1) / 3);
  };
}
/*******************************************************************************
 *
 * ACTIONS
 *
 *******************************************************************************/
// returns damage from battle with monster[i].
// attacker is boolean that answers "is the monster the attacker?"


function battle(_ref2, _ref3) {
  var dispatch = _ref2.dispatch,
      rootGetters = _ref2.rootGetters;
  var index = _ref3.index,
      attacker = _ref3.attacker;
  var monster = rootGetters['dungeon-crawl/monsters/currentMonsters'][index];
  var attackPoints = attacker ? rootGetters['dungeon-crawl/getAttackPoints'](monster) : rootGetters['dungeon-crawl/player/attackPoints'];
  var defense = !attacker ? rootGetters['dungeon-crawl/getDefense'](monster) : rootGetters['dungeon-crawl/player/defense'];
  var dodge = !attacker ? rootGetters['dungeon-crawl/getDodge'](monster) : rootGetters['dungeon-crawl/player/dodge'];
  var damage = Math.round(attackPoints * (1 - defense));
  console.log(attackPoints + ' attack -' + defense + '% defense = ' + damage + ' damage'); //If defender dodges attacke, no damage is done

  if (getRand(0, 100) <= dodge) {
    damage = 0; //console.log("attack was dodged!")
  }

  var message = attacker ? !damage ? 'Dodge!' : "-".concat(damage, " health") : !damage ? 'Missed!' : "+".concat(damage, " attack!");
  dispatch('player/addPlayerAlert', message);
  return damage;
}

function state_restart(_ref4) {
  var dispatch = _ref4.dispatch;
  dispatch('app/restart');
  dispatch('market/restart');
  dispatch('monsters/restart');
  dispatch('world/restart');
  dispatch('player/restart');
}
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"e2d3ca34-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/StartScreen.vue?vue&type=template&id=2d5d203b&
var StartScreenvue_type_template_id_2d5d203b_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"start-screen"},[_vm._v(" Welcom to Dungeon Crawl "),_c('button',{on:{"click":function($event){return _vm.$emit('start')}}},[_vm._v("Start Game")])])}
var StartScreenvue_type_template_id_2d5d203b_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/StartScreen.vue?vue&type=template&id=2d5d203b&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/StartScreen.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
/* harmony default export */ var StartScreenvue_type_script_lang_js_ = ({
  props: {}
});
// CONCATENATED MODULE: ./src/components/StartScreen.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_StartScreenvue_type_script_lang_js_ = (StartScreenvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/StartScreen.vue?vue&type=style&index=0&lang=scss&
var StartScreenvue_type_style_index_0_lang_scss_ = __webpack_require__("9623");

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
        injectStyles.call(
          this,
          (options.functional ? this.parent : this).$root.$options.shadowRoot
        )
      }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

// CONCATENATED MODULE: ./src/components/StartScreen.vue






/* normalize component */

var component = normalizeComponent(
  components_StartScreenvue_type_script_lang_js_,
  StartScreenvue_type_template_id_2d5d203b_render,
  StartScreenvue_type_template_id_2d5d203b_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var StartScreen = (component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"e2d3ca34-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/SetupScreen.vue?vue&type=template&id=74a652a3&
var SetupScreenvue_type_template_id_74a652a3_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"setup-screen"},[_vm._v(" Setup the game ")])}
var SetupScreenvue_type_template_id_74a652a3_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/SetupScreen.vue?vue&type=template&id=74a652a3&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/SetupScreen.vue?vue&type=script&lang=js&
//
//
//
//
//
//
/* harmony default export */ var SetupScreenvue_type_script_lang_js_ = ({
  props: {}
});
// CONCATENATED MODULE: ./src/components/SetupScreen.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_SetupScreenvue_type_script_lang_js_ = (SetupScreenvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/SetupScreen.vue?vue&type=style&index=0&lang=scss&
var SetupScreenvue_type_style_index_0_lang_scss_ = __webpack_require__("fd14");

// CONCATENATED MODULE: ./src/components/SetupScreen.vue






/* normalize component */

var SetupScreen_component = normalizeComponent(
  components_SetupScreenvue_type_script_lang_js_,
  SetupScreenvue_type_template_id_74a652a3_render,
  SetupScreenvue_type_template_id_74a652a3_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var SetupScreen = (SetupScreen_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"e2d3ca34-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/GameScreen.vue?vue&type=template&id=603a6382&
var GameScreenvue_type_template_id_603a6382_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"game-screen"},[_c('Header'),_c('World'),(_vm.displayGear)?[_c('div',{staticClass:"left-sidebar-grid",attrs:{"id":"l-sidebar"}},[_c('Bag'),_c('Gear')],1)]:_vm._e(),(_vm.displayMarket)?[_c('div',{staticClass:"right-sidebar-grid",attrs:{"id":"r-sidebar"}},[_c('Market')],1)]:_vm._e(),_c('h1',{staticClass:"dungeon-title footer-grid"},[_vm._v(" "+_vm._s(_vm.isTownLevel ? 'Town' : 'Dungeon')+" Level "+_vm._s(_vm.level + 1)+" ")]),(_vm.toolTip)?_c('Inspector'):_vm._e()],2)}
var GameScreenvue_type_template_id_603a6382_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/GameScreen.vue?vue&type=template&id=603a6382&

// EXTERNAL MODULE: ./node_modules/vuex/dist/vuex.esm.js
var vuex_esm = __webpack_require__("2f62");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"e2d3ca34-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Header.vue?vue&type=template&id=8d3ecff8&
var Headervue_type_template_id_8d3ecff8_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"header"},[_c('button',{on:{"click":_vm.toggleGear}},[_vm._v(" Gear ")]),_c('div',[_vm._v(" Rarity Tolerance "),_c('input',{staticClass:"slider",attrs:{"type":"range","value":"1","min":"1","max":"10","step":"1"},on:{"input":_vm.changeRarity}})]),_c('div',[_vm._v(" Zoom "),_c('input',{staticClass:"slider",attrs:{"type":"range","value":"25","min":"10","max":"100","step":"1"},on:{"input":_vm.changeZoom}})]),_c('div',{staticClass:"flex-col"},[_c('div',[_vm._v("Level: "+_vm._s(_vm.expLevel))]),_c('div',[_vm._v("Exp: "+_vm._s(_vm.experience)+"/100")])]),_c('div',{staticClass:"flex-col"},[_c('div',[_vm._v("Health: "+_vm._s(_vm.health)+"/"+_vm._s(_vm.maxHealth))]),_c('div',[_vm._v("Gold: "+_vm._s(_vm.gold))])]),_c('div',{staticClass:"flex-col"},[_c('div',[_vm._v("Moves Remain: "+_vm._s(_vm.movesRemain))]),_c('div',[_vm._v("Attacks Remain: "+_vm._s(_vm.attacksRemain))])])])}
var Headervue_type_template_id_8d3ecff8_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/Header.vue?vue&type=template&id=8d3ecff8&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Header.vue?vue&type=script&lang=js&

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var Headervue_type_script_lang_js_ = ({
  components: {},
  props: {},
  data: function data() {
    return {};
  },
  computed: _objectSpread2(_objectSpread2({}, Object(vuex_esm["b" /* mapGetters */])('dungeon-crawl/app', ['rarityTolerance', 'displayGear', 'tileSize'])), Object(vuex_esm["b" /* mapGetters */])('dungeon-crawl/player', ['expLevel', 'experience', 'health', 'maxHealth', 'movesRemain', 'attacksRemain', 'bag', 'gold', 'food'])),
  watch: {},
  created: function created() {},
  mounted: function mounted() {},
  beforeDestroy: function beforeDestroy() {},
  methods: _objectSpread2(_objectSpread2({}, Object(vuex_esm["c" /* mapMutations */])('dungeon-crawl/app', ['setDisplayMarket', 'setRarityTolerance', 'setTileSize', 'setDisplayGear'])), {}, {
    toggleMarket: function toggleMarket() {
      this.setDisplayMarket(!this.displayMarket);
    },
    changeRarity: function changeRarity(e) {
      this.setRarityTolerance(e.target.value);
    },
    changeZoom: function changeZoom(e) {
      this.setTileSize(e.target.value);
    },
    toggleGear: function toggleGear() {
      this.setDisplayGear(!this.displayGear);
    }
  })
});
// CONCATENATED MODULE: ./src/components/Header.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Headervue_type_script_lang_js_ = (Headervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/Header.vue?vue&type=style&index=0&lang=scss&
var Headervue_type_style_index_0_lang_scss_ = __webpack_require__("5452");

// CONCATENATED MODULE: ./src/components/Header.vue






/* normalize component */

var Header_component = normalizeComponent(
  components_Headervue_type_script_lang_js_,
  Headervue_type_template_id_8d3ecff8_render,
  Headervue_type_template_id_8d3ecff8_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Header = (Header_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"e2d3ca34-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/World.vue?vue&type=template&id=73bd79f4&
var Worldvue_type_template_id_73bd79f4_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"world"},[_c('canvas',{attrs:{"id":"canvas","height":_vm.canvasHeight,"width":_vm.canvasWidth},on:{"click":_vm.handleClick}})])}
var Worldvue_type_template_id_73bd79f4_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/World.vue?vue&type=template&id=73bd79f4&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.regexp.exec.js
var es_regexp_exec = __webpack_require__("ac1f");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.replace.js
var es_string_replace = __webpack_require__("5319");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/World.vue?vue&type=script&lang=js&





//
//
//
//
//
//
//
//
//
//
//

var colors = {
  background: 'rgba(38, 38, 38, 1)',
  wall: 'rgba(136, 136, 136, 1)',
  floor: 'rgba(4, 128, 4, 1)',
  player: 'rgba(22, 1, 255, 1)',
  market: 'rgba(255, 165, 0, 1)',
  gate: 'rgba(128, 1, 128, 1)',
  monster: 'rgba(162, 42, 42, 1)',
  dead: 'rgba(128, 128, 0, 1)',
  flash: 'rgba(200, 200, 200, 1)'
}; // import Cell from './Cell.vue';
// import { add } from '../lib/utils';


/* harmony default export */ var Worldvue_type_script_lang_js_ = ({
  components: {// Cell,
  },
  props: {},
  data: function data() {
    return {
      canvas: null,
      ctx: null
    };
  },
  computed: _objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2({}, Object(vuex_esm["b" /* mapGetters */])('dungeon-crawl/app', ['grid', 'tileSize', 'dimensions'])), Object(vuex_esm["b" /* mapGetters */])('dungeon-crawl/world', ['currentWorld', 'isTownLevel'])), Object(vuex_esm["b" /* mapGetters */])('dungeon-crawl/player', ['locale', 'isPlayer', 'alerts', 'flash'])), Object(vuex_esm["b" /* mapGetters */])('dungeon-crawl/monsters', ['isMonster', 'currentMonsters'])), {}, {
    tileBorder: function tileBorder() {
      return this.tileSize * TILE_BORDER;
    },
    canvasHeight: function canvasHeight() {
      return this.dimensions.h;
    },
    canvasWidth: function canvasWidth() {
      return this.dimensions.w;
    },
    canvasCenter: function canvasCenter() {
      return {
        x: this.canvasWidth / 2,
        y: this.canvasHeight / 2
      };
    },
    cameraCoords: function cameraCoords() {
      return this.getWorldCoords(this.locale);
    },
    worldOffset: function worldOffset() {
      return {
        x: this.canvasCenter.x - this.cameraCoords.x,
        y: this.canvasCenter.y - this.cameraCoords.y
      };
    }
  }),
  watch: {},
  mounted: function mounted() {
    this.canvas = document.getElementById('canvas');
    this.ctx = this.canvas.getContext('2d');
    var vm = this; // no initial render without setTimeout

    setInterval(function () {
      return vm.drawWorld();
    }, 333);
  },
  methods: {
    getWorldCoords: function getWorldCoords(_ref) {
      var row = _ref.row,
          col = _ref.col;
      return {
        x: col * this.tileSize,
        y: row * this.tileSize
      };
    },
    getCanvasCoords: function getCanvasCoords(_ref2) {
      var row = _ref2.row,
          col = _ref2.col;
      var worldCoords = this.getWorldCoords({
        row: row,
        col: col
      });
      return {
        x: worldCoords.x + this.worldOffset.x,
        y: worldCoords.y + this.worldOffset.y
      };
    },
    handleClick: function handleClick() {},
    fog: function fog(color) {
      return color.replace('1)', '0.5)');
    },
    drawCell: function drawCell(_ref3) {
      var row = _ref3.row,
          col = _ref3.col;
      var tileCenter = this.getCanvasCoords({
        row: row,
        col: col
      }); // is cell completely out of canvas bounds?

      var left = tileCenter.x - this.tileSize / 2;
      if (left > this.canvasWidth) return;
      var right = tileCenter.x + this.tileSize / 2;
      if (right < 0) return;
      var top = tileCenter.y - this.tileSize / 2;
      if (top > this.canvasHeight) return;
      var bottom = tileCenter.y + this.tileSize / 2;
      if (bottom < 0) return;
      var cell = this.currentWorld[row][col]; // is it visible by the player?

      if (!cell.vis) return;
      var size = this.tileSize - this.tileBorder;
      var x = left;
      var y = top;
      var color = colors[cell.type];
      if (this.isPlayer({
        row: row,
        col: col
      })) color = this.flash ? colors.flash : colors.player;
      var monster = this.isMonster({
        row: row,
        col: col
      });
      if (monster === null || monster === void 0 ? void 0 : monster.isAlive) color = monster.hasFlash ? colors.flash : colors.monster;else if (monster === null || monster === void 0 ? void 0 : monster.hasGear) color = colors.dead;
      color = cell.fog < 1 ? color : this.fog(color);
      this.ctx.fillStyle = color;
      this.ctx.fillRect(x, y, size, size);
    },
    drawWorld: function drawWorld() {
      var vm = this; // draw background

      this.ctx.fillStyle = colors.background;
      this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
      this.currentWorld.forEach(function (row, ri) {
        row.forEach(function (col, ci) {
          vm.drawCell({
            row: ri,
            col: ci
          });
        });
      });
    }
  }
});
// CONCATENATED MODULE: ./src/components/World.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Worldvue_type_script_lang_js_ = (Worldvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/World.vue?vue&type=style&index=0&lang=scss&
var Worldvue_type_style_index_0_lang_scss_ = __webpack_require__("6a64");

// CONCATENATED MODULE: ./src/components/World.vue






/* normalize component */

var World_component = normalizeComponent(
  components_Worldvue_type_script_lang_js_,
  Worldvue_type_template_id_73bd79f4_render,
  Worldvue_type_template_id_73bd79f4_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var World = (World_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"e2d3ca34-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Bag.vue?vue&type=template&id=4a764bc0&
var Bagvue_type_template_id_4a764bc0_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"bag modal-box"},[_c('h3',[_vm._v("Rucksack "+_vm._s(_vm.carryAmount / _vm.carryCapacity))]),_c('ModalLabelRow',{attrs:{"box":"bag","is-market":_vm.displayMarket}}),_vm._l((_vm.bag),function(thing,i){return [_c('ModalContentRow',{key:i,attrs:{"index":i,"item":thing,"box":"bag","is-market":_vm.displayMarket}})]})],2)}
var Bagvue_type_template_id_4a764bc0_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/Bag.vue?vue&type=template&id=4a764bc0&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"e2d3ca34-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/ModalContentRow.vue?vue&type=template&id=7807c36f&
var ModalContentRowvue_type_template_id_7807c36f_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"modal-content-row"},[_c('div',{staticClass:"box"},[_vm._v(_vm._s(_vm.item.type))]),_c('div',{staticClass:"box"},[_vm._v(_vm._s(_vm.getName(_vm.item)))]),_c('div',{staticClass:"box center"},[_vm._v(" "+_vm._s(_vm.boxText)+" ")]),(_vm.isMarket && _vm.item)?[(_vm.box !== 'market')?[(!_vm.shouldDisplay)?_c('div',{staticClass:"box"}):_c('div',{staticClass:"box"},[_vm._v(_vm._s(_vm.getPlayerPrice(_vm.item)))])]:_c('div',{staticClass:"box"},[_vm._v("$"+_vm._s(_vm.getMarketPrice(_vm.item)))])]:[(!_vm.shouldDisplay)?_c('div',{staticClass:"box"}):(_vm.box === 'bag')?[(_vm.item.type === 'gold' || _vm.item.type === 'rock')?_c('div',{staticClass:"box"}):(
          (_vm.item.type === 'food' && _vm.item.amount >= 0) || _vm.item.type !== 'food'
        )?[(
            _vm.body.find(function (i) { return i.type === _vm.item.type; }) &&
              _vm.body.find(function (i) { return i.type === _vm.item.type; }).name !== 'fist'
          )?_c('div',{staticClass:"box"}):_c('button',{staticClass:"box center",on:{"click":function (e) { return _vm.armItemInner({ label: e.target.innerHTML, index: _vm.index }); }}},[_vm._v(" "+_vm._s(_vm.item.type === 'food' ? 'Eat' : 'Eqp')+" ")])]:_vm._e()]:(_vm.box === 'body')?[(_vm.carryCapacity - _vm.carryAmount >= _vm.item.size)?_c('button',{staticClass:"box",on:{"click":function($event){return _vm.storeItemInner(_vm.index)}}},[_vm._v(" Bag ")]):_c('div',{staticClass:"box"})]:_vm._e()],(_vm.isMarket)?[(_vm.box === 'market')?[(_vm.getMarketPrice(_vm.item) <= _vm.gold)?_c('button',{staticClass:"box",on:{"click":function($event){return _vm.buyItem(_vm.index)}}},[_vm._v(" Buy ")]):_c('div',{staticClass:"box"})]:(!_vm.shouldDisplay)?_c('div',{staticClass:"box"}):_c('button',{staticClass:"box",on:{"click":function($event){return _vm.sellItem(_vm.index)}}},[_vm._v("Sell")])]:(!_vm.shouldDisplay)?_c('div',{staticClass:"box"}):_c('button',{staticClass:"box",on:{"click":function($event){return _vm.dropItemInner(_vm.index)}}},[_vm._v("x")])],2)}
var ModalContentRowvue_type_template_id_7807c36f_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/ModalContentRow.vue?vue&type=template&id=7807c36f&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.number.constructor.js
var es_number_constructor = __webpack_require__("a9e3");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/ModalContentRow.vue?vue&type=script&lang=js&



//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var ModalContentRowvue_type_script_lang_js_ = ({
  props: {
    index: {
      type: Number,
      required: true
    },
    item: {
      type: Object,
      required: true
    },
    box: {
      type: String,
      default: 'market'
    },
    isMarket: {
      type: Boolean,
      default: false
    }
  },
  data: function data() {
    return {};
  },
  computed: _objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2({}, Object(vuex_esm["b" /* mapGetters */])('dungeon-crawl', ['getPlayerPrice', 'getMarketPrice', 'getName'])), Object(vuex_esm["b" /* mapGetters */])('dungeon-crawl/player', ['level', 'carryCapacity', 'carryAmount', 'goldCarryCapacity', 'hunger', 'body', 'bag', 'gold'])), Object(vuex_esm["b" /* mapGetters */])('dungeon-crawl/market', ['currentMarket'])), {}, {
    shouldDisplay: function shouldDisplay() {
      if (!this.item) return false;

      if (this.isMarket && this.box === 'market') {
        if (this.getMarketPrice(this.item) >= this.gold) return false;else return !(this.item.type === 'food' && this.item.amount <= 0);
      } else if ((this.item.type === 'gold' || this.item.type === 'food') && this.amount <= 0) {
        return false;
      } else if (this.item.type === 'weapon' && this.item.name === 'fist') return false;else if ((this.item.type === 'gold' || this.item.type === 'rock') && this.isMarket) return false;else if (this.item.type === 'ring' || this.item.name === 'wedding band') return false;

      return true;
    },
    boxText: function boxText() {
      return this.item.type === 'gold' ? Math.ceil(this.item.amount / 100) : this.item.type === 'food' ? Math.ceil(this.item.amount / 20) : this.item.size || '';
    }
  }),
  methods: _objectSpread2(_objectSpread2(_objectSpread2({}, Object(vuex_esm["a" /* mapActions */])('dungeon-crawl/player', ['pickUpItem', 'storeItem', 'removeItem', 'pullItem', 'dropItem', 'armItem'])), Object(vuex_esm["a" /* mapActions */])('dungeon-crawl/market', ['buyFromMarket', 'sellToMarket'])), {}, {
    sellItem: function sellItem(index) {
      var vm = this;
      var removeOrPullItem = vm.box === 'body' ? vm.removeItem : vm.pullItem;
      removeOrPullItem({
        index: index,
        amount: 1
      }).then(vm.dropItem).then(function (item) {
        return vm.sellToMarket({
          item: item
        });
      }) // item player is selling
      .then(function (item) {
        return vm.pickUpItem({
          item: item
        });
      }) // item (gold) market is paying
      .then(vm.storeItem);
    },
    buyItem: function buyItem(index) {
      var vm = this;
      var gold = this.getMarketPrice(this.item);
      this.pullItem({
        index: 0,
        amount: gold
      }).then(vm.dropItem).then(function () {
        return vm.buyFromMarket({
          gold: gold,
          index: index
        });
      }).then(function (item) {
        return vm.pickUpItem({
          item: item
        });
      }).then(vm.storeItem);
    },
    armItemInner: function armItemInner(_ref) {
      var index = _ref.index,
          label = _ref.label;
      var vm = this;
      var foodInHand = this.bag[index].amount;
      var amount = label === 'Eat' ? smallest(vm.hunger, foodInHand) : 1;
      this.pullItem({
        index: index,
        amount: amount
      }).then(vm.armItem);
    },
    storeItemInner: function storeItemInner(index) {
      var vm = this;
      this.removeItem({
        index: index
      }).then(vm.storeItem);
    },
    dropItemInner: function dropItemInner(index) {
      var vm = this;
      var removeOrPullItem = vm.box === 'body' ? vm.removeItem : vm.pullItem;
      removeOrPullItem({
        index: index,
        amount: 1
      }).then(vm.dropItem);
    }
  })
});
// CONCATENATED MODULE: ./src/components/ModalContentRow.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_ModalContentRowvue_type_script_lang_js_ = (ModalContentRowvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/ModalContentRow.vue?vue&type=style&index=0&lang=scss&
var ModalContentRowvue_type_style_index_0_lang_scss_ = __webpack_require__("79a1");

// CONCATENATED MODULE: ./src/components/ModalContentRow.vue






/* normalize component */

var ModalContentRow_component = normalizeComponent(
  components_ModalContentRowvue_type_script_lang_js_,
  ModalContentRowvue_type_template_id_7807c36f_render,
  ModalContentRowvue_type_template_id_7807c36f_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var ModalContentRow = (ModalContentRow_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"e2d3ca34-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/ModalLabelRow.vue?vue&type=template&id=662e6e49&
var ModalLabelRowvue_type_template_id_662e6e49_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"modal-label-row"},[_c('div',{staticClass:"label"},[_vm._v("Type")]),_c('div',{staticClass:"label"},[_vm._v("Item")]),_c('div',{staticClass:"label center"},[_vm._v("Bulk")]),_c('div',{staticClass:"label center"},[_vm._v(_vm._s(_vm.isMarket ? 'Price' : 'Act'))]),_c('div',{staticClass:"label center"},[_vm._v(" "+_vm._s(_vm.isMarket ? (_vm.box === 'market' ? 'Buy' : 'Sell') : 'Drop')+" ")])])}
var ModalLabelRowvue_type_template_id_662e6e49_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/ModalLabelRow.vue?vue&type=template&id=662e6e49&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/ModalLabelRow.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var ModalLabelRowvue_type_script_lang_js_ = ({
  props: {
    isMarket: {
      type: Boolean,
      default: false
    },
    box: {
      type: String,
      required: true
    }
  }
});
// CONCATENATED MODULE: ./src/components/ModalLabelRow.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_ModalLabelRowvue_type_script_lang_js_ = (ModalLabelRowvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/ModalLabelRow.vue?vue&type=style&index=0&lang=scss&
var ModalLabelRowvue_type_style_index_0_lang_scss_ = __webpack_require__("3420");

// CONCATENATED MODULE: ./src/components/ModalLabelRow.vue






/* normalize component */

var ModalLabelRow_component = normalizeComponent(
  components_ModalLabelRowvue_type_script_lang_js_,
  ModalLabelRowvue_type_template_id_662e6e49_render,
  ModalLabelRowvue_type_template_id_662e6e49_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var ModalLabelRow = (ModalLabelRow_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Bag.vue?vue&type=script&lang=js&

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var Bagvue_type_script_lang_js_ = ({
  components: {
    ModalContentRow: ModalContentRow,
    ModalLabelRow: ModalLabelRow
  },
  computed: _objectSpread2(_objectSpread2({}, Object(vuex_esm["b" /* mapGetters */])('dungeon-crawl/app', ['displayMarket'])), Object(vuex_esm["b" /* mapGetters */])('dungeon-crawl/player', ['bag', 'carryAmount', 'carryCapacity']))
});
// CONCATENATED MODULE: ./src/components/Bag.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Bagvue_type_script_lang_js_ = (Bagvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/Bag.vue?vue&type=style&index=0&lang=scss&
var Bagvue_type_style_index_0_lang_scss_ = __webpack_require__("bb78");

// CONCATENATED MODULE: ./src/components/Bag.vue






/* normalize component */

var Bag_component = normalizeComponent(
  components_Bagvue_type_script_lang_js_,
  Bagvue_type_template_id_4a764bc0_render,
  Bagvue_type_template_id_4a764bc0_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Bag = (Bag_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"e2d3ca34-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Gear.vue?vue&type=template&id=3c4760d1&
var Gearvue_type_template_id_3c4760d1_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"gear modal-box"},[_c('h3',[_vm._v("Armed Gear")]),_c('ModalLabelRow',{attrs:{"box":"body","is-market":_vm.displayMarket}}),_vm._l((_vm.body),function(thing,i){return [_c('ModalContentRow',{key:i,attrs:{"index":i,"item":thing,"box":"body","is-market":_vm.displayMarket}})]})],2)}
var Gearvue_type_template_id_3c4760d1_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/Gear.vue?vue&type=template&id=3c4760d1&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Gear.vue?vue&type=script&lang=js&

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var Gearvue_type_script_lang_js_ = ({
  components: {
    ModalContentRow: ModalContentRow,
    ModalLabelRow: ModalLabelRow
  },
  computed: _objectSpread2(_objectSpread2({}, Object(vuex_esm["b" /* mapGetters */])('dungeon-crawl/app', ['displayMarket'])), Object(vuex_esm["b" /* mapGetters */])('dungeon-crawl/player', ['body']))
});
// CONCATENATED MODULE: ./src/components/Gear.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Gearvue_type_script_lang_js_ = (Gearvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/Gear.vue?vue&type=style&index=0&lang=scss&
var Gearvue_type_style_index_0_lang_scss_ = __webpack_require__("48b9");

// CONCATENATED MODULE: ./src/components/Gear.vue






/* normalize component */

var Gear_component = normalizeComponent(
  components_Gearvue_type_script_lang_js_,
  Gearvue_type_template_id_3c4760d1_render,
  Gearvue_type_template_id_3c4760d1_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Gear = (Gear_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"e2d3ca34-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Market.vue?vue&type=template&id=5a47bb9d&
var Marketvue_type_template_id_5a47bb9d_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"market modal-box"},[_c('h3',[_vm._v("Market")]),_c('ModalLabelRow',{attrs:{"box":"market","is-market":""}}),_vm._l((_vm.currentMarket.bag),function(thing,i){return [_c('ModalContentRow',{key:i,attrs:{"index":i,"item":thing,"box":"market","is-market":""}})]})],2)}
var Marketvue_type_template_id_5a47bb9d_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/Market.vue?vue&type=template&id=5a47bb9d&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Market.vue?vue&type=script&lang=js&

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ var Marketvue_type_script_lang_js_ = ({
  components: {
    ModalContentRow: ModalContentRow,
    ModalLabelRow: ModalLabelRow
  },
  props: {},
  data: function data() {
    return {};
  },
  computed: _objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2({}, Object(vuex_esm["b" /* mapGetters */])('dungeon-crawl/player', ['level'])), Object(vuex_esm["b" /* mapGetters */])('dungeon-crawl/market', ['currentMarket'])), Object(vuex_esm["b" /* mapGetters */])('dungeon-crawl/app', ['displayMarket'])), {}, {
    marketId: function marketId() {
      return this.level / TOWN_EVERY;
    },
    bag: function bag() {
      return this.market[this.marketId];
    }
  }),
  watch: {},
  created: function created() {},
  mounted: function mounted() {},
  beforeDestroy: function beforeDestroy() {},
  methods: {}
});
// CONCATENATED MODULE: ./src/components/Market.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Marketvue_type_script_lang_js_ = (Marketvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/Market.vue?vue&type=style&index=0&lang=scss&
var Marketvue_type_style_index_0_lang_scss_ = __webpack_require__("dc15");

// CONCATENATED MODULE: ./src/components/Market.vue






/* normalize component */

var Market_component = normalizeComponent(
  components_Marketvue_type_script_lang_js_,
  Marketvue_type_template_id_5a47bb9d_render,
  Marketvue_type_template_id_5a47bb9d_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Market = (Market_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"e2d3ca34-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Inspector.vue?vue&type=template&id=52ae70ae&
var Inspectorvue_type_template_id_52ae70ae_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"inspector"},[(!_vm.item.type)?_c('div',{staticClass:"modal-box",style:(("top: " + _vm.top + "; left: " + _vm.left + " "))},[_vm._m(0),_vm._l((_vm.item.bag),function(thing,i){return _c('div',{key:i,staticClass:"market-inspect-modal-row"},[_c('div',{staticClass:"box"},[_vm._v("{getName(thing)}")]),_c('div',{staticClass:"box center"},[_vm._v(" "+_vm._s(thing.amount ? thing.amount : '1')+" ")]),_c('div',{staticClass:"box center"},[_vm._v(" "+_vm._s(thing.type === 'gold' ? null : ("$" + (_vm.getMarketPrice(thing))))+" ")])])})],2):(_vm.isGate)?_c('div',{staticClass:"modal-box test",style:(("top: " + _vm.top + "; left: " + _vm.left + " "))},[_c('h3',[_vm._v(_vm._s(_vm.item.type))]),_c('div',[_vm._v("To level "+_vm._s(_vm.item.toLevel + 1))])]):(_vm.isPlayer)?_c('div',{staticClass:"modal-box test",style:(("top: " + _vm.top + "; left: " + _vm.left + " "))},[_c('Stats',{attrs:{"char":"player"}})],1):(_vm.isMonster && _vm.isMonster.isAlive)?_c('div',{staticClass:"modal-box test",style:(("top: " + _vm.top + "; left: " + _vm.left + " "))},[_c('Stats',{attrs:{"char":_vm.item}})],1):(_vm.isMonster && !_vm.isMonster.isAlive && !_vm.isMonster.hasGear)?_c('div',{staticClass:"modal-box test",style:(("top: " + _vm.top + "; left: " + _vm.left + " "))},[_c('h3',[_vm._v("Dead "+_vm._s(_vm.item.type))]),(_vm.item.food > 0)?_c('div',[_vm._v("Food: "+_vm._s(_vm.item.food))]):_vm._e(),(_vm.item.gold > 0)?_c('div',[_vm._v("Gold: "+_vm._s(_vm.item.gold))]):_vm._e(),(_vm.item.armor.name === 'no armor')?_c('div',[_vm._v(" Armor: "+_vm._s(_vm.item.armor.material)+" "+_vm._s(_vm.item.armor.name)+" ")]):_vm._e(),(_vm.item.weapon.name !== 'fist')?_c('div',[_vm._v(" Weapon: "+_vm._s(_vm.item.weapon.name)+" ")]):_vm._e()]):_vm._e()])}
var Inspectorvue_type_template_id_52ae70ae_staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"market-inspect-modal-row"},[_c('div',{staticClass:"label"},[_vm._v("Item")]),_c('div',{staticClass:"label center"},[_vm._v("Qty")]),_c('div',{staticClass:"label center"},[_vm._v("Price")])])}]


// CONCATENATED MODULE: ./src/components/Inspector.vue?vue&type=template&id=52ae70ae&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"e2d3ca34-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Stats.vue?vue&type=template&id=1ee077b8&
var Statsvue_type_template_id_1ee077b8_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"stats"},[(_vm.char.type === 'player')?_c('h3',[_vm._v(" "+_vm._s(_vm.char.name)+": level "+_vm._s(_vm.getExpLevel(_vm.char))+" ")]):_c('h3',[_vm._v(_vm._s(_vm.char.type)+": level "+_vm._s(_vm.getExpLevel(_vm.char)))]),_c('h4',[_vm._v("Primary Stats:")]),_c('li',[_vm._v("strength: "+_vm._s(_vm.char.strength))]),_c('li',[_vm._v("speed: "+_vm._s(_vm.char.speed))]),_c('li',[_vm._v("tenacity: "+_vm._s(_vm.char.tenacity))]),_c('li',[_vm._v("intelligence: "+_vm._s(_vm.char.intel))]),(_vm.char.type === 'player')?_c('li',[_vm._v("experience: "+_vm._s(_vm.char.expLevel))]):_vm._e(),_c('h4',[_vm._v("Secondary Stats:")]),_c('li',[_vm._v("health: "+_vm._s(_vm.char.health)+"/"+_vm._s(_vm.getMaxHealth(_vm.char)))]),_c('li',[_vm._v("attack: "+_vm._s(_vm.getAttackPoints(_vm.char)))]),_c('li',[_vm._v("defense: "+_vm._s(_vm.getDefense(_vm.char) * 100)+"%")]),_c('li',[_vm._v("dodge: "+_vm._s(_vm.getDodge(_vm.char))+"%")]),_c('li',[_vm._v("moves/turn: "+_vm._s(_vm.getMaxMoves(_vm.char)))]),_c('li',[_vm._v("attacks/turn: "+_vm._s(_vm.getMaxAttacks(_vm.char)))])])}
var Statsvue_type_template_id_1ee077b8_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/Stats.vue?vue&type=template&id=1ee077b8&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Stats.vue?vue&type=script&lang=js&

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var Statsvue_type_script_lang_js_ = ({
  props: {
    char: {
      type: Object,
      default: null
    }
  },
  computed: _objectSpread2({}, Object(vuex_esm["b" /* mapGetters */])('dungeon-crawl', ['getAttackPoints', 'getMaxHealth', 'getExpLevel', 'getMaxMoves', 'getMaxAttacks', 'getDodge', 'getDefense']))
});
// CONCATENATED MODULE: ./src/components/Stats.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Statsvue_type_script_lang_js_ = (Statsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/Stats.vue?vue&type=style&index=0&lang=scss&
var Statsvue_type_style_index_0_lang_scss_ = __webpack_require__("bc97");

// CONCATENATED MODULE: ./src/components/Stats.vue






/* normalize component */

var Stats_component = normalizeComponent(
  components_Statsvue_type_script_lang_js_,
  Statsvue_type_template_id_1ee077b8_render,
  Statsvue_type_template_id_1ee077b8_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Stats = (Stats_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Inspector.vue?vue&type=script&lang=js&

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var Inspectorvue_type_script_lang_js_ = ({
  components: {
    Stats: Stats
  },
  props: {},
  data: function data() {
    return {
      item: null,
      top: 0,
      left: 0
    };
  },
  computed: _objectSpread2(_objectSpread2(_objectSpread2({}, Object(vuex_esm["b" /* mapGetters */])('dungeon-crawl', ['getMarketPrice'])), Object(vuex_esm["b" /* mapGetters */])('dungeon-crawl/app', ['toolTip', 'toolTipObject', 'mouseX', 'mouseY'])), {}, {
    isMonster: function isMonster() {
      return this.$store.getters['dungeon-crawl/monsters/isMonster'](this.item);
    },
    isPlayer: function isPlayer() {
      return this.item.type === 'player';
    },
    isGate: function isGate() {
      return this.item.type === 'gate';
    }
  }),
  watch: {
    toolTipObject: function toolTipObject() {
      this.item = this.toolTipObject;
      this.top = parseInt(this.mouseY) - 0 + 'px';
      this.left = parseInt(this.mouseX) - 50 + 'px';
    }
  },
  created: function created() {},
  mounted: function mounted() {},
  beforeDestroy: function beforeDestroy() {}
});
// CONCATENATED MODULE: ./src/components/Inspector.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Inspectorvue_type_script_lang_js_ = (Inspectorvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/Inspector.vue?vue&type=style&index=0&lang=scss&
var Inspectorvue_type_style_index_0_lang_scss_ = __webpack_require__("6253");

// CONCATENATED MODULE: ./src/components/Inspector.vue






/* normalize component */

var Inspector_component = normalizeComponent(
  components_Inspectorvue_type_script_lang_js_,
  Inspectorvue_type_template_id_52ae70ae_render,
  Inspectorvue_type_template_id_52ae70ae_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Inspector = (Inspector_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/GameScreen.vue?vue&type=script&lang=js&




//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//








/* harmony default export */ var GameScreenvue_type_script_lang_js_ = ({
  components: {
    Header: Header,
    World: World,
    Bag: Bag,
    Gear: Gear,
    Market: Market,
    Inspector: Inspector
  },
  props: {},
  data: function data() {
    return {
      displaySetByMarket: false
    };
  },
  computed: _objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2({}, Object(vuex_esm["b" /* mapGetters */])('dungeon-crawl', ['getExpFromMonst'])), Object(vuex_esm["b" /* mapGetters */])('dungeon-crawl/app', ['displayGear', 'displayMarket', 'toolTip'])), Object(vuex_esm["b" /* mapGetters */])('dungeon-crawl/world', ['currentWorld', 'isTownLevel', 'levels', 'getLevel'])), Object(vuex_esm["b" /* mapGetters */])('dungeon-crawl/player', ['level', 'locale', 'movesRemain', 'attacksRemain', 'health'])), Object(vuex_esm["b" /* mapGetters */])('dungeon-crawl/monsters', ['currentMonsters', 'isMonster'])),
  watch: {
    health: function health(_health) {
      if (_health <= 0) this.restartGame();
    },
    movesRemain: function movesRemain(val) {
      var _this = this;

      if (val > 0) return; // check to see if any monsters on non-foggy squares

      var countMonst = 0;
      var currentWorld = this.currentWorld;
      var currentMonsters = this.currentMonsters;
      currentMonsters.reduce(function (mList, m, i) {
        if (currentWorld[m.locale.row][m.locale.col].fog === 0 && m.health > 0) {
          countMonst++;
          mList.push(i);
          return mList;
        } else return mList;
      }, []).forEach(function (mi, i) {
        return sleep((i + 1) * 200).then(function () {
          _this.monsterTurn(mi);
        });
      });
      var delay = countMonst ? 200 + countMonst * 200 : 0;
      sleep(delay).then(function () {
        _this.resetPlayerMoves();
      });
    }
  },
  mounted: function mounted() {
    window.addEventListener('keydown', this.handleKeypress);
  },
  beforeDestroy: function beforeDestroy() {
    window.removeEventListener('keydown', this.handleKeypress);
  },
  methods: _objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2(_objectSpread2({}, Object(vuex_esm["a" /* mapActions */])('dungeon-crawl', ['battle', 'restart'])), Object(vuex_esm["a" /* mapActions */])('dungeon-crawl/player', ['changeLevel', 'movePlayer', 'gainExperience', 'useAttack', 'pickUpItems'])), Object(vuex_esm["a" /* mapActions */])('dungeon-crawl/player', {
    resetPlayerMoves: 'resetMoves'
  })), Object(vuex_esm["a" /* mapActions */])('dungeon-crawl/world', ['updateVisibility', 'addNewLevel'])), Object(vuex_esm["a" /* mapActions */])('dungeon-crawl/monsters', ['monsterTurn', 'populateLevel', 'monsterLoseHealth'])), Object(vuex_esm["a" /* mapActions */])('dungeon-crawl/market', ['populateMarket'])), Object(vuex_esm["c" /* mapMutations */])('dungeon-crawl/app', ['setDisplayMarket', 'setDisplayGear'])), {}, {
    movePlayerAction: function movePlayerAction(target) {
      this.movePlayer(target);
      this.updateVisibility(target);
    },
    restartGame: function restartGame() {
      this.$emit('restart');
      this.restart();
    },
    handleKeypress: function handleKeypress(e) {
      var vm = this;

      function getCoords(fromLevel, toLevel) {
        var nextLevel = vm.getLevel(toLevel);
        var coords;

        for (var r = 1; r < nextLevel.length - 1; r++) {
          for (var c = 1; c < nextLevel[1].length - 1; c++) {
            if (nextLevel[r][c].type === 'gate') {
              // console.log('found a gate!!! at ' + r + ',' + c);
              if (nextLevel[r][c].toLevel === fromLevel) {
                coords = {
                  row: r,
                  col: c
                }; // reset c and r to exit loop

                c = nextLevel[1].length;
                r = nextLevel.length; //console.log("placing player at gate at "+coords.row+" "+coords.col)
              }
            }
          }
        } // console.log('Level: ' + toLevel + ' coords: ' + coords);


        return coords;
      } //console.log("keypress: "+e.keyCode);


      var currCell = this.locale; // players current coordinates

      var currentMonsters = this.currentMonsters; // current dungeon monsters list

      var currentWorld = this.currentWorld;
      var tarCell;
      var kp = e.keyCode || e.which;
      var dir; // [row direction, col direction]

      switch (kp) {
        case 55:
          // 7
          dir = {
            row: -1,
            col: -1
          };
          break;

        case 38: // up arrow

        case 56:
          // 8
          dir = {
            row: -1,
            col: 0
          };
          break;

        case 57:
          // 9
          dir = {
            row: -1,
            col: 1
          };
          break;

        case 37: // left arrow

        case 52:
          // 4
          dir = {
            row: 0,
            col: -1
          };
          break;

        case 39: // right arrow

        case 54:
          // 6
          dir = {
            row: 0,
            col: 1
          };
          break;

        case 49:
          // 1
          dir = {
            row: 1,
            col: -1
          };
          break;

        case 40: // down arrow

        case 50:
          // 2
          dir = {
            row: 1,
            col: 0
          };
          break;

        case 51:
          // 3
          dir = {
            row: 1,
            col: 1
          };
          break;
        // REST/SKIP MOVE

        case 32: // space

        case 82: // R

        case 53:
          // 5
          dir = {
            row: 0,
            col: 0
          };
          break;

        default:
          dir = undefined;
      }

      if (!dir) return; // targetCell is potential future location of player

      tarCell = {
        row: currCell.row + dir.row,
        col: currCell.col + dir.col
      }; // does player have any moves left???

      if (this.movesRemain === 0) {
        //console.log("no more moves");
        return;
      } // if leaving market...


      if (currentWorld[currCell.row][currCell.col].type === 'market') {
        if (currentWorld[tarCell.row][tarCell.col].type !== 'market') this.setDisplayMarket(false);
        if (this.displaySetByMarket) this.setDisplayGear(false);
      }

      var monster = this.isMonster(tarCell); // if targetCell is a wall...

      if (currentWorld[tarCell.row][tarCell.col].type === 'wall') {//console.log("you can't walk through walls!");
      } // if targetCell is a gate...
      else if (currentWorld[tarCell.row][tarCell.col].type === 'gate') {
          var fromLevel = this.level;
          var toLevel = currentWorld[tarCell.row][tarCell.col].toLevel;
          this.movePlayerAction(tarCell); // move player onto gate

          this.changeLevel(toLevel); // change players level/location

          if (toLevel >= this.levels) {
            // if this level does not exist then...
            // console.log('creating level ' + toLevel); //
            this.addNewLevel(toLevel); // create new level

            this.populateLevel(toLevel); // populate new level with monsters

            this.isTownLevel ? this.populateMarket(toLevel) : null;
          }

          this.movePlayerAction(getCoords(fromLevel, toLevel));
        } // if targetCell is a market...
        else if (currentWorld[tarCell.row][tarCell.col].type === 'market') {
            // console.log('lets barter!');
            this.movePlayerAction(tarCell);

            if (!this.displayMarket) {
              this.setDisplayMarket(true);
            }

            if (!this.displayGear) {
              this.displaySetByMarket = true;
              this.setDisplayGear(true);
            } else {
              this.displaySetByMarket = false;
            }
          } // if targetCell is a monster...
          else if (monster === null || monster === void 0 ? void 0 : monster.isAlive) {
              var mi = monster.index; // check to see if player has any attacks left

              if (this.attacksRemain >= 1) {
                this.useAttack(); //console.log("Attack "+currentMonsters[m].type+"!");

                this.battle({
                  index: mi,
                  attacker: false
                }).then(function (damage) {
                  var _vm$isMonster;

                  vm.monsterLoseHealth({
                    index: mi,
                    damage: damage
                  });
                  var monsterKilled = !((_vm$isMonster = vm.isMonster(mi)) === null || _vm$isMonster === void 0 ? void 0 : _vm$isMonster.isAlive);

                  if (monsterKilled) {
                    //console.log("earn experience "+getExpFromMonst(currentMonsters[m]))
                    //vm.props.addPlayerAlert(("+"+getExpFromMonst(currentMonsters[m])+" experience"))
                    vm.gainExperience(vm.getExpFromMonst(currentMonsters[mi]));
                  }
                });
              } else this.movePlayerAction(currCell); //no more attacks: 'move' player to square already on

            } // if targetCell is dead monster
            else if (!(monster === null || monster === void 0 ? void 0 : monster.isAlive) && (monster === null || monster === void 0 ? void 0 : monster.hasGear)) {
                //console.log("pick up items");
                this.pickUpItems(tarCell);
                this.movePlayerAction(tarCell);
              } // if targetCell is open ground...
              else if (currentWorld[tarCell.row][tarCell.col].type === 'floor') {
                  this.movePlayerAction(tarCell);
                }
    }
  })
});
// CONCATENATED MODULE: ./src/components/GameScreen.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_GameScreenvue_type_script_lang_js_ = (GameScreenvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/GameScreen.vue?vue&type=style&index=0&lang=scss&
var GameScreenvue_type_style_index_0_lang_scss_ = __webpack_require__("6cf5");

// CONCATENATED MODULE: ./src/components/GameScreen.vue






/* normalize component */

var GameScreen_component = normalizeComponent(
  components_GameScreenvue_type_script_lang_js_,
  GameScreenvue_type_template_id_603a6382_render,
  GameScreenvue_type_template_id_603a6382_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var GameScreen = (GameScreen_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/App.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//




/* harmony default export */ var Appvue_type_script_lang_js_ = ({
  components: {
    StartScreen: StartScreen,
    SetupScreen: SetupScreen,
    GameScreen: GameScreen
  },
  data: function data() {
    return {
      screen: 'start' // 'start', 'setup', 'game'

    };
  },
  computed: {},
  created: function created() {
    this.$store.registerModule('dungeon-crawl', src_state);
  },
  mounted: function mounted() {
    var vm = this; // Set up global resize listener so set browser window dimensions - { h, w }

    function resizeFinished() {
      getWindowSize();
    }

    function getWindowSize() {
      var vpWidth = window.innerWidth;
      var vpHeight = window.innerHeight;
      var h = Math.floor(vpHeight);
      var w = Math.floor(vpWidth);
      vm.$store.commit('dungeon-crawl/app/setDimensions', {
        h: h,
        w: w
      });
    }

    var timout;

    window.onresize = function () {
      clearTimeout(timout);
      timout = setTimeout(resizeFinished, 20);
    };

    getWindowSize();
  }
});
// CONCATENATED MODULE: ./src/App.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_Appvue_type_script_lang_js_ = (Appvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/App.vue?vue&type=style&index=0&lang=scss&
var Appvue_type_style_index_0_lang_scss_ = __webpack_require__("5c0b");

// CONCATENATED MODULE: ./src/App.vue






/* normalize component */

var App_component = normalizeComponent(
  src_Appvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var App = (App_component.exports);
// CONCATENATED MODULE: ./src/main.js


/* harmony default export */ var main = (App);
// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (main);



/***/ }),

/***/ "fb4f":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("e917");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__("499e").default
var update = add("02db1f3e", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ "fb6a":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__("23e7");
var isObject = __webpack_require__("861d");
var isArray = __webpack_require__("e8b5");
var toAbsoluteIndex = __webpack_require__("23cb");
var toLength = __webpack_require__("50c4");
var toIndexedObject = __webpack_require__("fc6a");
var createProperty = __webpack_require__("8418");
var wellKnownSymbol = __webpack_require__("b622");
var arrayMethodHasSpeciesSupport = __webpack_require__("1dde");
var arrayMethodUsesToLength = __webpack_require__("ae40");

var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('slice');
var USES_TO_LENGTH = arrayMethodUsesToLength('slice', { ACCESSORS: true, 0: 0, 1: 2 });

var SPECIES = wellKnownSymbol('species');
var nativeSlice = [].slice;
var max = Math.max;

// `Array.prototype.slice` method
// https://tc39.github.io/ecma262/#sec-array.prototype.slice
// fallback for not array-like ES3 strings and DOM objects
$({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT || !USES_TO_LENGTH }, {
  slice: function slice(start, end) {
    var O = toIndexedObject(this);
    var length = toLength(O.length);
    var k = toAbsoluteIndex(start, length);
    var fin = toAbsoluteIndex(end === undefined ? length : end, length);
    // inline `ArraySpeciesCreate` for usage native `Array#slice` where it's possible
    var Constructor, result, n;
    if (isArray(O)) {
      Constructor = O.constructor;
      // cross-realm fallback
      if (typeof Constructor == 'function' && (Constructor === Array || isArray(Constructor.prototype))) {
        Constructor = undefined;
      } else if (isObject(Constructor)) {
        Constructor = Constructor[SPECIES];
        if (Constructor === null) Constructor = undefined;
      }
      if (Constructor === Array || Constructor === undefined) {
        return nativeSlice.call(O, k, fin);
      }
    }
    result = new (Constructor === undefined ? Array : Constructor)(max(fin - k, 0));
    for (n = 0; k < fin; k++, n++) if (k in O) createProperty(result, n, O[k]);
    result.length = n;
    return result;
  }
});


/***/ }),

/***/ "fc6a":
/***/ (function(module, exports, __webpack_require__) {

// toObject with fallback for non-array-like ES3 strings
var IndexedObject = __webpack_require__("44ad");
var requireObjectCoercible = __webpack_require__("1d80");

module.exports = function (it) {
  return IndexedObject(requireObjectCoercible(it));
};


/***/ }),

/***/ "fd14":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SetupScreen_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("b7de");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SetupScreen_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SetupScreen_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_vue_style_loader_index_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SetupScreen_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "fdbc":
/***/ (function(module, exports) {

// iterable DOM collections
// flag - `iterable` interface - 'entries', 'keys', 'values', 'forEach' methods
module.exports = {
  CSSRuleList: 0,
  CSSStyleDeclaration: 0,
  CSSValueList: 0,
  ClientRectList: 0,
  DOMRectList: 0,
  DOMStringList: 0,
  DOMTokenList: 1,
  DataTransferItemList: 0,
  FileList: 0,
  HTMLAllCollection: 0,
  HTMLCollection: 0,
  HTMLFormElement: 0,
  HTMLSelectElement: 0,
  MediaList: 0,
  MimeTypeArray: 0,
  NamedNodeMap: 0,
  NodeList: 1,
  PaintRequestList: 0,
  Plugin: 0,
  PluginArray: 0,
  SVGLengthList: 0,
  SVGNumberList: 0,
  SVGPathSegList: 0,
  SVGPointList: 0,
  SVGStringList: 0,
  SVGTransformList: 0,
  SourceBufferList: 0,
  StyleSheetList: 0,
  TextTrackCueList: 0,
  TextTrackList: 0,
  TouchList: 0
};


/***/ }),

/***/ "fdbf":
/***/ (function(module, exports, __webpack_require__) {

var NATIVE_SYMBOL = __webpack_require__("4930");

module.exports = NATIVE_SYMBOL
  // eslint-disable-next-line no-undef
  && !Symbol.sham
  // eslint-disable-next-line no-undef
  && typeof Symbol.iterator == 'symbol';


/***/ }),

/***/ "fea9":
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__("da84");

module.exports = global.Promise;


/***/ })

/******/ });
});
//# sourceMappingURL=dungeon-crawl.umd.js.map