const Company = require("../models").Company;
const {throwError, throwIf, sendSuccess, sendError} = require("../helpers").response;

module.exports.createCompany = async (req, res, next) => {
    try{
        company = await Company.create({name: req.body.name}).then(
            throwIf(r => !r, 400, 'could not create user ', 'User Not Create'),
            throwError(500, 'sequelize error')
        )
        sendSuccess(res, 'Company Created')({company})
    }catch(error){
        sendError(res)(error)
    }
};

module.exports.readCompany = async (req, res, next) => {
    const companyId = req.params.id
    try{
        company = await Company.findByPk(companyId).then(
            throwIf(r => !r, 400, 'not found', 'User Not Found'),
            throwError(500, 'sequelize error')
        )
        sendSuccess(res, 'Company Found')({company})
    }catch(error) {
        sendError(res)(error)
    }
};

module.exports.updateCompany = (req, res, next) => {};

module.exports.deleteCompany = (req, res, next) => {};
