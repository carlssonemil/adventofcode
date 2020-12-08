export default (input) => {
  let groups = input.split('\n\r').map(x => x.split(/[\r\n]+/).filter(x => x));
  let count = [];

  for (let group of groups) {
    let questions = [];

    for (let person of group) {
      questions = [ ...questions, ...person ];
    }

    count.push([...new Set(questions)].length);
  }

  return count.reduce((acc, cur) => acc + cur);
}