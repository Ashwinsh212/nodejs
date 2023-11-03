// program showing the concept of callback

console.log("Before execution");
var gotoroom = function(callback){
    console.log("gotoroom");
    /*
    setTimeout(()=>{
        callback(wonprize);
    });
    */
   setTimeout(callback,1000,wonprize);
}
var removegarbage = function(wonprize){
    console.log("removegarbage");
    wonprize();
}
var wonprize = function(){
    console.log("wonprize");
}

gotoroom(removegarbage);

console.log("After execution");
