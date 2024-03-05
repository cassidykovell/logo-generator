const { Triangle, Circle, Square } = require("./shapes");

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
  test('there is characters and there no more than 3', () => {
    const expectedText = "SVG";
    const shape = new Circle();
    shape.setText("SVG");
    expect(shape.text).toEqual(expectedText);
  })
});
