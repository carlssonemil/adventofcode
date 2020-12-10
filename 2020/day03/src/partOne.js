export default (input) => {
  input = [ ...input.split('\n').map(x => x.replace('\r', '')) ];

  let r = 3;
  let trees = 0;

  for (let i = 0; i < input.length - 1; i++) {
    let row = input[i + 1].split('');
    
    if (row[r] === '#') {
      trees++;
    }

    r += 3;

    if (r >= row.length) {
      r -= row.length;
    }
  }

  return trees;
}