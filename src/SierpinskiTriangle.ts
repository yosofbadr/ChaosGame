import { ChaosGame } from "./ChaosGame";
import Point from "./Point";

export class SierpinskiTriangle extends ChaosGame {
  protected defineVertices(): void {
    this.vertices = [
      new Point(400, 50, "#FF0000"), // Top vertex
      new Point(50, 550, "#00FF00"), // Bottom left vertex
      new Point(750, 550, "#0000FF"), // Bottom right vertex
    ];
  }
}
