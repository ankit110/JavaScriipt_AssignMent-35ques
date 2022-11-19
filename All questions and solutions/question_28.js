// 28. Use for loop to iterate from 0 to 100 and print only prime numbers

const prime = (number) => {
    if(number <= 0 || number == 1) {
        return false;
    }

    else if(number == 2 || number == 3) {
        return true;
    }

    else if(number%2 == 0 || number%3 == 0) {
        return false;
    }

    for(let i = 5; i*i <= number; i = i+6) {
        if(number % i == 0 || number % (i+2) == 0) {
            return false;
        }
    }

    return true;
}

const primeArray = [];

for(let i = 0; i <= 100; i++) {
    if(prime(i)) {
        primeArray.push(i);
    }
}

console.log(`The prime number array is
[ ${primeArray} ]`);