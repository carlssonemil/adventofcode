const fs = require('fs');

const data = fs.readFileSync('input.txt', 'utf-8');

const partOne = (input) => {
  let fuelRequirements = [];

  for (let module of input) {
    fuelRequirements.push(Math.floor(module / 3) - 2);
  }

  return fuelRequirements.reduce((acc, cur) => acc + cur);
}

const partTwo = (input) => {
  let fuelRequirements = [];

  for (let module of input) {
    let additionalFuel = module;
    let fuelRequirement = [];
    
    while (additionalFuel >= 9) {
      additionalFuel = Math.floor(additionalFuel / 3) - 2;
      fuelRequirement.push(additionalFuel);
    }

    fuelRequirements.push(fuelRequirement.reduce((acc, cur) => acc + cur));
  }

  return fuelRequirements.reduce((acc, cur) => acc + cur);
}

console.log('Part 1: ' + partOne(data.split("\n").map(x => + x)));
console.log('Part 2: ' + partTwo(data.split("\n").map(x => + x)));