const Sequelize = require('sequelize');

const sequelize = require('../app/database');

const Package = sequelize.define('package',{
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  description: {
    type: Sequelize.STRING
  },
  receivedFrom: {
    type: Sequelize.STRING,
    allowNull: false
  },
  receivedDate: {
    type: Sequelize.DATE,
    allowNull: false,
    defaultValue: Sequelize.NOW()
  },
  deliveredTo: {
    type: Sequelize.STRING,
    allowNull: false,
    defaultValue: false 
  },
  deliveredDate:{
    type: Sequelize.DATE,
    defaultValue: null
  }
})

module.exports = Package;