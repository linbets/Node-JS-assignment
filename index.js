const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const generateMarkDown = require("./generateMarkdown");

inquirer.prompt([
  {
    type: "input",
    name:  "title",
    message: "What is the project title?"
  },
  {
    type: "input",
    name:  "description",
    message: "What is the project description?"
  },
  {
    type: "input",
    name: "installation",
    message: "What are the project installation instructions?"
  },
  {
    type: "input",
    name:  "usage",
    message: "What is the project usage information?"
  },
  {
    type: "input",
    name: "contributing",
    message: "What are the project contribution guidelines?"
  },
  {
    type: "input",
    name:  "test",
    message: "What are the test instructions?"
  },
  {
    type: "list",
    name:  "license",
    message: "What is the project license?",
    choices: ["MIT", "APACHE 2.0", "BSD 3"]
  }
]).then(answers => {
  console.log(answers);
  fs.writeFile(path.join(__dirname, "/output/ReadMe.md"), generateMarkDown(answers), "utf8", () => {
    console.log("All went well, check out the read me.");
  });
});

