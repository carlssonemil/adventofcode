const fs = require('fs');

let data = fs.readFileSync('input.txt', 'utf-8');

const partOne = (input) => {
  const instructions = input.split('\r\n');
  const executed = [];
  let accumulator = 0;

  for (let i = 0; i < instructions.length;) {
    const operation = instructions[i].split(' ')[0];
    const argument = instructions[i].split(' ')[1];

    if (operation === 'acc') {
      accumulator += parseInt(argument);
      i++;
    } else if (operation === 'jmp') {
      i += parseInt(argument);
    } else if (operation === 'nop') {
      i++;
    }

    if (!executed.includes(i)) {
      executed.push(i);
    } else {
      break;
    }
  }
  
  return accumulator;
}

const partTwo = (input) => {
  const instructions = input.split('\r\n').map(instruction => {
    return { 
      operation: instruction.split(' ')[0], 
      argument: parseInt(instruction.split(' ')[1]) 
    };
  });
  
  for (let i = 0; i < instructions.length; i++) {
    const fix = input.split('\r\n').map(instruction => {
      return { 
        operation: instruction.split(' ')[0], 
        argument: parseInt(instruction.split(' ')[1]) 
      };
    });

    if (instructions[i].operation === 'jmp') {
      fix[i].operation = 'nop';
    } else if (instructions[i].operation === 'nop') {
      fix[i].operation = 'jmp';
    } else {
      continue;
    }

    const executed = [];
    let accumulator = 0;
    let j = 0;

    while (!executed.includes(j)) {
      executed.push(j);

      const { operation, argument } = fix[j];

      if (operation === 'acc') {
        accumulator += argument;
        j++;
      } else if (operation === 'jmp') {
        j += argument;
      } else if (operation === 'nop') {
        j++;
      }

      if (j >= fix.length) {
        return accumulator;
      }
    }
  }
}

console.log('Part 1: ' + partOne(data));
console.log('Part 2: ' + partTwo(data));