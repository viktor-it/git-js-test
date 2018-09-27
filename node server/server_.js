//загрузка модуля http
let http = require ('http');

//создание http-сервера
http.createServer(function(req, res) {
	//заголовок контента
	res.writeHead(200, {'content-type':'text/plain'});

	//запись сообщения и завершения сигнальной связи
	res.write("Hellow,WORLD!\n");
	res.end();

}).listen(8124);

console.log("Сервер запущен на 8124");
