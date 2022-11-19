// 30. Write a script which generates a random hexadecimal number.

const randomHexDec = (len) => {
    hexNumberArray = [];
    hexArray = ['a', 'b', 'c', 'd', 'e', 'f', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

    for(let i = 0; i < len; i++) {
        hexNumberArray.push(hexArray[Math.floor(Math.random() * 16)]);
    }

    return hexNumberArray.join('');
}

console.log(`${randomHexDec(10)}`);