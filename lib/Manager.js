var Employee = require("./Employee.js");

class Manager extends Employee{//this is the code that will define the manager class
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