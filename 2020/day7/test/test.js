import assert from 'assert';
import { readFileSync } from 'fs';

import partOne from '../src/partOne.js';
import partTwo from '../src/partTwo.js';

const input1 = readFileSync('./2020/day7/test/input1.txt', 'utf-8');
const input2 = readFileSync('./2020/day7/test/input2.txt', 'utf-8');

describe('Day 7: Handy Haversacks', () => {
  describe('Part One:', () => {
    it('should determine the number of bag colors that can contain at least one shiny gold bad', () => {
      assert.strictEqual(partOne(input1), 4);
    });
  });
  
  describe('Part Two:', () => {
    it('should determine the number of individual bags that are required inside a single shiny gold bag', () => {
      assert.strictEqual(partTwo(input2), 126);
    });
  });
});