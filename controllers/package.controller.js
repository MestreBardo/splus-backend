const Package = require('../models/package.model');
const PackageItem = require('../models/packageItem.model');

exports.postPackage = async(req,res,next) => {
  let itens = [];
  req.body.itens.map(item => {
        item.itens.map(itemPackage => {
            itens.push({
              type: item.name,
              ...itemPackage
            })
          })
        }
      );
    console.log(itens)

  Package.create({
    userId: req.body.id,
    description: req.body.description,
    receivedFrom: req.body.packageFrom,
    package_items : itens
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