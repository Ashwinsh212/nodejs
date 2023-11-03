// program showing the concept of callback

var sender = "andrew@gmail.com";
var recepient = "mathew@gmail.com";
var message = `Hello ${sender}, Your message is going to be send to ${recepient}`;

function sendingEmail(sender,recepient,message,callback){
    console.log("Sender Email : "+sender);
    console.log("Recepient Email : "+recepient);
    console.log("Message : "+message);
    setTimeout(callback,4000);
}
var successMessage = ()=>{
    console.log("Email sent Successfully");
}

sendingEmail(sender,recepient,message,successMessage);