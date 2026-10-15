'use strict';
// Independent tests for the PoC. The Cloud Worker must not modify this file.
const { test } = require('node:test');
const assert = require('node:assert/strict');
const { sum } = require('../src/sum');

test('adds positive numbers', () => {
  assert.equal(sum(2, 3), 5);
});

test('adds negative numbers', () => {
  assert.equal(sum(-2, -3), -5);
});

test('adding zero returns the other number', () => {
  assert.equal(sum(7, 0), 7);
  assert.equal(sum(0, 7), 7);
});
