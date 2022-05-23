function main(input) {
  const i = input.split("\n");
  const i1 = i[0].split(" ");
  const i2 = i[1].split(" ");
  
  const x = +i1[0];
  const y = +i1[1];
  
  const px = +i2[0];
  const py = +i2[1];
  
  let sum = 0;
  
  sum += px > 1 ? 1 : 0;
  sum += y > py ? 1 : 0;
  sum += x > px ? 1 : 0;
  sum += py > 1 ? 1 : 0;
 
  console.log(sum);
}
 
main(require("fs").readFileSync("/dev/stdin", "utf8"));
