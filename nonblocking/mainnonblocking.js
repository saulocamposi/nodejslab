var fs = require('fs');

console.log('start readings');
fs.readFile('example.txt', function(err, data) {
  console.log(data.toString());
});
console.log('finish readings');
