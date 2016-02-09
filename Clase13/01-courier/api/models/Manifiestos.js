/**
* Manifiestos.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {
	tableName: "manifiestos",
	attributes: {
		idManifiesto: {
			primaryKey: true,
			unique: true,
			autoIncrement: true,
			type: "integer"
		},

		nCantidadBultos: {
			type: "integer",
			required: true
		},

		nPeso: {
			type: "float",
			required: true
		},

		nVolumen: {
			type: "float",
			required: true
		},

		remito: {
			collection: "Remitos",
			via: "manifiesto"
		},

		nActivo: {
			type: "boolean",
			defaultsTo: true
		}
	}
};

