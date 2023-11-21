// program showing the concept of streams

var fs = require("fs");
var obj = {
    name:"Andrew Anderson",
    age : 17,
    salary : 56000,
    address : {
        city : "Indore",
        state : "Madhya Pradesh"
    }
}

var writeStream = fs.createWriteStream("myfolder/myfile.txt");
// writeStream.write(obj.toString()); // [object Object]
writeStream.write(JSON.stringify(obj));

console.log("Data inserted successfully");




