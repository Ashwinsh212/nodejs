// example showing the concept of prototype

/*
var obj = {
    age : 123,
    "full name" : "Andrew Anderson"
}
console.log("object : "+obj);
console.log("object : ",obj);
console.log(obj);
console.log("age : "+obj.age);
console.log("full name : "+obj["full name"]);
*/

var obj = new Object();
obj.age = 123;
obj["full name"] = "Andrew Anderson";
console.log("age : "+obj.age);
console.log("full name : "+obj["full name"]);

