var modelo = require("../modelos/modeloPelicula");
var path = require("path");

var controlador = function(){}

controlador.listar = function(req, res, next) {
	modelo.listar(function(err, registros){
		if(err) {
			console.log(path.join("Error: ", err));
			res.status(500).json({error: err});
		} else {
			res.json(registros);
		}
	})
}

controlador.editar = function(req, res, next) {
	var id = req.params.id;

	modelo.editar(id, function(err, registros) {
		if(err) {
			console.log(path.join("Error: ", err));
			res.status(500).json({error: err});
		} else {
			res.json(registros);
		}		
	})
}

controlador.actualizar = function(req, res, next) {
	var id = req.params.id;
	var registro = {
		titulo: req.body.titulo,
		anno: req.body.anno,
		director: req.body.director
	};

	modelo.actualizar(id, registro, function(err){
		if(err) {
			console.log(path.join("Error: ", err));
			res.status(500).json({error: err});
		} else {
			res.json({estado: "ok"});
		}	
	})
}

controlador.eliminar = function(req, res, next) {
	var id = req.params.id;

	modelo.eliminar(id, function(err){
		if(err) {
			console.log(path.join("Error: ", err));
			res.status(500).json({error: err});
		} else {
			res.json({estado: "ok"});
		}	
	});
}

controlador.insertar = function(req, res, next) {
	var registro = {
		titulo: req.body.titulo,
		anno: req.body.anno,
		director: req.body.director
	};

	modelo.insertar(registro, function(err){
		if(err) {
			console.log(path.join("Error: ", err));
			res.status(500).json({error: err});
		} else {
			res.json({estado: "ok"});
		}		
	})	
}

module.exports = controlador;