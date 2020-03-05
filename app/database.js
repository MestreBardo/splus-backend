const Sequelize = require('sequelize');
const config = require('config');

const sequelize = new Sequelize(
  "mysql://be672d21e05dfc:3b3cb550@us-cdbr-iron-east-04.cleardb.net/heroku_c807af5398069ba?reconnect=true",
    {dialect: 'mysql', host: config.get('Customer.dbConfig.host')}
  )

module.exports = sequelize;