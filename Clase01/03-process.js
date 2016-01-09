function hilo()
{
	console.log("---------------------------------------------");
	console.log("         EL PROCESO DE NODE.JS         ");
	console.log("Id del proceso ........... " + process.pid);
	console.log("Título.................... " + process.title);
	console.log("Directorio de Node........ " + process.execPath);
	console.log("Directorio Actual......... " + process.cwd());
	console.log("Versión de Node........... " + process.version);
	console.log("Versiones Dependencias.... " + process.versions);
	console.log("Plataforma (S.O.)......... " + process.platform);
	console.log("Arquitectura (S.O.)....... " + process.arch);
	console.log("Tiempo activo de Node..... " + process.uptime());
	console.log("Argumentos del proceso.... " + process.argv);
	console.log("---------------------------------------------");
}

hilo();