function Employer(){
    this.name = "Andrew Anderson",
    this.salary = 12345,
    this.address = {
        city : "Indore",
        state : "Madhya Pradesh"
    }
    this.showDetails = function(){
        console.log("Name : "+this.name);
        console.log("Salary : "+this.salary);
        console.log("City : "+this.address.city);
        console.log("State : "+this.address.state);
    }
}
// module.exports = new Employer();
module.exports = Employer;

//console.log(module);
