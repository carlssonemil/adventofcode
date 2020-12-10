import assert from 'assert';
import { readFileSync } from 'fs';

import partOne from '../src/partOne.js';
import partTwo from '../src/partTwo.js';

const input = readFileSync('./2020/day06/test/input.txt', 'utf-8');

describe('Day 6: Custom Customs', () => {
  describe('Part One:', () => {
    it('should determine the sum of questions anyone answered "yes"', () => {
      assert.strictEqual(partOne(input), 11);
    });
  });
  
  describe('Part Two:', () => {
    it('should determine the sum of questions everyone answered "yes"', () => {
      assert.strictEqual(partTwo(input), 6);
    });
  });
});