// 21. Check if the season is Autumn, Winter, Spring or Summer. If the user input is :
//     - September, October or November, the season is Autumn.
//     - December, January or February, the season is Winter.
//     - March, April or May, the season is Spring
//     - June, July or August, the season is Summer

const seasonCheck = (month) => {
    if(month == "september" || month == "October" || month == "November") {
        return `Autumn Season.`
    }
    
    else if(month == "December" || month == "February" || month == "January") {
        return `Winter Season.`
    }

    else if(month == "March" || month == "April" || month == "May") {
        return `Spring Season.`
    }

    else if(month == "June" || month == "July" || month == "August"){
        return `Summer Season.`
    }

    else {
        return `Wrong Input!`;
    }
}


const prompt = require("prompt-sync")({sigint:true});

let month = prompt("Enter The month Name: ");

console.log(`${seasonCheck(month)}`);
