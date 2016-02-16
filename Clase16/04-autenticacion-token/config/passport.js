/**
 * Instalar:
 * npm install jsonwebtoken bcrypt-nodejs passport passport-jwt passport-local sails-mysql --save
 */
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var JwtStrategy = require('passport-jwt').Strategy;
 
var EXPIRES_IN_SECONDS = 60 * 60 * 24;
var SECRET = process.env.tokenSecret || "9jj5adfhj33j373blkamc87371JDJme8xxx84583asCDDD?xzyaz893j0987@#";
var ALGORITHM = "HS256";
var ISSUER = "dominio.com";
var AUDIENCE = "dominio.com";
 
var LOCAL_STRATEGY_CONFIG = {
  usernameField: 'email',
  passwordField: 'password',
  passReqToCallback: false
};
 
var JWT_STRATEGY_CONFIG = {
  secretOrKey: SECRET,
  issuer : ISSUER,
  audience: AUDIENCE,
  passReqToCallback: false
};
 
function estrategiaLocal(email, password, next) {
  User
    .find({email: email})
    .then(function(registros){
      if(registros.length==0) return next(null, false, {
        code: 'E_USER_NOT_FOUND',
        message: email + ' is not found'
      });

      if (!CipherService.comparePassword(password, registros[0]))
        return next(null, false, {
          code: 'E_WRONG_PASSWORD',
          message: 'Password is wrong'
        });
 
      return next(null, registros[0], {});        
    })
    .catch(function(err) {
      return next(err, false, {});
    })
}
 
function estrategiaJWT(payload, next) {
  var user = payload.user;
  return next(null, user, {});
}
 
passport.use(
  new LocalStrategy(LOCAL_STRATEGY_CONFIG, estrategiaLocal));
passport.use(
  new JwtStrategy(JWT_STRATEGY_CONFIG, estrategiaJWT));
 
module.exports.jwtSettings = {
  expiresIn: EXPIRES_IN_SECONDS,
  secret: SECRET,
  algorithm : ALGORITHM,
  issuer : ISSUER,
  audience : AUDIENCE
};