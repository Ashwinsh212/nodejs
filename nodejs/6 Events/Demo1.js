var events = require("events").EventEmitter;
var eventEmitter = new events();

var eventListenerFunction = function(){
    console.log("Here we are listening custom events");
}

eventEmitter.on("customEvent",eventListenerFunction);

// here we are going to emits custom events
eventEmitter.emit("customEvent");
