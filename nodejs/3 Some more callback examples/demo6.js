// program showing the concept of callback

function myFun(callback){
    setTimeout(()=>{
        var obj = {
            name:"Andrew Anderson",
            age:45,
            address : "Indore,Madhya Pradesh"
        }
        callback(obj);
    },2000);
}
var printData = (data)=>{
    console.log(data);
} 
myFun(printData);