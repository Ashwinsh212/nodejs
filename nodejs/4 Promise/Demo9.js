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
    });
}
function wonprize(){
    return new Promise((resolve,reject)=>{
//        resolve("wonprize");
        reject("wonprize reject");
    });
}

Promise.all([gotoroom(),removegarbage(),wonprize()]).then((msg)=>{
    console.log(msg);
}).catch((msg)=>{
    console.log(msg);
});