// example showing the concept of callback

function myFun(callback){
    console.log("Inside myFun");
    callback();
}
const arg = function(){
    console.log("Passing function as an argument");
};
myFun(arg);

/*
callback = function(){
    console.log("Passing function as an argument");
}

callback();
*/