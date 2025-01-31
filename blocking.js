const crypto = require("crypto");

console.log("crypto");

var a = 123;
var b = 23423;

//this will block the main thread - sync funcitons will block the main thread
crypto.pbkdf2Sync("password", "salt", 5000000, 50, "sha512");
console.log("first key is generated")

//this is an async task
crypto.pbkdf2("password", "salt", 500000, 50, "sha512", (err,key)=>{
    console.log("second key is generated");
});



function addFn(x,y){
    return a+b;
}
var c = addFn(a,b);
console.log("add: ", c);
