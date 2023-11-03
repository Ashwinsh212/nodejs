// program showing the concept of callback

var a=5,b=6;

function addition(a,b,callback){
    var c = a+b;
    console.log("Addition : "+c);
    callback(false);
}
function subtraction(a,b,callback){
    var c = a-b;
    console.log("Subtraction : "+c);
    callback(false);
}
function multiplication(a,b,callback){
    var c = a*b;
    console.log("Multiplication : "+c);
    callback(false);
}

addition(a,b,(value)=>{
    if(!value){
        subtraction(a,b,(value)=>{
            if(!value){
                multiplication(a,b,(value)=>{
                    if(!value)
                        console.log("The End");
                })
            }
        })
    }
})