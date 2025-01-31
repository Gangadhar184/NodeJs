
require('./b')

// const {x, squareNum, z} = require('./cal/ex1.js');

// const calMul = require('./cal/mul.js');

const {calMul, x, z, squareNum} = require('./cal'); 

const data = require('./data.json');

console.log(data)

calMul(67,89)

console.log("practicing how modules works");
console.log(z)
console.log(x);
squareNum(5);


