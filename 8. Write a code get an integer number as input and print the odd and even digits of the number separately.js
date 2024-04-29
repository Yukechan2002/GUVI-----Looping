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
 var a=userInput[0].split("");
var even=[];
var odd=[];
for(i = 0;i<a.length;i++){
    if(parseInt(a[i])%2===0)
        even.push(a[i]);
    else
    odd.push(a[i]);
    
}
even.sort();
odd.sort();

console.log(even.join(" "));
console.log(odd.join(" "));


  //end-here
});
