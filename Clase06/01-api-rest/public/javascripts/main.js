document.addEventListener("DOMContentLoaded", function(){

	//Referencias
	var tbody = document.getElementsByTagName("tbody")[0];
	var btnInsertar = document.getElementById("btnInsertar");
	var listado = document.getElementById("listado");
	var formInsertar = document.getElementById("formInsertar");

	var tituloInsertar = document.getElementById("tituloInsertar");
	var directorInsertar = document.getElementById("directorInsertar");
	var annoInsertar = document.getElementById("annoInsertar");
	var btnGrabarInsertar = document.getElementById("btnGrabarInsertar");
	var btnRegresarInsertar = document.getElementById("btnRegresarInsertar");

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

		var aEditar = document.createElement("a");
		aEditar.className = "btn btn-info btnEditar";
		aEditar.setAttribute("data-id", registro.id);
		aEditar.href = "#";
		texto = document.createTextNode("Editar");
		aEditar.appendChild(texto);

		var aEliminar = document.createElement("a");
		aEliminar.className = "btn btn-danger btnEliminar";
		aEliminar.setAttribute("data-id", registro.id);
		aEliminar.href = "#";
		texto = document.createTextNode("Eliminar");
		aEliminar.appendChild(texto);

		tdAcciones.appendChild(aEditar);
		tdAcciones.appendChild(aEliminar);

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

	function fnInsertar() {
		var titulo = tituloInsertar.value;
		var director = directorInsertar.value;
		var anno = annoInsertar.value;

		var http = new XMLHttpRequest();

		http.onreadystatechange = function(){
			if(http.readyState==4 && http.status==200) {
				fnListar();

				listado.style.display="block";
				formInsertar.style.display="none";

				tituloInsertar.value="";
				directorInsertar.value="";
				annoInsertar.value="";
			}
		}
		http.open("post", "/insertar", true);
		http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
		http.send("titulo="+titulo+"&director="+director+"&anno="+anno);
	}

	function fnRegresarInsertar(){
		fnListar();

		listado.style.display="block";
		formInsertar.style.display="none";		
	}

	//Eventos DOM
	btnInsertar.addEventListener("click", fnFormInsertar);
	btnGrabarInsertar.addEventListener("click", fnInsertar);
	btnRegresarInsertar.addEventListener("click", fnRegresarInsertar)
});