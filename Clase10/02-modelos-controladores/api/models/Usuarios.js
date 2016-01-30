/**
* Usuarios.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  connection: "connMySQL",
  tableName: "usuarios",
  attributes: {

  		id: {
  			primaryKey: true,
  			type: "integer",
  			autoIncrement: true,
  			unique: true
  		},

  		nombre: "string",
  		fotoPerfilFB:{
  			type:"string",
  			size: "4000"
  		},

  		cv: {
  			type: "text",
  			required: true
  		},

  		localidad: {
  			type: "string",
  			defaultsTo: "Lima"
  		},

  		fechaNacimiento: "date",

  		fechaHoraIngresoAlSistema: "datetime",

  		sexo: {
  			type:"string",
  			enum: ['masculino', 'femenino']
  		},

  		correo: {
  			type: "email",
  			required: true
  		}

  }
};

