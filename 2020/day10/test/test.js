import assert from 'assert';
import { readFileSync } from 'fs';

import partOne from '../src/partOne.js';
import partTwo from '../src/partTwo.js';

const input = readFileSync('./2020/day10/test/input.txt', 'utf-8');

describe('Day 10: Adapter Array', () => {
  describe('Part One:', () => {
    it('should determine the number of 1-jolt differences multiplied by the number of 3-jolt differences', () => {
      assert.strictEqual(partOne(input), 220);
    });
  });
  
  describe('Part Two:', () => {
    it('should determine the total number of distinct ways the adapters can be arranged', () => {
      assert.strictEqual(partTwo(input), 19208);
    });
  });
});