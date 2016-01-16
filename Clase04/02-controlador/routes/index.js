var express = require('express');
var router = express.Router();
var conexion = require("../conexiones/connMySQL");
var controlador = require("../controladores/controladorPelicula");

/* GET home page. */
router.get('/', controlador.listar);
router.post('/insertar', controlador.insertar);
router.get('/editar/:id', controlador.editar);
router.post('/actualizar/:id', controlador.actualizar);
router.get('/eliminar/:id', controlador.eliminar);

router.get('/formInsertar', controlador.formInsertar);





module.exports = router;
