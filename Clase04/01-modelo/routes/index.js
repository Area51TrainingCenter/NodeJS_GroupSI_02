var express = require('express');
var router = express.Router();
var conexion = require("../conexiones/connMySQL");

/* GET home page. */
router.get('/', function(req, res, next) {

	conexion.query("select * from peliculas", function(err, registros){

		if(err) {
			console.log("Error = " + err);
		} else {
			var datos = {
				registros: registros
			};

			console.log(datos);

			res.render("index", datos);
		}

	})
});



module.exports = router;
