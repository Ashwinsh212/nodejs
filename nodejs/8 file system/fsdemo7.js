var fs = require("fs");
var filePath = "demoFile.txt";
/*
var data = "Hello User, this is an example of file system in node";

fs.writeFileSync(filePath,data);
console.log("Data inserted successfully");
*/

var data = fs.readFileSync(filePath);
console.log("Data : "+data);
