var con = require("./mysqlmoduledb");
con.connect((err)=>{
    if(err)
        console.log("Error : "+err);
    else{
        console.log("Connection established successfully");
        var my_query = "create table employer(empid int not null primary key auto_increment,empname varchar(45) not null,empsal double not null,addedat TIMESTAMP DEFAULT CURRENT_TIMESTAMP,empstatus boolean default true)";
        con.query(my_query,(err)=>{
            if(err)
                console.log("Error : "+err);
            else{
                console.log("Table created successfully");
                con.close();
            }
        });
    }
});
