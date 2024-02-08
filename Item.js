// models/Item.js

const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Item = sequelize.define('tarefas', {
  
  description: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
 
});

module.exports = Item;
