function main(input) {
  let a = input.split("\n")[0];
  for(let i = 0;i < 5;i++){
    a += a;
  }
  console.log(a.substr(0,6));
}

main(require("fs").readFileSync("/dev/stdin", "utf8"));
