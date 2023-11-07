// program showing the concept of promise

function checkNum(num){
    return new Promise((resolve,reject)=>{
        (num%2==0) ? resolve("Number is even") : reject("Number is odd");
    });
}

async function myFun(){
   try{
    var result = await checkNum(101);
    console.log("Result : "+result);
   }catch(err){
    console.log(err);
   } 
}
myFun();

