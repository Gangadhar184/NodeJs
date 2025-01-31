//modules protects there variables and functions from leaking

console.log("sum module is exectued");


var x = 'onepiece'


function calSum(a, b){
    const sum = a + b;
    console.log(sum);
}

console.log(module.exports) //empty object

//exporting module
module.exports = {
    x ,
    calSum 
} 

//to export multiple things we need to create an object

