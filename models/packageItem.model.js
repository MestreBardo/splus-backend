const Sequelize = require('sequelize');

const sequelize = require('../app/database');

const PackageItem = sequelize.define('package_item',{
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  type: {
    type: Sequelize.STRING,
    allowNull: false
  },
  toDo: {
    type: Sequelize.STRING,
    allowNull: false
  },
  serialNumber: {
    type: Sequelize.STRING,
    allowNull: false
  }
})

module.exports = PackageItem;