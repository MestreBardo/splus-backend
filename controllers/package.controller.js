const Package = require('../models/package');
const PackageItem = require('../models/packageItem');

exports.registerPackage = async(req,res,next) => {
  let items = req.body.itens;
  console.log(items)
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