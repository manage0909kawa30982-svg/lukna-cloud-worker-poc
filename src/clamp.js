'use strict';
// Dummy module for the LUKNA Cloud Worker PoC (phase 2). Bug fixed on main in the phase 3 setup
// (the Worker's poc-002 branch is not merged; this fix is written by the setup so later jobs start from passing tests).
// clamp(value, min, max) keeps value within [min, max] and throws a RangeError when min > max.
function clamp(value, min, max) {
  if (min > max) throw new RangeError('min must not be greater than max');
  return Math.min(Math.max(value, min), max);
}

module.exports = { clamp };
