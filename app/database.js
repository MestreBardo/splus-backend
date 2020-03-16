const Sequelize = require('sequelize');
const config = require('config');

const sequelize = new Sequelize(
  "mysql://b0b87172576d40:6ce31383@us-cdbr-iron-east-04.cleardb.net/heroku_f0c3bff07ffd5dd?reconnect=true",
    {dialect: 'mysql'}
  )

module.exports = sequelize;