'use strict';
// Dummy module for the LUKNA Cloud Worker PoC (phase 2). Contains an intentional bug.
// clamp(value, min, max) should keep value within [min, max].
function clamp(value, min, max) {
  return Math.min(value, max);
}

module.exports = { clamp };
