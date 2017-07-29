var http = require('http');
var urls = [process.argv[2],process.argv[3], process.argv[4]];
var dataArray = [];
var endCount = 0;

function print(data) {
  for (var i = 0; i < data.length; i++) {
    console.log(data[i]);
  }
}

urls.forEach(function(url, index) {
  http.get(url, function(res) {

    res.setEncoding('utf8');
    res.on('data', function(chunk) {
      if(typeof(dataArray[index]) === 'undefined')
        dataArray[index] = '';  // convert to string
      
      dataArray[index] += chunk.toString();
    });

    res.on('end', function() {
      if(endCount === urls.length-1) {
        print(dataArray);
      }
      endCount++;
    })
  });

});