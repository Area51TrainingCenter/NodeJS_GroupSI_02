var evento = require("events").EventEmitter, 
	eventoEmit = new evento();

eventoEmit.on("curso node", function(nombre){
	console.log("Curso NodeJS: " + nombre);
});

eventoEmit.on("curso node", function(nombre){
	console.log("en Area51: " + nombre);
});

eventoEmit.emit("curso node", 2016);
eventoEmit.emit("curso node", "Enero");