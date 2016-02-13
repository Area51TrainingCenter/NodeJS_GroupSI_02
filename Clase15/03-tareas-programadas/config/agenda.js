var Agenda = require("agenda");

var mongoConnectionString = "mongodb://127.0.0.1/agenda";
var agenda = new Agenda({db: {address: mongoConnectionString}});

//Definición de la tarea
agenda.define('enviar reporte', function(job, done) {
  console.log("Tarea realizada");
});

agenda.on('ready', function() {
  //Cuándo se ejecuta la tarea
  console.log("Ready");

  var reporte = agenda.create('enviar reporte');
  reporte.repeatEvery("5 seconds").save();

  //agenda.repeat("1 minutes", "enviar reporte");
  agenda.start();
});