class Shape {
    constructor(color) {
      this.color = color;
    }
  }
  
  class Circle extends Shape {
    constructor(color) {
      super(color);
    }
  }
  
  class Triangle extends Shape {
    constructor(color) {
      super(color);
    }
  }
  
  class Square extends Shape {
    constructor(color) {
      super(color);
    }
  }
  
  class ShapeFactory {
    createShape(type, color) {
      if (type === 'circle') {
        return new Circle(color);
      } else if (type === 'triangle') {
        return new Triangle(color);
      } else if (type === 'square') {
        return new Square(color);
      } else {
        throw new Error('Invalid shape type');
      }
    }
  }
  
  module.exports = { Shape, Circle, Triangle, Square, ShapeFactory };