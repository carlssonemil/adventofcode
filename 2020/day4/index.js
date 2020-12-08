import { readFileSync } from 'fs';

const input = readFileSync('./2020/day4/input.txt', 'utf-8');

import partOne from './src/partOne.js';
import partTwo from './src/partTwo.js';

console.log('\n--- Day 4 ---');
console.log(`Part One: ${ partOne(input) }`);
console.log(`Part Two: ${ partTwo(input) }`);