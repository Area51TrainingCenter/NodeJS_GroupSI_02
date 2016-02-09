/**
* Usuarios.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/
var bcrypt = require("bcrypt-node");

module.exports = {
	tableName: "usuarios",
	attributes: {
		idUsuario: {
			primaryKey: true,
			unique: true,
			autoIncrement: true,
			type: "integer"
		},

		cUsuario: {
			type: "string",
			required: true
		},

		cContrasena: {
			type: "string",
			required: true
		},

		nActivo: {
			type: "boolean",
			defaultsTo: true
		}
	},

	beforeCreate: function(registro, cb) {
	    bcrypt.hash(registro.cContrasena, null, null, function(err, hash) {
	      		if(err) return cb(err);
	      		registro.cContrasena = hash;
	      	cb();
	    });
	}


};

