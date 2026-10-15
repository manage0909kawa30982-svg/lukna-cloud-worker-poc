'use strict';
// LUKNA quality gate for poc-002 (run only by GitHub Actions; not part of the Worker's task description).
// The failure message is what LUKNA returns to the Worker as the reason for a re-request.
const { test } = require('node:test');
const assert = require('node:assert/strict');
const { clamp } = require('../../src/clamp');

test('quality: clamp throws RangeError when min is greater than max', () => {
  assert.throws(() => clamp(5, 10, 0), RangeError, 'clamp(value, min, max) must throw a RangeError when min > max');
});

test('quality: clamp keeps the visible behaviour', () => {
  assert.equal(clamp(-5, 0, 10), 0);
  assert.equal(clamp(15, 0, 10), 10);
});
