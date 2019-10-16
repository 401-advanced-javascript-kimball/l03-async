'use strict';

const fs = require('fs');

const reader = (file, cb) => {
  fs.readFile(file, (err, data) => {
    if (err) {
      cb(err);
    } else {
      cb(null, data);
    }
  });
};


module.exports = reader;
