var http = require("http");
var serverInstance = http.createServer((request,response)=>{
    response.writeHead(200,{'content-type':'text/html'});
    response.write("This is an example of http module on browser");
    response.write("<h1>This is an example of http module on browser</h1>");
    response.end();
});

serverInstance.listen(3000,()=>{
    console.log("server connection successfull");    
});