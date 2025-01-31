

require('./b.js') //one module into another


//const obj = require('./sum.js') //importing function

//we can do object destructuring
const { x, calSum } = require('./sum.js')

// var name = 'luffy';
// var a = 10;
// var b = 20;


//without object destructuring
obj.calSum(10,20); //30
console.log(obj.x); //onepiece

//with object destructuring

calSum(10,20); //30
console.log(x);//onepiece


// console.log(name);
// console.log(a+b);

// console.log(global);
// console.log(this);//empty object

// console.log(globalThis);
console.log(globalThis === global) 
