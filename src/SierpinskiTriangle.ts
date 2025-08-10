import { ChaosGame } from "./ChaosGame";
import Point from "./Point";
import Palette from "./Palette";

export class SierpinskiTriangle extends ChaosGame {
  constructor(
    initialPoint: Point,
    ctx: CanvasRenderingContext2D,
    palette: Palette,
  ) {
    super(initialPoint, ctx, palette);
  }

  protected defineVertices(): void {
    this.vertices = [
      new Point(400, 100, "#FF0000"), // Top vertex
      new Point(100, 500, "#00FF00"), // Bottom left vertex
      new Point(700, 500, "#0000FF"), // Bottom right vertex
    ];
  }
}
