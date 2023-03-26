function main(input) {
  input = input.split('\n');
  const RC = input[0].split(' ').map(e => +e);
  const table = new Array(RC[0]);
  for(let i = 1;i <= RC[0];i++){
    const line = input[i];
    table[i - 1] = new Array(RC[1]);
    for(let l = 0;l < RC[1];l++)
      table[i - 1][l] = line[l];
  }
  for(let i = 0;i < RC[0];i++)
    for(let l = 0;l < RC[1];l++){
      let bom = table[i][l]
      if(bom != '.' && bom != '#'){
        table[i][l] = '.';
        bom = +bom;
        const mr = i + bom;
        for(let r = -bom;r <= bom;r++){
          const mc = l + bom
          for(let c = -bom;c <= bom;c++){
            const pi = i + r;
            const pc = l + c;
            if(Math.abs(r) + Math.abs(c) <= bom && 0<=pi&&pi<RC[0] && 0<=pc&&pc<RC[1] && table[pi][pc] == '#'){
              table[pi][pc] = ".";
            }
          }
        }
      }
    }
  console.log(table.map(e => e.join('')).join('\n'));
}

main(require("fs").readFileSync("/dev/stdin", "utf8"));
