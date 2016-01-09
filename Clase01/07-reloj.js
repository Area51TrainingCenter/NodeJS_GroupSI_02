var eventos = require("events").EventEmitter,
	herencia = require("util").inherits;

function Reloj(){
	var ref = this;

	setInterval(function(){
		ref.emit("actualizar hora");
	}, 1000);

	ref.mostrarHora = function(){
		var fechaHora = new Date();

		var horas = fechaHora.getHours();
		var minutos = fechaHora.getMinutes();
		var segundos = fechaHora.getSeconds();

		var shoras = horas<10 ? "0"+horas : horas;
		var sminutos = minutos<10 ? "0"+minutos : minutos;
		var ssegundos = segundos<10 ? "0"+segundos : segundos;

		console.log(shoras + ":" + sminutos + ":" + ssegundos);
	}
}

herencia(Reloj, eventos);

var reloj = new Reloj();
reloj.on("actualizar hora", function(){
	reloj.mostrarHora();
});
