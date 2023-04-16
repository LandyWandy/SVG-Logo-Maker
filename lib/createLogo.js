// createLogo.js
const inquirer = require('inquirer');
const fs = require('fs');
const generateSVG = require('./generateSVG');

const questions = [
  {
    type: 'input',
    name: 'text',
    message: 'Enter up to ten characters:',
    validate: (input) => input.length <= 10 || 'Text must be no more than ten characters.',
  },
  {
    type: 'input',
    name: 'textColor',
    message: 'Enter text color (keyword or hexadecimal):',
  },
  {
    type: 'list',
    name: 'shape',
    message: 'Choose a shape:',
    choices: ['circle', 'triangle', 'square'],
  },
  {
    type: 'input',
    name: 'shapeColor',
    message: 'Enter shape color (keyword or hexadecimal):',
  },
];

async function createLogo() {
  const answers = await inquirer.prompt(questions);
  const { text, textColor, shape, shapeColor } = answers;

  const svg = generateSVG(text, textColor, shape, shapeColor);
  fs.writeFileSync('logo.svg', svg);

  console.log('Generated logo.svg');
}

createLogo();
