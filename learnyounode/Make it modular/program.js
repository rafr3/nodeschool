var filterFn = require('./myModule');

var dir = process.argv[2];
var filter = process.argv[3];

filterFn(dir, filter, function(err, fileList) {
  if(err)
    return console.error('Error:', err);

  fileList.forEach(function(file) {
    console.log(file);
  });
}); 