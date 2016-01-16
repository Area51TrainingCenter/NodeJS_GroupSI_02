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

controlador.insertar = function(req, res, next){
	var titulo = req.body.titulo,
		director = req.body.director,
		anno = req.body.anno;

	var registro = {
		titulo: titulo,
		director: director,
		anno: anno
	}

	modelo.insertar(registro, function(err){
		if(err) {
			console.log(err);
		} else {
			res.redirect("/");
		}
	})

}

controlador.eliminar = function(req, res, next){
	var id = req.params.id;

	modelo.eliminar(id, function(err){
		if(err) {
			console.log(err);
		} else {
			res.redirect("/");
		}
	})
}

controlador.editar = function(req, res, next){
	var id = req.params.id;	

	modelo.editar(id, function(err, registros){
		if(err) {
			console.log(err);
		} else {
			var datos = {
				registro: registros[0]
			};

			res.render("formEdicion", datos);
		}
	})
}

controlador.actualizar = function(req, res, next){
	var id = req.params.id;
	var titulo = req.body.titulo,
		director = req.body.director,
		anno = req.body.anno;

	var registro = {
		titulo: titulo,
		director: director,
		anno: anno
	}

	modelo.actualizar(id, registro, function(err){
		if(err) {
			console.log(err);
		} else {
			res.redirect("/");
		}
	})

}

controlador.formInsertar = function(req, res, next){
	res.render("formInsertar");
}

module.exports = controlador