import { ChaosGame } from "./ChaosGame";
import Point from "./Point";

export class SierpinskiTriangle extends ChaosGame {
  protected defineVertices(): void {
    this.vertices = [
      new Point(400, 100, "#FF0000"), // Top vertex
      new Point(100, 500, "#00FF00"), // Bottom left vertex
      new Point(700, 500, "#0000FF"), // Bottom right vertex
    ];
  }
}
