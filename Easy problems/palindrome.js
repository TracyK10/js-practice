//Write a function to check if a given string is a palindrome.
const prompt = require('prompt-sync')();

let x = prompt("A palindrome means a word that reads the same backward or forward. Enter your word to see if it is a palindrome: ");

function word(){
    let a = x.split('').join('');
    let b = x.split('').reverse().join('');

    if (a == b){
        console.log("The string is a palindrome");
    } else {
        console.log("The string is not a palindrome");
    }
}
word();