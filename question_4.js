// 4. Create a function called likeProduct. This function will helps to like to the product if it is not liked and remove like if it was liked.


// Product array.

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

// initailalizing prompt to take user input in vscode.
const prompt = require('prompt-sync')({sigint:true});


const likeProduct = (products) => {
  let usrid = (Math.random().toString(36).slice(2, 8));  // generating random userId.

  for(const element of products) {

    let like = prompt("Do u want to like this product:- ");  // Taking user input if he/she wants to like the product or not.

    if(like == 'yes') {
      if(element.likes.includes(usrid)) {
        let index = element.likes.indexOf(usrid);  // if user likes is present then removes the likes from array.
        element.likes.splice(index, 1);
      } else {
        element.likes.push(usrid);  // if user like is not present it will add like to the array.
      }
    }
  }
}

likeProduct(products);  // calling a function.

console.log(products[0]);
console.log(products[1]);
console.log(products[2]);