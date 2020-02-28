const express = require('express')
const route = express.Router();

const packageCtrl = require('../controllers/package.controller')

route.post('/',packageCtrl.registerPackage)


module.exports = route;