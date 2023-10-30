const { Triangle, Circle, Square } = require("./shapes")


describe('Triangle', () => {
  describe('color', () => {
    it('should make the shape and make it that color', () => {
      const shape = new Triangle();
      const color = ('blue');
      expect(shape.render()).toEqual()`<polygon height="100%" width="100%" points="0, 200, 300, 200, 150, 0" fill="${this.color}"/>`
    })
  })
});
describe('Circle', () => {
  describe('color', () => {
    it('should make the shape and make it that color', () => {
      const shape = new Circle();
      const color = ('red');
      expect(shape.render()).toEqual()`<circle cx = "50%" cy = "50%" r = "100" height = "100%" width = "100%" fill="${this.color}"/>`
    })
  })
});

describe('Square', () => {
  describe('color', () => {
    it('should make the shape and make it that color', () => {
      const shape = new Square();
      const color = ('grey');
      expect(shape.render()).toEqual()`<rect x="50" width="200" height="200" fill="${this.color}" />`
    })
  })
});

describe('Arithmetic', () => {
  // A test is created to check that sum does in fact return the two numbers added together.
  describe('sum', () => {
    it('should take two numbers and add them together', () => {
      const total = 4;
      const arithmetic = new Calculator(2, 2, "sum");
      expect(arithmetic.sum()).toEqual(total);
    });
  });
});



const shape = new Triangle();
shape.setColor("blue");
expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');


const shape = new Circle();
shape.setColor("red");
expect(shape.render()).toEqual('<circle cx="250" cy="250" r="125" />');

const shape = new Square();
shape.setColor("green");
expect(shape.render()).toEqual('<rect x="250" y="250" width="250" height="250" style="fill:grey;" />')
