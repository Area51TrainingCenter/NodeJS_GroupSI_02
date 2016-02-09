/**
 * RemitosController
 *
 * @description :: Server-side logic for managing remitos
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */


module.exports = {
	
	listar: function(req, res){
		Remitos
			.find({nactivo: 1})
			.sort({createdAt: 'DESC'})
			.then(function(registros){
				res.json({registros: registros});
			})
			.catch(function(err){
				res.negotiate(err);
			});
	},

	listarPaginado: function(req, res){
		var paginado = {page: req.params.pagina, limit: req.params.tamano};

		Remitos
			.find()
			.sort({createdAt: 'DESC'})
			.paginate(paginado)
			.then(function(registros){
				res.json({registros: registros});
			})
			.catch(function(err){
				res.negotiate(err);
			});
	},

	contar: function(req, res) {
		Remitos
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
		Remitos
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
		var filtro = {idRemito: req.params.id};

		Remitos
			.update(filtro, data)
			.then(function(registros){
				res.ok();
			})
			.catch(function(err){
				res.negotiate(err);
			});			
	},

	eliminar: function(req, res){
		var filtro = {idRemito: req.params.id};

		Remitos
			.destroy(filtro)
			.then(function(registros){
				res.ok();
			})
			.catch(function(err){
				res.negotiate(err);
			});	
	},

	detallar: function(req, res) {
		var filtro = {idRemito: req.params.id};

		Remitos
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
