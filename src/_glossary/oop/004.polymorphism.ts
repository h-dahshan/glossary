/**
 * - object are originally the same thing but behave differently
 */

abstract class Shape {
  abstract area(): number;
}

class Circle extends Shape {
  constructor(private radius: number) {
    super();
  }

  // circle are, behavior 1
  area(): number {
    return Math.PI * this.radius * this.radius;
  }
}

class Square extends Shape {
  constructor(private side: number) {
    super();
  }

  // square are, behavior 2
  area(): number {
    return this.side * this.side;
  }
}

const shapes: Shape[] = [new Circle(2), new Square(3)];

shapes.forEach((shape) => {
  console.log(shape.area()); // 12.56..., 9
});
