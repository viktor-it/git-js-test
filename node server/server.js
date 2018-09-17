var args = process.argv.slice(2); // проверим аргументы: путь к файлу и порт
if (args.length != 2) {
	console.log('Не достаточно аргументов');
	return;
	}
// проверим наличие файла
var fs = require('fs'); if (!fs.existsSync(args[0])){
 console.log('Файл ' + args[0] + ' не найден');
 return;
 }
 // запускаем сервер
var http = require('http');
http.createServer( function(req, res) { res.writeHead(200, {'Content-Type': 'text/html'});
res.end(fs.readFileSync(args[0], {'encoding': 'utf-8'})); } ).listen(args[1], '127.0.0.1');
console.log('Сервер успешно запущен, порт ' + args[1]);

