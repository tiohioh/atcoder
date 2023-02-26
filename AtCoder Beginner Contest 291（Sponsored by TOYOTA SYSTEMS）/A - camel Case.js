function main(input) {
	for(let i = 0;i < input.length;i++)
    if(input.charCodeAt(i) < 91){
      console.log(i + 1);
      return 
    }
}
 
main(require('fs').readFileSync('/dev/stdin', 'utf8'));
