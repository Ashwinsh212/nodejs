/*
var fs = require("fs");
fs.rename("data.txt","myfile.txt",(err)=>{
    if(err)
        console.log("Error : "+err);
    else
        console.log("File renamed successfully");
})
*/

var fs = require("fs");
var oldPath = "myfile.txt";
var newPath = "demoFile.txt";

fs.rename(oldPath,newPath,(err)=>{
    if(err)
        console.log("Error : "+err);
    else
        console.log(`File ${oldPath} renamed to ${newPath} successfully`);
})
