var express = require("express"),
	app = express(),
	path = require("path");
	bodyParser = require("body-parser"),
	cookieParser = require("cookie-parser"),
	cookieSession = require("cookie-session")
	motorVistas = "ejs",
	directorioVistas = path.join(__dirname, "/vistas"),
	directorioPublico = path.join(__dirname, "/publico");

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
	var datos = {
		nombre: req.session.nombreUsuario,
		cursos: ["HTML", "CSS", "JavaScript", "Angular", "Node", "Sails"],
		locales: [
			{nombre: "Area51", anno: 2014},
			{nombre: "ISIL", anno: 2013},
			{nombre: "UPC", anno: 2016}
		],
		id: 100
	};



	res.render("autenticado", datos);
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

function fnEditarPerfil(req, res) {
	var id = req.params.id;

	res.send("Edición del Perfil del Usuario " + id);
}

function fnEjecutando(){
	console.log("Ejecutando en el puerto 3000");
}

app.use(bodyParser());
app.use(cookieParser());
app.use(cookieSession({secret: "andrea"}));

app.use(express.static(directorioPublico));

app.set("view engine", motorVistas);
app.set("views", directorioVistas);

app.get("/", fnLogin);
app.post("/validar", fnValidar);
app.get("/autenticado", fnEstaValidado, fnAutenticado);
app.get("/logout", fnLogout);
app.get("/editarUsuario/:id", fnEditarPerfil);

app.listen(3000, fnEjecutando);