const fs = require('fs');

let data = fs.readFileSync('input.txt', 'utf-8').replace(/^\s\n+|\s\n+$/g, '');
data = [ ...data.split('\n').map(x => x.replace('\r', '')) ];

const partOne = (input) => {
  let r = 3;
  let trees = 0;

  for (let i = 0; i < input.length - 1; i++) {
    let row = input[i + 1].split('');
    
    if (row[r] === '#') {
      trees++;
    }

    r += 3;

    if (r >= row.length) {
      r -= row.length;
    }
  }

  return trees;
}

const partTwo = (input) => {
  let answer = [];

  let moves = [
    { right: 1, down: 1 },
    { right: 3, down: 1 },
    { right: 5, down: 1 },
    { right: 7, down: 1 },
    { right: 1, down: 2 },
  ];

  for (let move of moves) {
    let trees = 0;
    let r = move.right;

    for (let i = move.down; i < input.length; i+= move.down) {
      let row = input[i].split('');
      
      if (row[r] === '#') {
        trees++;
      }
  
      r += move.right;
  
      if (r >= row.length) {
        r -= row.length;
      }
    }

    answer.push(trees);
  }

  return answer.reduce((acc, cur) => acc * cur);
}

console.log('Part 1: ' + partOne(data));
console.log('Part 2: ' + partTwo(data));