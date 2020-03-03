const express = require('express')
const route = express.Router();

const packageCtrl = require('../controllers/package.controller')

route.post('/',packageCtrl.postPackage)

route.get('/', packageCtrl.getAllPackages)

module.exports = route;