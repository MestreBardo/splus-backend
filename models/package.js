const Sequelize = require('sequelize');

const sequelize = require('../app/database');

const Package = sequelize.define('package',{
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  delivered: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
    defaultValue: false 
  },
  description: {
    type: Sequelize.STRING,
    allowNull: false
  },
  received_from: {
    type: Sequelize.STRING,
    allowNull: false
  },
  delivered_at:{
    type: Sequelize.DATE,
    defaultValue: null
  },
  received_date: {
    type: Sequelize.DATE,
    allowNull: false,
    defaultValue: Sequelize.NOW()
  }
})

module.exports = Package;