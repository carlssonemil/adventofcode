const fs = require('fs');

const data = fs.readFileSync('input.txt', 'utf-8').replace(/^\s\n+|\s\n+$/g, '');

const partOne = (input) => {
  for (let i = 0; i < input.length; i++) {
    for (let j = 0; j < input.length; j++) {
      if (input[i] + input[j] === 2020) {
        return input[i] * input[j];
      }
    }
  }

  return `No two entries add up to '2020'`;
}

const partTwo = (input) => {
  for (let i = 0; i < input.length; i++) {
    for (let j = 0; j < input.length; j++) {
      for (let k = 0; k < input.length; k++) {
        if (input[i] + input[j] + input[k] === 2020) {
          return input[i] * input[j] * input[k];
        }
      }
    }
  }

  return `No three entries add up to '2020'`;
}

console.log('Part 1: ' + partOne(data.split("\n").map(x => + x)));
console.log('Part 2: ' + partTwo(data.split("\n").map(x => + x)));