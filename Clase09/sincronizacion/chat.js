var modelo = require("./modelos/modeloMedicos");

var chat = function(io) {
	var id=0;

	io.on("connection", function(socket){

		modelo.listar(function(err, registros){
			if(err) {
				console.log(err);
			} else {
				socket.emit("lista de medicos", registros);
			}
		});

		socket.on("cambio medico", function(id){
			socket.broadcast.emit("actualizar", id);
		})



	});
}

module.exports = chat;