const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");


// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)
function init() {
    var count = 0
    const team = []
    inquirer
        .prompt([
            {
                type: "list",
                message: "What would you like to do next?",
                choices: ["New Employee", "Render", "Quit"],
                name: "choice"
            }
        ]).then(function (response) {
            if (response.choice === "Quit") {
                console.log("Goodbye")
            }
            if (response.choice === "New Employee") {
                count ++
                employeeChoice()
            }
        })
}


function employeeChoice() {
    inquirer
        .prompt([
            {
                type: "list",
                message: "What type of Employee?",
                choices: ["Engineer", "Manager", "Intern"],
                name: "choice"
            }
        ]).then(function (response) {
            if (response.choice === "Engineer") {
                engineerPrompt()
            }
            if (response.choice === "Manager") {
                managerPrompt()
            }
            if (response.choice === "Intern") {
                internPrompt()
            }
        })
}

function internPrompt() {
    inquirer
        .prompt([
            {
                type: "input",
                message: "What is their name?",
                name: "name"
            },
            {
                type: "input",
                message: "What is their email?",
                name: "email"
            },
            {
                type: "input",
                message: "What is their school?",
                name: "school"
            }
        ]).then(function (response) {
            //Create new intern based off of parameters
            //Store it in an array
            console.log(response.name)
        })
}

function engineerPrompt() {
    inquirer
        .prompt([
            {
                type: "input",
                message: "What is their name?",
                name: "name"
            },
            {
                type: "input",
                message: "What is their email?",
                name: "email"
            },
            {
                type: "input",
                message: "What is their github username?",
                name: "github"
            }
        ]).then(function (response) {
            //Create new engineer based off of parameters
            //Store it in an array
            console.log(response.name)
        })
}

function managerPrompt() {
    inquirer
        .prompt([
            {
                type: "input",
                message: "What is their name?",
                name: "name"
            },
            {
                type: "input",
                message: "What is their email?",
                name: "email"
            },
            {
                type: "input",
                message: "What is their Office Number?",
                name: "officeNumber"
            }
        ]).then(function (response) {
            //Create new egineer based off of parameters
            //Store it in an array
            console.log(response.name)
        })
}

init();




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
