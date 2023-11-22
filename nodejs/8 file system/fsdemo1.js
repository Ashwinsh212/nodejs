var fs = require("fs");
fs.open("data.txt",'wx',(err)=>{
    if(err){
        if(err.code=='EEXIST')
            console.log("File already exist");
    }
    else{
        console.log("File created successfully");
    }
});