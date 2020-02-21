const Sequelize = require('sequelize');
const config = require('config');

const sequelize = new Sequelize(
  config.get('Customer.dbConfig.dbName'),
  config.get('Customer.dbConfig.user'),
  config.get('Customer.dbConfig.dbSecret'),
    {dialect: 'mysql', host: config.get('Customer.dbConfig.host')}
  )

module.exports = sequelize;