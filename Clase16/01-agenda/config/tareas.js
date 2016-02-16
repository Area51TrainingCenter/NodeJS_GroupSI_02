var Agenda = require("agenda");
var agenda = new Agenda();
agenda.database("mongodb://127.0.0.1/tareas");
agenda.processEvery("30 seconds");

agenda.define("envio reporte", function(job, done){
	console.log("Envío realizado: " + new Date());
	done();
});

agenda.define("cierre contable", function(job, done){
	console.log("Cierre contable. Ejecutado por " + job.attrs.data.usuario);
	done();
});

agenda.define("ejecutar limpieza base de datos", function(job, done){
	console.log("Limpieza ejecutada a las " + (new Date()));
	done();
})


agenda.on("ready", function(){
	agenda.every("20 seconds", "envio reporte");
	agenda.schedule("in 25 seconds", "cierre contable", {usuario: "Sergio"});

	var job01 = agenda.create("ejecutar limpieza base de datos");
	job01.repeatAt("7:37pm");
	job01.save();

	/*var job01 = agenda.create("cierre contable", {usuario: "Sergio"});
	job01.schedule("in 25 seconds");
	job01.save();*/

	agenda.start();
})