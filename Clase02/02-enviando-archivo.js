var http = require("http").createServer(),
	fs = require("fs");

function fnServidor(req, res){
	function fnLeerArchivo(err, contenido){
		if(err) {
			console.log("Error: " + err);
			res.writeHead(500, {"content-type": "text/html"});
			res.end("<h1>Estamos en mantenimiento</h1>");
		} else {
			res.writeHead(200, {"content-type": "text/html"});
			res.end(contenido);
			console.log("Contenido enviado");
		}


	}

	fs.readFile("index.html", fnLeerArchivo);
}

function fnEjecutando(){
	console.log("Ejecutando en el puerto 3000");
}

http
	.on("request", fnServidor)
	.listen(3000, fnEjecutando);