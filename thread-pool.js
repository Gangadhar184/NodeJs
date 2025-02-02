const fs = require('fs');
const crypto = require('crypto');

//changing size of threadpool
// process.env.UV_THREADPOOL_SIZE = 5;


crypto.pbkdf2("password","salt",500000,50,'sha512',(err,key)=>{
    console.log("1-cryptoPBKDF2 done");
})
crypto.pbkdf2("password","salt",500000,50,'sha512',(err,key)=>{
    console.log("2-cryptoPBKDF2 done");
})
crypto.pbkdf2("password","salt",500000,50,'sha512',(err,key)=>{
    console.log("3-cryptoPBKDF2 done");
})
crypto.pbkdf2("password","salt",500000,50,'sha512',(err,key)=>{
    console.log("4-cryptoPBKDF2 done");
})
crypto.pbkdf2("password","salt",500000,50,'sha512',(err,key)=>{
    console.log("5-cryptoPBKDF2 done");
})
//the above 4 prints at the same time - these above 2calls happens in threadpool-order of execution is not gurarentte
//if i have more than 4, then it waits for one to get empty
// fs.readFile('./file.txt','utf8',()=>{
//     console.log('filereading cb');
// })
