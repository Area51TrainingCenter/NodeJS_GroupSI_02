/**
* Estados.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {
	tableName: "Estados",
	attributes: {
		idEstado: {
			primaryKey: true,
			unique: true,
			autoIncrement: true,
			type: "integer"
		},

		cEstado: {
			type: "string",
			required: true
		},

		nActivo: {
			type: "integer",
			defaultsTo: 0
		},

		monitoreo: {
			collection: "Monitoreo",
			via: "estado"
		}		
	}
};
