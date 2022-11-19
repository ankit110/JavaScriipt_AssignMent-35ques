// 27. The following is an array of 10 students ages:
//     => const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
//     - Sort the array and find the min and max age
//     - Find the median age(one middle item or two middle items divided by two)
//     - Find the average age(all items divided by number of items)
//     - Find the range of the ages(max minus min)
//     - Compare the value of (min - average) and (max - average), use abs() method.


const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];

// Sorting
ages.sort((a,b) => (a -b));
console.log(ages);

// Min and max element.

let min = ages[0];
let max = ages[ages.length-1];

console.log(`
The minimum age => ${min} and maximum age => ${max}`);

// Median age

let middlePoint = Math.floor(ages.length/2) ;
let len = ages.length;

if(len%2 == 0) {

    let median = (ages[middlePoint] + ages[middlePoint + 1])/2;
    console.log(`
    The median age of this age array => ${median}`);

} else {

    let median = ages[middlePoint];
    console.log(`
    The median age of this age array => ${median}`);

}

// Average Age.

let sumOfAge = ages.reduce((acc, cur) => acc + cur, 0);
avgAge = sumOfAge/ages.length;

console.log(`
The average age of ages array => ${avgAge}`);

// Range of ages.

let range = max - min;
console.log(`
The range of the array => ${range}`);

// Compare 

let minAvg = Math.abs(min - avgAge);
let maxAvg = Math.abs(max-avgAge);

console.log(`The compare minimum Average => ${minAvg.toFixed(3)} and compare maximum Average => ${maxAvg.toFixed(3)}`);