var modelo = require("../modelos/modeloPeliculas");

var controlador = function(){};

controlador.listar = function(req, res, next){
	modelo.listar(function(err, registros){
		if(err) {
			console.log(err);
		} else {
			var datos = {
				registros: registros
			};
			res.render("index", datos);
		}		
	});
}

controlador.insertar = function(req, res, next){}

controlador.eliminar = function(req, res, next){}

controlador.editar = function(req, res, next){
	var id = req.params.id;	

	modelo.editar(id, function(err, registros){
		if(err) {
			console.log(err);
		} else {
			var datos = {
				registro: registros[0];
			};

			res.render("formEdicion", datos);
		}
	})
}

controlador.actualizar = function(req, res, next){
	

}

controlador.formInsertar = function(req, res, next){}

module.exports = controlador