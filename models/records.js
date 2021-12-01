'use strict';
const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Records extends Model {
    static associate(models) {
      // define association here
    }
  };
  Records.init({
    status: DataTypes.INTEGER,
    error: DataTypes.STRING,
    data: DataTypes.JSONB
  }, {
    sequelize,
    modelName: 'Records',
  });
  return Records;
};