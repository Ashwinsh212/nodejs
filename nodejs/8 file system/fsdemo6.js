var fs = require("fs");
var filePath = "demoFile.txt";
    fs.readFile(filePath,'utf-8',(err,data)=>{
        if(err)
            console.log("Error : "+err);
        else{
            console.log(data);
//              console.log(""+data);
//                console.log(data.toString());
        }
    })

