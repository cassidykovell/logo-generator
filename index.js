const inquirer = require('inquirer');
const fs = require('fs');
const { Triangle, Circle, Square } = require('./lib/shapes');


async function promptUser() {
    const userInput = await inquirer.prompt([
      {
        type: "input",
        name: "characters",
        message:
          "Enter up to three characters that will be displayed on the logo.",
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

  function generateLogo(userInput) {
    let shape;
    switch (userInput.shape) {
        case 'Triangle':
            shape = new Triangle();
            break;
        case 'Circle':
            shape = new Circle();
            break;
        case 'Square':
            shape = new Square();
            break;
        default:
            console.log('Invalid shape selected.');
            return;
    }

    shape.setShapeColor(userInput.shapeColor);
    shape.setText(userInput.characters);
    shape.setColor(userInput.textColor);
    
    const svgContent = shape.render();

    fs.writeFileSync('logo.svg', svgContent);

    console.log('Generated logo.svg');
}

async function run() {
    const userInput = await promptUser();
    generateLogo(userInput);
}

run();
