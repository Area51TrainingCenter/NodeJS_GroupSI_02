var conexion = require("../conexiones/connMySQL");

var modelo = function(){};

modelo.validar = function(id, cb) {
	conexion.query("select * from usuarios where id=?", id, cb);
};

modelo.insertar = function(registro, cb) {
	conexion.query("insert into usuarios set ?", registro, cb);
}

module.exports = modelo;