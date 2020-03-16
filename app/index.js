const express = require('express');
const bodyParser = require('body-parser');
const authRoute = require('../routes/auth.route');
const packageRoute = require('../routes/package.route')
const User = require('../models/user.model');
const Package = require('../models/package.model');
const PackageItem = require('../models/packageItem.model');
const cors = require('cors');

const app = express();

app.use(cors());

app.use(bodyParser.json())
app.use('/auth',authRoute)
app.use('/package',packageRoute)

const sequelize = require('./database');

Package.belongsTo(User);
PackageItem.belongsTo(Package, { foreignKey: 'packageId' })
Package.hasMany(PackageItem, { foreignKey: 'packageId' })

sequelize
.sync({force:true})
.then(result => {
  app.listen(process.env.PORT || 8000)
})
