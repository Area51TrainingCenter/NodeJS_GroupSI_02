var express = require('express');
var router = express.Router();
var passport = require("passport");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get("/usuario", function(req,res){
  res.send("Autenticado");
});

router.get('/loginFacebook', passport.authenticate('facebook'));

router.get('/facebook/callback', passport.authenticate('facebook',
  { successRedirect: '/usuario', failureRedirect: '/' }
));

module.exports = router;
