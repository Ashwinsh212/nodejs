// example showing the concept of prototype

function Addition(){
    this.a = 100;
    this.b = 200;
    this.c = 300;

    console.log("value of a : "+this.a);
    console.log("value of b : "+this.b);
    console.log("value of c : "+this.c);
    console.log("Final Sum : "+(this.a+this.b+this.c));

}
new Addition();