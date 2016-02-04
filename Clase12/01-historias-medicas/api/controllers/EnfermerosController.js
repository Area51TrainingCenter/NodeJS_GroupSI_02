/**
 * MedicosController
 *
 * @description :: Server-side logic for managing medicos
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

	listar: function(req, res) {
		Enfermeros
			.find()
			.sort({nombreEnfermero: "asc"})
			.then(function(registros){
				res.view("listarEnfermeros", {regs: registros});
				//res.json(registros);
			})
			.catch(function(err){
				res.negotiate(err);
			})
	},
	insertar: function(req, res) {
		var nombreEnfermero = req.body.nombreEnfermero;

		var datos = {
			nombreEnfermero: nombreEnfermero
		};

		Enfermeros
			.create(datos)
			.then(function(registros){
				res.redirect("/enfermeros/listar");
			})
			.catch(function(err){
				res.negotiate(err);
			})
	},
	actualizar: function(req, res) {
		var idEnfermero = req.params.id,
			nombreEnfermero = req.body.nombreEnfermero;

		var datos = {
			nombreEnfermero: nombreEnfermero
		};

		var filtro = {
			idEnfermero: idEnfermero
		};

		Enfermeros
			.update(filtro, datos)
			.then(function(registros){
				res.redirect("/enfermeros/listar");
			})
			.catch(function(err){
				res.negotiate(err);
			})
	},
	eliminar: function(req, res) {
		var idEnfermero = req.params.id;
		var filtro = {
			idEnfermero: idEnfermero
		};
		Enfermeros
			.destroy()
			.where(filtro)
			.then(function(registros){
				res.redirect("/enfermeros/idEnfermerolistar");
			})
			.catch(function(err){
				res.negotiate(err);
			})
	},
	editar: function(req, res) {
		var idEnfermero = req.params.id;
		var filtro = {
			idEnfermero: idEnfermero
		}

		Enfermeros
			.find()
			.where(filtro)
			.then(function(registros){
				res.view("editarEnfermero",{reg: registros[0]});
			})
			.catch(function(err){
				res.negotiate(err);
			})
	}
	
};

