const express = require('express');
const bodyParser = require('body-parser');
const authRoute = require('../routes/auth.route')

const app = express();


app.use(bodyParser.json())
app.use('/auth',authRoute)

const sequelize = require('./database');

sequelize
.sync({force:true})
.then(result => {
  app.listen(8000)
})
