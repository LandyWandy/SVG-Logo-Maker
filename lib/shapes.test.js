// shapes.test.js
const { Circle, Triangle, Square, ShapeFactory } = require('./shapes');

describe('ShapeMaker', () => {
  const shapeFactory = new ShapeFactory();

  test('createShape should create a Circle', () => {
    const shape = shapeFactory.createShape('circle', 'red');
    expect(shape).toBeInstanceOf(Circle);
    expect(shape.color).toBe('red');
  });

  test('createShape should create a Triangle', () => {
    const shape = shapeFactory.createShape('triangle', 'blue');
    expect(shape).toBeInstanceOf(Triangle);
    expect(shape.color).toBe('blue');
  });

  test('createShape should create a Square', () => {
    const shape = shapeFactory.createShape('square', 'green');
    expect(shape).toBeInstanceOf(Square);
    expect(shape.color).toBe('green');
  });

  test('createShape should throw an error for an invalid shape type', () => {
    expect(() => {
      shapeFactory.createShape('invalid', 'red');
    }).toThrow('Invalid shape type');
  });
});
