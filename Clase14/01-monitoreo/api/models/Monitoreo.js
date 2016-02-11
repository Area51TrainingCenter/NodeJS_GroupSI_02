/**
* Monitoreo.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {
	tableName: "Monitoreo",
	attributes: {
		idMonitoreo: {
			primaryKey: true,
			unique: true,
			autoIncrement: true,
			type: "integer"
		},

		ambulancia: {
			model: "Ambulancias"
		},

		estado: {
			model: "Estados"
		},

		medico: {
			model: "Medicos"
		},

		paramedico: {
			model: "Paramedicos"
		}
	}
};
