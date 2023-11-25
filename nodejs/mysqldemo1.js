var mysql = require("mysql2");
var con = mysql.createConnection({
    host : 'localhost',
    user:'root',
    password : 'root'
});

con.connect((err)=>{
    if(err)
        console.log("Error : "+err);
    else{
        console.log("Connection established successfully");
    }
});
