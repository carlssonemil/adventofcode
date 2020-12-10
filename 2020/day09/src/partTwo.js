import partOne from './partOne.js';

const range = (invalidNumber, numbers, index) => {
  let sum = 0;

  for (let i = index; i < numbers.length; i++) {
    if (sum > invalidNumber) break;
    if (sum === invalidNumber) return numbers.slice(index, i);
    sum += numbers[i];
  }

  return null;
}

export default (input, preambleSize = 25) => {
  const invalidNumber = partOne(input, preambleSize);
  const numbers = input.split('\n').map(Number);

  for (let i = 0; i < numbers.length; i++) {
    const weakness = range(invalidNumber, numbers, i);
    if (weakness) {
      return Math.min(...weakness) + Math.max(...weakness);
    }
  }
}