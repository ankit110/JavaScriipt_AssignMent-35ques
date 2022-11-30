const a = [4, 5, 8, 9]
const b = [3, 4, 5, 7]
const countries = ['Finland', 'Sweden', 'Norway']

// create an empty set

const emptySet = new Set();

console.log(`This is empty Set:- `);
console.log(emptySet);

// Create a set containing 0 to 10 using loop.

const numberSet = new Set();

for(let i = 0; i <= 10; i++) {
    numberSet.add(i);
}

console.log(`
The set using loop:- `)
console.log(numberSet);

// Remove an element from a set.

numberSet.delete(7);

console.log(`
The set after deleting 7 :- `)
console.log(numberSet);

// Clear a set.

numberSet.clear();

console.log(`
The set after using clear() method:- `)
console.log(numberSet);

// Create a set of 5 string elements from array.

const array = [1, 2, "ankit", 4, 3.56, true, "kumar", 6, "Ayush", 7, "Pawar", 10, false, "Hello"];

const stringSet = new Set();

array.forEach((element) => {
    if(typeof element == "string") {
        stringSet.add(element);
    }
});

console.log(stringSet);

// Create a map of countries and number of characters of a country.

const countryMap = new Map();

countries.forEach((element) => {
    countryMap.set(element,element.length);
});

console.log(`
The map of countries and number of characters of a country:- `)
console.log(countryMap);
