/**
* Ambulancias.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {
	tableName: "Ambulancias",
	attributes: {
		idAmbulancia: {
			primaryKey: true,
			unique: true,
			autoIncrement: true,
			type: "integer"
		},

		nNumero: {
			type: "integer",
			required: true
		},

		nActivo: {
			type: "integer",
			defaultsTo: 0
		},

		monitoreo: {
			model: "Monitoreo"
		}
	}
};

