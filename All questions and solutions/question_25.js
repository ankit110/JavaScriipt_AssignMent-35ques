// 25. In the following shopping cart add, remove, edit items
//     => const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
//     - add 'Meat' in the beginning of your shopping cart if it has not been already added
//     - add Sugar at the end of you shopping cart if it has not been already added
//     - remove 'Honey' if you are allergic to honey
//     - modify Tea to 'Green Tea'


const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];

// Adding 'Meat' at the begining of the array.

if(shoppingCart.includes('Meat') == false) {
    shoppingCart.unshift('Meat');
}

console.log(`${shoppingCart}`);

// Adding 'Meat' at the end of the array.

if(shoppingCart.includes('Sugar') == false) {
    shoppingCart.push('Sugar');
}

console.log(`${shoppingCart}`);

// Removing 'Honey' from the shoppingCart.

let index = shoppingCart.indexOf('Honey');

shoppingCart.splice(index, 1);

console.log(`${shoppingCart}`);

// Modify tea to green tea

let indexOfTea = shoppingCart.indexOf('Tea');

shoppingCart[indexOfTea] = "Green Tea";

console.log(`${shoppingCart}`);