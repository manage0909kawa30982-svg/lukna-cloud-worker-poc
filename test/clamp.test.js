'use strict';
// Visible tests for poc-002. The Cloud Worker must not modify this file.
const { test } = require('node:test');
const assert = require('node:assert/strict');
const { clamp } = require('../src/clamp');

test('keeps a value inside the range', () => {
  assert.equal(clamp(5, 0, 10), 5);
});

test('caps a value above max', () => {
  assert.equal(clamp(15, 0, 10), 10);
});

test('raises a value below min', () => {
  assert.equal(clamp(-5, 0, 10), 0);
});
