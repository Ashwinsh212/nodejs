var fs = require("fs");
var readline = require("readline");

var filePath = "demoFile.txt";

var instance = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
instance.question("Enter content, which you want to write in a file : ",(content)=>{
//    fs.writeFile(filePath,content,(err)=>{
      fs.appendFile(filePath,content,(err)=>{
        if(err)
            console.log("Error : "+err);
        else{
            console.log("Data inserted successfully");
        }
    })
});

