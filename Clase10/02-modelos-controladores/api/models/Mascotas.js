/**
* Mascotas.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  connection: "connMySQL",
  tableName: "Mascotas",
  attributes: {

    id : { type: 'integer' },

    nombre : { type: 'string' }
  }
};

