// example showing the concept of timer function

console.log("Before Execution");
    const myFun1 = (msg)=>{
        console.log(msg);
    }
    const myFun2 = (msg)=>{
        console.log(msg);
    }
    const myFun3 = (msg)=>{
        console.log(msg);
    }
    setTimeout(myFun1,0,"myFun1 called");
    setImmediate(myFun2,"myFun2 called");
//    setInterval(myFun3,"myFun3 called");

console.log("After Execution");

