var socket = io();

var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
ctx.fillStyle="#f00";
ctx.strokeStyle="#00f";
ctx.lineWidth="2px";

var inicioTrazo = false;

function fnDibujar(e) {
	var tipo = e.type;

	var x = e.layerX,
		y = e.layerY;

	switch(tipo){
		case "mousedown":
			inicioTrazo = true;
			ctx.beginPath();
			ctx.moveTo(x, y);
			break;
		case "mousemove":
			if(inicioTrazo) {
				ctx.lineTo(x, y);
				ctx.stroke();				
			}
			break;
		case "mouseup":
			if(inicioTrazo){
				ctx.closePath();
				inicioTrazo = false;
			}
			
			break;
	}

	if(inicioTrazo) {
		socket.emit("trazo", tipo, x, y);
	}
}

function fnDibujando(tipo, x, y) {
	switch(tipo) {
		case "mousedown":
			ctx.beginPath();
			ctx.moveTo(x, y);
			break;
		case "mousemove":
			ctx.lineTo(x, y);
			ctx.stroke();
			break;
		case "mouseup":
			ctx.closePath();
			break;
	}
}


canvas.addEventListener("mousedown", fnDibujar);
canvas.addEventListener("mousemove", fnDibujar);
canvas.addEventListener("mouseup", fnDibujar);

socket.on("dibujando", fnDibujando);