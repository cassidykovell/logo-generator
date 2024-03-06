//requiring the necessary elements
const inquirer = require("inquirer");
const fs = require("fs");
const { Triangle, Circle, Square } = require("./lib/shapes");

//function for prompting the user with question where they can enter input about what characters they want to have(only up to three and at least one), what color the text will be, what shape they want, and what color they want the shape to be
async function promptUser() {
  const userInput = await inquirer.prompt([
    {
      type: "input",
      name: "characters",
      message: "Enter up to three characters that will be displayed on the logo.",
      validate: function(characters) {
          if (characters.length > 0 && characters.length <= 3) {
              return true;
          } else if (characters.length === 0) {
              return "Please enter at least one character.";
          } else {
              return "Please enter up to three characters only.";
          }
      }
  },
    {
      type: "input",
      name: "textColor",
      message: "What color would you like the text to be?",
    },
    {
      type: "list",
      name: "shape",
      message: "Select the shape you want:",
      choices: ["Circle", "Triangle", "Square"],
    },
    {
      type: "input",
      name: "shapeColor",
      message: "What color would you like the shape to be?",
    },
  ]);
  return userInput;
}

//function for generating logo based on user input 
function generateLogo(userInput) {
  let shape;
  switch (userInput.shape) {
    case "Triangle":
      shape = new Triangle();
      break;
    case "Circle":
      shape = new Circle();
      break;
    case "Square":
      shape = new Square();
      break;
    default:
      console.log("Invalid shape selected.");
      return;
  }

  shape.setShapeColor(userInput.shapeColor);
  shape.setText(userInput.characters);
  shape.setColor(userInput.textColor);

  const svgContent = shape.render();

  fs.writeFileSync("logo.svg", svgContent);

  console.log("Generated logo.svg");
}

//running the whole thing
async function run() {
  const userInput = await promptUser();
  generateLogo(userInput);
}

run();
