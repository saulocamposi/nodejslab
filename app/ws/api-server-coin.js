var http = require('http');

console.log("First idea of an API");

var data = [{
  "name": "Saulo",
  "age": "33",
  "gender": "male"
}];

console.log(data);
var moduleserver = {};

moduleserver.createServer = function(port) {
  var server = http.createServer(function(request, response) {
    var data = '';
    console.log("Incoming Request" + request.url);
    request.on('data', function(chunk) {
      data += chunk;
    });

    response.writeHead(501, {
      'Content-Type': 'application/json'
    });
    response.end(JSON.stringify(data));
  });

  if (port) {
    server.listen(port);
  }

  return server;
}

module.exports = moduleserver;
