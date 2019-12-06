function narcissistic(value) {
  return value === (value+'').split('')
    .reduce((sum, val) => { return sum + val**(value+'').length}, 0)
}

var assert = require('assert');
assert.equal(narcissistic( 7 ), true)
assert.equal(narcissistic( 371 ), true)
