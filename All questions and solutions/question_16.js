// 16. Get radius using prompt and calculate the area of a circle (area = pi x r x r) and circumference of a circle(c = 2 x pi x r) where pi = 3.14.


// const prompt=require("prompt-sync")({sigint:true});

const pi = 3.14;

let area = (r) => {
    let ar = pi * r * r;
    return ar;
}

let circumference = (r) => {
    let circum = 2 * pi * r;
    return circum;
}

const prompt = require("prompt-sync")({sigint:true});

let radius = prompt("Enter the radius of the circle to calulate the area:- ");

console.log(`The area of the circle having radius ${radius} = ${area(radius)}.`);

console.log(`The area of the circle having radius ${radius} = ${circumference(radius)}.`);


