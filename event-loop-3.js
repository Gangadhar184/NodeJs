const fs = require('fs');

setImmediate(() => console.log("setImmediate"));

setTimeout(() => console.log("Timer expired"),0);

Promise.resolve("promise").then(console.log);

fs.readFile('./file.txt', 'utf8', () => {
    setTimeout(() => console.log('2nd timer'), 0);
    process.nextTick(() => console.log("2nd tick"));
    setImmediate(()=>console.log("2nd SetImmediate"));
    console.log("file reading cb");
});

process.nextTick(()=>console.log("Process.nextTick"));

console.log("onepiece is real") ;
