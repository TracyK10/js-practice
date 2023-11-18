//Write a Javascript program to input two numbers and find their sum.
const prompt = require("prompt-sync")();

let x = (prompt("Enter the first integer: "));
    let y = prompt("Enter the second integer: ");

function add(x, y){
    
    let z = parseInt(x) + parseInt(y);
    console.log("The result is " +z);
}
add(x,y);
