// example showing the concept of prototype

function Employer(empId,designation,name){

        this.empId = empId;
        this.designation = designation;
        this.name = name;

        this.getData = function(){
            console.log("Employer Id : "+this.empId);
            console.log("Employer Designation : "+this.designation);
            console.log("Employer Name : "+this.name);
            console.log("Employer Address : "+this.address.city+" , "+this.address.state);
        }
}
Employer.prototype.address = {
    city : "Indore",
    state : "Madhya Pradesh"
}

var obj = new Employer("EMP011123","SEMHG","Andrew Anderson");
obj.getData();