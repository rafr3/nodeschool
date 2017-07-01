var fs = require('fs');
var path = require('path');

var dir = process.argv[2];
var filter = '.' + process.argv[3];

fs.readdir(dir, filterFiles);

function filterFiles(err, files) {
  for(var i = 0; i < files.length; i++) {
    var file = files[i];
    var match = path.extname(file) === filter;

    if(match)
      console.log(file);
  }
};

