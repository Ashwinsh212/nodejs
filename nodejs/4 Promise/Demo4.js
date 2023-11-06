// program showing the concept of promise

var executor = (resolve,reject)=>{
//    resolve("Promise is resolved");
      reject("Promise is rejected");
}
var promise = new Promise(executor);
promise.finally(()=>{
    console.log("Example showing the concept of promise");
}).then((msg)=>{
    console.log("resolve : "+msg);
},(msg)=>{
    console.log("reject : "+msg);
});