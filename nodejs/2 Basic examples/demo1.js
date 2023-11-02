// example showing the concept of prototype

function Bank(){
    this.setData = function(actno,name,balance){
        this.actno = actno;
        this.name = name;
        this.balance = balance;
    }
    this.showDetails = function(){
        console.log("Account Number : "+this.actno);
        console.log("Name : "+this.name);
        console.log("Balance : "+this.balance);
    }
    this.withdrawal = function(wamt){
        if(wamt>this.balance){
            console.log(`Hello ${this.name}, Please Wait for Deposit..!!`);
        }else{
            console.log(`Hello ${this.name}, Your account is debited with : $${wamt}`);     
            this.balance-=wamt;
            console.log(`Remaining Balance : $${this.balance}`);     
        }
    }
    this.deposit = function(damt){
        console.log(`Hello ${this.name}, Your account is credited with $${damt}`);     
        this.balance+=damt;
        console.log(`Available Balance : $${this.balance}`);     
    }
}

const bank = new Bank();
bank.setData("SBI00123","Andrew Anderson",10000);
bank.showDetails();
bank.withdrawal(12500);
bank.deposit(10000);
bank.withdrawal(500);