// 12. Use the Date object to do the following activities
// - What is the year today?
// - What is the month today as a number?
// - What is the date today?
// - What is the day today as a number?
// - What is the hours now?
// - What is the minutes now?
// - Find out the numbers of seconds elapsed from January 1, 1970 to now.

console.log(`1) get Year`);
const year = new Date();
console.log(year.getFullYear());

console.log(`
2) get Month`);

const month = new Date();
console.log(month.getMonth()+1);

console.log(`
3) get Date`);

const date = new Date();
console.log(date.getDate());

console.log(`
4) get Day`)

const day = new Date();
console.log(day.getDay());

console.log(`
5) get Hours`)

const hours = new Date();
console.log(hours.getHours());

console.log(`
6) get minutes`)

const minutes = new Date();
console.log(minutes.getMinutes());

console.log(`
7  ) get second elapsed`)


let start = new Date("1970-01-01");

let end = Date.now();
  
// elapsed time in milliseconds
let elapsed = end - start;   
  
// converting milliseconds to seconds 
// by dividing 1000
console.log(elapsed/1000);