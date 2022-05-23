function main(it) {
  let input = it.split("\n");
  let N = +input[0];
  let arr = {};
  let max = {};
  max.pri = -1;
  for(let i = 1;i <= N;i++){
    let inp = input[i].split(" ");
    let strs = inp[0];
    let pri = +inp[1];
    if(!arr[strs]){//存在しない
      arr[strs] = true;
      if(max.pri < pri){
        max.pri = pri;
        max.index = i
      }
    }
  }
  console.log(max.index); // 出力
}

main(require("fs").readFileSync("/dev/stdin", "utf8"));
