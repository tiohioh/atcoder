function main(input) {
  const ip = input.split("\n");
  const i = ip[0].split(" ");
  
  const N = +i[0];
  const A = +i[1];
  const B = +i[2];
  
  for(let i = 0;i < A * N;i++){//h
    let str = "";
    let n1 = (i % (2 * A)) < A ? true : false;
    for(let j = 0;j < B * N;j++){
      let n2 = (j % (2 * B)) < B ? true : false;
      if(n1 ^ n2){
        str += "#";
      }else{
        str += ".";
      }
    }
      console.log(str);
  }
  
}
 
main(require("fs").readFileSync("/dev/stdin", "utf8"));
