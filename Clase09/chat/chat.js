var chat = function(io) {
	var id=0;

	io.on("connection", function(socket){

		var fechaHora = new Date();
		socket.emit("conexion activa");
		socket.emit("mensaje", {texto: "Bienvenido", id: socket.id, fechaHora: fechaHora});

		socket.broadcast.emit("conexion activa");
		socket.broadcast.emit("mensaje", {texto: "Bienvenido", id: socket.id, fechaHora: fechaHora});

		io.sockets.emit("Hora Actualizada", fechaHora);

		if(id==0) {
			id=setInterval(
					function(){
						var fechaHora = new Date();

						var horas = fechaHora.getHours();
						var minutos = fechaHora.getMinutes();
						var segundos = fechaHora.getSeconds();

						var shoras = horas<10 ? "0"+horas : horas;
						var sminutos = minutos<10 ? "0"+minutos : minutos;
						var ssegundos = segundos<10 ? "0"+segundos : segundos;

						io.sockets.emit("Hora", shoras+":"+sminutos+":"+ssegundos);

					}
				, 1000);
		}


	});
}

module.exports = chat;