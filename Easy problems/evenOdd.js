//Write a program to separate even and odd numbers from a list of integers.
const numbers = [2, 5, 6, 8, 3, 9];

function even(number){
    for (const number of numbers){
        if (number%2 === 0){
            console.log("Even :",number);
        }
    }
}

function odd(number){
    for (const number of numbers){
        if (number%2 !== 0){
            console.log("Odd :",number)
        }
    }
}

even(numbers);
odd(numbers);
