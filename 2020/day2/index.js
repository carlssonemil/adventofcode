const fs = require('fs');

const data = fs.readFileSync('input.txt', 'utf-8').replace(/^\s\n+|\s\n+$/g, '');

const partOne = (input) => {
  let correct = 0;

  for (let row of input) {
    const min = row.split(' ')[0].split('-')[0];
    const max = row.split(' ')[0].split('-')[1];
    const char = row.split(' ')[1].replace(':', '');
    const pw = row.split(' ')[2].replace('\r', '');

    let counter = 0;

    for (let c of pw) {
      if (c === char) counter++;
    }

    if (counter >= min && counter <= max) {
      correct++;
    }
  }

  return correct;
}

const partTwo = (input) => {
  let correct = 0;

  for (let row of input) {
    const min = row.split(' ')[0].split('-')[0];
    const max = row.split(' ')[0].split('-')[1];
    const char = row.split(' ')[1].replace(':', '');
    const pw = row.split(' ')[2].replace('\r', '');

    if (pw[min-1] === char && pw[max-1] === char) {
      continue;
    } else if (pw[min-1] === char || pw[max-1] === char) {
      correct++;
    }
  }

  return correct;
}

console.log('Part 1: ' + partOne(data.split("\n")));
console.log('Part 2: ' + partTwo(data.split("\n")));