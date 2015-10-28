var http = require('http');
var fs = require('fs');
var url = require('url');
var url_address = 'https://www.google.co.in/webhp?sourceid=chrome-instant&ion=1&espv=2&ie=UTF-8#q=train%20ticket';
// var options = {
// 				hostname:"www.google.co.in",
// 				method:"GET",
// 				path:"/webhp?sourceid=chrome-instant&ion=1&espv=2&ie=UTF-8#q=train%20ticket"
// 			};
var options = url.parse('http://www.google.co.in/webhp?sourceid=chrome-instant&ion=1&espv=2&ie=UTF-8#q=train%20ticket');

var onResponse = function(response){
	var data = '';
	response.on('data',function(chunk){
		data += chunk.toString();
	});
	response.on('end',function(){
		fs.writeFileSync('./google.html',data);
	});
};

var onError = function(err){
	console.log(err,'------------');
};

http.request(options,onResponse).on("error",onError).end();