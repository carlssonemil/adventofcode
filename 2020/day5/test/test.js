import assert from 'assert';

import partOne from '../src/partOne.js';

describe('Day 5: Binary Boarding', () => {
  describe('Part One:', () => {
    it('should determine the correct seat ID', () => {
      const input = `FBFBBFFRLR`;
      assert.strictEqual(partOne(input), 357);
    });
    
    it('should determine the correct seat ID', () => {
      const input = `BFFFBBFRRR`;
      assert.strictEqual(partOne(input), 567);
    });
    
    it('should determine the correct seat ID', () => {
      const input = `FFFBBBFRRR`;
      assert.strictEqual(partOne(input), 119);
    });

    it('should determine the correct seat ID', () => {
      const input = `BBFFBBFRLL`;
      assert.strictEqual(partOne(input), 820);
    });
  });
});