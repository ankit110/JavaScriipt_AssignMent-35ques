// 13. Write a script that prompt the user to enter base and height of the triangle and calculate an area of a triangle (area = 0.5 x b x h).

const prompt=require("prompt-sync")({sigint:true}); 
  
let baseValue = prompt('Enter the base of a triangle: ');
let heightValue = prompt('Enter the height of a triangle: ');

// calculate the area
let areaValue = 0.5 * (baseValue * heightValue);

console.log(
  `The area of a triangle with base ${baseValue} and height ${heightValue} is ${areaValue}`
);




