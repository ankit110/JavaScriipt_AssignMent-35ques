// - Explain the difference between forEach, map, filter, and reduce.

/* 
Ans:- forEach 👇

🌟🌟 forEach loop:-

Array.forEach() executes a given function once for each element in the array.

The function which are passed as a argument in forEach method can be written outside the forEach and called it in the forEach().

or it can be written inside the forEach().

Note:- forEach() executions can't be stops in between or we can say we can't use break statement inside forEach loop.

This method accepts five paramenter:-

First two parameter which is described below is mandatory rest all three are optional.

1) callback function:- This function is passed as an argument to execute same function on each element of the array.

2) element:- This is passed as an argument inside callback function to hold the value of the current element of the array.

3) index:- This passed argument is optional and inside callback function, and it holds the current index value of the array.

4) array:- This passed argument is also optional and inside callback function, and it is array on which forEach() was called.

5) thisArg:- A value to use as this when executing callback Function.
*/

/*
Ans:- map() 👇

🌟🌟 map():-

Array.map() executes a given function on each element of the array and returns a new array  from calling a function for every array element.

It does not modify the original array.

it can't execute functions for empty array elements.

First two parameter which is described below is mandatory rest all three are optional.

1) callback function:- This function is passed as an argument to execute same function on each element of the array.

2) element:- This is passed as an argument inside callback function to hold the value of the current element of the array.

3) index:- This passed argument is optional and inside callback function, and it holds the current index value of the array.

4) array:- This passed argument is also optional and  inside callback function, and it is array on which map() was called.

5) thisArg:- A value to use as this when executing callback Function.
*/

/*
Ans:- 👇

🌟🌟 filter():-

Array.filter() executes a given function on the given array and creates a shallow copy of a portion of given array.
The element inside this new array is the filtered one who has passed the test function passed as an argument.

It does not modify the original array.

it can't execute functions for empty array elements.

This method take five parameters.

First two parameter which is described below is mandatory rest all three are optional.

1) callback Function:- A function to execute for each element in the array. It should return a truthy to keep the element in the resulting array,
                       and a falsy value otherwise.

2) element:- This is passed as an argument inside callback function to hold the value of the current element of the array.

3) index:- This passed argument is optional and inside callback function, and it holds the current index value of the array.

4) array:- This passed argument is also optional and  inside callback function, and it is array on which filter() was called.

5) thisArg:- A value to use as this when executing callback Function.
*/


/* 
Ans:- 👇

🌟🌟 reduce():- 

Array.reduce() executes a reducer callback function on a given array and returns a single value from that array.

It does not modify the original array.

it can't execute functions for empty array elements.

It accepts 6 parameters:-

First 3 are mandatory parameters and rest all are optional.

1) Callback function:- A function to execute for each element in the array. Its return value becomes the value of the accumulator parameter 
                       on the next invocation of callbackFn. For the last invocation, the return value becomes the return value of reduce().

2) Accumulator:- The value resulting from the previous call to callbackFn. 
                 On first call, initialValue if specified, otherwise the value of array[0]. This is passed inside the callback function.

3) currentValue:- The value of the current element. This is passed inside the callback function.

4) Index: The index of the current element. This is also passed inside callback function and also optional.

5) Array:- The array the current element belongs to. This is passed inside a callback function and also optional.

6) Initial Value:- A value to be passed to the function as the initial value and it is optional.
*/