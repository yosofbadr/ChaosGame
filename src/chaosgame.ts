import Point from "./Point";

export abstract class ChaosGame {
  protected vertices: Point[] = [];
  protected currentPoint: Point;

  constructor(initialPoint: Point) {
    this.currentPoint = initialPoint;
    this.defineVertices();
  }

  protected abstract defineVertices(): void;

  public play(iterations: number): Point[] {
    const points: Point[] = [];

    for (let i = 0; i < iterations; i++) {
      const randomVertex =
        this.vertices[Math.floor(Math.random() * this.vertices.length)];

      this.currentPoint = new Point(
        (this.currentPoint.x + randomVertex.x) / 2,
        (this.currentPoint.y + randomVertex.y) / 2,
        "#000000",
      );

      points.push(this.currentPoint);
    }
    return points;
  }
}
