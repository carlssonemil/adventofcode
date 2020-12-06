const fs = require('fs');

const data = fs.readFileSync('input.txt', 'utf-8');

const partOne = (input) => {
  let program = input.split(',').map(Number);
  return computer(program, 12, 2);
}

const partTwo = (input) => {
  let program = input.split(',').map(Number);

  for(let noun = 0; noun <= 99; noun++) {
    for (let verb = 0; verb <= 99; verb++) {
      program = input.split(',').map(Number);
      if (computer(program, noun, verb) === 19690720) {
        return 100 * noun + verb;
      }
    }
  }
}

const computer = (program, noun, verb) => {
  program[1] = noun;
  program[2] = verb;

  for (let i = 0; i < program.length; i+=4) {
    const opcode = program[i];

    if (opcode === 99) break;
    if (opcode === 1) program[program[i + 3]] = program[program[i + 1]] + program[program[i + 2]];
    if (opcode === 2) program[program[i + 3]] = program[program[i + 1]] * program[program[i + 2]];
  }

  return program[0];
}

console.log('Part 1: ' + partOne(data));
console.log('Part 2: ' + partTwo(data));