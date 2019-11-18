var assert = require('assert')
const truncate = require('../helpers/truncate')
const companyFactory = require('../factories/company')

describe('Basic Mocha String Test', function () {
  before(async function () {
    console.log('The before action')
    user = await companyFactory()
    // create test table or test records
  })

  after(function () {
    console.log('The after action')
    // truncate()
  })

  beforeEach(() => {
    console.log('Before each!!!')
    // return connection.query('START TRANSACTION')
  })
  afterEach(() => {
    console.log('After each!!!')
    // return connection.query('ROLLBACK')
  })

  it('should return number of charachters in a string', function () {
    assert.equal('Hello'.length, 5)
  })
  it('should return first charachter of the string', function () {
    assert.equal('Hello'.charAt(0), 'H')
    // throw {myError:'throwing error to fail test'}
  })
})
