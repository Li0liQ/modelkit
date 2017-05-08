const path = require('path');
const ModelkitJsonLoader = require('./lib/modelkit').ModelkitJsonLoader;
const ModelkitJsLoader = require('./lib/modelkit').ModelkitJsLoader;
const ModelkitYarnLoader = require('./lib/modelkit').ModelkitYarnLoader;
const ModelkitFreezePlugin = require('./lib/modelkit').ModelkitFreezePlugin;

module.exports = {
    inputDir: path.join(__dirname, 'input'),
    input: [
        new ModelkitJsonLoader({
            files: ['package.json'],
            changes: [{
                flag: 'json-1',
                delete: {
                    'license': null
                },
                update: {
                    'name': 'json-1-generated name'
                }
            }, {
                flag: 'json-2',
                delete: {
                    'dependencies': null
                },
                update: {
                    'json-2': 'You can create fields on the fly',
                    'json-2.sub': {
                        'test': 'Even subfields'
                    }
                }
            }, {
                flag: 'common-2',
                update: {
                    'license': 'A creative commons one'
                }
            }],
        }),
        new ModelkitJsLoader({
            files: ['webpack.config.js']
        }),
        new ModelkitYarnLoader({
            files: ['yarn.lock']
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
                'yarn-1': true
            }
        }),
    ]
};