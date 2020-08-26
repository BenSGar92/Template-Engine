// TODO: Write code to define and export the Employee class
const inquirer = require ('inquirer');
const fs = require ('fs');
const util = require ('util');

class Employee {
    constructor(name, job, id, email) {
        this.name = name;
        this.jab = job;
        this.id = id;
        this.email = email;
    }
}

const promptUser = () => {
    return inquirer.prompt([
        {
            type: "input",
            name: "title",
            message: "What is your project title?"
        },
        {
            type: "input",
            name: "title",
            message: "What is your project title?"
        },
        {
            type: "input",
            name: "title",
            message: "What is your project title?"
        },
        {
            type: "input",
            name: "title",
            message: "What is your project title?"
        }
    ])
}

module.exports = Employee;