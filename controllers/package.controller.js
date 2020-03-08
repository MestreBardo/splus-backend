const Package = require('../models/package');
const PackageItem = require('../models/packageItem');

exports.postPackage = async(req,res,next) => {
  let items = req.body.itens;
  Package.create({
    userId: req.body.id,
    title: req.body.title,
    description: req.body.description,
    receivedFrom: req.body.packageFrom,
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