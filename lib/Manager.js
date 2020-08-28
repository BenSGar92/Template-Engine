// TODO: Write code to define and export the Employee class
var Employee = require("./Employee.js");

//all Employees are Engineers and  I can us everything from the
//Employee Class Now
class Manager extends Employee{
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
    }
    

    getOfficeNumber() {
        return this.officeNumber;
    }

    getRole() {
        return "Manager" 
    }
}

module.exports = Manager;