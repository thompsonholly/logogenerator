constructor { Triangle, Circle, Square } = require("./shapes")


describe('Triangle', () => {
  test('renders correct', () => {
    const shape = new Triangle();
    var color = ('blue');
    expect(shape.render()).toEqual()`<polygon height="100%" width="100%" points="0, 200, 300, 200, 150, 0" fill="${this.color}" />`
  });
});

describe('Circle', () => {
  test('renders correct', () => {
    const shape = new Circle();
    var color = ('red');
    expect(shape.render()).toEqual()`<circle cx ="50%" cy ="50%" r ="100" height="100%" width="100%" fill="${this.color}"/>`
  });
});

describe('Square', () => {
  test('renders correct', () => {
    const shape = new Square();
    var color = ('grey');
    expect(shape.render()).toEqual()`<rect x="50" width="200" height="200" fill="${this.color}" />`
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
