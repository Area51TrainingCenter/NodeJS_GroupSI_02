var express = require("express"),
	app = express(),
	bodyParser = require("body-parser"),
	cookieParser = require("cookie-parser"),
	cookieSession = require("cookie-session")
	motorVistas = "ejs",
	directorioVistas = __dirname + "/vistas";

function fnLogin(req, res) {
	res.render("login");
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
	res.render("autenticado");
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

app.set("view engine", motorVistas);
app.set("views", directorioVistas);

app.get("/", fnLogin);
app.post("/validar", fnValidar);
app.get("/autenticado", fnEstaValidado, fnAutenticado);
app.get("/logout", fnLogout);

app.listen(3000, fnEjecutando);