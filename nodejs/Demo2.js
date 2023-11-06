// program showing the concept of callback hell

var num=10;
process.stdout.write(" "+num);
function myFun(num,callback){
    process.stdout.write(" "+num);
    callback(num+2,(num,callback)=>{
        process.stdout.write(" "+num);
        callback();
    });
}
myFun(num+2,(num,callback)=>{
    process.stdout.write(" "+num);
    callback(num+2,()=>{
        process.stdout.write(" The End");
    });
});