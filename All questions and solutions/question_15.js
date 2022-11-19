// 15. Calculate the slope, x-intercept and y-intercept of y = 2x -2

function x_intercept(y_intercept, m, c) {
    let x = (y_intercept - c) / m;
    
    return x;
}

function y_intercept(x_intercept, m, c) {
    let y = m*x_intercept + c;
    
    return y;
}

function slope(x_intercept, y_intercept, c) {
    let m = (y_intercept - c) / x_intercept;
    return m;
}

let x = x_intercept(0, 2, -2);
let y = y_intercept(0, 2, -2);
let m = slope(x, y, -2);

console.log(`The slope, x-intercept and y-intercept of y = 2x -2 is ${m}, ${x} and ${y} respectively.`)