/**
* Enfermeros.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
  	idEnfermero: {
  		primaryKey:true,
  		type:"integer",
  		unique: true,
  		autoIncrement: true
  	},

  	nombreEnfermero: "string",

  	historia: {
  		collection: "HistoriasMedicas",
  		via: "enfermero"
  	}  	
  }
};

