const faker = require('faker')
const models = require('../../models')

const data = async (props = {}) => {
  const defaultProps = {
    name: faker.company.companyName()
  }
  return Object.assign({}, defaultProps, props)
}

module.exports = async (props = {}) =>
  models.Company.create(await data(props))
