// program showing the concept of streams

var fs = require("fs");
var readStream = fs.createReadStream("myfolder/myfile.txt");

readStream.on('data',(chunk)=>{
    //console.log(chunk);
    //console.log(chunk.toString());
    var obj = JSON.parse(chunk.toString());
    console.log("Name : "+obj.name);
    console.log("Age : "+obj.age);
    console.log("Salary : "+obj.salary);
    console.log("Address\n\tcity :  "+obj.address.city+"\n\tstate : "+obj.address.state);
});



