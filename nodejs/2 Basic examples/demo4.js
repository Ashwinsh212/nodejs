// example showing the concept of callback

function myFun(callback){
    console.log("Inside myFun");
    callback();
}

myFun(function(){
    console.log("Passing function as an argument");
});

/*
callback = function(){
    console.log("Passing function as an argument");
}

callback();
*/