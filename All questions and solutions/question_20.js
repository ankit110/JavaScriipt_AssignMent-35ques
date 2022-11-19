// 20. Write a code which can give grades to students according to theirs scores:
//     - 80-100, A
//     - 70-89, B
//     - 60-69, C
//     - 50-59, D
//     - 0-49, F


const gradeCheck = (score) => {
    if(score >= 80 && score <= 100) {
        return `Grade of this student is => (A)`;
    }

    else if(score >= 70 && score <= 79) {
        return `Grade of this student is => (B)`;
    }

    else if(score >= 60 && score <= 69) {
        return `Grade of this student is => (C)`;
    }

    else if(score >= 50 && score <= 59) {
        return `Grade of this student is => (D)`;
    }

    else if(score >= 0 && score <= 49) {
        return `Grade of this student is => (F)`;
    }
    
    else {
        return `Enter the score in between 0 - 100.`;
    }
}


const prompt = require("prompt-sync")({sigint:true});

let score = prompt("Enter the score of student: ");

let grade = gradeCheck(score);

console.log(`${grade}`);