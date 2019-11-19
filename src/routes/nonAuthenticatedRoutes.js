const express = require('express')
const router = express.Router()
const login = require('./login')

router.use('/user', login)
// router.use("/products", require("./company"));

module.exports = router
