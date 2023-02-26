function main(input) {
  input = input.split('\n');
  const N = +input[0];
  let nums = input[1].split(' ').map(e => +e);
  nums = nums.sort((a,b) => a > b ? 1 : -1);
  let sum = 0;
  for(let i = N;i < 4 * N;i++)
    sum += nums[i];
  console.log(sum / 3 / N);
}
 
main(require('fs').readFileSync('/dev/stdin', 'utf8'));
