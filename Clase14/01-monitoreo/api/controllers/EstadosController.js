/**
 * EstadosController
 *
 * @description :: Server-side logic for managing estados
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */


module.exports = {
	
	listar: function(req, res){
		Estados
			.find({nactivo: 1})
			.sort({cEstado: 'ASC'})
			.then(function(registros){
				res.json({registros: registros});
			})
			.catch(function(err){
				res.negotiate(err);
			});
	},

	listarPaginado: function(req, res){
		var paginado = {page: req.params.pagina, limit: req.params.tamano};

		Estados
			.find()
			.sort({cEstado: 'ASC'})
			.paginate(paginado)
			.then(function(registros){
				res.json({registros: registros});
			})
			.catch(function(err){
				res.negotiate(err);
			});
	},

	contar: function(req, res) {
		Estados
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
		Estados
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
		var filtro = {idEstado: req.params.id};

		Estados
			.update(filtro, data)
			.then(function(registros){
				res.ok();
			})
			.catch(function(err){
				res.negotiate(err);
			});			
	},

	eliminar: function(req, res){
		var filtro = {idEstado: req.params.id};

		Estados
			.destroy(filtro)
			.then(function(registros){
				res.ok();
			})
			.catch(function(err){
				res.negotiate(err);
			});	
	},

	detallar: function(req, res) {
		var filtro = {idEstado: req.params.id};

		Estados
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

