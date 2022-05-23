function main(in_put) {
  const input = in_put.split("\n");
  const one = input[0].split(" ");
  const N = one[0];
  const Q = +one[1];
  
  if(!input[input.length - 1]) input.length--;
  
  let array = [];
  for(let i = 0;i < N;i++){
    array[i] = i + 1 + "";
  }
  let position = [];
  for(let i = 0;i < N;i++){
    position[i] = i;
  }
  
  for(let i = 1;i < Q + 1;i++){
    let index = position[input[i] - 1];
    let tmp = index + 1;
    if(index == N - 1){
      tmp = index - 1;
    }
    
    position[input[i] - 1] = position[array[tmp] - 1];
    position[array[tmp] - 1] = index;
    let t = array[index];
    array[index] = array[tmp];
    array[tmp] = t;
    
  }
  console.log(array.join(" "));
  
}
 
main(require("fs").readFileSync("/dev/stdin", "utf8"));
