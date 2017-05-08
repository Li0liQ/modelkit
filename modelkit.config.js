const path = require('path');
const ModelkitJsonLoader = require('./lib/modelkit').ModelkitJsonLoader;
const ModelkitJsLoader = require('./lib/modelkit').ModelkitJsLoader;
const ModelkitYarnLoader = require('./lib/modelkit').ModelkitYarnLoader;
const ModelkitFreezePlugin = require('./lib/modelkit').ModelkitFreezePlugin;

module.exports = {
    inputDir: path.join(__dirname, 'input'),
    input: [
        new ModelkitJsonLoader({
            files: ['package.json']
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