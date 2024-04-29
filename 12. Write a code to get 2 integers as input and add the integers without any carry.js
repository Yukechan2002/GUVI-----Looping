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
var input = userInput[0].split(" ");
var a = parseInt(input[0]);
var b = parseInt(input[1]);
var res = 0;
var mul = 1;
while( a>0 || b>0){
    var DigitA = a % 10;
    var DigitB = b % 10;
    res = res+((a+b)%10)*mul;
    
   a = Math.floor(a/10);
   b = Math.floor(b/10);
    mul*= 10;
}
console.log(res);

  //end-here
});
