var express = require("express"),
	app = express(),
	cookieParser = require("cookie-parser"),
	cookieSession = require("cookie-session");

function fnEjecutando(){
	console.log("Ejecutando servidor en el puerto 3000");
}

function fnContador(req, res) {
	req.session.contador || (req.session.contador = 0);

	req.session.contador++;
	res.send("<h1>Contador = " + req.session.contador + "</h1>");

}


app.use(cookieParser());
app.use(cookieSession({secret: "123456"}));
//app.use(fnValidar);
app.get("/", fnContador);
app.listen(3000, fnEjecutando);