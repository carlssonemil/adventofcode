export default (input) => {
  const rules = input.split('\r\n');
  let bags = ['shiny gold'];
  let length;

  while (rules.length !== length) {
    length = rules.length;

    for (const [index, rule] of rules.entries()) {
      if (bags.some(bag => rule.includes(bag))) {
        const bag = rule.split(' bags')[0];
        if (!bags.includes(bag)) bags.push(bag);
        rules.splice(index, 1);
      }
    }
  }

  bags = bags.filter(b => b !== 'shiny gold');

  return bags.length;
}