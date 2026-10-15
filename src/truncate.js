'use strict';
// Dummy module for the LUKNA Cloud Worker PoC (phase 3). Contains an intentional bug.
// truncate(text, max) should return text unchanged when it fits in max characters,
// otherwise the first max - 1 characters followed by '…' (the result is exactly max characters long).
function truncate(text, max) {
  return text.slice(0, max) + '…';
}

module.exports = { truncate };
