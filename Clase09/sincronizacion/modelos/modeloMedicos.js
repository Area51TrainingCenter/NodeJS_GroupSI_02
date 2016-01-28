var conexion = require("../conexiones/connMySQL");

var modelo = function(){};

modelo.listar = function(cb) {
  conexion.query("select * from medicos", cb);
};

module.exports = modelo;
