const express = require('express')
const route = express.Router();
const User = require('../models/user')
const { body } = require('express-validator');


const authCtrl = require('../controllers/auth.controller')

route.post('/register', [
  body('email')
    .isEmail()
    .normalizeEmail()
    .withMessage('Email is not valid')
    .custom(value => {
      return User.findAll({where: {
        email: value
      }}).then(users => {
        if(users.length !== 0) {
          return Promise.reject(
            'Email is already in use!'
          )
        }
      })
    }),
  body('password')
    .isLength({
      min:8
    })
    .withMessage('Password is too short')
] ,authCtrl.register)

route.post('/login', authCtrl.login)

module.exports = route;