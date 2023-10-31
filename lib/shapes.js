class Shape {
  constructor(shape, textColor, text, shapeColor) {
    this.shape = shape;
    this.textColor = textColor;
    this.text = text;
    this.shapeColor = shapeColor;
  }

  renderSvg() {
    return `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
    ${this.render()}
    <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
  </svg>`
  }
}

//creating triangle class to render triangle shape
class Triangle extends Shape {
  constructor(text, textColor, shapeColor) {
    super("Triangle", textColor, text, shapeColor)
  }
  render() {
    return `<polygon height="100%" width="100%" points="0, 200, 300, 200, 150, 0" fill="${this.shapeColor}" />`
  }
}
//creating circle class to render circle shape
class Circle extends Shape {
  constructor(text, textColor, shapeColor) {
    super("Circle", text, textColor, shapeColor)
  }
  render() {
    return `<circle cx="50%" cy="50%" r="100" height="100%" width="100%" fill="${this.shapeColor}"/>`
  }
}
//creating square class to render triangle shape
class Square extends Shape {
  constructor(text, textColor, shapeColor) {
    super("Square", text, textColor, shapeColor)
  }
  render() {
    return `<rect x="50" width="200" height="200" fill="${this.shapeColor}"/>`
  }
}



module.exports = { Triangle, Circle, Square }