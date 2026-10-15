'use strict';
// Dummy module for the LUKNA Cloud Worker PoC (phase 2). Contains an intentional bug.
// clamp(value, min, max) should keep value within [min, max].
function clamp(value, min, max) {
  if (min > max) {
    throw new RangeError('min must not be greater than max');
  }
  return Math.max(min, Math.min(value, max));
}

module.exports = { clamp };
