class Shape {
  constructor() {

    this.color = ''
  }
  setColor(color) {
    this.color = (color);
  }
}

class Triangle extends Shape {
  render() {
    return `<polygon height="100%" width="100%" points="0, 200, 300, 200, 150, 0" fill="${this.color}" />`
  }
}

class Circle extends Shape {
  render() {
    return `<circle cx="50%" cy="50%" r="100" height="100%" width="100%" fill="${this.color}"/>`
  }
}
shape.setColor("blue");
expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');

class Square extends Shape {
  render() {
    return ` <rect x="50" width="200" height="200" fill="${this.color}" />`
  }
}



module.exports = { Triangle, Circle, Square }