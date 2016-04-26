// warning: This file is auto generated by `npm run build:tests`, do not edit by hand
process.env.TZ = 'UTC'
var expect = require('chai').expect
var ini_set = require('/Users/kvz/code/phpjs/src/php/info/ini_set') // eslint-disable-line no-unused-vars
var ini_get = require('/Users/kvz/code/phpjs/src/php/info/ini_get') // eslint-disable-line no-unused-vars
var asinh = require('/Users/kvz/code/phpjs/src/php/math/asinh.js')

describe('src/php/math/asinh.js', function () {
  it('should pass example 1', function (done) {
    asinh(8723321.4)
    var expected = 16.67465779841863
    var result = asinh(8723321.4)
    expect(result).to.deep.equal(expected)
    done()
  })
})