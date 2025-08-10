import Palette from "./Palette";
import Point from "./Point";

export abstract class ChaosGame {
  protected vertices: Point[] = [];
  protected currentPoint: Point;
  protected ctx: CanvasRenderingContext2D;
  protected palette: Palette;
  protected shouldAnimate: boolean = true;

  constructor(
    initialPoint: Point,
    ctx: CanvasRenderingContext2D,
    palette: Palette,
  ) {
    this.currentPoint = initialPoint;
    this.ctx = ctx;
    this.palette = palette;
    this.defineVertices();
  }

  protected abstract defineVertices(): void;

  public stopAnimation() {
    this.shouldAnimate = false;
  }

  public play(iterations: number): number {
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
              (this.currentPoint.x + randomVertex.x) / 2,
              (this.currentPoint.y + randomVertex.y) / 2,
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
