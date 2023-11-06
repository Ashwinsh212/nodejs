// program showing the concept of callback hell

var num=10;
console.log(num);
function myFun(num,callback){
    console.log(num);
    callback(num+2,(num,callback)=>{
        console.log(num);
        callback();
    });
}
myFun(num+2,(num,callback)=>{
    console.log(num);
    callback(num+2,()=>{
        console.log("The End");
    });
});