class Shape {
    constructor(color) {
      this.color = color;
    }
    toSVG() {}
  }
  
  class Circle extends Shape {
    constructor(color) {
      super(color);
    }
    toSVG() {
        return `<circle cx="150" cy="100" r="50" fill="${this.color}"/>`;
      }
  }
  
  class Triangle extends Shape {
    constructor(color) {
      super(color);
    }
    toSVG() {
        return `<polygon points="150,50 100,150 200,150" fill="${this.color}"/>`;
      }
  }
  
  class Square extends Shape {
    constructor(color) {
      super(color);
    }
    toSVG() {
        return `<rect x="100" y="50" width="100" height="100" fill="${this.color}"/>`;
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