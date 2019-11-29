'use strict';

module.exports = exports = {};

let fileContent = 'Testing';

exports.readFile = (file, cb) => {
  if( file.match(/bad/i) ) {
    cb('Invalid File');
  }
  else {
    cb(undefined, Buffer.from(fileContent));
  }
};

exports.writeFile = (file, buffer, cb) => {
  if (file.match(/bad/i)) {
    cb('Invalid File');
  } else {
    fileContent = buffer;
    cb(undefined, fileContent);
  }
};
