const path = require('path');
const ModelkitJsonLoader = require('./lib/modelkit').ModelkitJsonLoader;
const ModelkitJsLoader = require('./lib/modelkit').ModelkitJsLoader;
const ModelkitYarnLoader = require('./lib/modelkit').ModelkitYarnLoader;
const ModelkitFreezePlugin = require('./lib/modelkit').ModelkitFreezePlugin;
const ModelkitManifestPlugin = require('./lib/modelkit').ModelkitManifestPlugin;

module.exports = {
    inputDir: path.join(__dirname, 'input'),
    // we load and try to process all the files from the folder atm
    loaders: [
        new ModelkitJsonLoader({
            files: ['package.json'],
            changes: [{
                flag: 'json-1',
                delete: {
                    license: null,
                },
                update: {
                    name: 'json-1-generated name',
                },
            }, {
                flag: 'json-2',
                delete: {
                    dependencies: null,
                },
                update: {
                    'json-2': 'You can create fields on the fly',
                    'json-2.sub': {
                        test: 'Even subfields',
                    },
                },
            }, {
                flag: 'common-2',
                update: {
                    license: 'A creative commons one',
                },
            }],
        }),
        new ModelkitJsLoader({
            files: ['webpack.config.js'],
            flagFunction: 'getFlag',
        }),
        new ModelkitYarnLoader({
            files: ['yarn.lock'],
            changes: [{
                flag: 'yarn-1',
                delete: {
                    'splain@^0.0.1': null,
                },
                update: {
                    'lodash@1.3.x': {
                        version: '4.0.0',
                        resolved: 'http://not.existing.address',
                    },
                },
            }, {
                flag: 'yarn-2',
                update: {
                    'splain@^0.0.1': {
                        version: '0.0.2',
                        resolved: 'http://splain.002',
                        dependencies: {
                            lodash: '1.3.x',
                        },
                    },
                    'splain@^0.0.2': {
                        version: '0.0.2',
                        resolved: 'http://splain.002',
                        dependencies: {
                            lodash: '1.3.x',
                        },
                    },
                },
            }, {
                flag: 'common-1',
            }],
        }),
    ],
    outputDir: path.join(__dirname, 'output'),
    flagDirName: 'build-[id]',
    plugins: [
        new ModelkitFreezePlugin({
            flags: {
                'js-1': true,
                'json-1': true,
                'common-1': true,
                'yarn-1': true,
            },
        }),
        new ModelkitManifestPlugin({
            file: 'manifest.json',
        }),
    ],
};
