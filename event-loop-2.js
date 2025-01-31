const fs = require('fs');

const a = 100;

setImmediate(() => console.log("setImmediate"));

Promise.resolve(() => console.log("promise"));

fs.readFile('./file.txt', 'utf8', () => {
    console.log("file reading CB");
})

setTimeout(() => console.log("timer expired"), 0);

process.nextTick(() => console.log("Process.nextTick"));

function printA(){
    console.log("a = ", a);
}
printA();

console.log("onepiece is real");
