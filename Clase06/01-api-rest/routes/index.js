var express = require('express');
var router = express.Router();
var controlador = require("../controladores/controladorPelicula");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/listar', controlador.listar);
router.get('/editar/:id', controlador.editar);
router.put('/actualizar/:id', controlador.actualizar);
router.post('/insertar', controlador.insertar);
router.delete('/eliminar/:id', controlador.eliminar);





module.exports = router;
