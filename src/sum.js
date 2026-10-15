'use strict';
// Dummy module for the LUKNA Cloud Worker PoC. Contains an intentional bug.
// sum(a, b) should return a + b.
function sum(a, b) {
  return a - b;
}

module.exports = { sum };
