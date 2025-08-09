import { ChaosGame } from "./ChaosGame";
import Point from "./Point";
import Palette from "./Palette";

export class FourCornerFractal extends ChaosGame {
  protected defineVertices(): void {
    const palette = new Palette();
    this.vertices = [
      new Point(0, 0, palette.getRandomColor()), // Bottom left vertex
      new Point(0, 600, palette.getRandomColor()), // Top left vertex
      new Point(800, 600, palette.getRandomColor()), // Top right vertex
      new Point(800, 0, palette.getRandomColor()), // Bottom right vertex
    ];
  }

  public override play(iterations: number): Point[] {
    const points: Point[] = [];
    let prevIndex = Math.floor(Math.random() * this.vertices.length);

    for (let i = 0; i < iterations; i++) {
      let indexInc = Math.floor(Math.random() * 3) - 1;

      let currentIndex =
        (prevIndex + indexInc + this.vertices.length) % this.vertices.length;
      prevIndex = currentIndex;
      const randomVertex = this.vertices[currentIndex];

      this.currentPoint = new Point(
        (this.currentPoint.x + randomVertex.x) / 2,
        (this.currentPoint.y + randomVertex.y) / 2,
        randomVertex.colour,
      );
      points.push(this.currentPoint);
    }
    return points;
  }
}
