process.env.TS_NODE_PROJECT = './src/tsconfig.json';
require('ts-mocha');
const MochaFile = require('mocha');
 
const mochaVar = new Mocha();
mocha.addFile(`./src/test/flight.spec.ts`);
mocha.run((failures) => {
  process.on('exit', () => {
    process.exit(failures); // exit with non-zero status if there were failures
  });
});