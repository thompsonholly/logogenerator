const { Triangle, Circle, Square } = require("./shapes")


describe('Triangle', () => {
  describe('shapeColor', () => {
    it('should make the shape and make it that color', () => {
      const userShape = new Triangle();
      const shapeColor = ('blue');
      expect(userShape.render()).toEqual()`<polygon height="100%" width="100%" points="0, 200, 300, 200, 150, 0" fill="${this.shapeColor}"/>`
    })
  })
});
describe('Circle', () => {
  describe('shapeColor', () => {
    it('should make the shape and make it that color', () => {
      const userShape = new Circle();
      const shapeColor = ('red');
      expect(userShape.render()).toEqual()`<circle cx = "50%" cy = "50%" r = "100" height = "100%" width = "100%" fill="${this.shapeColor}"/>`
    })
  })
});
describe('Square', () => {
  describe('shapeColor', () => {
    it('should make the shape and make it that color', () => {
      const userShape = new Square();
      const shapeColor = ('grey');
      expect(userShape.render()).toEqual()`<rect x="50" width="200" height="200" fill="${this.shapeColor}" />`
    })
  })
});





