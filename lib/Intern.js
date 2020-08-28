// TODO: Write code to define and export the Employee class
const Employee = require("./Employee.js");

//all Employees are Engineers and  I can us everything from the
//Employee Class Now
class Intern extends Employee{
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
    }
    

    getSchool() {
        return this.school;
    }

    getRole() {
        return "Intern" 
    }
}

module.exports = Intern;