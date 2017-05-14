const { FuseBox, BabelPlugin } = require('fuse-box'); // eslint-disable-line import/no-extraneous-dependencies

const isProduction = process.env.NODE_ENV === 'production';

const fuse = FuseBox.init({
    globals: { modelkit: '*' },
    package: {
        name: 'modelkit',
        entry: 'src/index.js',
    },
    homeDir: 'src',
    output: 'lib/$name.js',
    plugins: [
        BabelPlugin({
            config: {
                sourceMaps: true,
                presets: ['env'],
                plugins: [
                    'lodash',
                ],
            },
        }),
    ],
});

const bundle = fuse.bundle('modelkit')
    .instructions('>[index.js]')
    .sourceMaps(true);

if (!isProduction) {
    bundle.watch();
}

fuse.run();
