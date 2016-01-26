var express = require('express');
var router = express.Router();
var passport = require("passport");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/loginFacebook', passport.authenticate('facebook'));
router.get('/facebook/callback', passport.authenticate('facebook',
  { successRedirect: '/usuario', failureRedirect: '/' }
));

router.get('/loginGoogle', passport.authenticate('google', { scope: [
    'https://www.googleapis.com/auth/plus.login',
    'https://www.googleapis.com/auth/plus.profile.emails.read'
  ] }));
router.get('/google/callback', passport.authenticate('google',
  { successRedirect: '/usuario', failureRedirect: '/' }
));

router.get('/loginTwitter', passport.authenticate('twitter'));
router.get('/twitter/callback', passport.authenticate('twitter',
  { successRedirect: '/usuario', failureRedirect: '/' }
));

router.get('/loginGithub', passport.authenticate('github'));
router.get('/github/callback', passport.authenticate('github',
  { successRedirect: '/usuario', failureRedirect: '/' }
));



router.get("/usuario", function(req, res){
	res.render("usuario", req.user);
	//res.send("Usuario autenticado: " + req.user.name);
});



module.exports = router;
