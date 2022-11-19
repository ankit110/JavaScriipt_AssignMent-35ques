// 32. Array Questions
//     - Extract all the countries contain the word 'land' from the countries array and print it as array
//     - Find the country containing the hightest number of characters in the countries array
//     - Extract all the countries contain the word 'land' from the countries array and print it as array
//     - Extract all the countries containing only four characters from the countries array and print it as array
//     - Extract all the countries containing two or more words from the countries array and print it as array
//     - Reverse the countries array and capitalize each country and stored it as an array


// Functions of Countries having "land" in their name.

const extractCountry = (str) => {
    if(str.includes('land')) {
        return true;
    } else {
        return false;
    }
}

// Function of highest number of character in country name.

const maxChar = (str) => {
    let count = 0;

    for(let i = 0; i < str.length; i++) {
        count++;
    }
    
    if(count > max_) {
        longChar = str;
        max_ = count;
    }
}

// Function of four leter country name.

const fourLetterCountries = (str) => {
    if(str.length == 4) {
        return true;
    } else {
        return false;
    }
}

// Function of two or more letter country name.

const twoOrMoreLetter = (str) => {
    if(str.length >= 2) {
        return true;
    } else {
        return false;
    }
}

// Fumction of array reverse and captilise all the countries name

const captalizeCountry = (str) => {
    return str.toUpperCase();
}

const countryList = ['India', 'Japan', 'England', 'USA', 'Australia', 'Chad', 'Cuba', 'Netherland', 'China', 'Iran', 'Scotland', 'Britain', 'Iraq', 'Ireland'];

// Countries having "land" in their name.
let landCountry = [];
countryList.forEach((country) => {
    if(extractCountry(country)) {
        landCountry.push(country);
    }
});

console.log(`
Here is the countries list which contains 'land' in their name => 
[${landCountry}]`);


// Highest Number of Character.

let max_ = countryList[0].length;

let longChar = countryList[0];

countryList.forEach((country) => {
    maxChar(country);
});


console.log(`
The country which has highest number of characters => ${longChar}`);


// Four letter word country name.

let fourLetterCountry = [];

countryList.forEach((country) => {
    if(fourLetterCountries(country)) {
        fourLetterCountry.push(country);
    }
});

console.log(`
Here is the country list of having four letter word =>
[${fourLetterCountry}]`);


// two or more letter word country name.

let twoOrMore = [];

countryList.forEach((country) => {
    if(twoOrMoreLetter(country)) {
        twoOrMore.push(country);
    }
});

console.log(`The countries having two or more characters in their name =>
[${twoOrMore}]`);


// Reverse the array and captalize the all countries name.

let newCountryList = countryList.reverse();

for(let i = 0; i < countryList.length; i++) {
    newCountryList[i] = captalizeCountry(newCountryList[i]);
}

console.log(`
The revese and capatize characters of country => 
[${newCountryList}]`);

