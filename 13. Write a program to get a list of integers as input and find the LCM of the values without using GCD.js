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
var inpind = parseInt(userInput[0]);
var input = userInput[1].split(' ').map(Number);
var lcm = input[0];
for(var i = 1;i<input.length;i++){
    var currentnumber = input[i];
    var large =Math.max(lcm,currentnumber);
    var small = Math.min(lcm,currentnumber);
    var lcm_mul = large;
    while(true){
        if(lcm_mul % small === 0){
            lcm = lcm_mul;
            break;
        }
        lcm_mul = lcm_mul +  large;
    }
}
console.log(lcm);

  //end-here
});
