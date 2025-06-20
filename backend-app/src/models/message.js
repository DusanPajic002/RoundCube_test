'use strict';
const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  class Message extends Model {
    static associate(models) {
      
    }
  }
  Message.init({
    id: {
      type: DataTypes.INTEGER, 
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    message: {
      type: DataTypes.TEXT,
      allowNull: false, 
    },
    user: {
      type: DataTypes.STRING,
      allowNull: false, 
    },
  }, {
    sequelize,
    modelName: 'Message',
    updatedAt: false,
  });
  return Message;
};