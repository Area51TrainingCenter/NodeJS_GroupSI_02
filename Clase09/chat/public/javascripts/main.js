var socket = io();

function fnEscribirLog(mensaje) {
	var log = document.getElementById("log");
	log.innerHTML += mensaje + "<br>";	
}

function fnConectado(){
	fnEscribirLog("Usuario conectado");
}

function fnMensaje(msg) {
	fnEscribirLog(msg.texto + " "+msg.id + " Fecha y Hora: " + msg.fechaHora);
}

function fnEnviadoATodos(fechaHora){
	fnEscribirLog("Hora y Fecha Actual: " + fechaHora);
}

function fnMostrarHora(hora){
	var _hora = document.getElementById("hora");
	_hora.innerHTML = hora; 
}

socket.on("conexion activa", fnConectado);
socket.on("mensaje", fnMensaje);
socket.on("Hora Actualizada", fnEnviadoATodos);
socket.on("Hora", fnMostrarHora);