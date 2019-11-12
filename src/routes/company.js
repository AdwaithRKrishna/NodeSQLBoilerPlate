const companyController = require('../controllers').company

var router = require('express').Router()

//  /companies/create   -- Create
router.post('/create', companyController.createCompany)

// /companies/:id       -- Read
router.get('/:id', companyController.readCompany)

// /companies/:id         -- Update
router.put('/:id', companyController.updateCompany)
router.patch('/:id', companyController.updateCompany)

// /companies/:id         -- Delete
router.delete('/:id', companyController.deleteCompany)

module.exports = router
