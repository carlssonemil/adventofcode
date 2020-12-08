export default (input) => {
  const passwords = input.split('\n');

  let valid = 0;

  for (let password of passwords) {
    const min = password.split(' ')[0].split('-')[0];
    const max = password.split(' ')[0].split('-')[1];
    const char = password.split(' ')[1].replace(':', '');
    const pw = password.split(' ')[2].replace('\r', '');

    let counter = 0;

    for (let c of pw) {
      if (c === char) counter++;
    }

    if (counter >= min && counter <= max) {
      valid++;
    }
  }

  return valid;
}