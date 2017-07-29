var net = require('net');
var port = process.argv[2];

function printDate() {
  var date = new Date();
  var current = {
    year: date.getFullYear(),
    month: (date.getMonth()+1 < 10) ? "0" + (date.getMonth()+1) : date.getMonth()+1,
    day: date.getDate(),
    hour: date.getHours(),
    minute: date.getMinutes()
  };

  return current.year +'-'+ current.month +'-'+ current.day +' '+ current.hour +':'+ current.minute;
}

var server = net.createServer(function(socket) {
  socket.write(printDate() + '\n');
  socket.end();
});

server.listen(port, function() {
  console.log('server is running at: localhost:'+ port);
});