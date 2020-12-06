const fs = require('fs');

let data = fs.readFileSync('input.txt', 'utf-8');

const partOne = (input) => {
  let groups = input.split('\n\r').map(x => x.split(/[\r\n]+/).filter(x => x));
  let count = [];

  for (let group of groups) {
    let questions = [];

    for (let person of group) {
      questions = [ ...questions, ...person ];
    }

    count.push([...new Set(questions)].length);
  }

  return count.reduce((acc, cur) => acc + cur);
}

const partTwo = (input) => {
  let groups = input.split('\n\r').map(x => x.split(/[\r\n]+/).filter(x => x));
  let count = [];

  for (let group of groups) {
    let questions = [];
    let answers = 0;;

    for (let person of group) {
      questions = [ ...questions, ...person ];
    }

    for (let answer of [...new Set(questions)]) {
      let persons = group.length;

      if (questions.filter(x => x === answer).length === persons) {
        answers++;
      }
    }

    count.push(answers);
  }

  return count.reduce((acc, cur) => acc + cur);
}

console.log('Part 1: ' + partOne(data));
console.log('Part 2: ' + partTwo(data));