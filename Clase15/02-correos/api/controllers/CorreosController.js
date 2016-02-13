/**
 * CorreosController
 *
 * @description :: Server-side logic for managing Correos
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

var fs = require("fs");
var ejs = require("ejs");
var EJS = require("ejs2");

module.exports = {

	enviar: function(req, res) {
		var apiKey = sails.config.correoSetting.apiKey;
		var dominio = sails.config.correoSetting.dominio;

		var mailgun = require('mailgun-js')({apiKey: apiKey, domain: dominio});

		var datos = {
			from: sails.config.correoSetting.remitente,
			to: "sergiohidalgocaceres@gmail.com",
			subject: "Correo enviado desde SailsJS",
			//text: "Correo de prueba"
			html: "<h1>Correo de Prueba</h1>Enviado a <b>Sergio Hidalgo</b>"
		};

		mailgun.messages().send(datos, function (error, body) {
		  if(error) {
		  	res.negotiate(err);
		  }
		  console.log(body);
		  res.ok();
		});		
	},

	enviarReporte: function(req, res) {
		var apiKey = sails.config.correoSetting.apiKey;
		var dominio = sails.config.correoSetting.dominio;

		var mailgun = require('mailgun-js')({apiKey: apiKey, domain: dominio});

		var lista = [
			{usuario: "Sergio", hora: "10:00am"},
			{usuario: "Evelyn", hora: "11:00am"}
		];

		//var html = fs.readFileSync("views/formato.ejs", "utf-8");

		fs.readFile("views/formato.ejs", "utf-8", function(err, contenidoArchivo){

			var contenido = ejs.render(contenidoArchivo, {lista:lista});

			var datos = {
				from: sails.config.correoSetting.remitente,
				to: "sergiohidalgocaceres@gmail.com",
				subject: "Correo enviado desde SailsJS",
				//text: "Correo de prueba"
				html: contenido
			};

			mailgun.messages().send(datos, function (error, body) {
			  if(error) {
			  	res.negotiate(err);
			  }
			  console.log(body);
			  res.ok();
			});	


		})
	},

	enviarReporteOptimizado: function(req, res) {
		var apiKey = sails.config.correoSetting.apiKey;
		var dominio = sails.config.correoSetting.dominio;

		var mailgun = require('mailgun-js')({apiKey: apiKey, domain: dominio});

		var lista = [
			{usuario: "Sergio", hora: "10:00am"},
			{usuario: "Evelyn", hora: "11:00am"}
		];

		var ejs2 = new EJS();

		ejs2.renderFile("views/formato.ejs", {lista:lista}, function(err, contenido){

			var datos = {
				from: sails.config.correoSetting.remitente,
				to: "sergiohidalgocaceres@gmail.com",
				subject: "Correo enviado desde SailsJS",
				//text: "Correo de prueba"
				html: contenido
			};

			mailgun.messages().send(datos, function (error, body) {
			  if(error) {
			  	res.negotiate(err);
			  }
			  console.log(body);
			  res.ok();
			});	
		})
	},

	enviarReporteServicio: function(req, res) {
		var lista = [
			{usuario: "Sergio", hora: "10:00am"},
			{usuario: "Evelyn", hora: "11:00am"}
		];

		var ejs2 = new EJS();

		ejs2.renderFile("views/formato.ejs", {lista:lista}, function(err, contenido){

			UtilitarioService.enviarCorreo("sergiohidalgocaceres@gmail.com", "Correo enviado desde SailsJS", contenido, res);
		})
	},

	enviarReporteAdjunto: function(req, res) {
		var lista = [
			{usuario: "Sergio", hora: "10:00am"},
			{usuario: "Evelyn", hora: "11:00am"}
		];

		var ejs2 = new EJS();

		ejs2.renderFile("views/formato.ejs", {lista:lista}, function(err, contenido){

			var archivo = "pdfs/archivo.pdf";

			UtilitarioService.enviarCorreoAdjunto("sergiohidalgocaceres@gmail.com", "Correo enviado desde SailsJS", contenido, res, archivo);
		})
	}	

};

