(function(FuseBox){FuseBox.$fuse$=FuseBox;
FuseBox.pkg("modelkit", {}, function(___scope___){
___scope___.file("index.js", function(exports, require, module, __filename, __dirname){

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _modelkit = require('./modelkit');

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_modelkit).default;
  }
});

var _plugins = require('./plugins');

Object.keys(_plugins).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _plugins[key];
    }
  });
});

var _loaders = require('./loaders');

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
});
___scope___.file("modelkit.js", function(exports, require, module, __filename, __dirname){

'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _filter2 = require('lodash/filter');

var _filter3 = _interopRequireDefault(_filter2);

var _flatten2 = require('lodash/flatten');

var _flatten3 = _interopRequireDefault(_flatten2);

var _union2 = require('lodash/union');

var _union3 = _interopRequireDefault(_union2);

var _each2 = require('lodash/each');

var _each3 = _interopRequireDefault(_each2);

var _isFunction2 = require('lodash/isFunction');

var _isFunction3 = _interopRequireDefault(_isFunction2);

var _forEach2 = require('lodash/forEach');

var _forEach3 = _interopRequireDefault(_forEach2);

var _map2 = require('lodash/map');

var _map3 = _interopRequireDefault(_map2);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _mkdirp = require('mkdirp');

var _mkdirp2 = _interopRequireDefault(_mkdirp);

var _flagUtils = require('./utils/flag-utils');

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

            this.triggerPluginsMethod('beforeStart', context);

            context.files = this.readFiles(config);
            this.assignLoadersToFiles(config.loaders, context.files);
            this.readFileFlags(context.files);

            context.flags = this.getAllFlags(context.files);

            // Extract permutations into a plugin. Maybe.
            context.flagPermutations = (0, _flagUtils.sortFlags)((0, _flagUtils.getBooleanFlagPermutations)(context.flags, config.freezeFlags));

            context.flagPermutationDirectories = (0, _map3.default)(context.flagPermutations, function (flagObj, flagIndex) {
                return _this.getDirectoryByFlag({ flagObj: flagObj, flagIndex: flagIndex, config: config });
            });

            (0, _mkdirp2.default)(config.outputDir);

            this.applyFlagsToAllFilesAndWrite(config, context);

            this.triggerPluginsMethod('afterEnd', context);
        }
    }, {
        key: 'triggerPluginsMethod',
        value: function triggerPluginsMethod(methodName, context) {
            (0, _forEach3.default)(context.plugins, function (plugin) {
                if ((0, _isFunction3.default)(plugin[methodName])) {
                    plugin[methodName](context);
                }
            });
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
});
___scope___.file("utils/flag-utils.js", function(exports, require, module, __filename, __dirname){

'use strict';

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
});
___scope___.file("plugins/index.js", function(exports, require, module, __filename, __dirname){

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _modelkitManifestPlugin = require('./modelkit-manifest-plugin');

Object.defineProperty(exports, 'ModelkitManifestPlugin', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_modelkitManifestPlugin).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
});
___scope___.file("plugins/modelkit-manifest-plugin.js", function(exports, require, module, __filename, __dirname){

'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _map2 = require('lodash/map');

var _map3 = _interopRequireDefault(_map2);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ManifestPlugin = function () {
    function ManifestPlugin(config) {
        _classCallCheck(this, ManifestPlugin);

        this.config = config;
    }

    _createClass(ManifestPlugin, [{
        key: 'afterEnd',
        value: function afterEnd(context) {
            var featureFlagsToDirectoryMap = (0, _map3.default)(context.flagPermutations, function (flagObj, flagIndex) {
                return {
                    flags: flagObj,
                    directory: context.flagPermutationDirectories[flagIndex]
                };
            });

            _fs2.default.writeFileSync(_path2.default.join(context.config.outputDir, this.config.file), JSON.stringify(featureFlagsToDirectoryMap, null, 2));
        }
    }]);

    return ManifestPlugin;
}();

exports.default = ManifestPlugin;
});
___scope___.file("loaders/index.js", function(exports, require, module, __filename, __dirname){

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _modelkitJsonLoader = require('./modelkit-json-loader');

Object.defineProperty(exports, 'ModelkitJsonLoader', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_modelkitJsonLoader).default;
  }
});

var _modelkitJsLoader = require('./modelkit-js-loader');

Object.defineProperty(exports, 'ModelkitJsLoader', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_modelkitJsLoader).default;
  }
});

var _modelkitYarnLoader = require('./modelkit-yarn-loader');

Object.defineProperty(exports, 'ModelkitYarnLoader', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_modelkitYarnLoader).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
});
___scope___.file("loaders/modelkit-json-loader.js", function(exports, require, module, __filename, __dirname){

'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _filter2 = require('lodash/filter');

var _filter3 = _interopRequireDefault(_filter2);

var _reduce2 = require('lodash/reduce');

var _reduce3 = _interopRequireDefault(_reduce2);

var _map2 = require('lodash/map');

var _map3 = _interopRequireDefault(_map2);

var _isPlainObject2 = require('lodash/isPlainObject');

var _isPlainObject3 = _interopRequireDefault(_isPlainObject2);

var _forEach2 = require('lodash/forEach');

var _forEach3 = _interopRequireDefault(_forEach2);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _modelkitBaseLoader = require('./modelkit-base-loader');

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
});
___scope___.file("loaders/modelkit-base-loader.js", function(exports, require, module, __filename, __dirname){

'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _map2 = require('lodash/map');

var _map3 = _interopRequireDefault(_map2);

var _escapeStringRegexp = require('escape-string-regexp');

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
});
___scope___.file("loaders/modelkit-js-loader.js", function(exports, require, module, __filename, __dirname){

'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _map2 = require('lodash/map');

var _map3 = _interopRequireDefault(_map2);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _grasp = require('grasp');

var _grasp2 = _interopRequireDefault(_grasp);

var _modelkitBaseLoader = require('./modelkit-base-loader');

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
});
___scope___.file("loaders/modelkit-yarn-loader.js", function(exports, require, module, __filename, __dirname){

'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _filter2 = require('lodash/filter');

var _filter3 = _interopRequireDefault(_filter2);

var _reduce2 = require('lodash/reduce');

var _reduce3 = _interopRequireDefault(_reduce2);

var _map2 = require('lodash/map');

var _map3 = _interopRequireDefault(_map2);

var _isPlainObject2 = require('lodash/isPlainObject');

var _isPlainObject3 = _interopRequireDefault(_isPlainObject2);

var _forEach2 = require('lodash/forEach');

var _forEach3 = _interopRequireDefault(_forEach2);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _parse = require('yarn/lib/lockfile/parse');

var _parse2 = _interopRequireDefault(_parse);

var _stringify = require('yarn/lib/lockfile/stringify');

var _stringify2 = _interopRequireDefault(_stringify);

var _modelkitBaseLoader = require('./modelkit-base-loader');

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
});
});
FuseBox.expose([{"alias":"*","pkg":"modelkit/index.js"}]);
FuseBox.main("modelkit/index.js");
FuseBox.defaultPackageName = "modelkit";
})
(function(e){function r(e){var r=e.charCodeAt(0),n=e.charCodeAt(1);if((d||58!==n)&&(r>=97&&r<=122||64===r)){if(64===r){var t=e.split("/"),i=t.splice(2,t.length).join("/");return[t[0]+"/"+t[1],i||void 0]}var o=e.indexOf("/");if(o===-1)return[e];var a=e.substring(0,o),u=e.substring(o+1);return[a,u]}}function n(e){return e.substring(0,e.lastIndexOf("/"))||"./"}function t(){for(var e=[],r=0;r<arguments.length;r++)e[r]=arguments[r];for(var n=[],t=0,i=arguments.length;t<i;t++)n=n.concat(arguments[t].split("/"));for(var o=[],t=0,i=n.length;t<i;t++){var a=n[t];a&&"."!==a&&(".."===a?o.pop():o.push(a))}return""===n[0]&&o.unshift(""),o.join("/")||(o.length?"/":".")}function i(e){var r=e.match(/\.(\w{1,})$/);return r&&r[1]?e:e+".js"}function o(e){if(d){var r,n=document,t=n.getElementsByTagName("head")[0];/\.css$/.test(e)?(r=n.createElement("link"),r.rel="stylesheet",r.type="text/css",r.href=e):(r=n.createElement("script"),r.type="text/javascript",r.src=e,r.async=!0),t.insertBefore(r,t.firstChild)}}function a(e,r){for(var n in e)e.hasOwnProperty(n)&&r(n,e[n])}function u(e){return{server:require(e)}}function f(e,n){var o=n.path||"./",a=n.pkg||"default",f=r(e);if(f&&(o="./",a=f[0],n.v&&n.v[a]&&(a=a+"@"+n.v[a]),e=f[1]),e)if(126===e.charCodeAt(0))e=e.slice(2,e.length),o="./";else if(!d&&(47===e.charCodeAt(0)||58===e.charCodeAt(1)))return u(e);var s=h[a];if(!s){if(d&&"electron"!==m.target)throw"Package not found "+a;return u(a+(e?"/"+e:""))}e=e?e:"./"+s.s.entry;var l,c=t(o,e),p=i(c),v=s.f[p];return!v&&p.indexOf("*")>-1&&(l=p),v||l||(p=t(c,"/","index.js"),v=s.f[p],v||(p=c+".js",v=s.f[p]),v||(v=s.f[c+".jsx"]),v||(p=c+"/index.jsx",v=s.f[p])),{file:v,wildcard:l,pkgName:a,versions:s.v,filePath:c,validPath:p}}function s(e,r){if(!d)return r(/\.(js|json)$/.test(e)?p.require(e):"");var n=new XMLHttpRequest;n.onreadystatechange=function(){if(4==n.readyState)if(200==n.status){var i=n.getResponseHeader("Content-Type"),o=n.responseText;/json/.test(i)?o="module.exports = "+o:/javascript/.test(i)||(o="module.exports = "+JSON.stringify(o));var a=t("./",e);m.dynamic(a,o),r(m.import(e,{}))}else console.error(e,"not found on request"),r(void 0)},n.open("GET",e,!0),n.send()}function l(e,r){var n=g[e];if(n)for(var t in n){var i=n[t].apply(null,r);if(i===!1)return!1}}function c(e,r){if(void 0===r&&(r={}),58===e.charCodeAt(4)||58===e.charCodeAt(5))return o(e);var t=f(e,r);if(t.server)return t.server;var i=t.file;if(t.wildcard){var a=new RegExp(t.wildcard.replace(/\*/g,"@").replace(/[.?*+^$[\]\\(){}|-]/g,"\\$&").replace(/@@/g,".*").replace(/@/g,"[a-z0-9$_-]+"),"i"),u=h[t.pkgName];if(u){var v={};for(var g in u.f)a.test(g)&&(v[g]=c(t.pkgName+"/"+g));return v}}if(!i){var m="function"==typeof r,x=l("async",[e,r]);if(x===!1)return;return s(e,function(e){return m?r(e):null})}var _=t.pkgName;if(i.locals&&i.locals.module)return i.locals.module.exports;var w=i.locals={},y=n(t.validPath);w.exports={},w.module={exports:w.exports},w.require=function(e,r){return c(e,{pkg:_,path:y,v:t.versions})},w.require.main={filename:d?"./":p.require.main.filename,paths:d?[]:p.require.main.paths};var b=[w.module.exports,w.require,w.module,t.validPath,y,_];return l("before-import",b),i.fn.apply(0,b),l("after-import",b),w.module.exports}if(e.FuseBox)return e.FuseBox;var d="undefined"!=typeof window&&window.navigator,p=d?window:global;d&&(p.global=window),e=d&&"undefined"==typeof __fbx__dnm__?e:module.exports;var v=d?window.__fsbx__=window.__fsbx__||{}:p.$fsbx=p.$fsbx||{};d||(p.require=require);var h=v.p=v.p||{},g=v.e=v.e||{},m=function(){function r(){}return r.global=function(e,r){return void 0===r?p[e]:void(p[e]=r)},r.import=function(e,r){return c(e,r)},r.on=function(e,r){g[e]=g[e]||[],g[e].push(r)},r.exists=function(e){try{var r=f(e,{});return void 0!==r.file}catch(e){return!1}},r.remove=function(e){var r=f(e,{}),n=h[r.pkgName];n&&n.f[r.validPath]&&delete n.f[r.validPath]},r.main=function(e){return this.mainFile=e,r.import(e,{})},r.expose=function(r){var n=function(n){var t=r[n].alias,i=c(r[n].pkg);"*"===t?a(i,function(r,n){return e[r]=n}):"object"==typeof t?a(t,function(r,n){return e[n]=i[r]}):e[t]=i};for(var t in r)n(t)},r.dynamic=function(r,n,t){this.pkg(t&&t.pkg||"default",{},function(t){t.file(r,function(r,t,i,o,a){var u=new Function("__fbx__dnm__","exports","require","module","__filename","__dirname","__root__",n);u(!0,r,t,i,o,a,e)})})},r.flush=function(e){var r=h.default;for(var n in r.f)e&&!e(n)||delete r.f[n].locals},r.pkg=function(e,r,n){if(h[e])return n(h[e].s);var t=h[e]={};return t.f={},t.v=r,t.s={file:function(e,r){return t.f[e]={fn:r}}},n(t.s)},r.addPlugin=function(e){this.plugins.push(e)},r}();return m.packages=h,m.isBrowser=d,m.isServer=!d,m.plugins=[],d||(p.FuseBox=m),e.FuseBox=m}(this))
//# sourceMappingURL=modelkit.js.map