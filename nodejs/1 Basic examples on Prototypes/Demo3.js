// example showing the concept of prototype

function Addition(){
    this.a = 100;
    this.b = 200;
    this.c = 300;
}

Addition.prototype.d = 400;

Addition.prototype.showDetails = function(){
    console.log("\nvalue of a : "+this.a);
    console.log("value of b : "+this.b);
    console.log("value of c : "+this.c);
    console.log("value of d : "+this.d);
    console.log("Final Sum : "+(this.a+this.b+this.c+this.d));    
}

var obj = new Addition();
obj.showDetails();
console.log("value of a with respect to object : "+obj.a);
