module.exports = function rad2deg (angle) {
  //  discuss at: http://locutusjs.io/php/rad2deg/
  // original by: Enrique Gonzalez
  // improved by: Brett Zamir (http://brett-zamir.me)
  //   example 1: rad2deg(3.141592653589793)
  //   returns 1: 180

  return angle * 57.29577951308232 // angle / Math.PI * 180
}
