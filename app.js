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

function newManager() {
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

        init();
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
    //answers container name, id, and email
    //ask for github and if they are done
    // var newGuy = new Engineer(answer.name,ans,id, ans.email, response.github)
   
    // employeeArray.push(newGuy);
    //100% of the time you need to create the current engineer obj
    //push that into your employeearray (array of objects)

        //if you are done, you call a fx to generate the cards passing in your array of obj
        //if not done go back and ask the questions again





function generateHTML(fileName, data) {
    fs.writeFile(fileName, data, "utf8", function(err) {
        if (err) {
            throw err;
        };
        console.log("HTML page has successfully rendered!");
    });
};

init();//init function calls the first questions to determine which employee to add




// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```

//MY PSEUDO CODE - TO DO:
//I want to ask the user a question for who they want to make an employee card for
//Based on the selection I want to fire the right function which then asks the user questions about that employee(name, id, email, office/github/school)
//at the end of the questions the user will be asked to add more employees or be finished
//if finished, the answers will be saved in an array? and then pushed into the htmlrenderer?