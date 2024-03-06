const { Triangle, Circle, Square } = require("./shapes");

describe("Triangle", () => {
  test("color for triangle", () => {
    const expectedColor = "Green";
    const shape = new Triangle();
    shape.setShapeColor("Green");
    expect(shape.shapeColor).toEqual(expectedColor);
  });
  test("render(triangle)", () => {
    const expectedRender = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    <polygon points="150,20 70,180 230,180" fill="green" />
    <text x="150" y="170" font-size="60" text-anchor="middle" fill="white">SVG</text>
  </svg>`;
    const shape = new Triangle();
    shape.setColor("white");
    shape.setShapeColor("green");
    shape.setText("SVG");
    expect(shape.render()).toEqual(expectedRender);
  });
  test("color for text", () => {
    const expectedTextColor = "White";
    const shape = new Triangle();
    shape.setColor("White");
    expect(shape.color).toEqual(expectedTextColor);
  });
  test("there is characters and there no more than 3", () => {
    const expectedText = "SVG";
    const shape = new Triangle();
    shape.setText("SVG");
    expect(shape.text).toEqual(expectedText);
  });
});

describe("Circle", () => {
  test("color for circle", () => {
    const expectedColor = "Green";
    const shape = new Circle();
    shape.setShapeColor("Green");
    expect(shape.shapeColor).toEqual(expectedColor);
  });
  test("render(circle)", () => {
    const expectedRender = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
<circle cx="150" cy="100" r="80" fill="green" />
<text x="150" y="125" font-size="60" text-anchor="middle" fill="white">SVG</text>
</svg>`;
    const shape = new Circle();
    shape.setColor("white");
    shape.setShapeColor("green");
    shape.setText("SVG");
    expect(shape.render()).toEqual(expectedRender);
  });
  test("color for text", () => {
    const expectedTextColor = "White";
    const shape = new Circle();
    shape.setColor("White");
    expect(shape.color).toEqual(expectedTextColor);
  });
  test("there is characters and there no more than 3", () => {
    const expectedText = "SVG";
    const shape = new Circle();
    shape.setText("SVG");
    expect(shape.text).toEqual(expectedText);
  });
});

describe("Square", () => {
  test("color for square", () => {
    const expectedColor = "Green";
    const shape = new Square();
    shape.setShapeColor("Green");
    expect(shape.shapeColor).toEqual(expectedColor);
  });
  test("render(square)", () => {
    const expectedRender = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
<rect x="70" y="20" width="160" height="160" fill="green"/>
<text x="150" y="125" font-size="60" text-anchor="middle" fill="white">SVG</text>
</svg>`;
    const shape = new Square();
    shape.setColor("white");
    shape.setShapeColor("green");
    shape.setText("SVG");
    expect(shape.render()).toEqual(expectedRender);
  });
  test("color for text", () => {
    const expectedTextColor = "White";
    const shape = new Square();
    shape.setColor("White");
    expect(shape.color).toEqual(expectedTextColor);
  });
  test("there is characters and there no more than 3", () => {
    const expectedText = "SVG";
    const shape = new Square();
    shape.setText("SVG");
    expect(shape.text).toEqual(expectedText);
  });
});
