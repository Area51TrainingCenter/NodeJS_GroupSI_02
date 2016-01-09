var fs = require("fs");

fs.readFile("listado.txt", function(err, contenido){
		if(err){
			console.log("Ocurrió un error: " + err);
		} 
});

console.log(process.uptime());