let baseSalary = 30000;
let overtime = 10;
let rate = 20;

console.log(baseSalary)
function getWage(baseSalary, overtime, rate){
    return baseSalary+ (overtime * rate);
}

// OOPs version

let employee = {
    baseSalary : 30000,
    overtime : 10,
    rate : 20,
    getWage: function(){
        return this.baseSalary + (this.overtime * this.rate)
    }
};
let wage = employee.getWage();
console.log(wage)