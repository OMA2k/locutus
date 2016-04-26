// warning: This file is auto generated by `npm run build:tests`, do not edit by hand
process.env.TZ = 'UTC'
var expect = require('chai').expect
var ini_set = require('/Users/kvz/code/phpjs/src/php/info/ini_set') // eslint-disable-line no-unused-vars
var ini_get = require('/Users/kvz/code/phpjs/src/php/info/ini_get') // eslint-disable-line no-unused-vars
var sha1_file = require('/Users/kvz/code/phpjs/src/php/strings/sha1_file.js')

describe('src/php/strings/sha1_file.js', function () {
  it('should pass example 1', function (done) {
    sha1_file('test/never-change.txt')
    var expected = '0ea65a1f4b4d69712affc58240932f3eb8a2af66'
    var result = sha1_file('test/never-change.txt')
    expect(result).to.deep.equal(expected)
    done()
  })
})