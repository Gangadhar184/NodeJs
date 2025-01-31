const fs = require('fs');

const https = require('https');

console.log("anime");

var a = 1234;
var b = 134;

https.get("https://dummyjson.com/products/1", (res)=>{
    console.log("fetching done successfully");
})

setTimeout(()=>{
    console.log("setTimeout called after 5 seconds")
},5*1000);

fs.readFile("./file.txt","utf8", (err, data)=>{
    console.log("file data: ", data)    
})

function addFnc(x, y){
    return x + y;
}
var ans = addFnc(a,b);
console.log("add of 2 numbers: ",ans);

