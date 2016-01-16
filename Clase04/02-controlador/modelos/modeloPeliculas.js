var conexion = require("../conexiones/connMySQL");

var modelo = function(){};

modelo.listar = function(cb){
	conexion.query("select * from peliculas", cb);
}

modelo.insertar = function(registro, cb) {
	conexion.query("insert into peliculas set ?", registro, cb);
}

modelo.eliminar = function(id, cb) {
	conexion.query("delete from peliculas where id=?", id, cb);
}

modelo.editar = function(id, cb) {
	conexion.query("select * from peliculas where id=? ", id, cb);
}

modelo.actualizar = function(id, registro, cb) {
	conexion.query("update peliculas set titulo=?, anno=?, director=? where id=?", [registro.titulo, registro.anno, registro.director, id], cb);
}

module.exports = modelo;