/**
 * AmbulanciasController
 *
 * @description :: Server-side logic for managing ambulancias
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */


module.exports = {
	
	listar: function(req, res){
		Ambulacias
			.find({nactivo: 1})
			.sort({nNumero: 'ASC'})
			.then(function(registros){
				res.json({registros: registros});
			})
			.catch(function(err){
				res.negotiate(err);
			});
	},

	listarPaginado: function(req, res){
		var paginado = {page: req.params.pagina, limit: req.params.tamano};

		Ambulacias
			.find()
			.sort({nNumero: 'ASC'})
			.paginate(paginado)
			.then(function(registros){
				res.json({registros: registros});
			})
			.catch(function(err){
				res.negotiate(err);
			});
	},

	contar: function(req, res) {
		Ambulacias
			.count()
			.then(function(cantidad){
				res.json({cantidad: cantidad});
			})
			.catch(function(err){
				res.negotiate(err);
			});
	},

	insertar: function(req, res){
		var data = req.allParams();
		Ambulacias
			.create(data)
			.then(function(registros){
				res.ok();
			})
			.catch(function(err){
				res.negotiate(err);
			});
	},

	actualizar: function(req, res){
		var data = req.allParams();
		var filtro = {idAmbulancia: req.params.id};

		Ambulacias
			.update(filtro, data)
			.then(function(registros){
				res.ok();
			})
			.catch(function(err){
				res.negotiate(err);
			});			
	},

	eliminar: function(req, res){
		var filtro = {idAmbulancia: req.params.id};

		Ambulacias
			.destroy(filtro)
			.then(function(registros){
				res.ok();
			})
			.catch(function(err){
				res.negotiate(err);
			});	
	},

	detallar: function(req, res) {
		var filtro = {idAmbulancia: req.params.id};

		Ambulacias
			.find()
			.where(filtro)
			.then(function(registros){
				res.json({registros: registros});
			})
			.catch(function(err){
				res.negotiate(err);
			});
	}
};
