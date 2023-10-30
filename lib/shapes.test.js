constructor shape =


const shape = new Triangle();
shape.setColor("blue");
expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');


const shape = new Circle();
shape.setColor("red");
expect(shape.render()).toEqual('<circle cx="250" cy="250" r="125" />');

const shape = new Square();
shape.setColor("green");
expect(shape.render()).toEqual('<rect x="250" y="250" width="250" height="250" style="fill:grey;" />')
