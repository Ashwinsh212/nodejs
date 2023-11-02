// example showing the concept of prototype

function Addition(){
    this.a = 100;
    this.b = 200;
    this.c = 300;

    this.showDetails = ()=>{
        console.log("\nvalue of a : "+this.a);
        console.log("value of b : "+this.b);
        console.log("value of c : "+this.c);
        console.log("Final Sum : "+(this.a+this.b+this.c));    
    }
}
var obj1 = new Addition();
obj1.a+=300;
obj1.showDetails();

var obj2 = new Addition();
obj2.showDetails();