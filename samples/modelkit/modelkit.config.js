const path = require('path');
const ModelkitJsonLoader = require('./../../lib/modelkit').ModelkitJsonLoader;
const ModelkitJsLoader = require('./../../lib/modelkit').ModelkitJsLoader;
const ModelkitYarnLoader = require('./../../lib/modelkit').ModelkitYarnLoader;
const ModelkitManifestPlugin = require('./../../lib/modelkit').ModelkitManifestPlugin;
const ModelkitIgnorePlugin = require('./../../lib/modelkit').ModelkitIgnorePlugin;

module.exports = {
    inputDir: path.join(__dirname),
    // we load and try to process all the files from the folder atm
    loaders: [
        new ModelkitJsonLoader({
            files: ['package.json'],
            changes: [{
                flag: 'useFusebox',
                delete: {
                    devDependencies: {
                        'babel-loader': null,
                        'lodash-webpack-plugin': null,
                        'webpack': null,
                        'webpack-node-externals': null
                    }
                },
                update: {
                    devDependencies: {
                        'fuse-box': '^2.0.0',
                    },
                    scripts: {
                        'dev': 'cross-env NODE_ENV=development node fuse',
                        'build': 'cross-env NODE_ENV=production node fuse',
                    }
                },
            }],
        }),
        new ModelkitYarnLoader({
            files: ['yarn.lock'],
            changes: [{
                flag: 'useFusebox',
                "delete": {
                    "acorn-dynamic-import@^2.0.0": null,
                    "acorn@^5.0.0": null,
                    "ajv-keywords@^1.1.1": null,
                    "align-text@^0.1.1": null,
                    "align-text@^0.1.3": null,
                    "asn1.js@^4.0.0": null,
                    "assert@^1.1.1": null,
                    "async@^2.1.2": null,
                    "base64-js@^1.0.2": null,
                    "bn.js@^4.0.0": null,
                    "bn.js@^4.1.0": null,
                    "bn.js@^4.1.1": null,
                    "bn.js@^4.4.0": null,
                    "brorand@^1.0.1": null,
                    "browserify-aes@^1.0.0": null,
                    "browserify-aes@^1.0.4": null,
                    "browserify-cipher@^1.0.0": null,
                    "browserify-des@^1.0.0": null,
                    "browserify-rsa@^4.0.0": null,
                    "browserify-sign@^4.0.0": null,
                    "browserify-zlib@^0.1.4": null,
                    "buffer-xor@^1.0.2": null,
                    "buffer@^4.3.0": null,
                    "builtin-status-codes@^3.0.0": null,
                    "camelcase@^1.0.2": null,
                    "camelcase@^3.0.0": null,
                    "center-align@^0.1.1": null,
                    "chokidar@^1.4.3": null,
                    "cipher-base@^1.0.0": null,
                    "cipher-base@^1.0.1": null,
                    "cliui@^2.1.0": null,
                    "cliui@^3.2.0": null,
                    "console-browserify@^1.1.0": null,
                    "constants-browserify@^1.0.0": null,
                    "create-ecdh@^4.0.0": null,
                    "create-hash@^1.1.0": null,
                    "create-hash@^1.1.1": null,
                    "create-hmac@^1.1.0": null,
                    "create-hmac@^1.1.2": null,
                    "crypto-browserify@^3.11.0": null,
                    "date-now@^0.1.4": null,
                    "decamelize@^1.0.0": null,
                    "decamelize@^1.1.1": null,
                    "des.js@^1.0.0": null,
                    "diffie-hellman@^5.0.0": null,
                    "domain-browser@^1.1.1": null,
                    "elliptic@^6.0.0": null,
                    "enhanced-resolve@^3.0.0": null,
                    "errno@^0.1.3": null,
                    "error-ex@^1.2.0": null,
                    "events@^1.0.0": null,
                    "evp_bytestokey@^1.0.0": null,
                    "get-caller-file@^1.0.1": null,
                    "hash.js@^1.0.0": null,
                    "hash.js@^1.0.3": null,
                    "hmac-drbg@^1.0.0": null,
                    "hosted-git-info@^2.1.4": null,
                    "https-browserify@0.0.1": null,
                    "ieee754@^1.1.4": null,
                    "indexof@0.0.1": null,
                    "inherits@2.0.1": null,
                    "invert-kv@^1.0.0": null,
                    "is-arrayish@^0.2.1": null,
                    "is-utf8@^0.2.0": null,
                    "json-loader@^0.5.4": null,
                    "json5@^0.5.1": null,
                    "lazy-cache@^1.0.3": null,
                    "lcid@^1.0.0": null,
                    "load-json-file@^1.0.0": null,
                    "loader-runner@^2.3.0": null,
                    "loader-utils@^0.2.16": null,
                    "lodash-webpack-plugin@^0.11.3": null,
                    "lodash@^4.14.0": null,
                    "longest@^1.0.1": null,
                    "memory-fs@^0.4.0": null,
                    "memory-fs@~0.4.1": null,
                    "miller-rabin@^4.0.0": null,
                    "minimalistic-assert@^1.0.0": null,
                    "minimalistic-crypto-utils@^1.0.0": null,
                    "minimalistic-crypto-utils@^1.0.1": null,
                    "node-libs-browser@^2.0.0": null,
                    "normalize-package-data@^2.3.2": null,
                    "os-browserify@^0.2.0": null,
                    "os-locale@^1.4.0": null,
                    "pako@~0.2.0": null,
                    "parse-asn1@^5.0.0": null,
                    "parse-json@^2.2.0": null,
                    "path-browserify@0.0.0": null,
                    "path-type@^1.0.0": null,
                    "pbkdf2@^3.0.3": null,
                    "process@^0.11.0": null,
                    "prr@~0.0.0": null,
                    "public-encrypt@^4.0.0": null,
                    "punycode@1.3.2": null,
                    "punycode@^1.2.4": null,
                    "querystring-es3@^0.2.0": null,
                    "querystring@0.2.0": null,
                    "randombytes@^2.0.0": null,
                    "randombytes@^2.0.1": null,
                    "read-pkg-up@^1.0.1": null,
                    "read-pkg@^1.0.0": null,
                    "readable-stream@^2.0.1": null,
                    "readable-stream@^2.2.6": null,
                    "require-directory@^2.1.1": null,
                    "require-main-filename@^1.0.1": null,
                    "right-align@^0.1.1": null,
                    "ripemd160@^1.0.0": null,
                    "semver@2 || 3 || 4 || 5": null,
                    "set-blocking@^2.0.0": null,
                    "setimmediate@^1.0.4": null,
                    "sha.js@^2.3.6": null,
                    "source-list-map@^1.1.1": null,
                    "source-map@^0.5.3": null,
                    "source-map@~0.5.1": null,
                    "source-map@~0.5.3": null,
                    "stream-browserify@^2.0.1": null,
                    "stream-http@^2.3.1": null,
                    "string-width@^1.0.2": null,
                    "string_decoder@^0.10.25": null,
                    "strip-bom@^2.0.0": null,
                    "supports-color@^3.1.0": null,
                    "tapable@^0.2.5": null,
                    "tapable@~0.2.5": null,
                    "timers-browserify@^2.0.2": null,
                    "to-arraybuffer@^1.0.0": null,
                    "tty-browserify@0.0.0": null,
                    "uglify-js@^2.8.5": null,
                    "uglify-to-browserify@~1.0.0": null,
                    "url@^0.11.0": null,
                    "util@0.10.3": null,
                    "util@^0.10.3": null,
                    "vm-browserify@0.0.4": null,
                    "watchpack@^1.3.1": null,
                    "webpack-node-externals@^1.6.0": null,
                    "webpack-sources@^0.2.3": null,
                    "webpack@^2.5.1": null,
                    "which-module@^1.0.0": null,
                    "window-size@0.1.0": null,
                    "wordwrap@0.0.2": null,
                    "wrap-ansi@^2.0.0": null,
                    "y18n@^3.2.1": null,
                    "yargs-parser@^4.2.0": null,
                    "yargs@^6.0.0": null,
                    "yargs@~3.10.0": null
                },
                "update": {
                    "accepts@~1.3.3": {
                        "version": "1.3.3",
                        "resolved": "https://registry.yarnpkg.com/accepts/-/accepts-1.3.3.tgz#c3ca7434938648c3e0d9c1e328dd68b622c284ca",
                        "dependencies": {
                            "mime-types": "~2.1.11",
                            "negotiator": "0.6.1"
                        }
                    },
                    "acorn-es7@^0.1.0": {
                        "version": "0.1.0",
                        "resolved": "https://registry.yarnpkg.com/acorn-es7/-/acorn-es7-0.1.0.tgz#4a6de4522faacb4c31209e1b73b5f301ed2bb30a",
                        "dependencies": {
                            "acorn": "^2.6.4"
                        }
                    },
                    "acorn-jsx@^3.0.1": {
                        "version": "3.0.1",
                        "resolved": "https://registry.yarnpkg.com/acorn-jsx/-/acorn-jsx-3.0.1.tgz#afdf9488fb1ecefc8348f6fb22f464e32a58b36b",
                        "dependencies": {
                            "acorn": "^3.0.4"
                        }
                    },
                    "ajax-request@^1.2.0": {
                        "version": "1.2.1",
                        "resolved": "https://registry.yarnpkg.com/ajax-request/-/ajax-request-1.2.1.tgz#bca0b1cc922290659e2794fb395e64e7799c1d21",
                        "dependencies": {
                            "file-system": "^2.1.1",
                            "utils-extend": "^1.0.7"
                        }
                    },
                    "amdefine@>=0.0.4": {
                        "version": "1.0.1",
                        "resolved": "https://registry.yarnpkg.com/amdefine/-/amdefine-1.0.1.tgz#4a5282ac164729e93619bcfd3ad151f817ce91f5"
                    },
                    "ansi@^0.3.1": {
                        "version": "0.3.1",
                        "resolved": "https://registry.yarnpkg.com/ansi/-/ansi-0.3.1.tgz#0c42d4fb17160d5a9af1e484bace1c66922c1b21"
                    },
                    "app-root-path@^1.3.0": {
                        "version": "1.4.0",
                        "resolved": "https://registry.yarnpkg.com/app-root-path/-/app-root-path-1.4.0.tgz#6335d865c9640d0fad99004e5a79232238e92dfa"
                    },
                    "app-root-path@^2.0.1": {
                        "version": "2.0.1",
                        "resolved": "https://registry.yarnpkg.com/app-root-path/-/app-root-path-2.0.1.tgz#cd62dcf8e4fd5a417efc664d2e5b10653c651b46"
                    },
                    "array-flatten@1.1.1": {
                        "version": "1.1.1",
                        "resolved": "https://registry.yarnpkg.com/array-flatten/-/array-flatten-1.1.1.tgz#9a5f699051b1e7073328f2a008968b64ea2955d2"
                    },
                    "base64-img@^1.0.3": {
                        "version": "1.0.3",
                        "resolved": "https://registry.yarnpkg.com/base64-img/-/base64-img-1.0.3.tgz#a8c0284900047103421e1f9e0214011333866806",
                        "dependencies": {
                            "ajax-request": "^1.2.0",
                            "file-system": "^2.1.0"
                        }
                    },
                    "base64-js@^1.2.0": {
                        "version": "1.2.0",
                        "resolved": "https://registry.yarnpkg.com/base64-js/-/base64-js-1.2.0.tgz#a39992d723584811982be5e290bb6a53d86700f1"
                    },
                    "chokidar@^1.6.1": {
                        "version": "1.6.1",
                        "resolved": "https://registry.yarnpkg.com/chokidar/-/chokidar-1.6.1.tgz#2f4447ab5e96e50fb3d789fd90d4c72e0e4c70c2",
                        "dependencies": {
                            "anymatch": "^1.3.0",
                            "async-each": "^1.0.0",
                            "glob-parent": "^2.0.0",
                            "inherits": "^2.0.1",
                            "is-binary-path": "^1.0.0",
                            "is-glob": "^2.0.0",
                            "path-is-absolute": "^1.0.0",
                            "readdirp": "^2.0.0"
                        },
                        "optionalDependencies": {
                            "fsevents": "^1.0.0"
                        }
                    },
                    "concat-with-sourcemaps@^1.0.4": {
                        "version": "1.0.4",
                        "resolved": "https://registry.yarnpkg.com/concat-with-sourcemaps/-/concat-with-sourcemaps-1.0.4.tgz#f55b3be2aeb47601b10a2d5259ccfb70fd2f1dd6",
                        "dependencies": {
                            "source-map": "^0.5.1"
                        }
                    },
                    "content-disposition@0.5.2": {
                        "version": "0.5.2",
                        "resolved": "https://registry.yarnpkg.com/content-disposition/-/content-disposition-0.5.2.tgz#0cf68bb9ddf5f2be7961c3a85178cb85dba78cb4"
                    },
                    "content-type@~1.0.2": {
                        "version": "1.0.2",
                        "resolved": "https://registry.yarnpkg.com/content-type/-/content-type-1.0.2.tgz#b7d113aee7a8dd27bd21133c4dc2529df1721eed"
                    },
                    "cookie-signature@1.0.6": {
                        "version": "1.0.6",
                        "resolved": "https://registry.yarnpkg.com/cookie-signature/-/cookie-signature-1.0.6.tgz#e303a882b342cc3ee8ca513a79999734dab3ae2c"
                    },
                    "cookie@0.3.1": {
                        "version": "0.3.1",
                        "resolved": "https://registry.yarnpkg.com/cookie/-/cookie-0.3.1.tgz#e7e0a1f9ef43b4c8ba925c5c5a96e806d16873bb"
                    },
                    "debug@2.6.1": {
                        "version": "2.6.1",
                        "resolved": "https://registry.yarnpkg.com/debug/-/debug-2.6.1.tgz#79855090ba2c4e3115cc7d8769491d58f0491351",
                        "dependencies": {
                            "ms": "0.7.2"
                        }
                    },
                    "debug@2.6.4": {
                        "version": "2.6.4",
                        "resolved": "https://registry.yarnpkg.com/debug/-/debug-2.6.4.tgz#7586a9b3c39741c0282ae33445c4e8ac74734fe0",
                        "dependencies": {
                            "ms": "0.7.3"
                        }
                    },
                    "depd@1.1.0": {
                        "version": "1.1.0",
                        "resolved": "https://registry.yarnpkg.com/depd/-/depd-1.1.0.tgz#e1bd82c6aab6ced965b97b88b17ed3e528ca18c3"
                    },
                    "depd@~1.1.0": {
                        "version": "1.1.0",
                        "resolved": "https://registry.yarnpkg.com/depd/-/depd-1.1.0.tgz#e1bd82c6aab6ced965b97b88b17ed3e528ca18c3"
                    },
                    "destroy@~1.0.4": {
                        "version": "1.0.4",
                        "resolved": "https://registry.yarnpkg.com/destroy/-/destroy-1.0.4.tgz#978857442c44749e4206613e37946205826abd80"
                    },
                    "ee-first@1.1.1": {
                        "version": "1.1.1",
                        "resolved": "https://registry.yarnpkg.com/ee-first/-/ee-first-1.1.1.tgz#590c61156b0ae2f4f0255732a158b266bc56b21d"
                    },
                    "encodeurl@~1.0.1": {
                        "version": "1.0.1",
                        "resolved": "https://registry.yarnpkg.com/encodeurl/-/encodeurl-1.0.1.tgz#79e3d58655346909fe6f0f45a5de68103b294d20"
                    },
                    "escape-html@~1.0.3": {
                        "version": "1.0.3",
                        "resolved": "https://registry.yarnpkg.com/escape-html/-/escape-html-1.0.3.tgz#0258eae4d3d0c0974de1c169188ef0051d1d1988"
                    },
                    "escodegen@^1.8.1": {
                        "version": "1.8.1",
                        "resolved": "https://registry.yarnpkg.com/escodegen/-/escodegen-1.8.1.tgz#5a5b53af4693110bebb0867aa3430dd3b70a1018",
                        "dependencies": {
                            "esprima": "^2.7.1",
                            "estraverse": "^1.9.1",
                            "esutils": "^2.0.2",
                            "optionator": "^0.8.1"
                        },
                        "optionalDependencies": {
                            "source-map": "~0.2.0"
                        }
                    },
                    "esprima@^2.7.1": {
                        "version": "2.7.3",
                        "resolved": "https://registry.yarnpkg.com/esprima/-/esprima-2.7.3.tgz#96e3b70d5779f6ad49cd032673d1c312767ba581"
                    },
                    "estraverse@^1.9.1": {
                        "version": "1.9.3",
                        "resolved": "https://registry.yarnpkg.com/estraverse/-/estraverse-1.9.3.tgz#af67f2dc922582415950926091a4005d29c9bb44"
                    },
                    "etag@~1.8.0": {
                        "version": "1.8.0",
                        "resolved": "https://registry.yarnpkg.com/etag/-/etag-1.8.0.tgz#6f631aef336d6c46362b51764044ce216be3c051"
                    },
                    "exec-sh@^0.2.0": {
                        "version": "0.2.0",
                        "resolved": "https://registry.yarnpkg.com/exec-sh/-/exec-sh-0.2.0.tgz#14f75de3f20d286ef933099b2ce50a90359cef10",
                        "dependencies": {
                            "merge": "^1.1.3"
                        }
                    },
                    "express@^4.14.0": {
                        "version": "4.15.2",
                        "resolved": "https://registry.yarnpkg.com/express/-/express-4.15.2.tgz#af107fc148504457f2dca9a6f2571d7129b97b35",
                        "dependencies": {
                            "accepts": "~1.3.3",
                            "array-flatten": "1.1.1",
                            "content-disposition": "0.5.2",
                            "content-type": "~1.0.2",
                            "cookie": "0.3.1",
                            "cookie-signature": "1.0.6",
                            "debug": "2.6.1",
                            "depd": "~1.1.0",
                            "encodeurl": "~1.0.1",
                            "escape-html": "~1.0.3",
                            "etag": "~1.8.0",
                            "finalhandler": "~1.0.0",
                            "fresh": "0.5.0",
                            "merge-descriptors": "1.0.1",
                            "methods": "~1.1.2",
                            "on-finished": "~2.3.0",
                            "parseurl": "~1.3.1",
                            "path-to-regexp": "0.1.7",
                            "proxy-addr": "~1.1.3",
                            "qs": "6.4.0",
                            "range-parser": "~1.2.0",
                            "send": "0.15.1",
                            "serve-static": "1.12.1",
                            "setprototypeof": "1.0.3",
                            "statuses": "~1.3.1",
                            "type-is": "~1.6.14",
                            "utils-merge": "1.0.0",
                            "vary": "~1.1.0"
                        }
                    },
                    "file-match@^1.0.1": {
                        "version": "1.0.2",
                        "resolved": "https://registry.yarnpkg.com/file-match/-/file-match-1.0.2.tgz#c9cad265d2c8adf3a81475b0df475859069faef7",
                        "dependencies": {
                            "utils-extend": "^1.0.6"
                        }
                    },
                    "file-system@^2.1.0": {
                        "version": "2.2.2",
                        "resolved": "https://registry.yarnpkg.com/file-system/-/file-system-2.2.2.tgz#7d65833e3a2347dcd956a813c677153ed3edd987",
                        "dependencies": {
                            "file-match": "^1.0.1",
                            "utils-extend": "^1.0.4"
                        }
                    },
                    "file-system@^2.1.1": {
                        "version": "2.2.2",
                        "resolved": "https://registry.yarnpkg.com/file-system/-/file-system-2.2.2.tgz#7d65833e3a2347dcd956a813c677153ed3edd987",
                        "dependencies": {
                            "file-match": "^1.0.1",
                            "utils-extend": "^1.0.4"
                        }
                    },
                    "finalhandler@~1.0.0": {
                        "version": "1.0.2",
                        "resolved": "https://registry.yarnpkg.com/finalhandler/-/finalhandler-1.0.2.tgz#d0e36f9dbc557f2de14423df6261889e9d60c93a",
                        "dependencies": {
                            "debug": "2.6.4",
                            "encodeurl": "~1.0.1",
                            "escape-html": "~1.0.3",
                            "on-finished": "~2.3.0",
                            "parseurl": "~1.3.1",
                            "statuses": "~1.3.1",
                            "unpipe": "~1.0.0"
                        }
                    },
                    "forwarded@~0.1.0": {
                        "version": "0.1.0",
                        "resolved": "https://registry.yarnpkg.com/forwarded/-/forwarded-0.1.0.tgz#19ef9874c4ae1c297bcf078fde63a09b66a84363"
                    },
                    "fresh@0.5.0": {
                        "version": "0.5.0",
                        "resolved": "https://registry.yarnpkg.com/fresh/-/fresh-0.5.0.tgz#f474ca5e6a9246d6fd8e0953cfa9b9c805afa78e"
                    },
                    "fs-extra@^2.0.0": {
                        "version": "2.1.2",
                        "resolved": "https://registry.yarnpkg.com/fs-extra/-/fs-extra-2.1.2.tgz#046c70163cef9aad46b0e4a7fa467fb22d71de35",
                        "dependencies": {
                            "graceful-fs": "^4.1.2",
                            "jsonfile": "^2.1.0"
                        }
                    },
                    "fuse-box@^2.0.0": {
                        "version": "2.0.0",
                        "resolved": "https://registry.yarnpkg.com/fuse-box/-/fuse-box-2.0.0.tgz#b5a712c91e2266af41b3045e6ed341d64aafb992",
                        "dependencies": {
                            "acorn": "^4.0.3",
                            "acorn-es7": "^0.1.0",
                            "acorn-jsx": "^3.0.1",
                            "ansi": "^0.3.1",
                            "app-root-path": "^2.0.1",
                            "base64-img": "^1.0.3",
                            "base64-js": "^1.2.0",
                            "chokidar": "^1.6.1",
                            "concat-with-sourcemaps": "^1.0.4",
                            "escodegen": "^1.8.1",
                            "express": "^4.14.0",
                            "fs-extra": "^2.0.0",
                            "fuse-tools": "^1.0.4",
                            "glob": "^7.1.1",
                            "ieee754": "^1.1.8",
                            "inquirer": "^3.0.6",
                            "mustache": "^2.3.0",
                            "postcss": "^6.0.1",
                            "pretty-time": "^0.2.0",
                            "prettysize": "0.0.3",
                            "realm-utils": "^1.0.8",
                            "request": "^2.79.0",
                            "shorthash": "0.0.2",
                            "watch": "^1.0.1",
                            "ws": "^1.1.1"
                        }
                    },
                    "fuse-tools@^1.0.4": {
                        "version": "1.0.5",
                        "resolved": "https://registry.yarnpkg.com/fuse-tools/-/fuse-tools-1.0.5.tgz#98c9f5133348a9a91357cbf8bf57171fa6cd614a"
                    },
                    "graceful-fs@^4.1.6": {
                        "version": "4.1.11",
                        "resolved": "https://registry.yarnpkg.com/graceful-fs/-/graceful-fs-4.1.11.tgz#0e8bdfe4d1ddb8854d64e04ea7c00e2a026e5658"
                    },
                    "http-errors@~1.6.1": {
                        "version": "1.6.1",
                        "resolved": "https://registry.yarnpkg.com/http-errors/-/http-errors-1.6.1.tgz#5f8b8ed98aca545656bf572997387f904a722257",
                        "dependencies": {
                            "depd": "1.1.0",
                            "inherits": "2.0.3",
                            "setprototypeof": "1.0.3",
                            "statuses": ">= 1.3.1 < 2"
                        }
                    },
                    "ieee754@^1.1.8": {
                        "version": "1.1.8",
                        "resolved": "https://registry.yarnpkg.com/ieee754/-/ieee754-1.1.8.tgz#be33d40ac10ef1926701f6f08a2d86fbfd1ad3e4"
                    },
                    "inherits@2.0.3": {
                        "version": "2.0.3",
                        "resolved": "https://registry.yarnpkg.com/inherits/-/inherits-2.0.3.tgz#633c2c83e3da42a502f52466022480f4208261de"
                    },
                    "inquirer@^3.0.6": {
                        "version": "3.0.6",
                        "resolved": "https://registry.yarnpkg.com/inquirer/-/inquirer-3.0.6.tgz#e04aaa9d05b7a3cb9b0f407d04375f0447190347",
                        "dependencies": {
                            "ansi-escapes": "^1.1.0",
                            "chalk": "^1.0.0",
                            "cli-cursor": "^2.1.0",
                            "cli-width": "^2.0.0",
                            "external-editor": "^2.0.1",
                            "figures": "^2.0.0",
                            "lodash": "^4.3.0",
                            "mute-stream": "0.0.7",
                            "run-async": "^2.2.0",
                            "rx": "^4.1.0",
                            "string-width": "^2.0.0",
                            "strip-ansi": "^3.0.0",
                            "through": "^2.3.6"
                        }
                    },
                    "ipaddr.js@1.3.0": {
                        "version": "1.3.0",
                        "resolved": "https://registry.yarnpkg.com/ipaddr.js/-/ipaddr.js-1.3.0.tgz#1e03a52fdad83a8bbb2b25cbf4998b4cffcd3dec"
                    },
                    "jsonfile@^2.1.0": {
                        "version": "2.4.0",
                        "resolved": "https://registry.yarnpkg.com/jsonfile/-/jsonfile-2.4.0.tgz#3736a2b428b87bbda0cc83b53fa3d633a35c2ae8",
                        "optionalDependencies": {
                            "graceful-fs": "^4.1.6"
                        }
                    },
                    "media-typer@0.3.0": {
                        "version": "0.3.0",
                        "resolved": "https://registry.yarnpkg.com/media-typer/-/media-typer-0.3.0.tgz#8710d7af0aa626f8fffa1ce00168545263255748"
                    },
                    "merge-descriptors@1.0.1": {
                        "version": "1.0.1",
                        "resolved": "https://registry.yarnpkg.com/merge-descriptors/-/merge-descriptors-1.0.1.tgz#b00aaa556dd8b44568150ec9d1b953f3f90cbb61"
                    },
                    "merge@^1.1.3": {
                        "version": "1.2.0",
                        "resolved": "https://registry.yarnpkg.com/merge/-/merge-1.2.0.tgz#7531e39d4949c281a66b8c5a6e0265e8b05894da"
                    },
                    "methods@~1.1.2": {
                        "version": "1.1.2",
                        "resolved": "https://registry.yarnpkg.com/methods/-/methods-1.1.2.tgz#5529a4d67654134edcc5266656835b0f851afcee"
                    },
                    "mime-types@~2.1.11": {
                        "version": "2.1.15",
                        "resolved": "https://registry.yarnpkg.com/mime-types/-/mime-types-2.1.15.tgz#a4ebf5064094569237b8cf70046776d09fc92aed",
                        "dependencies": {
                            "mime-db": "~1.27.0"
                        }
                    },
                    "mime-types@~2.1.15": {
                        "version": "2.1.15",
                        "resolved": "https://registry.yarnpkg.com/mime-types/-/mime-types-2.1.15.tgz#a4ebf5064094569237b8cf70046776d09fc92aed",
                        "dependencies": {
                            "mime-db": "~1.27.0"
                        }
                    },
                    "mime@1.3.4": {
                        "version": "1.3.4",
                        "resolved": "https://registry.yarnpkg.com/mime/-/mime-1.3.4.tgz#115f9e3b6b3daf2959983cb38f149a2d40eb5d53"
                    },
                    "ms@0.7.2": {
                        "version": "0.7.2",
                        "resolved": "https://registry.yarnpkg.com/ms/-/ms-0.7.2.tgz#ae25cf2512b3885a1d95d7f037868d8431124765"
                    },
                    "mustache@^2.3.0": {
                        "version": "2.3.0",
                        "resolved": "https://registry.yarnpkg.com/mustache/-/mustache-2.3.0.tgz#4028f7778b17708a489930a6e52ac3bca0da41d0"
                    },
                    "nanoseconds@^0.1.0": {
                        "version": "0.1.0",
                        "resolved": "https://registry.yarnpkg.com/nanoseconds/-/nanoseconds-0.1.0.tgz#69ec39fcd00e77ab3a72de0a43342824cd79233a"
                    },
                    "negotiator@0.6.1": {
                        "version": "0.6.1",
                        "resolved": "https://registry.yarnpkg.com/negotiator/-/negotiator-0.6.1.tgz#2b327184e8992101177b28563fb5e7102acd0ca9"
                    },
                    "on-finished@~2.3.0": {
                        "version": "2.3.0",
                        "resolved": "https://registry.yarnpkg.com/on-finished/-/on-finished-2.3.0.tgz#20f1336481b083cd75337992a16971aa2d906947",
                        "dependencies": {
                            "ee-first": "1.1.1"
                        }
                    },
                    "optionator@^0.8.1": {
                        "version": "0.8.2",
                        "resolved": "https://registry.yarnpkg.com/optionator/-/optionator-0.8.2.tgz#364c5e409d3f4d6301d6c0b4c05bba50180aeb64",
                        "dependencies": {
                            "deep-is": "~0.1.3",
                            "fast-levenshtein": "~2.0.4",
                            "levn": "~0.3.0",
                            "prelude-ls": "~1.1.2",
                            "type-check": "~0.3.2",
                            "wordwrap": "~1.0.0"
                        }
                    },
                    "options@>=0.0.5": {
                        "version": "0.0.6",
                        "resolved": "https://registry.yarnpkg.com/options/-/options-0.0.6.tgz#ec22d312806bb53e731773e7cdaefcf1c643128f"
                    },
                    "parseurl@~1.3.1": {
                        "version": "1.3.1",
                        "resolved": "https://registry.yarnpkg.com/parseurl/-/parseurl-1.3.1.tgz#c8ab8c9223ba34888aa64a297b28853bec18da56"
                    },
                    "path-to-regexp@0.1.7": {
                        "version": "0.1.7",
                        "resolved": "https://registry.yarnpkg.com/path-to-regexp/-/path-to-regexp-0.1.7.tgz#df604178005f522f15eb4490e7247a1bfaa67f8c"
                    },
                    "postcss@^6.0.1": {
                        "version": "6.0.1",
                        "resolved": "https://registry.yarnpkg.com/postcss/-/postcss-6.0.1.tgz#000dbd1f8eef217aa368b9a212c5fc40b2a8f3f2",
                        "dependencies": {
                            "chalk": "^1.1.3",
                            "source-map": "^0.5.6",
                            "supports-color": "^3.2.3"
                        }
                    },
                    "pretty-time@^0.2.0": {
                        "version": "0.2.0",
                        "resolved": "https://registry.yarnpkg.com/pretty-time/-/pretty-time-0.2.0.tgz#7a3bdec4049c620cd7c42b7f342b74d56e73d74e",
                        "dependencies": {
                            "is-number": "^2.0.2",
                            "nanoseconds": "^0.1.0"
                        }
                    },
                    "prettysize@0.0.3": {
                        "version": "0.0.3",
                        "resolved": "https://registry.yarnpkg.com/prettysize/-/prettysize-0.0.3.tgz#14afff6a645e591a4ddf1c72919c23b4146181a1"
                    },
                    "proxy-addr@~1.1.3": {
                        "version": "1.1.4",
                        "resolved": "https://registry.yarnpkg.com/proxy-addr/-/proxy-addr-1.1.4.tgz#27e545f6960a44a627d9b44467e35c1b6b4ce2f3",
                        "dependencies": {
                            "forwarded": "~0.1.0",
                            "ipaddr.js": "1.3.0"
                        }
                    },
                    "qs@6.4.0": {
                        "version": "6.4.0",
                        "resolved": "https://registry.yarnpkg.com/qs/-/qs-6.4.0.tgz#13e26d28ad6b0ffaa91312cd3bf708ed351e7233"
                    },
                    "range-parser@~1.2.0": {
                        "version": "1.2.0",
                        "resolved": "https://registry.yarnpkg.com/range-parser/-/range-parser-1.2.0.tgz#f49be6b487894ddc40dcc94a322f611092e00d5e"
                    },
                    "realm-utils@^1.0.8": {
                        "version": "1.0.8",
                        "resolved": "https://registry.yarnpkg.com/realm-utils/-/realm-utils-1.0.8.tgz#7f8c87c30cee0cd295ecf732a049cc1d7502da8f",
                        "dependencies": {
                            "app-root-path": "^1.3.0",
                            "mkdirp": "^0.5.1"
                        }
                    },
                    "request@^2.79.0": {
                        "version": "2.81.0",
                        "resolved": "https://registry.yarnpkg.com/request/-/request-2.81.0.tgz#c6928946a0e06c5f8d6f8a9333469ffda46298a0",
                        "dependencies": {
                            "aws-sign2": "~0.6.0",
                            "aws4": "^1.2.1",
                            "caseless": "~0.12.0",
                            "combined-stream": "~1.0.5",
                            "extend": "~3.0.0",
                            "forever-agent": "~0.6.1",
                            "form-data": "~2.1.1",
                            "har-validator": "~4.2.1",
                            "hawk": "~3.1.3",
                            "http-signature": "~1.1.0",
                            "is-typedarray": "~1.0.0",
                            "isstream": "~0.1.2",
                            "json-stringify-safe": "~5.0.1",
                            "mime-types": "~2.1.7",
                            "oauth-sign": "~0.8.1",
                            "performance-now": "^0.2.0",
                            "qs": "~6.4.0",
                            "safe-buffer": "^5.0.1",
                            "stringstream": "~0.0.4",
                            "tough-cookie": "~2.3.0",
                            "tunnel-agent": "^0.6.0",
                            "uuid": "^3.0.0"
                        }
                    },
                    "send@0.15.1": {
                        "version": "0.15.1",
                        "resolved": "https://registry.yarnpkg.com/send/-/send-0.15.1.tgz#8a02354c26e6f5cca700065f5f0cdeba90ec7b5f",
                        "dependencies": {
                            "debug": "2.6.1",
                            "depd": "~1.1.0",
                            "destroy": "~1.0.4",
                            "encodeurl": "~1.0.1",
                            "escape-html": "~1.0.3",
                            "etag": "~1.8.0",
                            "fresh": "0.5.0",
                            "http-errors": "~1.6.1",
                            "mime": "1.3.4",
                            "ms": "0.7.2",
                            "on-finished": "~2.3.0",
                            "range-parser": "~1.2.0",
                            "statuses": "~1.3.1"
                        }
                    },
                    "serve-static@1.12.1": {
                        "version": "1.12.1",
                        "resolved": "https://registry.yarnpkg.com/serve-static/-/serve-static-1.12.1.tgz#7443a965e3ced647aceb5639fa06bf4d1bbe0039",
                        "dependencies": {
                            "encodeurl": "~1.0.1",
                            "escape-html": "~1.0.3",
                            "parseurl": "~1.3.1",
                            "send": "0.15.1"
                        }
                    },
                    "setprototypeof@1.0.3": {
                        "version": "1.0.3",
                        "resolved": "https://registry.yarnpkg.com/setprototypeof/-/setprototypeof-1.0.3.tgz#66567e37043eeb4f04d91bd658c0cbefb55b8e04"
                    },
                    "shorthash@0.0.2": {
                        "version": "0.0.2",
                        "resolved": "https://registry.yarnpkg.com/shorthash/-/shorthash-0.0.2.tgz#59b268eecbde59038b30da202bcfbddeb2c4a4eb"
                    },
                    "source-map@^0.5.1": {
                        "version": "0.5.6",
                        "resolved": "https://registry.yarnpkg.com/source-map/-/source-map-0.5.6.tgz#75ce38f52bf0733c5a7f0c118d81334a2bb5f412"
                    },
                    "source-map@~0.2.0": {
                        "version": "0.2.0",
                        "resolved": "https://registry.yarnpkg.com/source-map/-/source-map-0.2.0.tgz#dab73fbcfc2ba819b4de03bd6f6eaa48164b3f9d",
                        "dependencies": {
                            "amdefine": ">=0.0.4"
                        }
                    },
                    "statuses@>= 1.3.1 < 2": {
                        "version": "1.3.1",
                        "resolved": "https://registry.yarnpkg.com/statuses/-/statuses-1.3.1.tgz#faf51b9eb74aaef3b3acf4ad5f61abf24cb7b93e"
                    },
                    "statuses@~1.3.1": {
                        "version": "1.3.1",
                        "resolved": "https://registry.yarnpkg.com/statuses/-/statuses-1.3.1.tgz#faf51b9eb74aaef3b3acf4ad5f61abf24cb7b93e"
                    },
                    "supports-color@^3.2.3": {
                        "version": "3.2.3",
                        "resolved": "https://registry.yarnpkg.com/supports-color/-/supports-color-3.2.3.tgz#65ac0504b3954171d8a64946b2ae3cbb8a5f54f6",
                        "dependencies": {
                            "has-flag": "^1.0.0"
                        }
                    },
                    "type-is@~1.6.14": {
                        "version": "1.6.15",
                        "resolved": "https://registry.yarnpkg.com/type-is/-/type-is-1.6.15.tgz#cab10fb4909e441c82842eafe1ad646c81804410",
                        "dependencies": {
                            "media-typer": "0.3.0",
                            "mime-types": "~2.1.15"
                        }
                    },
                    "ultron@1.0.x": {
                        "version": "1.0.2",
                        "resolved": "https://registry.yarnpkg.com/ultron/-/ultron-1.0.2.tgz#ace116ab557cd197386a4e88f4685378c8b2e4fa"
                    },
                    "unpipe@~1.0.0": {
                        "version": "1.0.0",
                        "resolved": "https://registry.yarnpkg.com/unpipe/-/unpipe-1.0.0.tgz#b2bf4ee8514aae6165b4817829d21b2ef49904ec"
                    },
                    "utils-extend@^1.0.4": {
                        "version": "1.0.8",
                        "resolved": "https://registry.yarnpkg.com/utils-extend/-/utils-extend-1.0.8.tgz#ccfd7b64540f8e90ee21eec57769d0651cab8a5f"
                    },
                    "utils-extend@^1.0.6": {
                        "version": "1.0.8",
                        "resolved": "https://registry.yarnpkg.com/utils-extend/-/utils-extend-1.0.8.tgz#ccfd7b64540f8e90ee21eec57769d0651cab8a5f"
                    },
                    "utils-extend@^1.0.7": {
                        "version": "1.0.8",
                        "resolved": "https://registry.yarnpkg.com/utils-extend/-/utils-extend-1.0.8.tgz#ccfd7b64540f8e90ee21eec57769d0651cab8a5f"
                    },
                    "utils-merge@1.0.0": {
                        "version": "1.0.0",
                        "resolved": "https://registry.yarnpkg.com/utils-merge/-/utils-merge-1.0.0.tgz#0294fb922bb9375153541c4f7096231f287c8af8"
                    },
                    "vary@~1.1.0": {
                        "version": "1.1.1",
                        "resolved": "https://registry.yarnpkg.com/vary/-/vary-1.1.1.tgz#67535ebb694c1d52257457984665323f587e8d37"
                    },
                    "watch@^1.0.1": {
                        "version": "1.0.2",
                        "resolved": "https://registry.yarnpkg.com/watch/-/watch-1.0.2.tgz#340a717bde765726fa0aa07d721e0147a551df0c",
                        "dependencies": {
                            "exec-sh": "^0.2.0",
                            "minimist": "^1.2.0"
                        }
                    },
                    "ws@^1.1.1": {
                        "version": "1.1.4",
                        "resolved": "https://registry.yarnpkg.com/ws/-/ws-1.1.4.tgz#57f40d036832e5f5055662a397c4de76ed66bf61",
                        "dependencies": {
                            "options": ">=0.0.5",
                            "ultron": "1.0.x"
                        }
                    }
                }
            }],
        })
    ],
    outputDir: path.join(__dirname, 'output'),
    flagDirName: 'build-[id]',
    freezeFlags: {},
    plugins: [
        new ModelkitManifestPlugin({
            file: 'manifest.json',
        }),
        new ModelkitIgnorePlugin({
            flag: 'useFusebox',
            files: ['webpack.config.js']
        })
    ],
};
