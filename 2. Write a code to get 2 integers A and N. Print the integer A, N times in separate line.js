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
var inputs = userInput[0].split(' ');
var A = inputs[0];
var N = inputs[1];
for(var i = 1;i<=N;i++){
    console.log(A);
}
 

  //end-here
});
