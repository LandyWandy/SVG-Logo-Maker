# SVG Logo Maker

An easy-to-use command-line application for generating custom SVG logos. Create logos with different shapes and text with adjustable colors.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Testing](#testing)

## Installation

Clone this repository:

- git clone https://github.com/yourusername/svg-logo-maker.git
- cd svg-logo-maker
- npm install


## Usage

To run the SVG Logo Maker application, execute the following command:

node index.js


You will be prompted for the following information:

- Text (up to 10 characters)
- Text color (keyword or hexadecimal)
- Shape (circle, triangle, or square)
- Shape color (keyword or hexadecimal)

Upon entering the required information, the application will generate an `logo.svg` file in the project directory. Open the file in a web browser to view your custom logo.

## Testing

This application uses Jest for testing. To run the tests, execute the following command:

npm test


The tests cover the `generateSVG` function, shape creation, and user input handling in the `createLogo` function.
