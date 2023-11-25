var con = require("./mysqlmodule");
con.connect((err)=>{
    if(err)
        console.log("Error : "+err);
    else{
        console.log("Connection established successfully");
        var my_query = "create database nodedb";
        con.query(my_query,(err)=>{
            if(err)
                console.log("Error : "+err);
            else{
                console.log("Database created successfully");
                con.close();
            }
        });
    }
});
