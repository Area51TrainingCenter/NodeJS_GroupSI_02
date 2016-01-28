var mysql = require("mysql"),
    opciones = {
      host: "localhost",
      port: 3306,
      user: "root",
      password: "123456",
      database: "bdmedicos"
    };

var conexion = mysql.createConnection(opciones);
conexion.connect(function(err){
  if(err) {
    console.log(err);
  } else {
    console.log("El conexión está activa");
  }
});

module.exports = conexion;
