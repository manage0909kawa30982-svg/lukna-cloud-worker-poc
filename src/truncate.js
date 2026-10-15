'use strict';
// Dummy module for the LUKNA Cloud Worker PoC (phase 3).
// truncate(text, max) returns text unchanged when it fits in max characters,
// otherwise the first max - 1 characters followed by '…' (the result is exactly max characters long).
// Throws a RangeError when max < 1.
function truncate(text, max) {
  if (max < 1) throw new RangeError('max must be at least 1');
  if (text.length <= max) return text;
  return text.slice(0, max - 1) + '…';
}

module.exports = { truncate };
