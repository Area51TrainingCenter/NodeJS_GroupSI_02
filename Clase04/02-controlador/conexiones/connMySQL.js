var mysql = require("mysql"),
	opciones = {
		host: 'localhost',
		port: 3306,
		user: 'root',
		password: '123456',
		database: 'bdpeliculas'
	};

function fnConectado(err) {
	if(err) {
		console.log("Error = " + err);
	} else {
		console.log("MySQL conectado en el PID = " + conexion.threadId);
	}
}

var conexion = mysql.createConnection(opciones);
conexion.connect(fnConectado);

module.exports = conexion;