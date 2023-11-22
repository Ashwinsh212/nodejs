var fs = require("fs");
var filePath = "demoFile.txt";
var data = "Hello User, this is an example of file system in node";

fs.writeFile(filePath,data,(err)=>{
    if(err)
        console.log("Error : "+err);
    else{
        console.log("Data inserted successfully");
    }
})