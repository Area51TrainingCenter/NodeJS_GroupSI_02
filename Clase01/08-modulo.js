var reloj = require("./reloj");

reloj.on("actualizar hora", function(){
	reloj.mostrarHora();
});