document.addEventListener("DOMContentLoaded", function(){

	//Referencias
	var tbody = document.getElementsByTagName("tbody")[0];
	var btnInsertar = document.getElementById("btnInsertar");
	var listado = document.getElementById("listado");
	var formInsertar = document.getElementById("formInsertar");

	//Funciones extras
	function fnLimpiarListado(){
		tbody.innerHTML = "";
	}

	function fnAgregarFila(registro) {
		/*
			tr
				td ID
				td TITULO
				td DIRECTOR
				td AÑO
				td ACCIONES
		*/

		var tdId = document.createElement("td");
		var tdTitulo = document.createElement("td");
		var tdDirector = document.createElement("td");
		var tdAnno = document.createElement("td");
		var tdAcciones = document.createElement("td");

		var texto = document.createTextNode(registro.id);
		tdId.appendChild(texto);

		var texto = document.createTextNode(registro.titulo);
		tdTitulo.appendChild(texto);	

		texto = document.createTextNode(registro.director);
		tdDirector.appendChild(texto);

		texto = document.createTextNode(registro.anno);
		tdAnno.appendChild(texto);

		var tr = document.createElement("tr");
		tr.appendChild(tdId);
		tr.appendChild(tdTitulo);
		tr.appendChild(tdDirector);
		tr.appendChild(tdAnno);
		tr.appendChild(tdAcciones);

		tbody.appendChild(tr);
					
	}

	function fnListar(){
		var http = new XMLHttpRequest();

		http.onreadystatechange = function(){
			if(http.readyState == 4 && http.status == 200) {

				fnLimpiarListado();

				var registros = JSON.parse(http.responseText);

				registros.forEach(function(registro){
					fnAgregarFila(registro);
				})

			}
		}

		http.open("get", "/listar", true);
		http.send();
	}


	fnListar();

	//Funciones Eventos Callback
	function fnFormInsertar(){
		listado.style.display = "none";
		formInsertar.style.display = "block";
	}

	//Eventos DOM
	btnInsertar.addEventListener("click", fnFormInsertar)
});