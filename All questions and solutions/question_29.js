// 29. Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds.

let sumOfEven = 0;
let sumOfOdd = 0;
let sum = 0;

for(let i = 0; i <= 100; i++) {
    if(i%2 == 0) {
        sumOfEven += i;
    }

    else {
        sumOfOdd += i;
    }
}

console.log(`The sum of even numbers => ${sumOfEven}.`);
console.log(`The sum of odd numbers => ${sumOfOdd}.`);

