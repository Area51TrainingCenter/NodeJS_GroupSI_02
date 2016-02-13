module.exports = {
	enviarCorreo: function(destinatario, asunto, cuerpo, res){

			var apiKey = sails.config.correoSetting.apiKey;
			var dominio = sails.config.correoSetting.dominio;

			var mailgun = require('mailgun-js')({apiKey: apiKey, domain: dominio});		

			var datos = {
				from: sails.config.correoSetting.remitente,
				to: destinatario,
				subject: asunto,
				html: cuerpo
			};

			mailgun.messages().send(datos, function (error, body) {
			  if(error) {
			  	res.negotiate(err);
			  }
			  console.log(body);
			  res.ok();
			});	
	},

	enviarCorreoAdjunto: function(destinatario, asunto, cuerpo, res, archivo){

			var apiKey = sails.config.correoSetting.apiKey;
			var dominio = sails.config.correoSetting.dominio;

			var mailgun = require('mailgun-js')({apiKey: apiKey, domain: dominio});		

			var datos = {
				from: sails.config.correoSetting.remitente,
				to: destinatario,
				subject: asunto,
				html: cuerpo,
				attachment: archivo
			};

			mailgun.messages().send(datos, function (error, body) {
			  if(error) {
			  	res.negotiate(err);
			  }
			  console.log(body);
			  res.ok();
			});	
	}	
}