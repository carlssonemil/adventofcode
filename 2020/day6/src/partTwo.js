export default (input) => {
  let groups = input.split('\n\r').map(x => x.split(/[\r\n]+/).filter(x => x));

  let count = [];

  for (let group of groups) {
    let questions = [];
    let answers = 0;;

    for (let person of group) {
      questions = [ ...questions, ...person ];
    }

    for (let answer of [...new Set(questions)]) {
      let persons = group.length;

      if (questions.filter(x => x === answer).length === persons) {
        answers++;
      }
    }

    count.push(answers);
  }

  return count.reduce((acc, cur) => acc + cur);
}