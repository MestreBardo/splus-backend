const Sequelize = require('sequelize');
const config = require('config');

const sequelize = new Sequelize(
  "mysql://xkvy3oci95b2blso:v2swq3rdxacwwbcx@k2fqe1if4c7uowsh.cbetxkdyhwsb.us-east-1.rds.amazonaws.com:3306/mo7wcty3ei4br1sh",
    {dialect: 'mysql', host: config.get('Customer.dbConfig.host')}
  )

module.exports = sequelize;