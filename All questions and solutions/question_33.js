// 33. Body mass index(BMI) is calculated as follows: bmi = weight in Kg / (height x height) in m2. Write a function which calculates bmi. BMI is used to broadly define different weight groups in adults 20 years old or older.Check if a person is underweight, normal, overweight or obese based the information given below.
//     - The same groups apply to both men and women.
//     - Underweight: BMI is less than 18.5
//     - Normal weight: BMI is 18.5 to 24.9
//     - Overweight: BMI is 25 to 29.9
//     - Obese: BMI is 30 or more


const BMI = (weight, height) => {
    let bmi = weight / (height**2);
    return bmi;
}

const prompt = require("prompt-sync")({sigint:true});

let weight = prompt("Enter the weight in KG of the person:- ");
let height = prompt("Enter the height in meter of the person:- ");

let bmi = BMI(weight, height);

if(bmi < 18.5) {
    console.log(`The person is Underweight`);
}

else if(bmi >= 18.5 && bmi <= 24.9) {
    console.log(`The person has Normal Weight.`);
}

else if(bmi >= 25 && bmi <= 29.9) {
    console.log(`The person is Overweight.`);
} 

else if(bmi >= 30) {
    console.log(`The person is obese.`);
}