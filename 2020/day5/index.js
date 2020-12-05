const fs = require('fs');
const range = require('./range.js');
const missingNum = require('./missingNum.js');

let data = fs.readFileSync('input.txt', 'utf-8');

const partOne = (input) => {
  const boardingPasses = input.split('\n').map(b => b.replace('\r', ''));
  let seatIds = [];

  for (let [i, boardingPass] of boardingPasses.entries()) {
    let row = range(0, 127);
    let column = range(0, 7);
    
    for (let char of boardingPass.split('')) {
      switch (char) {
        case 'F': row = range(row[0], row[Math.floor(row.length / 2)]); break;
        case 'B': row = range(row[Math.floor(row.length / 2)], row[row.length - 1]); break;
        case 'L': column = range(column[0], column[Math.floor(column.length / 2)]); break;
        case 'R': column = range(column[Math.floor(column.length / 2)], column[column.length - 1]); break;
        default: break;
      }
    }

    const seatId = Math.min(...row) * 8 + Math.min(...column);
    seatIds.push(seatId);
  }

  return Math.max(...seatIds);
}

const partTwo = (input) => {
  const boardingPasses = input.split('\n').map(b => b.replace('\r', ''));
  let seatIds = [];

  for (let [i, boardingPass] of boardingPasses.entries()) {
    let row = range(0, 127);
    let column = range(0, 7);
    
    for (let char of boardingPass.split('')) {
      switch (char) {
        case 'F': row = range(row[0], row[Math.floor(row.length / 2)]); break;
        case 'B': row = range(row[Math.floor(row.length / 2)], row[row.length - 1]); break;
        case 'L': column = range(column[0], column[Math.floor(column.length / 2)]); break;
        case 'R': column = range(column[Math.floor(column.length / 2)], column[column.length - 1]); break;
        default: break;
      }
    }

    const seatId = Math.min(...row) * 8 + Math.min(...column);
    seatIds.push(seatId);
  }

  seatIds = seatIds.sort((a, b) => a - b);
  let summary = (seatIds.length + 1) * (seatIds[0] + seatIds[seatIds.length - 1]) / 2;

  return summary - seatIds.reduce((x, y) => x + y);
}

console.log('Part 1: ' + partOne(data));
console.log('Part 2: ' + partTwo(data));