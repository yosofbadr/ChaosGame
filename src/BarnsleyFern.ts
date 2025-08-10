import { ChaosGame } from "./ChaosGame";
import Point from "./Point";

export class BarnsleyFern extends ChaosGame {
  protected defineVertices(): void {}

  public override play(iterations: number): number {
    this.shouldAnimate = true;
    let x = 0;
    let y = 0;
    let i = 0;
    const pointsPerFrame = 500;

    const animate = () => {
      if (i < iterations && this.shouldAnimate) {
        for (let k = 0; k < pointsPerFrame; k++) {
          if (i < iterations) {
            let nextX, nextY;
            const r = Math.random();

            if (r < 0.01) {
              nextX = 0;
              nextY = 0.16 * y;
            } else if (r < 0.86) {
              nextX = 0.85 * x + 0.04 * y;
              nextY = -0.04 * x + 0.85 * y + 1.6;
            } else if (r < 0.93) {
              nextX = 0.2 * x - 0.26 * y;
              nextY = 0.23 * x + 0.22 * y + 1.6;
            } else {
              nextX = -0.15 * x + 0.28 * y;
              nextY = 0.26 * x + 0.24 * y + 0.44;
            }

            x = nextX;
            y = nextY;

            const point = new Point(
              400 + x * 50,
              600 - y * 50,
              this.palette.getRandomColor(),
            );
            point.draw(this.ctx, this.palette.getRandomColor());

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
