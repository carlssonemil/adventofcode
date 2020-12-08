import assert from 'assert';

import partOne from '../src/partOne.js';
import partTwo from '../src/partTwo.js';

describe('Day 2: Password Philosophy', () => {
  describe('Part One:', () => {
    it('should determine the number of valid passwords', () => {
      const input =
        `1-3 a: abcde
1-3 b: cdefg
2-9 c: ccccccccc`;
  
      assert.strictEqual(partOne(input), 2);
    });
  });
  
  describe('Part Two:', () => {
    it('should determine the number of valid passwords', () => {
      const input =
        `1-3 a: abcde
1-3 b: cdefg
2-9 c: ccccccccc`;
  
      assert.strictEqual(partTwo(input), 1);
    });
  });
});