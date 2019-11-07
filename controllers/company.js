const Company = require("../models").Company;
const {
  throwError,
  throwIf,
  sendSuccess,
  sendError
} = require("../helpers").response;

module.exports.createCompany = async (req, res, next) => {
  try {
    company = await Company.create({ name: req.body.name }).then(
      throwIf(r => !r, 400, "could not create company ", "Company Not Created"),
      throwError(500, "sequelize error")
    );
    sendSuccess(res, "Company Created")({ company });
  } catch (error) {
    sendError(res)(error);
  }
};

module.exports.readCompany = async (req, res, next) => {
  const companyId = req.params.id;
  try {
    company = await Company.findByPk(companyId).then(
      throwIf(r => !r, 400, "not found", "Company Not Found"),
      throwError(500, "sequelize error")
    );
    sendSuccess(res, "Company Found")({ company });
  } catch (error) {
    sendError(res)(error);
  }
};

module.exports.updateCompany = async (req, res, next) => {
  const companyId = req.params.id;
  const companyName = req.body.name;
  try {
    company = await Company.findByPk(companyId).then(
      throwIf(r => !r, 400, "not found", "Company Not Found"),
      throwError(500, "Sequelize error")
    );
    updatedCompany = await company
      .update({ name: companyName })
      .then(
        throwIf(r => !r, 400, "not updated", "Company Not Updated"),
        throwError(500, "Sequelize error")
      );
    sendSuccess(res, "Company Updated")({ updatedCompany });
  } catch (error) {
    sendError(res)(error);
  }
};

module.exports.deleteCompany = async (req, res, next) => {
  const companyId = req.params.id;
  try {
    company = await Company.findByPk(companyId).then(
      throwIf(r => !r, 400, "not found", "Company Not Found"),
      throwError(500, "Sequelize error")
    );
    company = await company
      .destroy()
      .then(
        throwIf(r => !r, 400, "not deleted", "Company Not Deleted"),
        throwError(500, "Sequelize error")
      );
    sendSuccess(res, "Company Deleted")({ company });
  } catch (error) {
    sendError(res)(error);
  }
};
