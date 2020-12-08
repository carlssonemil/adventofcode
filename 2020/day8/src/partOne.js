export default (input) => {
  const instructions = input.split('\r\n');
  const executed = [];
  let accumulator = 0;

  for (let i = 0; i < instructions.length;) {
    const operation = instructions[i].split(' ')[0];
    const argument = instructions[i].split(' ')[1];

    if (operation === 'acc') {
      accumulator += parseInt(argument);
      i++;
    } else if (operation === 'jmp') {
      i += parseInt(argument);
    } else if (operation === 'nop') {
      i++;
    }

    if (!executed.includes(i)) {
      executed.push(i);
    } else {
      break;
    }
  }
  
  return accumulator;
}