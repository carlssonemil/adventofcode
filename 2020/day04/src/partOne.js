export default (input) => {
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