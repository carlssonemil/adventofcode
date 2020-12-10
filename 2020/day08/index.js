import { readFileSync } from 'fs';

const input = readFileSync('./2020/day08/input.txt', 'utf-8');

import partOne from './src/partOne.js';
import partTwo from './src/partTwo.js';

console.log('\n--- Day 8: Handheld Halting ---');
console.log(`Part One: ${ partOne(input) }`);
console.log(`Part Two: ${ partTwo(input) }`);