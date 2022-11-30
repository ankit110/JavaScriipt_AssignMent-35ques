const prods = [
    { product: 'banana', price: 3 },
    { product: 'mango', price: 6 },
    { product: 'potato', price: ' ' },
    { product: 'avocado', price: 8 },
    { product: 'coffee', price: 10 },
    { product: 'tea', price: '' },
];

// Use forEach to console.log each name in the names array.

const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook'];

names.forEach((element) => {
    console.log(element);
});

// Use forEach to console.log each country in the countries array.

const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'Iceland', 'England'];

countries.forEach((country) => {
    console.log(`
    Countries name are: 
    ${country}`);
});


// Use forEach to console.log each number in the numbers array.

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

numbers.forEach((number) => {
    console.log(`
    ${number}`);
});

// Use map to create a new array by changing each country to uppercase in the countries array.
const capatilizedCountry = [];
countries.map((country) => {
    capatilizedCountry.push(country.toUpperCase());
});

console.log(capatilizedCountry);

// Use map to create an array of countries length from countries array. 

const countriesLength = [];

countries.map((country) => {
    countriesLength.push(country.length);
});

console.log(`
The length array of countries array
=> ${countriesLength}`);

// Use map to create a new array by changing each number to square in the numbers array.

const squaredArray = [];

numbers.map((number) => {
    squaredArray.push(number * number);
});

console.log(`
THe square array of number array 
=> ${squaredArray}`);

// Use map to change to each name to uppercase in the names array.

const upperCaseArray = [];

names.map((name) => {
    upperCaseArray.push(name.toUpperCase());
});

console.log(`
The upperCase array of names array
=> ${upperCaseArray}`);

// Use map to map the products array to its corresponding prices.

const products = [
    {
        _id: 'eedfcf',
        name: 'mobile phone',
        description: 'Huawei Honor',
        price: 200,
        ratings: [
        { userId: 'fg12cy', rate: 5 },
        { userId: 'zwf8md', rate: 4.5 }
        ],
        likes: []
    },
    {
        _id: 'aegfal',
        name: 'Laptop',
        description: 'MacPro: System Darwin',
        price: 2500,
        ratings: [],
        likes: ['fg12cy']
    },
    {
        _id: 'hedfcg',
        name: 'TV',
        description: 'Smart TV:Procaster',
        price: 400,
        ratings: [{ userId: 'fg12cy', rate: 5 }],
        likes: ['fg12cy']
    }
];


const productPrice = new Map();

products.forEach((elem) => {
    productPrice.set(elem.description, elem.price);
});

console.log(`
The mapping of product array to its corresponding prices is`);

console.log(productPrice);

// Use filter to filter out countries containing land.

const countryEndLand = countries.filter((country) => (country.includes('land')));

console.log(`
The countries ending with land
=> ${countryEndLand}`);

// Use filter to filter out countries having six character.

const countrySixChar = countries.filter((country) => (country.length == 6));

console.log(`
The countries having six characters
=> ${countrySixChar}`);

// Use filter to filter out countries containing six letters and more in the country array.

const countryMoreSixChar = countries.filter((country) => (country.length >= 6));

console.log(`
The countries having six and more than six characters
=> ${countrySixChar}`);


// Use filter to filter out country start with 'E';

const countryStartsE = countries.filter((country) => (country[0] == 'E'));

console.log(`
The countries starts with E 
=> ${countryStartsE}`);


// Use filter to filter out only prices with values.

const pricesValues = prods.filter((product) => (typeof(product.price) == "number"));

console.log(pricesValues);

// Declare a function called getStringLists which takes an array as a parameter and then returns an array only with string items.

const getStringLists = (array) => {
    const stringArray = array.filter((element) => (typeof(element) == "string"));
    console.log(`
The string array is 
=> ${stringArray}`);
}

const array = [1, 2, "ankit", 4, 3.56, true, "kumar", 6, "Ayush", 7, "Pawar", 10, false, "Hello", "How", 10, 13, "are", "You"];

getStringLists(array);

// Use reduce to sum all the numbers in the numbers array.

const sumArray = numbers.reduce((accumulator, number) => accumulator + number, 0);

console.log(`
The sum of array elements is 
=> ${sumArray}`);


// Use reduce to concatenate all the countries and to produce this sentence: 
// Estonia, Finland, Sweden, Denmark, Norway, and IceLand are north European countries.

const sentence = countries.reduce(function(accumulator, country) {
    if(countries.indexOf(country) == countries.length - 1) {
        return accumulator + " and " + country + " are north European countries.";
    } else {
        return accumulator + ", " + country;
    }
});

console.log(sentence);

//------------------------------------------------------------------------------------------------------------------------------------------------
// Explain the difference between some and every.

/*
Ans:- 👇👇

some():- 

Array.some() executes a given function on each element of the array and returns truthy or falsy value.

If any of the element passes the test function it will return true and if elements will not pass the function then it will return false.

This method take five parameters.

First two parameter which is described below is mandatory rest all three are optional.

1) callback Function:- A function to execute for each element in the array. 
                       It should return a truthy to indicate the element passes the test, and a falsy value otherwise.

2) element:- This is passed as an argument inside callback function to hold the value of the current element of the array.

3) index:- This passed argument is optional and inside callback function, and it holds the current index value of the array.

4) array:- This passed argument is also optional and  inside callback function, and it is array on which some() was called.

5) thisArg:- A value to use as this when executing callback Function.
*/

/*
Ans:-👇👇

Array.every() executes a given function on each element of the array and returns truthy or falsy value.

If any of the element does not pass the test function then It will return false.

First two parameter which is described below is mandatory rest all three are optional.

1) callback Function:- A function to execute for each element in the array. 
                       It should return a truthy to indicate the element passes the test, and a falsy value otherwise.

2) element:- This is passed as an argument inside callback function to hold the value of the current element of the array.

3) index:- This passed argument is optional and inside callback function, and it holds the current index value of the array.

4) array:- This passed argument is also optional and  inside callback function, and it is array on which every() was called.

5) thisArg:- A value to use as this when executing callback Function.
*/
//-------------------------------------------------------------------------------------------------------------------------------------------------

// Use some to check if some names' length greater than seven in names array.

const someReturn = names.some((name) => (name.length > 7));

console.log(`
Is names contained any name having length greater than 7
=> ${someReturn}`);

// Use every to check if all the countries contain the word land.

const everyReturn = countries.every((country) => (country.includes('a')));

console.log(`
Are all country name contains land
=> ${everyReturn}`);

//-----------------------------------------------------------------------------------------------------------------------------------------------------------
// Explain the difference between find and findIndex.

/*
Ans:- 👇👇

find():-

The Array.find() method returns the first element in the provided array that satisfies the provided testing function.
If no values satisfy the testing function, undefined is returned.

First two parameter which is described below is mandatory rest all three are optional.

1) callback Function:- A function to execute for each element in the array.
                       It should return a truthy value to indicate a matching element has been found.

2) element:- This is passed as an argument inside callback function to hold the value of the current element of the array.

3) index:- This passed argument is optional and inside callback function, and it holds the current index value of the array.

4) array:- This passed argument is also optional and  inside callback function, and it is array on which every() was called.

5) thisArg:- A value to use as this when executing callback Function.
*/


/*
Ans:- 👇👇

findIndex():-

The Array.findIndex() method returns the index of the first element in an array that satisfies the provided testing function. 
If no elements satisfy the testing function, -1 is returned.

First two parameter which is described below is mandatory rest all three are optional.

1) callback Function:- A function to execute for each element in the array.
                       It should return a truthy value to indicate a matching element has been found.

2) element:- This is passed as an argument inside callback function to hold the value of the current element of the array.

3) index:- This passed argument is optional and inside callback function, and it holds the current index value of the array.

4) array:- This passed argument is also optional and  inside callback function, and it is array on which every() was called.

5) thisArg:- A value to use as this when executing callback Function.
*/
//-------------------------------------------------------------------------------------------------------------------------------------------------------


// Use find to find the first country containing only six letters in the countries array

const countrySixLetter = countries.find((country) => (country.length == 6));

console.log(`
The first country having six letter in countries array is
=> ${countrySixLetter}`);

// Use findIndex to find the position of the first country containing only six letters in the countries array.

const countrySixLetterIndex = countries.findIndex((country) => (country.length == 6));

console.log(`
The first country index having six letter in countries array is
=> ${countrySixLetterIndex}`);

// Use findIndex to find the position of Norway if it doesn't exist in the array you will get -1.

const norwayIndex = countries.findIndex((country) => (country == "Norway"));

console.log(`
The index of Norway in countries array is
=> ${norwayIndex}`);

// Use findIndex to find the position of Russia if it doesn't exist in the array you will get -1.

const russiaIndex = countries.findIndex((country) => (country == "Russia"));

console.log(`
The index of Norway in countries array is
=> ${russiaIndex}`);

// 