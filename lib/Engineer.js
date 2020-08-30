var Employee = require("./Employee.js");

class Engineer extends Employee{//this is the code that will define the engineer class
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