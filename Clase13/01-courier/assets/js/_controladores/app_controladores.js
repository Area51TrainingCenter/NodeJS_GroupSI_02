angular
	.module("app.controladores", [])
	.controller("loginController", ["$http", function($http){
		this.datosUsuario = {};
		this.estado = "";

		var ref = this;

		this.loguearse = function(){
			$http
				.post("/auth/login", this.datosUsuario)
				.then(function(respuesta){
					ref.estado = respuesta.data.estado;
				})
				.catch(function(err){
					console.log(err);
				});
		}
	}])