// example showing the concept of callback

/*
function myFun(x){
    console.log(`typeof ${x} is `+typeof x);
}
var a = 100;
myFun(a);
*/

/*
function myFun(x){
    console.log(x);
    console.log(`typeof ${x} is `+typeof x);
}
var a1 = { a : 100};
myFun(a1);
*/

function myFun(x){
    console.log(`typeof ${x} is `+typeof x);
}
var a = function(){};
myFun(a);