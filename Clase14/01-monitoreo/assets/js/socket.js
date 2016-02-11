io.socket.get("/monitoreo");

io.socket.on("monitoreo", function(obj){
	console.log(obj);
})