var http = require("http");
var serverInstance = http.createServer((request,response)=>{
    console.log("This is an example of http module");
    response.end();
});

serverInstance.listen(3000,()=>{
    console.log("server connection successfull");    
});