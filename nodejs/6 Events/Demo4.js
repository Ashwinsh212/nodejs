var events = require("events").EventEmitter;
var eventEmitter = new events();

var eventListenerFunction1 = function(){
    console.log("Here we are listening custom events");
}
var eventListenerFunction2 = function(){
    console.log("Here we are listening custom events");
}

eventEmitter.on("customEvent",eventListenerFunction1);
eventEmitter.on("customEvent",eventListenerFunction2);
eventEmitter.on("customEvent",eventListenerFunction1);

// here we are going to emits custom events
eventEmitter.emit("customEvent");

var arr_listeners = eventEmitter.listeners("customEvent");
console.log(arr_listeners);
console.log("Number of listeners : "+arr_listeners.length);
arr_listeners[0]();
arr_listeners[1]();
arr_listeners[2]();
