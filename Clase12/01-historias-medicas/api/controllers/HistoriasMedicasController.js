/**
 * HistoriasMedicasController
 *
 * @description :: Server-side logic for managing historiasmedicas
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

	listar: function(req, res){
		HistoriasMedicas
			.find()
			.populate("medico")
			.populate("enfermero")
			.populate("diagnostico")
			.then(function(registros){
				res.view("listarHistoriasMedicas", {regs: registros})
			})
			.catch(function(err){
				res.negotiate(err);
			})
	},
	insertar: function(req, res){
		var nombrePaciente = req.body.nombrePaciente,
			medico = req.body.medico,
			enfermero = req.body.enfermero,
			diagnostico = req.body.diagnostico;

		var data = {
			nombrePaciente: nombrePaciente,
			medico: medico,
			enfermero: enfermero,
			diagnostico:diagnostico
		};

		HistoriasMedicas
			.create(data)
			.then(function(registros){
				res.redirect("/historiasmedicas/listar")
			})
			.catch(function(err){
				res.negotiate(err);
			})
	},
	actualizar: function(req, res){
		var idHistoriaMedica = req.params.id;
		var nombrePaciente = req.body.nombrePaciente,
			medico = req.body.medico,
			enfermero = req.body.enfermero,
			diagnostico = req.body.diagnostico;

		var data = {
			nombrePaciente: nombrePaciente,
			medico: medico,
			enfermero: enfermero,
			diagnostico:diagnostico
		};	

		HistoriasMedicas
			.update({idHistoriaMedica: idHistoriaMedica}, data)
			.then(function(registros){
				res.redirect("/historiasmedicas/listar")
			})
			.catch(function(err){
				res.negotiate(err);
			});		
	},
	eliminar: function(req, res){
		var idHistoriaMedica = req.params.id;

		HistoriasMedicas
			.destroy()
			.where({idHistoriaMedica: idHistoriaMedica})
			.then(function(registros){
				res.redirect("/historiasmedicas/listar");
			})
			.catch(function(err){
				res.negotiate(err);
			});			
	},
	editar: function(req, res){
		var idHistoriaMedica = req.params.id;

		var regHistoriaMedica,
			regsMedicos,
			regsEnfermeros,
			regsDiagnosticos;



		HistoriasMedicas
			.find()
			// .findOne({idHistoriaMedica: idHistoriaMedica})
			.where({idHistoriaMedica: idHistoriaMedica})
			.then(function(registros){
				regHistoriaMedica = registros[0];
				return Medicos.find();
				// res.view("editarHistoria", {reg: registros[0]})
			})
			.then(function(registros){
				regsMedicos = registros;
				return Enfermeros.find();
			})
			.then(function(registros){
				regsEnfermeros = registros;
				return Diagnosticos.find();
			})
			.then(function(registros){
				regsDiagnosticos = registros;

				res.view("editarHistoriaMedica", {
					historia: regHistoriaMedica,
					medicos: regsMedicos,
					enfermeros: regsEnfermeros,
					diagnosticos: regsDiagnosticos
				})
			})
			.catch(function(err){
				res.negotiate(err);
			});			
	},
	formInsertar: function(req, res) {
		var regsMedicos, regsEnfermeros, regsDiagnosticos;

		Medicos
			.find()
			.then(function(registros){
				regsMedicos = registros;

				return Enfermeros.find();
			})
			.then(function(registros){
				regsEnfermeros = registros;

				return Diagnosticos.find();
			})
			.then(function(registros){
				regsDiagnosticos = registros;

				res.view("formInsertarHistoriaMedica", {
					medicos: regsMedicos,
					enfermeros: regsEnfermeros,
					diagnosticos: regsDiagnosticos
				});
			})
			.catch(function(err){
				res.negotiate(err);
			});			
	}
	
};

