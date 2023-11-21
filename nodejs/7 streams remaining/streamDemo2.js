// program showing the concept of streams | transform stream

var fs = require("fs");
var zlib = require("zlib");
var gunzip = zlib.createGunzip();

var readStream = fs.createReadStream("myfolder/myfile.zip");
var writeStream = fs.createWriteStream("myfolder/myfile1.txt");

readStream.pipe(gunzip).pipe(writeStream);
console.log("UnZip file created");


