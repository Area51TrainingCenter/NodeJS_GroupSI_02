var evento = require("events").EventEmitter, 
	eventoEmit = new evento();

eventoEmit.on("llamada a evento", function(){
	console.log("evento ejecutado");
});

eventoEmit.emit("llamada a evento");