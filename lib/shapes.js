class Triangle {
  constructor(name, color, text) {
    this.name = [];
    this.color = [];
    this.text = [];
  }
}
shape.setColor("blue");
expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');

class Circle {
  constructor(name, color, text) {
    this.name = [];
    this.color = [];
    this.text = [];
  }
}
const shape = new Circle();
shape.setColor("red");
expect(shape.render()).toEqual('<circle cx="250" cy="250" r="125" />');


class Triangle {
  constructor(name, color, text) {
    this.name = [];
    this.color = [];
    this.text = [];
  }
}
const shape = new Square();
shape.setColor("green");
expect(shape.render()).toEqual('<rect x="250" y="250" width="250" height="250" style="fill:grey;" />');

renderLogo(){
  console.log(`Name of the shape is ${this.name}`)
}

module.exports = Shape;