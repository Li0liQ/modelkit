const Modelkit = require('./lib/modelkit').default;
const randomConfig = require('./samples/random-files/modelkit.config');
const modelkitConfig = require('./samples/modelkit/modelkit.config');

const modelkit = new Modelkit();
modelkit.run(randomConfig);
modelkit.run(modelkitConfig);
