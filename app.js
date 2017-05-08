const Modelkit = require('./lib/modelkit').default;
const modelkitConfig = require('./modelkit.config');
const modelkit = new Modelkit();
modelkit.run(modelkitConfig);