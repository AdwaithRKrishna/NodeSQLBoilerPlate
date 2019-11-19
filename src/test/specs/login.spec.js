var chai = require('chai')
var chaiHttp = require('chai-http')
var app = require('../../app')
var expect = chai.expect
chai.use(chaiHttp)
const truncate = require('../helpers/truncate')
const companyFactory = require('../factories/company')

describe('Basic Mocha Test', function () {
  before(async function () {
    user = await companyFactory()
    // create test table or test records
  })

  after(function () {
    truncate()
  })

  // beforeEach(() => {
  //   console.log('Before each!!!')
  //   // return connection.query('START TRANSACTION')
  // })
  // afterEach(() => {
  //   console.log('After each!!!')
  // })

  it('Correct credentials should return a token', function (done) {
    chai.request(app)
      .post('/user/login').set('content-type', 'application/x-www-form-urlencoded').send({ password: 'password', username: 'admin' }).end(function (err, res) {
        expect(res.body).to.have.property('token')
        expect(res.statusCode).to.equal(200)
        expect(res.body.success).to.be.true
        expect(res.body.message).to.be.equal('Authentication successful!')
        done()
      })
  })

  it('Wrong credentials should send response', function (done) {
    chai.request(app).post('/user/login').set('content-type', 'application/x-www-form-urlencoded').send({ password: 'passworddafsdf', username: 'adasdfasmin' }).end(function (err, res) {
      expect(res.error).to.not.be.null
      expect(res.statusCode).to.equal(403)
      expect(res.body.success).to.be.false
      expect(res.body.message).to.be.equal('Incorrect username or password')
      done()
    })
  })

  it('Without required fields the response should be bad request error', function (done) {
    chai.request(app).post('/user/login').set('content-type', 'application/x-www-form-urlencoded').send({ username: 'adasdfasmin' }).end(function (err, res) {
      expect(res.error).to.not.be.null
      expect(res.statusCode).to.equal(400)
      expect(res.body.success).to.be.false
      expect(res.body.message).to.be.equal('Authentication failed! Please check the request')
      done()
    })
  })
})
