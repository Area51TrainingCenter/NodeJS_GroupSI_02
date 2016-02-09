/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes map URLs to views and controllers.
 *
 * If Sails receives a URL that doesn't match any of the routes below,
 * it will check for matching files (images, scripts, stylesheets, etc.)
 * in your assets directory.  e.g. `http://localhost:1337/images/foo.jpg`
 * might match an image file: `/assets/images/foo.jpg`
 *
 * Finally, if those don't match either, the default 404 handler is triggered.
 * See `api/responses/notFound.js` to adjust your app's 404 logic.
 *
 * Note: Sails doesn't ACTUALLY serve stuff from `assets`-- the default Gruntfile in Sails copies
 * flat files from `assets` to `.tmp/public`.  This allows you to do things like compile LESS or
 * CoffeeScript for the front-end.
 *
 * For more information on configuring custom routes, check out:
 * http://sailsjs.org/#!/documentation/concepts/Routes/RouteTargetSyntax.html
 */

module.exports.routes = {

  /***************************************************************************
  *                                                                          *
  * Make the view located at `views/homepage.ejs` (or `views/homepage.jade`, *
  * etc. depending on your default view engine) your home page.              *
  *                                                                          *
  * (Alternatively, remove this and add an `index.html` file in your         *
  * `assets` directory)                                                      *
  *                                                                          *
  ***************************************************************************/

  '/': {
    view: 'formLogin',
    locals: {
      layout: "base"
    }
  },

  "get /manifiestos": {
    controller: "ManifiestosController",  
    action: "listar"
  },
  
  "get /manifiestos/:pagina/:tamano": {
    controller: "ManifiestosController",  
    action: "listarPaginado"
  },
  
  "get /manifiestos/contar": {
    controller: "ManifiestosController",  
    action: "contar"
  },
  
  "get /manifiestos/:id": {
    controller: "ManifiestosController",  
    action: "detallar"
  },
  
  "post /manifiestos": {
    controller: "ManifiestosController",  
    action: "insertar"  
  },
  
  "put /manifiestos/:id": {
    controller: "ManifiestosController",  
    action: "actualizar"  
  },
  
  "delete /manifiestos/:id": {
    controller: "ManifiestosController",  
    action: "eliminar"  
  },

  "get /remitos": {
    controller: "RemitosController",  
    action: "listar"
  },
  
  "get /remitos/:pagina/:tamano": {
    controller: "RemitosController",  
    action: "listarPaginado"
  },
  
  "get /remitos/contar": {
    controller: "RemitosController",  
    action: "contar"
  },
  
  "get /remitos/:id": {
    controller: "RemitosController",  
    action: "detallar"
  },
  
  "post /remitos": {
    controller: "RemitosController",  
    action: "insertar"  
  },
  
  "put /remitos/:id": {
    controller: "RemitosController",  
    action: "actualizar"  
  },
  
  "delete /remitos/:id": {
    controller: "RemitosController",  
    action: "eliminar"  
  },

  "get /usuarios": {
    controller: "UsuariosController",  
    action: "listar"
  },
  
  "get /usuarios/:pagina/:tamano": {
    controller: "UsuariosController",  
    action: "listarPaginado"
  },
  
  "get /usuarios/contar": {
    controller: "UsuariosController",  
    action: "contar"
  },
  
  "get /usuarios/:id": {
    controller: "UsuariosController",  
    action: "detallar"
  },
  
  "post /usuarios": {
    controller: "UsuariosController",  
    action: "insertar"  
  },
  
  "put /usuarios/:id": {
    controller: "UsuariosController",  
    action: "actualizar"  
  },
  
  "delete /usuarios/:id": {
    controller: "UsuariosController",  
    action: "eliminar"  
  },

  "/login": {
    controller: "AuthController",
    action: "login"
  },

  "/logout": {
    controller: "AuthController",
    action: "logout"
  }

  /***************************************************************************
  *                                                                          *
  * Custom routes here...                                                    *
  *                                                                          *
  * If a request to a URL doesn't match any of the custom routes above, it   *
  * is matched against Sails route blueprints. See `config/blueprints.js`    *
  * for configuration options and examples.                                  *
  *                                                                          *
  ***************************************************************************/

};
