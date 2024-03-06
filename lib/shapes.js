//creating the class for shape and setting it up to be extended based on what shape it is
class Shape {
  constructor(color) {
    this.color = "";
    this.text = "";
    this.shapeColor = "";
  }
  setColor(color) {
    this.color = color;
  }
  setText(text) {
    this.text = text;
  }
  setShapeColor(shapeColor) {
    this.shapeColor = shapeColor;
  }
}

//extending shape and rendering a triangle 
class Triangle extends Shape {
  render() {
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    <polygon points="150,20 70,180 230,180" fill="${this.shapeColor}" />
    <text x="150" y="170" font-size="60" text-anchor="middle" fill="${this.color}">${this.text}</text>
  </svg>`;
  }
}

//extending shape and rendering a circle
class Circle extends Shape {
  render() {
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
<circle cx="150" cy="100" r="80" fill="${this.shapeColor}" />
<text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.color}">${this.text}</text>
</svg>`;
  }
}

//extending shape and rendering a square
class Square extends Shape {
  render() {
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
<rect x="70" y="20" width="160" height="160" fill="${this.shapeColor}"/>
<text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.color}">${this.text}</text>
</svg>`;
  }
}

//exporting them 
module.exports = { Circle, Square, Triangle };
