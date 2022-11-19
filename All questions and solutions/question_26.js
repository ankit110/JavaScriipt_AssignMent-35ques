// 26. In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'. If it does not exist add to the countries list.

let countryList = ['India', 'Japan', 'China', 'Korea', 'Australia', 'USA', 'Ethiopia', 'Srilanka', 'Bhutan'];

if(countryList.includes('Ethiopia')) {
    console.log(`ETHIOPIA`);
} else {
    countryList.push('Ethiopia');
}