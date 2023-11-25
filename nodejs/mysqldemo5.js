var con = require("./mysqlmoduledb");
var readline = require("readline");
var instance = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

con.connect((err)=>{
    if(err)
        console.log("Error : "+err);
    else{
        console.log("Connection established successfully");
        instance.question("Enter name : ",(name)=>{
            instance.question("Enter salary : ",(salary)=>{
                var my_query = `insert into employer(empname,empsal) values("${name}",${salary})`;
                con.query(my_query,(err)=>{
                    if(err)
                        console.log("Error : "+err);
                    else{
                        console.log("Data inserted successfully");
                        instance.close();
                        con.close();
                    }
                });
            });
        });        
    }
});
