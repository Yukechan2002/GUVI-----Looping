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

var input= userInput[0].split("");
var output=[];
var newString = ""
for(var i = input.length-1;i>=0;i--){
    newString = newString + input[i];
}
console.log(newString);

  //end-here
});
