var http = require("http").createServer(),
	path = require("path"),
	fs = require("fs");

var rutas = [
	{ruta: "index", archivo:"index.html"},
	{ruta: "contacto", archivo:"contacto.html"},
	{ruta: "quienes", archivo:"quienes.html"},
	{ruta: "clientes", archivo:"clientes.html"}
];

function fnServidor(req, res){
	var rutaReq = path.basename(req.url);

	function fnLeerArchivo(err, contenido) {
		if(err) {
			console.log("Error: " + err);
			res.writeHead(500, {"content-type": "text/html"});
			res.end("Sucedió un error");
		} else {
			res.writeHead(200, {"content-type": "text/html"});
			res.end(contenido);
		}
	}

	var encontrada=false;

	rutas.forEach(function(item){
		if(rutaReq===item.ruta){
			encontrada=true;
			fs.readFile(item.archivo, fnLeerArchivo);
		}
	});



	if(req.finished) {
		res.writeHead(404, {"content-type": "text/html"});
		res.end("Ruta no encontrada");
	}
}

function fnEjecutando(){
	console.log("Ejecutando servidor en el puerto 3000");
}

http
	.on("request", fnServidor)
	.listen(3000, fnEjecutando);