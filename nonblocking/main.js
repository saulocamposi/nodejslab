var fs = require('fs');

console.log('start readings');
var data = fs.readFileSync('example.txt');
console.log(data.toString());
console.log('finish readings');
