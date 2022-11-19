// 35. Write a functions which checks if all items are unique in the array.

const checkUniqueArray = (array) => {
    let setArray = new Set(array);

    return setArray.size == array.length;
}

let array = [1, 2, 4, 4, 6, 9, 10, 23, 'Ankit', 'Hitesh Sir'];

if(checkUniqueArray(array)) {
    console.log(`Yes, The array has all unique elements.`);
} 

else {
    console.log(`All items are not unique.`);
}