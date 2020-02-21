const { validationResult } = require('express-validator');
const bcrypt = require('bcrypt');
const User = require('../models/user');
var jwt = require('jsonwebtoken');
const config = require('config');

exports.register = async (req,res, next) => {
  const result = validationResult(req);
  if(result.errors.length === 0) {
    const hashPassword = await bcrypt.hash(req.body.password,12);
    User.create({
      name:req.body.name,
      surname: req.body.surname,
      email: req.body.email,
      password: hashPassword
    })
    return res.send('ok')
  }
  const errors = result.errors.map(error => error.msg)
  return res.send(errors)
} 

exports.login = async (req,res,next) => {
  console.log(config.get('JWT.secret'))
  User.findAll({ where: {
    email: req.body.email
  }}).then(users => {
    if(users.length === 1){
      return bcrypt.compare(req.body.password,users[0].password)
      .then(result => {
        if(result) {
          return res.send(jwt.sign({
            name: users[0].name,
            surname: users[0].surname,
            email: users[0].email
          }, config.get('JWT.secret'), { expiresIn: '2d' }))
        }
        return res.send('Your Password is incorrect')
      })
      .catch(err => {
        console.log(err)
      })
      
      
    }
    return res.status(500).send('Email not found!')
  })
}