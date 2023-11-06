// program showing the concept of promise

var num=10;
function getResult(num){
    return new Promise((resolve,reject)=>{
         resolve(num*num);
    });
}
var x = getResult(num).then((n)=>{
    return num*num;
});
var y = x.then((result)=>{
    console.log("Result : "+result);
})
console.log(y);