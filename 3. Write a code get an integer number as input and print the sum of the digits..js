// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});

inp.on("close", () => {
  //start-here
  //Your code goes here … replace the below line with your code logic 

var num = parseInt(userInput[0]);
var sum = 0;
while(num!==0){
   sum += parseInt(num % 10);
    num = parseInt(num / 10);
}
console.log(sum);
  //end-here
});
