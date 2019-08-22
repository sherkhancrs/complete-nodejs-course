// console.log(module);

const logger = require('./logger'); // path is relative
// require('../logger'); // if file is in parent folder;
// require('./subFolder/logger'); // if file is in sub/child folder;
const log = require('./logger1');

// logger = 1; //TypeError: Assignment to constant variable.

console.log(logger);

logger.log("Hello There");
log("Hello There YO");