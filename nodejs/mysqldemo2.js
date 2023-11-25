var con = require("./mysqlmodule");
con.connect((err)=>{
    if(err)
        console.log("Error : "+err);
    else{
        console.log("Connection established successfully");
    }
});
