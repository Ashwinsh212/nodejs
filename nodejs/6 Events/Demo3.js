var events = require("events").EventEmitter;
var eventEmitter = new events();

var eventListenerFunction = function(){
    console.log("Here we are listening custom events");
}

eventEmitter.once("customEvent",eventListenerFunction);

// here we are going to emits custom events
eventEmitter.emit("customEvent");
eventEmitter.emit("customEvent");
eventEmitter.emit("customEvent");

