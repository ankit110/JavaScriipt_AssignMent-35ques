// 3. The products array has three elements and each of them has six properties. 
// a. Create a function called rateProduct which rates the product 
// b. Create a function called averageRating which calculate the average rating of a product

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

// This initialization for taking userInput in vs code👇.

const prompt = require('prompt-sync')({sigint:true});

// Function rateProduct👇

const rateProduct = (productArray) => {
    usrId = (Math.random().toString(36).slice(2, 8)); // This is for generating random userId for users.
    
    let iterator = 0; // simply for tracking the number of time the loop run.
    for(const element of productArray) {
      const rates = prompt('Do you want to give rating to our product, type yes or no:- '); // taking input if user want to give rating or not.
      if(rates == 'yes') {                                    // if yes then this block is for storing the rating they gave.
        let rating = prompt('Give the product rating:- ');    // taking user input for giving product rating.
        let userRating = {userId: usrId, rate: Number(rating)};  // storing both userId and rating given by him/her in one variable.

        products[iterator].ratings.push(userRating);             // storing in products array.
      }
      iterator += 1;
    }
}

// declaring array to get all the products name in one place.

let productArray = [];

for (const product of products) {
  productArray.push(product.description);
}



rateProduct(productArray);
console.log(products[0]);
console.log(products[1]);
console.log(products[2]);


// function for calculating products average rating.

const averageRateArray = [];

const averageRating = (products) => {
  for(const element of products) {

    // below line from 83 to 99 are for calculation of average rating.
    let sum = 0;
    let count = 0;
    for(const rate of element.ratings) {
      sum += rate.rate;
      count++;
    }

    let avg;

    if(sum > 0 && count > 0)
      avg = sum/count;
    else 
      avg = 0;

    let des = element.description;

    if(avg == NaN) {
      avg = 0;
    }

    averageRateArray.push({des: avg}); // pushing it in the form of object.
  }
}


averageRating(products); // calling the function averageRating.
console.log(averageRateArray);  // printing the array.