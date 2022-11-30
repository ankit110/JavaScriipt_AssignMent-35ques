// - Define a callback function before you use it in forEach, map, filter or reduce.

const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'Iceland']
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const products = [
  { product: 'banana', price: 3 },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: 8 },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
]


// callback function for forEach.
const capatilizedCountry = [];
const capatilize = (country) => {
    capatilizedCountry.push(country.toUpperCase());
};

countries.forEach(capatilize);

console.log(capatilizedCountry);


// callback function for map():-

const squaredArray = [];

const squareFunction = (number) => {
    squaredArray.push(number * number);
};   

numbers.map(squareFunction);

console.log(squaredArray);


// callback function for filter.

const countryEndWithLand = [];

const countryEndLand = (country) => {
    if(country.includes('land'))
        countryEndWithLand.push(country);
};

countries.filter(countryEndLand);

console.log(countryEndWithLand);


// callback function for reduce.

let sum = 0;

const sumTotal = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

console.log(sumTotal);