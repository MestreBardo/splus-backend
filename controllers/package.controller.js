const Package = require('../models/package.model');
const PackageItem = require('../models/packageItem.model');

exports.postPackage = async(req,res,next) => {
  let items = req.body.itens;
  Package.create({
    userId: req.body.id,
    description: req.body.packageDesc,
    received_from: req.body.packageFrom,
    package_items : items
  },{include: [ PackageItem ]})
  .then(data => {
    res.send(data);
  })
}

exports.getAllPackages = async(req,res,next) => {
  Package.findAll({include:['package_items']}).then(data => {
    res.send(data);
  })
}