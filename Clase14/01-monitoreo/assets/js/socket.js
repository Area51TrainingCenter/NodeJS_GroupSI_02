io.socket.get("/monitoreo");

io.socket.on("monitoreo", function(obj){
	console.log(obj);
})


angular
	.module("app", [])
	.controller("controlador", ["$http", function($http){

		this.medicos = [];
		this.paramedicos = [];
		this.ambulancias = [];
		this.estados = [];
		this.monitoreo = [];

		var ref = this;

		$http
			.get("/medicos")
			.then(function(respuesta){
				ref.medicos = respuesta.data.registros;
			});

		$http
			.get("/paramedicos")
			.then(function(respuesta){
				ref.paramedicos = respuesta.data.registros;
			});	

		$http
			.get("/estados")
			.then(function(respuesta){
				ref.estados = respuesta.data.registros;
			});	

		$http
			.get("/ambulancias")
			.then(function(respuesta){
				ref.ambulancias = respuesta.data.registros;
			});						

		$http
			.get("/monitoreo")
			.then(function(respuesta){
				ref.monitoreo = respuesta.data.registros;
			});

		this.sincronizar = function(item) {
			$http
				.put("/monitoreo/"+item.idMonitoreo, item)
				.then(function(registro){
					
				})
		}
	}])

