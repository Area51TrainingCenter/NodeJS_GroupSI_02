/**
* Descripcion.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
  	idDescripcion: {
  		primaryKey: true,
  		type: "integer",
  		autoIncrement: true,
  		unique: true  		
  	},

  	modelo: "string",
  	marca: "string",
  	tipo: {
  		type:"string",
  		enum: ["computadora", "impresora"]
  	},

  	equipo: {
  		model: "Equipo"
  	}
  }
};

