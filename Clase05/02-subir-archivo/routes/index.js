var express = require('express');
var router = express.Router();
var formidable = require("formidable");
var fsExtra = require("fs-extra");
var util = require("util");

function fnSubir(req, res, next) {

	function fnRecibidos(err, campos, archivos) {
		res.send("Archivos recibidos: " + util.inspect({files: archivos}));
	}

	function fnAvance(recibidos, total) {
		console.log("Avance: " + recibidos/total*100);
	}	

	function fnError(err) {
		console.log(err);
	}	

	function fnFin(campos, archivos) {
		var rutaTemporal = this.openedFiles[0].path,
			nombreArchivo = this.openedFiles[0].name,
			nuevoDirectorio = "./public/uploads/";

		function fnCopiado(err) {
			if(err) {
				console.log(err);
			} else {
				//res.redirect("/");
			}
		}

		fsExtra.copy(rutaTemporal, nuevoDirectorio + nombreArchivo, fnCopiado)			
	}
			

	var form = formidable.IncomingForm();

	form.parse(req, fnRecibidos);
	form.on("progress", fnAvance);
	form.on("error", fnError);
	form.on("end", fnFin);

}



/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post("/subir", fnSubir);

module.exports = router;
