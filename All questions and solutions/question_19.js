// 19. Even numbers are divisible by 2 and the remainder is zero. How do you check, if a number is even or not using JavaScript?


const evenCheck = (number) => {
    return number%2 == 0;
}

const prompt = require("prompt-sync")({sigint:true});

let number = prompt("Enter the number to check whether is even or not: ");

if(evenCheck(number) == true) {
    console.log(`Yes, ${number} is even number.`);
} else {
    console.log(`No, ${number} is not even number.`);
}