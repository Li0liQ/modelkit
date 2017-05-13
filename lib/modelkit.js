(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("lodash/map"), require("escape-string-regexp"), require("lodash/filter"), require("lodash/forEach"), require("lodash/reduce"), require("fs"), require("lodash/isPlainObject"), require("path"), require("grasp"), require("lodash/each"), require("lodash/flatten"), require("lodash/union"), require("mkdirp"), require("yarn/lib/lockfile/parse"), require("yarn/lib/lockfile/stringify"));
	else if(typeof define === 'function' && define.amd)
		define("modelkit", ["lodash/map", "escape-string-regexp", "lodash/filter", "lodash/forEach", "lodash/reduce", "fs", "lodash/isPlainObject", "path", "grasp", "lodash/each", "lodash/flatten", "lodash/union", "mkdirp", "yarn/lib/lockfile/parse", "yarn/lib/lockfile/stringify"], factory);
	else if(typeof exports === 'object')
		exports["modelkit"] = factory(require("lodash/map"), require("escape-string-regexp"), require("lodash/filter"), require("lodash/forEach"), require("lodash/reduce"), require("fs"), require("lodash/isPlainObject"), require("path"), require("grasp"), require("lodash/each"), require("lodash/flatten"), require("lodash/union"), require("mkdirp"), require("yarn/lib/lockfile/parse"), require("yarn/lib/lockfile/stringify"));
	else
		root["modelkit"] = factory(root["lodash/map"], root["escape-string-regexp"], root["lodash/filter"], root["lodash/forEach"], root["lodash/reduce"], root["fs"], root["lodash/isPlainObject"], root["path"], root["grasp"], root["lodash/each"], root["lodash/flatten"], root["lodash/union"], root["mkdirp"], root["yarn/lib/lockfile/parse"], root["yarn/lib/lockfile/stringify"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_0__, __WEBPACK_EXTERNAL_MODULE_1__, __WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_3__, __WEBPACK_EXTERNAL_MODULE_4__, __WEBPACK_EXTERNAL_MODULE_5__, __WEBPACK_EXTERNAL_MODULE_6__, __WEBPACK_EXTERNAL_MODULE_7__, __WEBPACK_EXTERNAL_MODULE_18__, __WEBPACK_EXTERNAL_MODULE_19__, __WEBPACK_EXTERNAL_MODULE_20__, __WEBPACK_EXTERNAL_MODULE_21__, __WEBPACK_EXTERNAL_MODULE_22__, __WEBPACK_EXTERNAL_MODULE_23__, __WEBPACK_EXTERNAL_MODULE_24__) {
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 11);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("lodash/map");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("escape-string-regexp");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("lodash/filter");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("lodash/forEach");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("lodash/reduce");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("lodash/isPlainObject");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _modelkitJsonLoader = __webpack_require__(13);

Object.defineProperty(exports, 'ModelkitJsonLoader', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_modelkitJsonLoader).default;
  }
});

var _modelkitJsLoader = __webpack_require__(12);

Object.defineProperty(exports, 'ModelkitJsLoader', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_modelkitJsLoader).default;
  }
});

var _modelkitYarnLoader = __webpack_require__(14);

Object.defineProperty(exports, 'ModelkitYarnLoader', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_modelkitYarnLoader).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _reduce2 = __webpack_require__(4);

var _reduce3 = _interopRequireDefault(_reduce2);

var _flatten2 = __webpack_require__(20);

var _flatten3 = _interopRequireDefault(_flatten2);

var _union2 = __webpack_require__(21);

var _union3 = _interopRequireDefault(_union2);

var _each2 = __webpack_require__(19);

var _each3 = _interopRequireDefault(_each2);

var _filter2 = __webpack_require__(2);

var _filter3 = _interopRequireDefault(_filter2);

var _forEach2 = __webpack_require__(3);

var _forEach3 = _interopRequireDefault(_forEach2);

var _map2 = __webpack_require__(0);

var _map3 = _interopRequireDefault(_map2);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _path = __webpack_require__(7);

var _path2 = _interopRequireDefault(_path);

var _fs = __webpack_require__(5);

var _fs2 = _interopRequireDefault(_fs);

var _mkdirp = __webpack_require__(22);

var _mkdirp2 = _interopRequireDefault(_mkdirp);

var _flagUtils = __webpack_require__(17);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Modelkit = function () {
    function Modelkit() {
        _classCallCheck(this, Modelkit);
    }

    _createClass(Modelkit, [{
        key: 'run',
        value: function run(config) {
            var _this = this;

            var context = {
                config: config
            };

            context.files = this.readFiles(config);
            this.assignLoadersToFiles(config.loaders, context.files);
            this.readFileFlags(context.files);

            context.flags = this.getAllFlags(context.files);

            // Extract permutations into a plugin.
            var freezeFlags = this.getFreezeFlags(config.plugins);
            context.flagPermutations = (0, _flagUtils.sortFlags)((0, _flagUtils.getBooleanFlagPermutations)(context.flags, freezeFlags));
            context.flagPermutationDirectories = (0, _map3.default)(context.flagPermutations, function (flagObj, flagIndex) {
                return _this.getDirectoryByFlag({ flagObj: flagObj, flagIndex: flagIndex, config: config });
            });

            (0, _mkdirp2.default)(config.outputDir);

            (0, _forEach3.default)((0, _filter3.default)(config.plugins.filter(function (i) {
                return i.getManifest;
            })), function (i) {
                return i.getManifest(context);
            });

            this.applyFlagsToAllFilesAndWrite(config, context);
        }
    }, {
        key: 'applyFlagsToAllFilesAndWrite',
        value: function applyFlagsToAllFilesAndWrite(config, context) {
            var _this2 = this;

            (0, _forEach3.default)(context.flagPermutations, function (flagObj, flagIndex) {
                var flagCopy = Object.assign({}, flagObj);
                // TODO: allow plugins to provide additional replacements in filename
                var flagDirectory = _this2.getDirectoryByFlag({ flagObj: flagObj, flagIndex: flagIndex, config: config });
                var outputDir = _path2.default.join(config.outputDir, flagDirectory);

                (0, _mkdirp2.default)(outputDir);

                (0, _forEach3.default)(context.files, function (file) {
                    if (file.loader) {
                        file.source = file.loader.getFileSourceWithFlags(file, flagCopy);
                    }

                    _fs2.default.writeFileSync(_path2.default.join(outputDir, file.fileName), file.source);
                });
            });
        }
    }, {
        key: 'getDirectoryByFlag',
        value: function getDirectoryByFlag(_ref) {
            var flagIndex = _ref.flagIndex,
                config = _ref.config;

            // TODO: allow plugins to provide additional replacements in filename
            var result = config.flagDirName.replace('[id]', flagIndex);
            return result;
        }
    }, {
        key: 'readFileFlags',
        value: function readFileFlags(files) {
            (0, _each3.default)(files, function (file) {
                if (file.loader) {
                    file.flags = file.loader.readFileFlags(file);
                }
            });
        }
    }, {
        key: 'getAllFlags',
        value: function getAllFlags(files) {
            // we support only boolean flags for now
            // hence union and returning flag names only works fine
            var flags = (0, _union3.default)((0, _flatten3.default)((0, _map3.default)(files, function (file) {
                return file.flags;
            })));
            return flags;
        }
    }, {
        key: 'readFiles',
        value: function readFiles(config) {
            var filePathList = (0, _filter3.default)((0, _map3.default)(_fs2.default.readdirSync(config.inputDir), function (fileName) {
                return _path2.default.join(config.inputDir, fileName);
            }), function (filePath) {
                return _fs2.default.statSync(filePath).isFile();
            });

            var fileList = (0, _map3.default)(filePathList, function (filePath) {
                var source = _fs2.default.readFileSync(filePath, 'utf8');
                var fileName = _path2.default.basename(filePath);

                return {
                    fileName: fileName,
                    filePath: filePath,
                    source: source
                };
            });

            return fileList;
        }
    }, {
        key: 'getFreezeFlags',
        value: function getFreezeFlags(input) {
            // TODO: check if there are different values assigned for the same flags.
            // Throw if there are.
            var freezeFlags = (0, _map3.default)((0, _filter3.default)(input, function (i) {
                return i.getFreezeFlags;
            }), function (i) {
                return i.getFreezeFlags();
            });

            var uniqueFreezeFlags = (0, _reduce3.default)(freezeFlags, function (agg, i) {
                return Object.assign(agg, i);
            }, {});

            return uniqueFreezeFlags;
        }
    }, {
        key: 'assignLoadersToFiles',
        value: function assignLoadersToFiles(loaders, files) {
            (0, _each3.default)(files, function (file) {
                return (0, _each3.default)(loaders, function (loader) {
                    if (loader.test.test(file.fileName)) {
                        if (file.loader) {
                            throw new Error('File ' + file.fileName + ' has more than one loader matching it. Please, fix config.');
                        }

                        file.loader = loader;
                    }
                });
            });
        }
    }]);

    return Modelkit;
}();

exports.default = Modelkit;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _modelkitFreezePlugin = __webpack_require__(15);

Object.defineProperty(exports, 'ModelkitFreezePlugin', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_modelkitFreezePlugin).default;
  }
});

var _modelkitManifestPlugin = __webpack_require__(16);

Object.defineProperty(exports, 'ModelkitManifestPlugin', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_modelkitManifestPlugin).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _modelkit = __webpack_require__(9);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_modelkit).default;
  }
});

var _plugins = __webpack_require__(10);

Object.keys(_plugins).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _plugins[key];
    }
  });
});

var _loaders = __webpack_require__(8);

Object.keys(_loaders).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _loaders[key];
    }
  });
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _map2 = __webpack_require__(0);

var _map3 = _interopRequireDefault(_map2);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _grasp = __webpack_require__(18);

var _grasp2 = _interopRequireDefault(_grasp);

var _modelkitBaseLoader = __webpack_require__(25);

var _modelkitBaseLoader2 = _interopRequireDefault(_modelkitBaseLoader);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var JsLoader = function (_BaseLoader) {
    _inherits(JsLoader, _BaseLoader);

    function JsLoader(config) {
        _classCallCheck(this, JsLoader);

        var _this = _possibleConstructorReturn(this, (JsLoader.__proto__ || Object.getPrototypeOf(JsLoader)).call(this, config));

        _this.flagFunction = config.flagFunction;
        return _this;
    }

    _createClass(JsLoader, [{
        key: 'readFileFlags',
        value: function readFileFlags(file) {
            var functionSearchPattern = this.flagFunction + '(_str, _bool)';
            var foundResult = _grasp2.default.search('equery', functionSearchPattern, file.source);
            var flags = (0, _map3.default)(foundResult, function (i) {
                return i.arguments[0].value;
            });

            return flags;
        }
    }, {
        key: 'getFileSourceWithFlags',
        value: function getFileSourceWithFlags(file, flags) {
            var functionSearchPattern = this.flagFunction + '(_str, _bool)';
            var result = _grasp2.default.replace('equery', functionSearchPattern, function (getRaw, node) {
                return JSON.stringify(flags[node.arguments[0].value]);
            }, file.source);

            return result;
        }
    }]);

    return JsLoader;
}(_modelkitBaseLoader2.default);

exports.default = JsLoader;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _filter2 = __webpack_require__(2);

var _filter3 = _interopRequireDefault(_filter2);

var _reduce2 = __webpack_require__(4);

var _reduce3 = _interopRequireDefault(_reduce2);

var _map2 = __webpack_require__(0);

var _map3 = _interopRequireDefault(_map2);

var _isPlainObject2 = __webpack_require__(6);

var _isPlainObject3 = _interopRequireDefault(_isPlainObject2);

var _forEach2 = __webpack_require__(3);

var _forEach3 = _interopRequireDefault(_forEach2);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _modelkitBaseLoader = __webpack_require__(25);

var _modelkitBaseLoader2 = _interopRequireDefault(_modelkitBaseLoader);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// No array support atm.
var deleteProperty = function deleteProperty(obj, pattern) {
    (0, _forEach3.default)(pattern, function (value, key) {
        var subObj = obj[key];

        if (typeof subObj === 'undefined') {
            return;
        }

        if ((0, _isPlainObject3.default)(value) && (0, _isPlainObject3.default)(subObj)) {
            deleteProperty(subObj, value);
        } else {
            delete obj[key];
        }
    });
};

var updateProperty = function updateProperty(obj, pattern) {
    (0, _forEach3.default)(pattern, function (value, key) {
        var subObj = obj[key];

        if (typeof subObj === 'undefined') {
            obj[key] = value;

            return;
        }

        if ((0, _isPlainObject3.default)(value) && (0, _isPlainObject3.default)(subObj)) {
            updateProperty(subObj, value);
        } else {
            obj[key] = value;
        }
    });
};

var JsonLoader = function (_BaseLoader) {
    _inherits(JsonLoader, _BaseLoader);

    function JsonLoader(config) {
        _classCallCheck(this, JsonLoader);

        var _this = _possibleConstructorReturn(this, (JsonLoader.__proto__ || Object.getPrototypeOf(JsonLoader)).call(this, config));

        _this.changes = config.changes;
        return _this;
    }

    _createClass(JsonLoader, [{
        key: 'readFileFlags',
        value: function readFileFlags() {
            var flags = (0, _map3.default)(this.changes, function (i) {
                return i.flag;
            });

            return flags;
        }
    }, {
        key: 'getFileSourceWithFlags',
        value: function getFileSourceWithFlags(file, flags) {
            var _this2 = this;

            var json = JSON.parse(file.source);

            json = (0, _reduce3.default)(flags, function (agg, value, key) {
                if (!value) {
                    return agg;
                }

                var changes = (0, _filter3.default)(_this2.changes, function (i) {
                    return i.flag === key;
                })[0];

                if (typeof changes === 'undefined') {
                    return agg;
                }

                if (changes.delete) {
                    deleteProperty(agg, changes.delete);
                }

                if (changes.update) {
                    updateProperty(agg, changes.update);
                }

                return agg;
            }, json);

            var result = JSON.stringify(json, null, 2);

            return result;
        }
    }]);

    return JsonLoader;
}(_modelkitBaseLoader2.default);

exports.default = JsonLoader;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _filter2 = __webpack_require__(2);

var _filter3 = _interopRequireDefault(_filter2);

var _reduce2 = __webpack_require__(4);

var _reduce3 = _interopRequireDefault(_reduce2);

var _map2 = __webpack_require__(0);

var _map3 = _interopRequireDefault(_map2);

var _isPlainObject2 = __webpack_require__(6);

var _isPlainObject3 = _interopRequireDefault(_isPlainObject2);

var _forEach2 = __webpack_require__(3);

var _forEach3 = _interopRequireDefault(_forEach2);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _parse = __webpack_require__(23);

var _parse2 = _interopRequireDefault(_parse);

var _stringify = __webpack_require__(24);

var _stringify2 = _interopRequireDefault(_stringify);

var _modelkitBaseLoader = __webpack_require__(25);

var _modelkitBaseLoader2 = _interopRequireDefault(_modelkitBaseLoader);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// No array support atm.
var deleteProperty = function deleteProperty(obj, pattern) {
    (0, _forEach3.default)(pattern, function (value, key) {
        var subObj = obj[key];

        if (typeof subObj === 'undefined') {
            return;
        }

        if ((0, _isPlainObject3.default)(value) && (0, _isPlainObject3.default)(subObj)) {
            deleteProperty(subObj, value);
        } else {
            delete obj[key];
        }
    });
};

var updateProperty = function updateProperty(obj, pattern) {
    (0, _forEach3.default)(pattern, function (value, key) {
        var subObj = obj[key];

        if (typeof subObj === 'undefined') {
            obj[key] = value;

            return;
        }

        if ((0, _isPlainObject3.default)(value) && (0, _isPlainObject3.default)(subObj)) {
            updateProperty(subObj, value);
        } else {
            obj[key] = value;
        }
    });
};

var YarnLoader = function (_BaseLoader) {
    _inherits(YarnLoader, _BaseLoader);

    function YarnLoader(config) {
        _classCallCheck(this, YarnLoader);

        var _this = _possibleConstructorReturn(this, (YarnLoader.__proto__ || Object.getPrototypeOf(YarnLoader)).call(this, config));

        _this.changes = config.changes;
        return _this;
    }

    _createClass(YarnLoader, [{
        key: 'readFileFlags',
        value: function readFileFlags() {
            var flags = (0, _map3.default)(this.changes, function (i) {
                return i.flag;
            });

            return flags;
        }
    }, {
        key: 'getFileSourceWithFlags',
        value: function getFileSourceWithFlags(file, flags) {
            var _this2 = this;

            var source = file.source.replace(/\r\n/g, '\n'); // important for yarn parser
            var json = (0, _parse2.default)(source, file.filePath);

            json = (0, _reduce3.default)(flags, function (agg, value, key) {
                if (!value) {
                    return agg;
                }

                var changes = (0, _filter3.default)(_this2.changes, function (i) {
                    return i.flag === key;
                })[0];

                if (typeof changes === 'undefined') {
                    return agg;
                }

                if (changes.delete) {
                    deleteProperty(agg, changes.delete);
                }

                if (changes.update) {
                    updateProperty(agg, changes.update);
                }

                return agg;
            }, json);

            var result = (0, _stringify2.default)(json, false);

            return result;
        }
    }]);

    return YarnLoader;
}(_modelkitBaseLoader2.default);

exports.default = YarnLoader;

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var FreezePlugin = function () {
    function FreezePlugin(config) {
        _classCallCheck(this, FreezePlugin);

        this.config = config;
    }

    _createClass(FreezePlugin, [{
        key: "getFreezeFlags",
        value: function getFreezeFlags() {
            return this.config.flags;
        }
    }]);

    return FreezePlugin;
}();

exports.default = FreezePlugin;

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _map2 = __webpack_require__(0);

var _map3 = _interopRequireDefault(_map2);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _fs = __webpack_require__(5);

var _fs2 = _interopRequireDefault(_fs);

var _path = __webpack_require__(7);

var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ManifestPlugin = function () {
    function ManifestPlugin(config) {
        _classCallCheck(this, ManifestPlugin);

        this.config = config;
    }

    _createClass(ManifestPlugin, [{
        key: 'getManifest',
        value: function getManifest(state) {
            var featureFlagsToDirectoryMap = (0, _map3.default)(state.flagPermutations, function (flagObj, flagIndex) {
                return {
                    flags: flagObj,
                    directory: state.flagPermutationDirectories[flagIndex]
                };
            });

            _fs2.default.writeFileSync(_path2.default.join(state.config.outputDir, this.config.file), JSON.stringify(featureFlagsToDirectoryMap, null, 2));
        }
    }]);

    return ManifestPlugin;
}();

exports.default = ManifestPlugin;

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var getFlagBits = exports.getFlagBits = function getFlagBits(flagList, flags) {
    var flagBits = 0;

    for (var i = 0; i < flagList.length; i += 1) {
        if (flags[flagList[i]]) {
            /* eslint-disable no-bitwise */
            flagBits += 1 << i;
        }
    }

    return flagBits;
};

var getBooleanFlagPermutations = exports.getBooleanFlagPermutations = function getBooleanFlagPermutations(flagList) {
    var freezeFlags = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    var currentFlags = Object.assign({}, freezeFlags);
    var resultList = [];

    var changeFlagByIndex = function changeFlagByIndex(flagIndex) {
        if (flagIndex >= flagList.length) {
            resultList.push(Object.assign({}, currentFlags));
        } else {
            var flag = flagList[flagIndex];
            if (typeof freezeFlags[flag] !== 'undefined') {
                changeFlagByIndex(flagIndex + 1);
            } else {
                currentFlags[flag] = false;
                changeFlagByIndex(flagIndex + 1);
                currentFlags[flag] = true;
                changeFlagByIndex(flagIndex + 1);
            }
        }
    };

    changeFlagByIndex(0);

    return resultList;
};

// TODO: sort flags
var sortFlags = exports.sortFlags = function sortFlags(i) {
    return i;
};

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = require("grasp");

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = require("lodash/each");

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = require("lodash/flatten");

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = require("lodash/union");

/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = require("mkdirp");

/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = require("yarn/lib/lockfile/parse");

/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = require("yarn/lib/lockfile/stringify");

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _map2 = __webpack_require__(0);

var _map3 = _interopRequireDefault(_map2);

var _escapeStringRegexp = __webpack_require__(1);

var _escapeStringRegexp2 = _interopRequireDefault(_escapeStringRegexp);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var BaseLoader = function BaseLoader(config) {
    _classCallCheck(this, BaseLoader);

    if (config.test) {
        this.test = config.test;
    } else {
        this.test = new RegExp((0, _map3.default)(config.files, _escapeStringRegexp2.default).join('|'));
    }
};

exports.default = BaseLoader;

/***/ })
/******/ ]);
});
//# sourceMappingURL=modelkit.js.map