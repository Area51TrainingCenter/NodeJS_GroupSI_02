/**
* HistoriasMedicas.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
  	idHistoriaMedica: {
  		primaryKey:true,
  		type:"integer",
  		unique: true,
  		autoIncrement: true
  	},

  	nombrePaciente: "string",
  	dni: "string",

  	medico: {
  		model: "Medicos"
  	},

  	enfermero: {
  		model: "Enfermeros"
  	},

  	diagnostico: {
  		model: "Diagnosticos"
  	}


  }
};

