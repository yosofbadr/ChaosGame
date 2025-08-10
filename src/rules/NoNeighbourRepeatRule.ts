import { FractalRule } from "./FractalRule";
import Point from "../Point";

export class NoNeighbourRepeatRule implements FractalRule {
  public play(
    vertices: Point[],
    currentPoint: Point,
    iterations: number,
  ): Point[] {
    const points: Point[] = [];
    let prevIndex1 = -1;
    let prevIndex2 = -1;

    for (let i = 0; i < iterations; i++) {
      let currentIndex = Math.floor(Math.random() * vertices.length);

      if (prevIndex1 != -1 && prevIndex1 == prevIndex2) {
        currentIndex =
          Math.random() < 0.5 ? prevIndex1 : (prevIndex2 + 2) % vertices.length;
      }

      prevIndex2 = prevIndex1;
      prevIndex1 = currentIndex;

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
