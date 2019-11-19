const models = require('../../models')

module.exports = async function () {
  await Promise.all(
    Object.keys(models).map((key) => {
      if (['sequelize', 'Sequelize'].includes(key)) return null
      return models[key].destroy({ where: {}, force: true })
    })
  )
}
