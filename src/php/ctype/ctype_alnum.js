module.exports = function ctype_alnum (text) { // eslint-disable-line camelcase
  //  discuss at: http://locutusjs.io/php/ctype_alnum/
  // original by: Brett Zamir (http://brett-zamir.me)
  //   example 1: ctype_alnum('AbC12')
  //   returns 1: true

  var setlocale = require('../strings/setlocale')
  if (typeof text !== 'string') {
    return false
  }

  // ensure setup of localization variables takes place
  setlocale('LC_ALL', 0)

  var $global = (typeof window !== 'undefined' ? window : GLOBAL)
  $global.$locutus = $global.$locutus || {}
  var $locutus = $global.$locutus
  var p = $locutus.php

  return text.search(p.locales[p.localeCategories.LC_CTYPE].LC_CTYPE.an) !== -1
}
