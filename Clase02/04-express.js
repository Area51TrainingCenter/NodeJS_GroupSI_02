var express = require("express"),
	app = express(); //require("http").createServer();

function fnIndex(req, res){
	res.sendFile(__dirname + "/index.html");
}

function fnContacto(req, res){
	res.sendFile(__dirname + "/contacto.html");
}

function fnQuienes(req, res){
	res.sendFile(__dirname + "/quienes.html");
}

function fnClientes(req, res){
	res.sendFile(__dirname + "/clientes.html");
}

function fnListadoUsuarios(req, res) {
	var registros = [
		{usuario: "abc", rol: "123"},
		{usuario: "abc", rol: "123"},
		{usuario: "abc", rol: "123"},
		{usuario: "abc", rol: "123"}
	];

	res.json(registros);
}

function fnLogin(req, res) {
	res.sendFile(__dirname +  "/login.html");
}

function fnAutenticado(req, res) {
	res.sendFile(__dirname +  "/autenticado.html");
}

function fnNoAutenticado(req, res) {
	res.sendFile(__dirname +  "/noautenticado.html");
}

function fnEjecutando(){
	console.log("Ejecutando en el puerto 3000");
}

function fnVerificar(req, res) {
	res.redirect("/autenticado");
}

app.get("/index", fnIndex);
app.get("/contacto", fnContacto);
app.get("/quienes", fnQuienes);
app.get("/clientes", fnClientes);
app.get("/listado", fnListadoUsuarios);
app.get("/login", fnLogin);
app.get("/autenticado", fnAutenticado);
app.get("/noautenticado", fnNoAutenticado);
app.get("/verificar", fnVerificar);

app.listen(3000, fnEjecutando);