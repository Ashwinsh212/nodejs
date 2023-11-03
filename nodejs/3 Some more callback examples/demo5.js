// program showing the concept of callback

var limit = 10;
function myTimerFunction(limit){
    let x = setInterval(()=>{
        if(limit==0){
            console.log("Time's Up");
            clearInterval(x);
        }else
            console.log(limit--);
    },1000);
}
myTimerFunction(limit);
