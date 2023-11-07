// program showing the concept of promise

function gotoroom(){
    return new Promise((resolve,reject)=>{
        //resolve("gotoroom");
        reject("gotoroom reject");
    });
}
function removegarbage(){
    return new Promise((resolve,reject)=>{
        resolve("removegarbage");
       // reject("removegarbage reject");
    });
}
function wonprize(){
    return new Promise((resolve,reject)=>{
            resolve("wonprize");
    //    reject("wonprize reject");
    });
}

Promise.allSettled([gotoroom(),removegarbage(),wonprize()]).then((msg)=>{
   console.log(msg);
    msg.forEach((promise_status)=>{
    console.log(typeof promise_status);
    console.log(promise_status.status);
   });
}).catch((msg)=>{
    console.log(msg);
});