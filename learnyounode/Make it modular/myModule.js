var fs = require('fs');
var path = require('path');

module.exports = function(dir, filter, callback) {
  fs.readdir(dir, function(err, files) {
    if (err)
      return callback(err);

    files = files.filter(function (file) {
      return path.extname(file) === '.' + filter;
    });

    callback(null, files);
  });
};