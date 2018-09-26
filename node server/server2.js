let http = require('http');
let fs = require('fs');

http.createServer(function(req, res) {
	fs.readFile('server.js', 'utf8', function(err, data){
		res.writeHead(200, {'content-type':'text/plain'});
		if (err)
			res.write('не могу найти или открыть файл для чтения\n');
		else
			res.write(data);
		res.end();
	});
}).listen(8124, function(){
	console.log('связь установлена по порту 8124');
});
console.log('сервер запущен на 8124');