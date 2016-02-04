/**
* Medicos.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
  	idMedico: {
  		primaryKey:true,
  		type:"integer",
  		unique: true,
  		autoIncrement: true
  	},

  	nombreMedico: "string",
  	cmp: "integer",

  	historia: {
  		collection: "HistoriasMedicas",
  		via: "medico"
  	}

  }
};

