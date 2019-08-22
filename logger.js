var url = 'http://mylogger.io.log';


function log(message) {
  // Send an HTTP request;
  console.log(message);
}

// console.log(module);

module.exports.log = log;

// console.log(module);