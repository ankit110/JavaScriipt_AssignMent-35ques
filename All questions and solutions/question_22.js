// 22. Write a program which tells the number of days in a month.

const numberOfDays = (month) => {
    if(month == "january" || month == "march" || month == "may" || month == "july" || month == "august" || month == "october" || month == "December") {
        return `Total number of days in ${month} is ${31}.`;
    }

    if(month == "april" || month == "june" || month == "september" || month == "november") {
        return `Total number of days in ${month} is ${30}.`;
    }

    if(month == "february") {
        return `Total number of days in ${month} is ${28}.`;
    }
}

const prompt = require("prompt-sync")({sigint:true});

let month = prompt("Enter month name: ");

console.log(`${numberOfDays(month)}`);
