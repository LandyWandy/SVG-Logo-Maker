const { ShapeFactory } = require('./shapes');

function generateSVG(text, textColor, shape, shapeColor) {
  const shapeFactory = new ShapeFactory();
  const shapeInstance = shapeFactory.createShape(shape, shapeColor);
  const shapeSVG = shapeInstance.toSVG();

  const svg = `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">${shapeSVG}<text x="150" y="105" font-size="18" text-anchor="middle" fill="${textColor}">${text}</text></svg>`;

  return svg;
}

module.exports = generateSVG;
