const express = require('express')
const router = express.Router()
const company = require('./company')

router.use('/companies', company)
// router.use("/products", require("./company"));

module.exports = router
