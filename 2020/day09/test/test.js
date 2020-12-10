import assert from 'assert';
import { readFileSync } from 'fs';

import partOne from '../src/partOne.js';
import partTwo from '../src/partTwo.js';

const input = readFileSync('./2020/day09/test/input.txt', 'utf-8');

describe('Day 9: Encoding Error', () => {
  describe('Part One:', () => {
    it('should determine the first number that is not a sum of two of the previous 5 numbers', () => {
      assert.strictEqual(partOne(input, 5), 127);
    });
  });
  
  describe('Part Two:', () => {
    it('should determine the value of the smallest and largest number in the contiguous range', () => {
      assert.strictEqual(partTwo(input, 5), 62);
    });
  });
});