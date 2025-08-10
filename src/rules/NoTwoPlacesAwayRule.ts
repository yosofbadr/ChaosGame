import { FractalRule } from "./FractalRule";
import Point from "../Point";

export class NoTwoPlacesAwayRule implements FractalRule {
  public play(
    vertices: Point[],
    currentPoint: Point,
    iterations: number,
  ): Point[] {
    const points: Point[] = [];
    let prevIndex = Math.floor(Math.random() * vertices.length);

    for (let i = 0; i < iterations; i++) {
      let indexInc = Math.floor(Math.random() * 3) - 1;
      let currentIndex =
        (prevIndex + indexInc + vertices.length) % vertices.length;
      prevIndex = currentIndex;
      const randomVertex = vertices[currentIndex];

      currentPoint = new Point(
        (currentPoint.x + randomVertex.x) / 2,
        (currentPoint.y + randomVertex.y) / 2,
        randomVertex.colour,
      );
      points.push(currentPoint);
    }
    return points;
  }
}
