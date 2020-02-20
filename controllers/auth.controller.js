const { validationResult } = require('express-validator');
const bcrypt = require('bcrypt');
const User = require('../models/user')

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
  const errors = result.errors.map( error => error.msg)
  return res.send(errors)
} 