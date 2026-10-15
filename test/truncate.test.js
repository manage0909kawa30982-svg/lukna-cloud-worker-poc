'use strict';
// Visible tests for poc-003. The Cloud Worker must not modify this file.
const { test } = require('node:test');
const assert = require('node:assert/strict');
const { truncate } = require('../src/truncate');

test('keeps a short text unchanged', () => {
  assert.equal(truncate('hello', 10), 'hello');
});

test('keeps a text that exactly fits unchanged', () => {
  assert.equal(truncate('hello', 5), 'hello');
});

test('shortens a long text to exactly max characters ending with an ellipsis', () => {
  assert.equal(truncate('hello world', 6), 'hello…');
});
