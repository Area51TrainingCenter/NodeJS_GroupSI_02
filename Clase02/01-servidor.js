var http = require("http").createServer();

function fnServidor(req, res){
	res.writeHead(200, {"content-type": "text/html"});
	res.end("<h1>Hola</h1");	
}

function fnEjecutando(){
	console.log("Ejecutando servidor en el puerto 3000");
}

http
	.on("request", fnServidor)
	.listen(3000, fnEjecutando);