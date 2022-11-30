/*


*/


// - Create a closure which has one inner function

function outer(nam) {
    let name = nam;

    function inner() {
        console.log(name);
        var names = "Kumar";
    }


    inner();
}

outer("Ankit");

function main(x) {
    return function(y) {
        return x + y;
    }
}

let add1 = main(10);
let add2 = main(20);

console.log(add1(13)); // output: 23
console.log(add2(24)); // output: 44


// - Create a closure which has three inner functions

function addition(x) {
    function firstInner(y) {
        function secondInner(z) {
            function thirdInner() {
                console.log(`
The addition of three nested inner function are
${x+y+z}`);
            }

            thirdInner();
        }

        secondInner(30);
    }

    firstInner(20);
}

addition(10);