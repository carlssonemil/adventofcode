import assert from 'assert';
import { readFileSync } from 'fs';

import partOne from '../src/partOne.js';
import partTwo from '../src/partTwo.js';

const input = readFileSync('./2020/day08/test/input.txt', 'utf-8');

describe('Day 8: Handheld Halting', () => {
  describe('Part One:', () => {
    it('should determine the value of the accumulator', () => {
      assert.strictEqual(partOne(input), 5);
    });
  });
  
  describe('Part Two:', () => {
    it('should determine the value of the accumulator after the program terminates', () => {
      assert.strictEqual(partTwo(input), 8);
    });
  });
});