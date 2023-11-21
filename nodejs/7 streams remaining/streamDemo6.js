// program showing the concept of streams

var fs = require("fs");
var readStream = fs.createReadStream("myfolder/myfile.txt");

readStream.on('data',(chunk)=>{
//    console.log(chunk.toString());
var arr = JSON.parse(chunk);
  for(var key in arr){
    for(var subkey in arr[key]){
        console.log(subkey+"\t"+arr[key][subkey]);
}
    console.log("##############################");
}
//console.table(arr);  
});



