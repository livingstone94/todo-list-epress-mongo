
// require router
const express = require('express')
const router = express.Router()
const Todo = require('../models/todo')

const home = require('./modules/home')
const todos = require('./modules/todos')
// const login = require('./modules/login')


router.use('/', home)
router.use('/todos', todos)
// router.use('/home', home)

// 
module.exports = router