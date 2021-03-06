var express = require("express"),
	app = express(),
	bodyParser = require("body-parser"),
	cookieParser = require("cookie-parser"),
	cookieSession = require("cookie-session");

function fnLogin(req, res) {
	res.sendFile(__dirname + "/login.html");
}

function fnValidar(req, res) {
	var usuario = req.body.usuario,
		contrasena = req.body.contrasena;

	if(usuario=="sergio" && contrasena=="123") {
		req.session.nombreUsuario = usuario;
		res.redirect("/autenticado");
	} else {
		res.redirect("/");
	}
}

function fnAutenticado(req, res) {
	res.sendFile(__dirname + "/autenticado.html");
}

function fnEstaValidado(req, res, next) {
	if(req.session.nombreUsuario) {
		next();
	} else {
		res.redirect("/");
	}
}

function fnLogout(req, res) {
	req.session.nombreUsuario = null;
	res.redirect("/");
}

function fnEjecutando(){
	console.log("Ejecutando en el puerto 3000");
}

app.use(bodyParser());
app.use(cookieParser());
app.use(cookieSession({secret: "andrea"}));

app.get("/", fnLogin);
app.post("/validar", fnValidar);
app.get("/autenticado", fnEstaValidado, fnAutenticado);
app.get("/logout", fnLogout);

app.listen(3000, fnEjecutando);