// example showing the concept of prototype

function Employer(empId,designation,name){

        this.empId = empId;
        this.designation = designation;
        this.name = name;

        this.getData = function(){
        console.log("Employer Id : "+this.empId);
        console.log("Employer Designation : "+this.designation);
        console.log("Employer Name : "+this.name);
    }
}

var obj = new Employer("EMP011123","SEMHG","Andrew Anderson");
obj.getData();