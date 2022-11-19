// 34. Linear equation is calculated as follows: ax + by + c = 0. Write a function which calculates value of a linear equation, solveLinEquation.

const solveLinEquation = (a, b, c) => {
    for(let i = 0; i*a <= c; i++) {
        if((c - (i*a))%b == 0) {
            console.log(`x = ${i} and y = ${(c - (i*a))/b}`);

            return;
        }
    }

    console.log(`No Solution.`);
}

const prompt = require('prompt-sync')({sigint:true});

const a = prompt("Enter the value of a:- ");
const b = prompt("Enter the value of b:- ");
const c = prompt("Enter the value of c:- ");

solveLinEquation(a, b, c);


