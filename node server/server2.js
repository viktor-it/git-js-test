let http = require('http');
let fs = require('fs');

http.createServer(function(req, res) {
	fs.readFile('/server_test/server.js', 'utf8', function(err, data){
		res.writeHead(200, {'content-type':'text/plain'});
		if (err)
			res.write("Can't find or open file for reading\n");
		else
			res.write(data);
		res.end();
	});
}).listen(8124, function(){
	console.log('связь установлена по порту 8124');
});
console.log('сервер запущен на 8124');