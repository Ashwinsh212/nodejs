// program showing the concept of promise

function gotoroom(){
    return new Promise((resolve,reject)=>{
        resolve("gotoroom");
    });
}
function removegarbage(){
    return new Promise((resolve,reject)=>{
        resolve("removegarbage");
    });
}
function wonprize(){
    return new Promise((resolve,reject)=>{
        resolve("wonprize");
    });
}

gotoroom().then((msg)=>{
    console.log(msg);

    removegarbage().then((msg)=>{
        console.log(msg);
    
        wonprize().then((msg)=>{
            console.log(msg);
        
        }).catch((msg)=>{
            console.log(msg);
        });

    }).catch((msg)=>{
        console.log(msg);
    });

}).catch((msg)=>{
    console.log(msg);
});