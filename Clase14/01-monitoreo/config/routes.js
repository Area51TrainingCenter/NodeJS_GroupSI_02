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
    view: 'homepage'
  },

  "get /medicos": {
    controller: "MedicosController",  
    action: "listar"
  },
  
  "get /medicos/:pagina/:tamano": {
    controller: "MedicosController",  
    action: "listarPaginado"
  },
  
  "get /medicos/contar": {
    controller: "MedicosController",  
    action: "contar"
  },
  
  "get /medicos/:id": {
    controller: "MedicosController",  
    action: "detallar"
  },
  
  "post /medicos": {
    controller: "MedicosController",  
    action: "insertar"  
  },
  
  "put /medicos/:id": {
    controller: "MedicosController",  
    action: "actualizar"  
  },
  
  "delete /medicos/:id": {
    controller: "MedicosController",  
    action: "eliminar"  
  },

  "get /paramedicos": {
    controller: "ParamedicosController",  
    action: "listar"
  },
  
  "get /paramedicos/:pagina/:tamano": {
    controller: "ParamedicosController",  
    action: "listarPaginado"
  },
  
  "get /paramedicos/contar": {
    controller: "ParamedicosController",  
    action: "contar"
  },
  
  "get /paramedicos/:id": {
    controller: "ParamedicosController",  
    action: "detallar"
  },
  
  "post /paramedicos": {
    controller: "ParamedicosController",  
    action: "insertar"  
  },
  
  "put /paramedicos/:id": {
    controller: "ParamedicosController",  
    action: "actualizar"  
  },
  
  "delete /paramedicos/:id": {
    controller: "ParamedicosController",  
    action: "eliminar"  
  },

  "get /ambulancias": {
     controller: "AmbulanciasController",  
     action: "listar"
   },
   
   "get /ambulancias/:pagina/:tamano": {
     controller: "AmbulanciasController",  
     action: "listarPaginado"
   },
   
   "get /ambulancias/contar": {
     controller: "AmbulanciasController",  
     action: "contar"
   },
   
   "get /ambulancias/:id": {
     controller: "AmbulanciasController",  
     action: "detallar"
   },
   
   "post /ambulancias": {
     controller: "AmbulanciasController",  
     action: "insertar"  
   },
   
   "put /ambulancias/:id": {
     controller: "AmbulanciasController",  
     action: "actualizar"  
   },
   
   "delete /ambulancias/:id": {
     controller: "AmbulanciasController",  
     action: "eliminar"  
   },

   "get /estados": {
     controller: "EstadosController",  
     action: "listar"
   },
   
   "get /estados/:pagina/:tamano": {
     controller: "EstadosController",  
     action: "listarPaginado"
   },
   
   "get /estados/contar": {
     controller: "EstadosController",  
     action: "contar"
   },
   
   "get /estados/:id": {
     controller: "EstadosController",  
     action: "detallar"
   },
   
   "post /estados": {
     controller: "EstadosController",  
     action: "insertar"  
   },
   
   "put /estados/:id": {
     controller: "EstadosController",  
     action: "actualizar"  
   },
   
   "delete /estados/:id": {
     controller: "EstadosController",  
     action: "eliminar"  
   },

   "get /monitoreo": {
     controller: "MonitoreoController",  
     action: "listar"
   },
   
   "get /monitoreo/:pagina/:tamano": {
     controller: "MonitoreoController",  
     action: "listarPaginado"
   },
   
   "get /monitoreo/contar": {
     controller: "MonitoreoController",  
     action: "contar"
   },
   
   "get /monitoreo/:id": {
     controller: "MonitoreoController",  
     action: "detallar"
   },
   
   "post /monitoreo": {
     controller: "MonitoreoController",  
     action: "insertar"  
   },
   
   "put /monitoreo/:id": {
     controller: "MonitoreoController",  
     action: "actualizar"  
   },
   
   "delete /monitoreo/:id": {
     controller: "MonitoreoController",  
     action: "eliminar"  
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
