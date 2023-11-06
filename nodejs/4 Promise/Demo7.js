// program showing the concept of promise

function checkNum(num){
    return new Promise((resolve,reject)=>{
        (num%2==0) ? resolve("Number is even") : reject("Number is odd");
    });
}

checkNum(101).then((msg)=>{
    console.log(msg);
}).catch((msg)=>{
    console.log(msg);
});