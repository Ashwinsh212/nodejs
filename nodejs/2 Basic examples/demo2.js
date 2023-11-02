// example showing the concept of prototype

function YearOld(birthYear){
    this.calculateYear = function(){
        return `Hello User, You are ${new Date().getFullYear()-birthYear} years old`;
    }
    this.calculateMonths = function(){
        return `Hello User, You are ${(new Date().getFullYear()-birthYear)*12} months old`;
    }
}

const obj = new YearOld(2001);
console.log(obj.calculateYear());
console.log(obj.calculateMonths());