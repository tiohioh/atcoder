function main(input) {
  input = input.split("\n");
  input[0] = input[0].split(" ");
  let syoku,kirai;
  syoku = +input[0][0];
  kirai = +input[0][1];
  let syokus = input[1].split(" ");
  let kirais = input[2].split(" ");
  let max = 0;
  for(let i = 0;i < syoku;i++){
    syokus[i] = +syokus[i];
    max = syokus[i] >= max ? syokus[i] : max;
  }
  let jadge = false;
  for(let i = 0;i < kirai;i++){
    kirais[i] = +kirais[i];
    jadge = syokus[kirais[i] - 1] == max ? true : jadge;
    //console.log(kirais[i] - 1,syokus[kirais[i] - 1])
  }
  if(jadge){
    console.log("Yes");
  }else{
    console.log("No");
  }
}
 
main(require("fs").readFileSync("/dev/stdin", "utf8"));
