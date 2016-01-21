var mysql = require("mysql"),
	path = require("path"),
	opciones = {
		host: "127.0.0.1",
		port: 3306,
		user: "root",
		password: "123456",
		database: "bdpeliculas"
	};

function fnConectado(err) {
	if(err) {
		console.log(err);
	} else {
		console.log("MySQL en PID " + conexion.threadId);
	}
}

var conexion = mysql.createConnection(opciones);
conexion.connect(fnConectado);

module.exports = conexion;