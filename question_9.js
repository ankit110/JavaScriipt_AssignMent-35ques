const constants = [2.72, 3.14, 9.81, 37, 100];

const countries = ['Finland', 'Estonia', 'Sweden', 'Denmark', 'Norway'];

const rectangle = {
  width: 20,
  height: 10,
  area: 200,
  perimeter: 60
};

const users = [
    {
        name:'Brook',
        scores:75,
        skills:['HTM', 'CSS', 'JS'],
        age:16
    },
    {
        name:'Alex',
        scores:80,
        skills:['HTM', 'CSS', 'JS'],
        age:18
    },
    {
        name:'David',
        scores:75,
        skills:['HTM', 'CSS'],
        age:22        
    },
    {
        name:'John',
        scores:85,
        skills:['HTML'],
        age:25
    },
    {
        name:'Sara',
        scores:95,
        skills:['HTM', 'CSS', 'JS'],
        age: 26
    },
    {
        name:'Martha',
        scores:80,
        skills:['HTM', 'CSS', 'JS'],
        age:18
    },
    {
        name:'Thomas',
        scores:90,
        skills:['HTM', 'CSS', 'JS'],
        age:20
    }
];



// Destructure and assign the elements of constants array to e, pi, gravity, humanBodyTemp, waterBoilingTemp.

let [e, pi, gravity, humanBodyTemp, waterBoilingTemp] = constants;

console.log(e);
console.log(pi);
console.log(gravity);
console.log(humanBodyTemp);
console.log(waterBoilingTemp);


// Destructure and assign the elements of countries array to fin, est, sw, den, nor.

let [fin, est, sw, den, nor] = countries;

console.log(fin);
console.log(est);
console.log(sw);
console.log(den);
console.log(nor);

// Destructure the rectangle object by its properties or keys.

const {width, height, area, perimeter} = rectangle;

console.log(width);
console.log(height);
console.log(area);
console.log(perimeter);

//--------------------------------------------------------------------------------------------
// Iterate through the users array and get all the keys of the object using destructuring.
// Didn't understand this question what is it asking?
//--------------------------------------------------------------------------------------------


// Find the persons who have less than two skills?
const lessThan2skill = [];
users.forEach((element) => {
    if(element.skills.length < 2) {
        lessThan2skill.push(element.name);
    }
});

console.log(`
The persons who have less than two skills are
=> ${lessThan2skill}`);
