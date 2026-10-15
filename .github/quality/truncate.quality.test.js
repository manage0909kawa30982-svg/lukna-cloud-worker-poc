'use strict';
// LUKNA quality gate for poc-003 (run only by GitHub Actions; not part of the Worker's task description).
// The failure message is what LUKNA returns to the Worker as the reason for a re-request.
const { test } = require('node:test');
const assert = require('node:assert/strict');
const { truncate } = require('../../src/truncate');

test('quality: truncate throws RangeError when max is less than 1', () => {
  assert.throws(() => truncate('hello', 0), RangeError, 'truncate(text, max) must throw a RangeError when max < 1');
});

test('quality: truncate keeps the visible behaviour', () => {
  assert.equal(truncate('hello', 5), 'hello');
  assert.equal(truncate('hello world', 6), 'hello…');
});
