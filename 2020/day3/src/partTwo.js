export default (input) => {
  input = [ ...input.split('\n').map(x => x.replace('\r', '')) ];

  let encountered = [];

  let moves = [
    { right: 1, down: 1 },
    { right: 3, down: 1 },
    { right: 5, down: 1 },
    { right: 7, down: 1 },
    { right: 1, down: 2 },
  ];

  for (let move of moves) {
    let trees = 0;
    let r = move.right;

    for (let i = move.down; i < input.length; i+= move.down) {
      let row = input[i].split('');
      
      if (row[r] === '#') {
        trees++;
      }
  
      r += move.right;
  
      if (r >= row.length) {
        r -= row.length;
      }
    }

    encountered.push(trees);
  }

  return encountered.reduce((acc, cur) => acc * cur);
}