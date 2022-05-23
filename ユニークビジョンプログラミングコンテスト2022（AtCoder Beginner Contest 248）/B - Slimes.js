function main(input) {
  input = input.split("\n")[0].split(" ");
  let A = +input[0];
  let B = +input[1];
  let K = +input[2];
  let n = A;
  let c = 0
  while(n < B){
    ++c;
    n *= K;
  }
  console.log(c)
}
main(require("fs").readFileSync("/dev/stdin", "utf8"));
