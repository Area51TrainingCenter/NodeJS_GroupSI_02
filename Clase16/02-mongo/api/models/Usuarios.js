/**
* Usuarios.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  connection: "connMongo",
  tableName: "Usuarios",
  attributes: {

  	nombre: "string",

  	apellido: "string",

  	mascota: {
  		collection: "Mascotas",
  		via: "usuario"
  	}

  }
};

