const Sequelize = require('sequelize');

const sequelize = new Sequelize('splus','root','teste@teste2', {dialect: 'mysql', host:'localhost'})

module.exports = sequelize;