/**
 * MedicosController
 *
 * @description :: Server-side logic for managing medicos
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

	listar: function(req, res) {
		Medicos
			.find()
			.sort({nombreMedico: "asc"})
			.then(function(registros){
				res.view("listarMedicos", {regs: registros});
				//res.json(registros);
			})
			.catch(function(err){
				res.negotiate(err);
			})
	},
	insertar: function(req, res) {
		var nombreMedico = req.body.nombreMedico,
			cmp = req.body.cmp;

		var datos = {
			nombreMedico: nombreMedico,
			cmp: cmp
		};

		Medicos
			.create(datos)
			.then(function(registros){
				res.redirect("/medicos/listar");
			})
			.catch(function(err){
				res.negotiate(err);
			})
	},
	actualizar: function(req, res) {
		var idMedico = req.params.id,
			nombreMedico = req.body.nombreMedico,
			cmp = req.body.cmp;

		var datos = {
			nombreMedico: nombreMedico,
			cmp: cmp
		};

		var filtro = {
			idMedico: idMedico
		};

		Medicos
			.update(filtro, datos)
			.then(function(registros){
				res.redirect("/medicos/listar");
			})
			.catch(function(err){
				res.negotiate(err);
			})
	},
	eliminar: function(req, res) {
		var idMedico = req.params.id;
		var filtro = {
			idMedico: idMedico
		};
		Medicos
			.destroy()
			.where(filtro)
			.then(function(registros){
				res.redirect("/medicos/listar");
			})
			.catch(function(err){
				res.negotiate(err);
			})
	},
	editar: function(req, res) {
		var idMedico = req.params.id;
		var filtro = {
			idMedico: idMedico
		}

		Medicos
			.find()
			.where(filtro)
			.then(function(registros){
				res.view("editarMedico",{reg: registros[0]});
			})
			.catch(function(err){
				res.negotiate(err);
			})
	}
	
};

