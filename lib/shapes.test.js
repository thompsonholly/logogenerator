const { Triangle, Circle, Square } = require("./shapes")


describe('Triangle', () => {
  describe('shapeColor', () => {
    it('should make the shape and make it that color', () => {
      const userShape = new Triangle();
      userShape.shapeColor = ('blue');
      expect(userShape.render()).toEqual(`<polygon height="100%" width="100%" points="0, 200, 300, 200, 150, 0" fill="blue" />`)
    })
  })
});
describe('Circle', () => {
  describe('shapeColor', () => {
    it('should make the shape and make it that color', () => {
      const userShape = new Circle();
      userShape.shapeColor = ('red');
      expect(userShape.render()).toEqual(`<circle cx="50%" cy="50%" r="100" height="100%" width="100%" fill="red"/>`)
    })
  })
});
describe('Square', () => {
  describe('shapeColor', () => {
    it('should make the shape and make it that color', () => {
      const userShape = new Square();
      userShape.shapeColor = ('grey');
      expect(userShape.render()).toEqual(`<rect x="50" width="200" height="200" fill="grey"/>`)
    })
  })
});





