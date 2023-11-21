// program showing the concept of streams | transform stream

var fs = require("fs");
var zlib = require("zlib");
var gzip = zlib.createGzip();

var readStream = fs.createReadStream("myfolder/myfile.txt");
var writeStream = fs.createWriteStream("myfolder/myfile.zip");

readStream.pipe(gzip).pipe(writeStream);
console.log("Zip file created");


