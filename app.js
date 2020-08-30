const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Employee = require("./lib/Employee");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
//path loc
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");
const employeeArray=[];


function init() {
    inquirer.prompt([//initial question to be asked which will run an if function to evaluate the choice and run additional questions
        {
            type: "list",
            message: "What type of employee would you like to input?",
            name: "name",
            choices: ["Manager", "Engineer", "Intern", "No more employees left!"]
        },
    ]).then(choice => {
        if (choice.name === "Manager") {
            newManager();
        } else if (choice.name === "Engineer") {
            newEngineer();
        } else if (choice.name === "Intern") {
            newIntern();
        } else generateHTML(outputPath, render(employeeArray));
    });
};

function newManager() {//these functions will be called using the if statement above
    return inquirer.prompt([
        {
            type: "input",
            message: "What is the manager's name?",
            name: "name"
        },
        {
            type: "input",
            message: "What is the manager's ID?",
            name: "id"
        },
        {
            type: "input",
            message: "What is the manager's email?",
            name: "email"
        },
        {
            type: "input",
            message: "What is the manager's office number?",
            name: "officeNumber"
        }
    ]).then(function(answer) {
        let manager = new Manager(answer.name, answer.id, answer.email, answer.officeNumber)
        employeeArray.push(manager);

        init();//this function to be called again to ask if more employees are to be added
    })
};

function newEngineer(){
    return inquirer.prompt([
        {
            type: "input",
            message: "What is the engineer's name?",
            name: "name"
        },
        {
            type: "input",
            message: "What is the engineers's ID?",
            name: "id"
        },
        {
            type: "input",
            message: "What is the engineer's email?",
            name: "email"
        },
        {
            type: "input",
            message: "What is the engineer's github username?",
            name: "github"
        }
    ]).then(function(answer) {
        let engineer = new Engineer(answer.name, answer.id, answer.email, answer.github)
        employeeArray.push(engineer);

        init();
    })
}

function newIntern() {
    return inquirer.prompt([
        {
            type: "input",
            message: "What is the intern's name?",
            name: "name"
        },
        {
            type: "input",
            message: "What is the intern's ID?",
            name: "id"
        },
        {
            type: "input",
            message: "What is the intern's email?",
            name: "email"
        },
        {
            type: "input",
            message: "What is the intern's school?",
            name: "school"
        }
    ]).then(function(answer) {
        let intern = new Intern(answer.name, answer.id, answer.email, answer.school)
        employeeArray.push(intern);

        init();
    })
}

function generateHTML(fileName, data) {//functions that generates the html if done adding employees
    fs.writeFile(fileName, data, "utf8", function(err) {
        if (err) {
            throw err;
        };
        console.log("HTML page has successfully rendered!");
    });
};

init();//init function calls the first questions to determine which employee to add