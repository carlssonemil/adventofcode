const fs = require('fs');

let data = fs.readFileSync('input.txt', 'utf-8');

const partOne = (input) => {
  const passports = input.split(/\n\s*\n/);
  const requiredFields = ['byr', 'iyr', 'eyr', 'hgt', 'hcl', 'ecl', 'pid'];
  let validPassports = 0;

  for (let passport of passports) {
    passport = passport.replace(/\n/g, ' ').split(' ').reduce((result, item) => {
      const field = item.split(':')[0];
      const value = item.split(':')[1].replace('\r', '');

      result[field] = value;
      return result;
    }, {});

    let valid = true;

    for (let field of requiredFields) {
      if (!passport[field]) {
        valid = false;
        break;
      }
    }

    if (valid) validPassports++;
  }

  return validPassports;
}

const partTwo = (input) => {
  const passports = input.split(/\n\s*\n/);
  const requiredFields = [
    { field: 'byr', validation: /(19[2-8][0-9]|199[0-9]|200[0-2])/ },
    { field: 'iyr', validation: /(201[0-9]|2020)/ },
    { field: 'eyr', validation: /(202[0-9]|2030)/ },
    { field: 'hgt', validation: /(1[5-8][0-9]|19[0-3])cm|(59|6[0-9]|7[0-6])in/ },
    { field: 'hcl', validation: /#[0-9A-Fa-f]{6}\b/ },
    { field: 'ecl', validation: /(amb|blu|brn|gry|grn|hzl|oth)/ },
    { field: 'pid', validation: /^\d{9}$/ },
  ];
  let validPassports = 0;

  for (let passport of passports) {
    passport = passport.replace(/\n/g, ' ').split(' ').reduce((result, item) => {
      const field = item.split(':')[0];
      const value = item.split(':')[1].replace('\r', '');

      result[field] = value;
      return result;
    }, {});

    let valid = true;

    for (let { field, validation } of requiredFields) {
      if (!passport[field] || !validation.test(passport[field])) {       
        valid = false;
        break;
      }
    }

    if (valid) validPassports++;
  }

  return validPassports;
}

console.log('Part 1: ' + partOne(data));
console.log('Part 2: ' + partTwo(data));