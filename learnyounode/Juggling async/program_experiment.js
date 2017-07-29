var http = require('http');
console.log(process.argv[0]);
var urls = [process.argv[2],process.argv[3], process.argv[4]];
var dataArray = [[]];
var err = false;
var endCount = 0;

function printResults () {
  console.log('\n---- print ----\n');
  console.log('print length', dataArray.length);
  for (var i = 0; i < dataArray.length; i++) {
    if(err) {
      console.log('\n---- ERROR ----\n')
      return;
    }

    if(dataArray[i]) {
      console.log('print', i, ' ', dataArray[i]['url'])
    } else {
      console.log('print', i, ' error', i);
      err = true;
    }
  }
}

urls.forEach(function(url, index) {
  http.get(url, function(res) {

    res.setEncoding('utf8');
    res.on('data', function(chunk) {
      dataArray[index] = new Array();
      console.log(index, url);
      dataArray[index]['url'] = url;
      dataArray[index]['data'] += chunk;
    });

    res.on('end', function() {
      console.log('end compare:', dataArray.length, urls.length);
      console.log('end count', endCount);

      if(endCount === urls.length-1) {
        printResults();
        return;
      }
      endCount++;
    })
  });

});