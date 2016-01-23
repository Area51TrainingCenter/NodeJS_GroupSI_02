var express = require('express');
var router = express.Router();
var passport = require("passport");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get("/autenticado", function(req, res, next){
  res.render("autenticado", req.user);
});

router.post('/loguear',
    passport.authenticate('local',
      { successRedirect: '/autenticado',
        failureRedirect: '/'
      }
));

router.get("/logout", function(req, res){
  req.logout();
  res.redirect("/");
});

function fnEstaAutenticado(req, res, next){
  if(req.isAuthenticated()) {
    next();
  } else {
    res.redirect("/");
  }
}

router.get("/administradores", fnEstaAutenticado, function(req, res){
  res.send("SOLO PARA ADMINISTRADORES");
});

module.exports = router;
