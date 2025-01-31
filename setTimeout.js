console.log("onepiece");

var a = 234;
var b = 32423;

//this callback will only pushed to call stack in v8 once the call stack is empty
setTimeout(() => {
    console.log("call me asap, call me right now")
}, 0); // the execute after sync tasks, only, it will wait for call stack to be empty

setTimeout(() => {
    console.log("call me asap")
}, 2000);

function addFnc(a,b){
    return a + b;
}
var c = addFnc(a, b);

console.log("add res: " , c);
