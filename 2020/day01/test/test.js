import assert from 'assert';

import partOne from '../src/partOne.js';
import partTwo from '../src/partTwo.js';

describe('Day 1: Report Repair', () => {
  describe('Part One:', () => {
    it('should determine two numbers adding to 2020', () => {
      const numbers =
        `1721
         979
         366
         299
         675
         1456`;
  
      assert.strictEqual(partOne(numbers), 514579);
    });
  });
  
  describe('Part Two:', () => {
    it('should determine three numbers adding to 2020', () => {
      const numbers =
        `1721
         979
         366
         299
         675
         1456`;
  
      assert.strictEqual(partTwo(numbers), 241861950);
    });
  });
});