export default (input) => {
  const data = input.split('\n').map(Number).sort((a, b) => a - b);
  const adapters = [0, ...data, data[data.length - 1] + 3];

  let distinct = adapters.map((x, i) => (i == 0 ? 1 : 0));

  for (let i = 0; i < distinct.length; i++) {
    for (let j = i - 3; j < i; j++) {
      if (adapters[i] <= adapters[j] + 3) {
        distinct[i] += distinct[j];
      }
    }
  }

  return distinct.pop();
}