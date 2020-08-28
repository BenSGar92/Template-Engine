// TODO: Write code to define and export the Employee class
var Employee = require("./Employee.js");

//all Employees are Engineers and  I can us everything from the
//Employee Class Now
class Engineer extends Employee{
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
    }
    

    getGithub() {
        return this.github;
    }

    getRole() {
        return "Engineer" 
    }
}

module.exports = Engineer;