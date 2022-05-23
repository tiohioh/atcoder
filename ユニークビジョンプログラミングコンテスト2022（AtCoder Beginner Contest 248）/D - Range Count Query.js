function main(input) {
  input = input.split("\n");
  let arr = input[1].split(" ");
  if(input[input.length - 1] == "") input.length--;
  for(let i = 3;i < input.length;++i){
    let is = input[i].split(" ");
    let L = is[0] - 1;
    let R = is[1];
    let X = is[2];
    let c = 0;
    for(let i2 = L;i2 < R;++i2){
      if(arr[i2] == X) c += 1;
    }
    console.log(c);
  }
}
main(require("fs").readFileSync("/dev/stdin", "utf8"));
