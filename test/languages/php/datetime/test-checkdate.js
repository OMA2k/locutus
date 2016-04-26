// warning: This file is auto generated by `npm run build:tests`, do not edit by hand
process.env.TZ = 'UTC'
var expect = require('chai').expect
var ini_set = require('/Users/kvz/code/phpjs/src/php/info/ini_set') // eslint-disable-line no-unused-vars
var ini_get = require('/Users/kvz/code/phpjs/src/php/info/ini_get') // eslint-disable-line no-unused-vars
var checkdate = require('/Users/kvz/code/phpjs/src/php/datetime/checkdate.js')

describe('src/php/datetime/checkdate.js', function () {
  it('should pass example 1', function (done) {
    checkdate(12, 31, 2000)
    var expected = true
    var result = checkdate(12, 31, 2000)
    expect(result).to.deep.equal(expected)
    done()
  })
  it('should pass example 2', function (done) {
    checkdate(2, 29, 2001)
    var expected = false
    var result = checkdate(2, 29, 2001)
    expect(result).to.deep.equal(expected)
    done()
  })
  it('should pass example 3', function (done) {
    checkdate(3, 31, 2008)
    var expected = true
    var result = checkdate(3, 31, 2008)
    expect(result).to.deep.equal(expected)
    done()
  })
  it('should pass example 4', function (done) {
    checkdate(1, 390, 2000)
    var expected = false
    var result = checkdate(1, 390, 2000)
    expect(result).to.deep.equal(expected)
    done()
  })
})