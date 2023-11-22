var fs = require("fs");
var filePath = "demoFile.txt";
var path = require("path");

fs.stat(filePath,(err,info)=>{
    console.log("isFile : "+info.isFile());
    console.log("isDirectory : "+info.isDirectory());
})

console.log("dirname : "+__dirname);
console.log("filename : "+__filename);

var data = __filename;
console.log(""+path.basename(data));
console.log(""+path.extname(data));
console.log(""+path.normalize(data));
console.log(""+path.dirname(data));
