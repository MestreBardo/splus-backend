const express = require('express');
const bodyParser = require('body-parser');
const authRoute = require('../routes/auth.route');
const packageRoute = require('../routes/package.route')
const User = require('../models/user');
const Package = require('../models/package');
const PackageItem = require('../models/packageItem');
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
.sync()
.then(result => {
  app.listen(process.env.PORT || 8000)
})

app.post('/',(req,res,next) => {
  let items = [];
  req.body.items.forEach(element => {
    items.push({
      description: element
    })
  });
  console.log(items)
  Package.create({
    userId: req.body.id,
    package_items : items
  },{include: [ PackageItem ]})
  .then(data => {
    res.send(data);
  })
  
})