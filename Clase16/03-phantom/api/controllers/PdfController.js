/**
 * PdfController
 *
 * @description :: Server-side logic for managing pdfs
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

var phantom = require("node-phantom-simple"),
	ejs = require("ejs"),
	fs = require("fs"),
	random = require("random-gen");

module.exports = {
	generar: function(req, res) {
		var html = ejs.render("<h1><%= usuario %></h1>", {usuario: "Sergio Hidalgo"});
		var aleatorio = random.alphaNum(16);
		var nombrePdf = aleatorio + ".pdf";
		//html = "<h1>Sergio Hidalgo</h1>"

		phantom.create(function(error, ph) {
			ph.createPage(function(error, page){
		    	page.settings = {
		        	loadImages: true,
		        	localToRemoteUrlAccessEnabled: true,
		        	javascriptEnabled: true,
		        	loadPlugins: false
		       	};

		      	page.set('viewportSize', { width: 800, height: 600 });
		      	page.set('paperSize', { format: 'A4', orientation: 'landscape', border: '1cm' });		      

		      	page.set('content', html, function(error) {
		        	if (error) {
		          		console.log('Error seteando el contenido: ', error);
		        	}
		      	});

		      	page.onLoadFinished = function(status){
		      		page.render(nombrePdf, function(err){
		      			if(err) {
		      				res.negotiate(err);
		      			} else {
		      				fs.readFile(nombrePdf, function(err, contenido){
				          		res.set('Content-Type', 'application/pdf');
				          		res.send(contenido);		      					
		      				})
		      			}
		      			ph.exit();
		      		});
		      	}		      	
		      	

			})
		})
	}
};

