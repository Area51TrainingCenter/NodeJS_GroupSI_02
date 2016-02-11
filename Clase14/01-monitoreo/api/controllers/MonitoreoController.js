/**
 * MonitoreoController
 *
 * @description :: Server-side logic for managing monitoreos
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */


module.exports = {
	
	listar: function(req, res){
		Monitoreo
			.find()
			.populate("ambulancia")
			.populate("medico")
			.populate("paramedico")
			.populate("estado")
			.sort({idMonitoreo: 'ASC'})
			.then(function(registros){
				if(req.isSocket) {
					Monitoreo.subscribe(req, registros);
					Monitoreo.watch(req);
				}				
				res.json({registros: registros});
			})
			.catch(function(err){
				res.negotiate(err);
			});
	},

	listarPaginado: function(req, res){
		var paginado = {page: req.params.pagina, limit: req.params.tamano};

		Monitoreo
			.find()
			.populate("ambulancia")
			.populate("medico")
			.populate("paramedico")
			.populate("estado")			
			.sort({idMonitoreo: 'ASC'})
			.paginate(paginado)
			.then(function(registros){
				res.json({registros: registros});
			})
			.catch(function(err){
				res.negotiate(err);
			});
	},

	contar: function(req, res) {
		Monitoreo
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
		Monitoreo
			.create(data)
			.then(function(registro){
				Monitoreo.publishCreate(registro);				
				res.ok();
			})
			.catch(function(err){
				res.negotiate(err);
			});
	},

	actualizar: function(req, res){
		var data = req.allParams();
		var filtro = {idMonitoreo: req.params.id};

		Monitoreo
			.update(filtro, data)
			.then(function(registros){
				Monitoreo.publishUpdate(registros[0].idMonitoreo, registros[0]);
				res.ok();
			})
			.catch(function(err){
				res.negotiate(err);
			});			
	},

	eliminar: function(req, res){
		var filtro = {idMonitoreo: req.params.id};

		Monitoreo
			.destroy(filtro)
			.then(function(registros){
				Monitoreo.publishDestroy(registros[0].idMonitoreo, req);				
				res.ok();
			})
			.catch(function(err){
				res.negotiate(err);
			});	
	},

	detallar: function(req, res) {
		var filtro = {idMonitoreo: req.params.id};

		Monitoreo
			.find()
			.populate("ambulancia")
			.populate("medico")
			.populate("paramedico")
			.populate("estado")			
			.where(filtro)
			.then(function(registros){
				res.json({registros: registros});
			})
			.catch(function(err){
				res.negotiate(err);
			});
	}
};

