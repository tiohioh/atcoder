function main(input) {
  input = input.split("\n")[0].split("");
  input.sort();
  for(let i = 0;i < 10;++i){
    if("" + i != input[i]){
      console.log(i);
      break;
    }
  }
}
main(require("fs").readFileSync("/dev/stdin", "utf8"));
