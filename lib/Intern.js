const Employee = require("./Employee.js");

class Intern extends Employee{//this is the code that will define the intern class
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