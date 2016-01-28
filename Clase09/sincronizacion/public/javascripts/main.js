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

function fnCambioMedico(){

}

listaMedicos.addEventListener("change", fnCambioMedico);