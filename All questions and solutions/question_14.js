// 14) Slope is m = (y2-y1)/(x2-x1). Find the slope between point (2, 2) and point(6,10)

// 1st method
const point1 = [2, 2];
const point2 = [6, 10];

let slope = (point2[1] - point1[1]) / (point2[0] - point1[0]);

console.log(`The solpe of point (${point1}) and point (${point2}) is ${slope}.`);


// 2nd method using arrow function

let slope1 = (point1, point2) => {
    let m = (point2[1] - point1[1]) / (point2[0] - point1[0]);
    return m;
}

console.log(`The slope of point (2, 2) and point (6, 10) is ${slope1([2, 2], [6, 10])}`);


// 3rd method using normal function

function slope2(point1, point2) {
    let m1 = (point2[1] - point1[1]) / (point2[0] - point1[0]);
    return m1;
}

console.log(`The slope of point (2, 2) and point( 6, 10) is ${slope2([2, 2], [6, 10])}`);