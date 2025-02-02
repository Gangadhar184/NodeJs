//creating a http server

const http = require('http');

//http.createServer(); //this gives instance of the server

const server = http.createServer((req,res)=>{

    if(req.url === "/getAnimeDetails"){ //example like api call
        res.end("japan is the hub for anime");
        return;
    }
    res.end("Onepiece is greatest of all time");//i am sending the data back, basically replies to request
});

server.listen(7777); //now server is ready to listen

//the above as lot of issue, when we create http

//we we use Express js which is nodejs framework
