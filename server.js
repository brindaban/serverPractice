var http = require('http');

var requestHandler = function(request,response){
	console.log(request.connection.remoteAddress)
	response.write("hello client");
	response.end();
}

var server = http.createServer(requestHandler);
server.listen(4999);

