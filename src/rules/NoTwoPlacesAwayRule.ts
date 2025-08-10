import { FractalRule } from "./FractalRule";
import Point from "../Point";
import Palette from "../Palette";

export class NoTwoPlacesAwayRule implements FractalRule {
  public play(
    vertices: Point[],
    currentPoint: Point,
    iterations: number,
    ctx: CanvasRenderingContext2D,
    palette: Palette,
    shouldAnimate: () => boolean,
  ): number {
    let i = 0;
    let prevIndex = Math.floor(Math.random() * vertices.length);
    const pointsPerFrame = 500;

    const animate = () => {
      if (i < iterations && shouldAnimate()) {
        for (let j = 0; j < pointsPerFrame; j++) {
          if (i < iterations) {
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
            currentPoint.draw(ctx, palette.getRandomColor());
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
