const myFun = {
    domain : (name)=>{
        console.log("Hello User Your Domain Is : "+name);
    },
    application : (name)=>{
        console.log("Hello User Your Application Is : "+name);
    }
}
module.exports.myFun = myFun;

console.log(module);
