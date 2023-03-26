function main(input) {
  console.log(input.split("\n")[1].match(/^([^\s]+\s)*((and)|(not)|(that)|(the)|(you))(\s[^\s]+)*$/) ? "Yes" : "No");
}

main(require("fs").readFileSync("/dev/stdin", "utf8"));
