function main(input) {
  input = input.split('\n');
  const N = +input[0];
  let direc = input[1];
  const w = direc.length;
  const cells = new Object();
  let c = 0;
  let r = 0;
  cells['0,0'] = 1;
  for(let i = 0;i < w;i++){
    if(direc[i] == 'L')
      r += 1;
    if(direc[i] == 'R')
      r -= 1;
    if(direc[i] == 'U')
      c += 1;
    if(direc[i] == 'D')
      c -= 1;
    const ptr = `${c},${r}`;
    if(cells[ptr]){
      console.log('Yes');
      return;
    }
    cells[ptr] = 1;
  }
  console.log('No');
}

main(require('fs').readFileSync('/dev/stdin', 'utf8'));
