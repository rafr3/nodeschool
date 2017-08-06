var http = require('http');
var fs = require('fs');

var port = Number(process.argv[2]);
var file = process.argv[3];

function readFile(file) {
  return fs.createReadStream(file);
};

var server = http.createServer(function(req, res) {
  readFile(file).pipe(res);  
});
server.listen(port);