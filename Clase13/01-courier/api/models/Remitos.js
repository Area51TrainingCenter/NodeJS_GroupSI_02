/**
* Remitos.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {
	tableName: "remitos",
	attributes: {
		idRemito: {
			primaryKey: true,
			unique: true,
			autoIncrement: true,
			type: "integer"
		},

		cDescripcion: {
			type: "string",
			required: true
		},

		cRemitente: {
			type: "string",
			required: true
		},

		cDestinatario: {
			type: "string",
			required: true
		},

		cDireccion: {
			type: "string",
			required: true
		},

		nActivo: {
			type: "boolean",
			defaultsTo: true
		},

		manifiesto: {
			model: "Manifiestos"
		}
	}
};
