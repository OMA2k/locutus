// warning: This file is auto generated by `npm run build:tests`, do not edit by hand
process.env.TZ = 'UTC'
var expect = require('chai').expect
var ini_set = require('/Users/kvz/code/phpjs/src/php/info/ini_set') // eslint-disable-line no-unused-vars
var ini_get = require('/Users/kvz/code/phpjs/src/php/info/ini_get') // eslint-disable-line no-unused-vars
var array_uintersect = require('/Users/kvz/code/phpjs/src/php/array/array_uintersect.js')

describe('src/php/array/array_uintersect.js', function () {
  it('should pass example 1', function (done) {
    var $array1 = {a: 'green', b: 'brown', c: 'blue', 0: 'red'}
    var $array2 = {a: 'GREEN', B: 'brown', 0: 'yellow', 1: 'red'}
    array_uintersect($array1, $array2, function( f_string1, f_string2){var string1 = (f_string1+'').toLowerCase(); var string2 = (f_string2+'').toLowerCase(); if (string1 > string2) return 1; if (string1 === string2) return 0; return -1;})
    var expected = {a: 'green', b: 'brown', 0: 'red'}
var $array1 = {a: 'green', b: 'brown', c: 'blue', 0: 'red'}
var $array2 = {a: 'GREEN', B: 'brown', 0: 'yellow', 1: 'red'}
    var result = array_uintersect($array1, $array2, function( f_string1, f_string2){var string1 = (f_string1+'').toLowerCase(); var string2 = (f_string2+'').toLowerCase(); if (string1 > string2) return 1; if (string1 === string2) return 0; return -1;})
    expect(result).to.deep.equal(expected)
    done()
  })
})