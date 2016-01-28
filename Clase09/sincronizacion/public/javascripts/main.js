socket = io();

var listaMedicos = document.getElementById("listaMedicos");

function crearLista(id, nombre){
	var option  = document.createElement("option");
	option.value = id;
	var texto = document.createTextNode(nombre);
	option.appendChild(texto);

	listaMedicos.appendChild(option);
}

function medicoSeleccionado(){
	var seleccionado = 0;
	var options = document.getElementsByTagName("option");

	for(var i=0; i<options.length; i++) {
		if(options[i].selected) {
			seleccionado = options[i].value;
		}
	};

	return seleccionado;
}

function seleccionarMedico(id){
	var options = document.getElementsByTagName("option");

	Array.prototype.forEach.call(options, function(option) {
		if(option.value==id) option.selected = true;
	})
	/*for(var i=0; i<options.length; i++) {
		if(options[i].value==id) {
			options[i].selected = true;
		}
	};*/
}

function fnListado(registros) {
	registros.forEach(function(registro){
		crearLista(registro.id, registro.nombreMedico);
	});
}

function fnCambioMedico(){
	var id = medicoSeleccionado();

	socket.emit("cambio medico", id);
}

function fnActualizar(id) {
	seleccionarMedico(id);
}

listaMedicos.addEventListener("change", fnCambioMedico);

socket.on("lista de medicos", fnListado);
socket.on("actualizar", fnActualizar);