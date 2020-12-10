export default (input) => {
  const data = input.split('\n').map(Number).sort((a, b) => a - b);
  const adapters = [0, ...data, data[data.length - 1] + 3];

  let oneJolt = 0;
  let threeJolt = 0;

  for (let i = 0; i < adapters.length - 1; i++) {
    const difference = adapters[i + 1] - adapters[i];

    switch (difference) {
      case 1: oneJolt++; break;
      case 3: threeJolt++; break;
    }
  }

  return oneJolt * threeJolt;
}