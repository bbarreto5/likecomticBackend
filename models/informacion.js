'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class informacion extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  informacion.init({
    nombres: DataTypes.STRING,
    referencia: DataTypes.STRING,
    fecha: DataTypes.STRING,
    pais: DataTypes.STRING,
    region: DataTypes.STRING,
    ciudad: DataTypes.STRING,
    variante: DataTypes.STRING,
    categoria: DataTypes.STRING,
    marca: DataTypes.STRING,
    modelo: DataTypes.STRING,
    matricula: DataTypes.STRING,
    pais2: DataTypes.STRING,
    campaña: DataTypes.STRING,
    poliza: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'informacion',
  });
  return informacion;
};