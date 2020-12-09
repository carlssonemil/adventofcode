const valid = (number, preamble) => {
  for (let i = 0; i < preamble.length; i++) {
    for (let j = 0; j < preamble.length; j++) {
      if (i !== j) {
        if (preamble[i] + preamble[j] === number) {
          return true;
        }
      }
    }
  }

  return false;
}

export default (input, preambleSize = 25) => {
  const numbers = input.split('\n').map(Number);

  for (let i = preambleSize + 1; i < numbers.length; i++) {
    const number = numbers[i];
    const preamble = numbers.slice(i - preambleSize, i);

    if (!valid(number, preamble)) return number;
  }
}