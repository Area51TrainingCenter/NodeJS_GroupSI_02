var conexion = require("../conexiones/connMySQL");

var modelo = function(){};

modelo.validar = function(usuario, contrasena, cb) {
  conexion.query("select * from usuarios where usuario=? and contrasena=?", [usuario, contrasena], cb);
};

modelo.detalleUsuario = function(id, cb) {
  conexion.query("select * from usuarios where id=?", id, cb);
};

module.exports = modelo;
