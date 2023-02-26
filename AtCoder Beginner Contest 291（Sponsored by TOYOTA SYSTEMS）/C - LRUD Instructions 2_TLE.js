function main(input) {
  input = input.split('\n');
  const N = +input[0];
  let direc = input[1];
  const w = direc.length;
  for(let startPtr = 0;startPtr < w;startPtr++){
    let c = 0;
    let r = 0;
    for(let i = startPtr;i < w;i++){
      if(direc[i] == 'L')
        r += 1;
      if(direc[i] == 'R')
        r -= 1;
      if(direc[i] == 'U')
        c += 1;
      if(direc[i] == 'D')
        c -= 1;
      if(c == 0 && r == 0){
        console.log('Yes');
        return;
      }
      
    }
  }
  console.log('No');
}
 
main(require('fs').readFileSync('/dev/stdin', 'utf8'));
