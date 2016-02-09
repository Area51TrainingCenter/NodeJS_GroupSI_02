/**
 * AuthController
 *
 * @description :: Server-side logic for managing auths
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

var bcrypt = require("bcrypt-node");

module.exports = {
	login: function(req, res) {
		var data = req.allParams();

		Usuarios
			.find()
			.where({cUsuario: data.cUsuario})
			.then(function(registros){
				if(registros.length==0) res.json({estado: "no encontrado"});

				var contrasena = registros[0].cContrasena;

				bcrypt.compare(data.cContrasena, contrasena, function(err, resultado) {
				    if(resultado) {
				    	req.session.authenticated = true;
				    	req.session.usuario = registros[0];
				    	res.json({estado: "encontrado"});
				    } else {
				    	res.json({estado: "contraseña incorrecta"});
				    }
				});
			})
			.catch(function(err){
				res.negotiate(err);
			})
	},

	logout: function(req, res) {
		req.session.authenticated = false;
		req.session.usuario = null;
		res.ok();
	}
};

