// 11. Figure out the result of the following comparison expression first without using console.log(). After you decide the result confirm it using console.log()
// - 4 > 3
// - 4 >= 3
// - 4 < 3
// - 4 <= 3
// - 4 == 4
// - 4 === 4
// - 4 != 4
// - 4 !== 4
// - 4 != '4'
// - 4 == '4'
// - 4 === '4'
// - Find the length of python and jargon and make a falsy comparison statement.

console.log(`1)`);
if(4 > 3) {
    console.log("Four is greater than three");
}

else {
    console.log("Three Is Greater than Four.");
}
//---------------------------------------------------------------------------

console.log(`
2)`);
if(4 >= 3) {
    console.log("Four is greater than equal to three");
}

else {
    console.log("Three Is Greater than Four.");
}
//-----------------------------------------------------------------------------
console.log(`
3)`);
if(4 < 3) {
    console.log("Three is greater than Four");
}

else {
    console.log("Four Is Greater than Three.");
}
//-----------------------------------------------------------------------------
console.log(`
4)`);
if(4 <= 3) {
    console.log("Three is greater than equal to Four");
}

else {
    console.log("Four Is Greater than Three.");
}
//------------------------------------------------------------------------------
console.log(`
5)`);
if(4 == 4) {
    console.log("Four is equal to Four");
}

else {
    console.log("Four is not equal to four.");
}
//--------------------------------------------------------------------------------
console.log(`
6)`);
if(4 === 4) {
    console.log("Four is strictly equal to Four and both have same data type.");
}

else {
    console.log("Four is not strictly equal to four both have not same data type.");
}
//-----------------------------------------------------------------------------------
console.log(`
7)`);
if(4 != 4) {
    console.log("Four is not equal to Four");
}

else {
    console.log("Four is equal to Four");
}
//-------------------------------------------------------------------------------------
console.log(`
8)`);
if(4 !== 4) {
    console.log("Four is not strictly equal to four both have not same data type.");
}

else {
    console.log("Four is strictly equal to four both have same data type.");
}
//---------------------------------------------------------------------------------------
console.log(`
9)`);
if(4 != '4') {
    console.log("Four is equal to four.");
}

else {
    console.log("Four is not equal to four.");
}
//-----------------------------------------------------------------------------------------
console.log(`
10)`);
if(4 == '4') {
    console.log("4 is equal to '4'. Datatype does not matter here. ")
} else {
    console.log("4 is not equal to '4'.");
}
//-----------------------------------------------------------------------------------------
console.log(`
11)`);
if(4 === '4') {
    console.log("4 is strictly equal to '4'. Datatype must be same.");
} else {
    console.log("4 is not strictly equal to '4'");
}
//------------------------------------------------------------------------------------------
console.log(`
12)`);
if(4 === 4) {
    console.log("4 is strictly equal to 4 and Datatype is also same.");
}

else {
    console.log("4 is not strictly equal to 4");
}