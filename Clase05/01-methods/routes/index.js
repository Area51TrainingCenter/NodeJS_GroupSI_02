var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.put("/rutaPut", function(req, res, next){
	var usuario = req.body.usuarioPut;
	res.send("Usuario PUT = " + usuario);
});

router.delete("/rutaDelete", function(req, res, next){
	var usuario = req.body.usuarioDelete;
	res.send("Usuario DELETE = " + usuario);
});



module.exports = router;
