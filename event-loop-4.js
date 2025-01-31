const fs = require('fs');

setImmediate(()=>console.log('setImmediate'));

setTimeout(()=>console.log("timer expired"), 0) ;

Promise.resolve('promise').then(console.log);

fs.readFile('./file.txt', 'utf8', ()=>{
    console.log("file reading cb");
})

process.nextTick(()=>{
    process.nextTick(()=>console.log("inner nextTick"));
    console.log("process.nextTick");
});

console.log("onepeice is real");
