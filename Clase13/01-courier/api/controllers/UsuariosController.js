/**
 * UsuariosController
 *
 * @description :: Server-side logic for managing usuarios
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */


module.exports = {
	
	listar: function(req, res){
		Usuarios
			.find({nactivo: 1})
			.sort({cUsuario: 'ASC'})
			.then(function(registros){
				res.json({registros: registros});
			})
			.catch(function(err){
				res.negotiate(err);
			});
	},

	listarPaginado: function(req, res){
		var paginado = {page: req.params.pagina, limit: req.params.tamano};

		Usuarios
			.find()
			.sort({cUsuario: 'ASC'})
			.paginate(paginado)
			.then(function(registros){
				res.json({registros: registros});
			})
			.catch(function(err){
				res.negotiate(err);
			});
	},

	contar: function(req, res) {
		Usuarios
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
		Usuarios
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
		var filtro = {idUsuario: req.params.id};

		Usuarios
			.update(filtro, data)
			.then(function(registros){
				res.ok();
			})
			.catch(function(err){
				res.negotiate(err);
			});			
	},

	eliminar: function(req, res){
		var filtro = {idUsuario: req.params.id};

		Usuarios
			.destroy(filtro)
			.then(function(registros){
				res.ok();
			})
			.catch(function(err){
				res.negotiate(err);
			});	
	},

	detallar: function(req, res) {
		var filtro = {idUsuario: req.params.id};

		Usuarios
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
