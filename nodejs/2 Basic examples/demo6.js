// example showing the concept of callback

function addition(a,b,callback){
    var c = a+b;
    callback(c);
}
var a = 100;
var b = 200;
var result = (res)=>{
    console.log("Result : "+res);
}
addition(a,b,result);

/*
Behind the scene : 

callback = (res)=>{
    console.log("Result : "+res);
}

callback(c);
*/