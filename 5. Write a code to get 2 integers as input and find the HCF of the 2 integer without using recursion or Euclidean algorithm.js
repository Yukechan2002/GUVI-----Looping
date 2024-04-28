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

  var n=userInput[0].split(" ");
    var n1=parseInt(n[0]);
    var n2=parseInt(n[1]);
    var arr1=[]; 
    var arr2=[];
    
    for(i=1;i<=n1;i++){
        if(n1%i===0)
            arr1.push(i)
    }
    
    for(i=1;i<=n2;i++){
        if(n2%i===0)
            arr2.push(i)
    }
   
    var factor=0
    for(i=0;i<arr1.length&&i<arr2.length;i++){
        if(arr2.includes(arr1[i]))
            factor=arr1[i];
    }
    
    console.log(factor)

  //end-here
});
