var chat = function(io) {
	io.on("connection", function(socket){

		var id = socket.id;

		socket.on("trazo", function(tipo, x, y){
			socket.broadcast.emit("dibujando", tipo, x, y);
		})

		socket.on("resultado", function(registros, id){
			socket.broadcast.to(id).emit("resultados del ws", registros, id);
		})


	})
};

module.exports = chat;