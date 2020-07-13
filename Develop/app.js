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
var count = 0
const teamArr = []
function init() {
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
            if (response.choice === "Render") {
                fs.writeFile(outputPath, render(teamArr), function(err) {

                    if (err) {
                      return console.log(err);
                    }
                  
                    console.log("Success!");
                  
                  });
                
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
            teamArr.push(new Intern(response.name, count, response.email,response.school))
            init();
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
            teamArr.push(new Engineer(response.name, count, response.email,response.github))
            init();
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
            teamArr.push(new Manager(response.name, count, response.email,response.officeNumber))
            init();
        })
}

init();


