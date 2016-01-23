var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var cookieSession = require("cookie-session");

var modelo = require("./modelos/modeloUsuarios");

var passport = require("passport");
var passportLocal = require("passport-local").Strategy;

var routes = require('./routes/index');
var users = require('./routes/users');

var app = express();

passport.serializeUser(function(usuario, done) {
  done(null, usuario.id);
});

passport.deserializeUser(function(id, done) {
    var idUsuario = id;

    modelo.detalleUsuario(id, function(err,registros){
      if(err){
        done(err);
      } else if(registros.length==0){
        done(null, false);
      } else {
        done(null, registros[0]);  //req.user  {id:10, nombre:"sergio"}
                                   //req.user.nombre
                                   //req.isAuthenticate()
                                   //req.logout();
      }
    });
});

passport.use(new passportLocal(
  {
    usernameField: "usuario",
    passwordField: "contrasena"
  },
  function(username, password, done) {
    console.log("Usuario: "+username);
    console.log("Contraseña: "+password);

    modelo.validar(username, password, function(err, registros){
      if(err) {
        return done(err);
      }

      if(registros.length) {
        var usuario = {id: registros[0].id, nombre: registros[0].nombre};
        return done(null, usuario);
      } else {
        return done(null, false);
      }
    });

    //req.user = {id:20, nombre:"sergio"}

    /*modelo.validar(username, password, function(err, registros){
      if(err) {
        return done(err);
      }

      if(registros.length) {
        var usuario = {id: registros[0].id, nombre: registros[0].nombre};
        return done(null, usuario);
      } else {
        return done(null, false);
      }

    });*/


  }
));


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cookieSession({secret: "secreto2016"}));
app.use(express.static(path.join(__dirname, 'public')));

app.use(passport.initialize());
app.use(passport.session());

app.use('/', routes);
app.use('/users', users);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
