import { ChaosGame } from "./ChaosGame";
import Point from "./Point";

export class SierpinskiCarpet extends ChaosGame {
  protected defineVertices(): void {
    this.vertices = [
      new Point(0, 0, "#FF0000"), // Bottom left vertex
      new Point(0, 600, "#00FF00"), // Top left vertex
      new Point(800, 0, "#0000FF"), // Bottom right vertex
      new Point(800, 600, "#FFFF00"), // Top right vertex
      new Point(400, 300, "#FF00FF"), // Center vertex
      new Point(200, 300, "#00FFFF"), // Left center vertex
      new Point(600, 300, "#FFA500"), // Right center vertex
      new Point(400, 150, "#800080"), // Top center vertex
      new Point(400, 450, "#008000"), // Bottom center vertex
      new Point(200, 150, "#FFC0CB"), // Top left center vertex
      new Point(600, 150, "#FFFFE0"), // Top right center vertex
      new Point(200, 450, "#ADD8E6"), // Bottom left center vertex
      new Point(600, 450, "#D3D3D3"), // Bottom right center vertex
    ];
  }

  public override play(iterations: number): number {
    this.shouldAnimate = true;
    let i = 0;
    const pointsPerFrame = 500;

    const animate = () => {
      if (i < iterations && this.shouldAnimate) {
        for (let j = 0; j < pointsPerFrame; j++) {
          if (i < iterations) {
            const randomVertex =
              this.vertices[Math.floor(Math.random() * this.vertices.length)];

            this.currentPoint = new Point(
              (this.currentPoint.x + 2 * randomVertex.x) / 3,
              (this.currentPoint.y + 2 * randomVertex.y) / 3,
              "#000000",
            );
            this.currentPoint.draw(this.ctx, this.palette.getRandomColor());
            i++;
          }
        }
        animationFrameId = requestAnimationFrame(animate);
      }
    };
    let animationFrameId = requestAnimationFrame(animate);
    return animationFrameId;
  }
}
