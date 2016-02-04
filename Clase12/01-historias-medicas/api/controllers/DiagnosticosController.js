/**
 * DiagnosticosController
 *
 * @description :: Server-side logic for managing Diagnosticos
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

	listar: function(req, res) {
		Diagnosticos
			.find()
			.sort({nombreDiagnostico: "asc"})
			.then(function(registros){
				res.view("listarDiagnosticos", {regs: registros});
				//res.json(registros);
			})
			.catch(function(err){
				res.negotiate(err);
			})
	},
	insertar: function(req, res) {
		var nombreDiagnostico = req.body.nombreDiagnostico;

		var datos = {
			nombreDiagnostico: nombreDiagnostico
		};

		Diagnosticos
			.create(datos)
			.then(function(registros){
				res.redirect("/diagnosticos/listar");
			})
			.catch(function(err){
				res.negotiate(err);
			})
	},
	actualizar: function(req, res) {
		var idDiagnostico = req.params.id,
			nombreDiagnostico = req.body.nombreDiagnostico;

		var datos = {
			nombreDiagnostico: nombreDiagnostico
		};

		var filtro = {
			idDiagnostico: idDiagnostico
		};

		Diagnosticos
			.update(filtro, datos)
			.then(function(registros){
				res.redirect("/diagnosticos/listar");
			})
			.catch(function(err){
				res.negotiate(err);
			})
	},
	eliminar: function(req, res) {
		var idDiagnostico = req.params.id;
		var filtro = {
			idDiagnostico: idDiagnostico
		};
		Diagnosticos
			.destroy()
			.where(filtro)
			.then(function(registros){
				res.redirect("/diagnosticos/listar");
			})
			.catch(function(err){
				res.negotiate(err);
			})
	},
	editar: function(req, res) {
		var idDiagnostico = req.params.id;
		var filtro = {
			idDiagnostico: idDiagnostico
		}

		Diagnosticos
			.find()
			.where(filtro)
			.then(function(registros){
				res.view("editarDiagnostico",{reg: registros[0]});
			})
			.catch(function(err){
				res.negotiate(err);
			})
	}
	
};

