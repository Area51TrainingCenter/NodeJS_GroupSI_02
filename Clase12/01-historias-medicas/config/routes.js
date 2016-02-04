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
    view: 'home'
  },

  /***************************************************************************
  *                                                                          *
  * Custom routes here...                                                    *
  *                                                                          *
  * If a request to a URL doesn't match any of the custom routes above, it   *
  * is matched against Sails route blueprints. See `config/blueprints.js`    *
  * for configuration options and examples.                                  *
  *                                                                          *
  ***************************************************************************/
  
  'get /medicos/listar': {
    controller: "MedicosController",
    action: "listar"
  },

  'post /medicos/insertar': {
    controller: "MedicosController",
    action: "insertar"
  },

  'post /medicos/actualizar/:id': {
    controller: "MedicosController",
    action: "actualizar"
  },

  'get /medicos/eliminar/:id': {
    controller: "MedicosController",
    action: "eliminar"
  },

  'get /medicos/editar/:id': {
    controller: "MedicosController",
    action: "editar"
  },




  'get /enfermeros/listar': {
    controller: "EnfermerosController",
    action: "listar"
  },

  'post /enfermeros/insertar': {
    controller: "EnfermerosController",
    action: "insertar"
  },

  'post /enfermeros/actualizar/:id': {
    controller: "EnfermerosController",
    action: "actualizar"
  },

  'get /enfermeros/eliminar/:id': {
    controller: "EnfermerosController",
    action: "eliminar"
  },

  'get /enfermeros/editar/:id': {
    controller: "EnfermerosController",
    action: "editar"
  },






  'get /diagnosticos/listar': {
    controller: "DiagnosticosController",
    action: "listar"
  },

  'post /diagnosticos/insertar': {
    controller: "DiagnosticosController",
    action: "insertar"
  },

  'post /diagnosticos/actualizar/:id': {
    controller: "DiagnosticosController",
    action: "actualizar"
  },

  'get /diagnosticos/eliminar/:id': {
    controller: "DiagnosticosController",
    action: "eliminar"
  },

  'get /diagnosticos/editar/:id': {
    controller: "DiagnosticosController",
    action: "editar"
  }  







  'get /enfermeros/listar': {
    controller: "EnfermerosController",
    action: "listar"
  },

  'post /enfermeros/insertar': {
    controller: "EnfermerosController",
    action: "insertar"
  },

  'post /enfermeros/actualizar/:id': {
    controller: "EnfermerosController",
    action: "actualizar"
  },

  'get /enfermeros/eliminar/:id': {
    controller: "EnfermerosController",
    action: "eliminar"
  },

  'get /enfermeros/editar/:id': {
    controller: "EnfermerosController",
    action: "editar"
  }
};
