import { FractalRule } from "./FractalRule";
import Point from "../Point";
import Palette from "../Palette";

export class NoNeighbourRepeatRule implements FractalRule {
  public play(
    vertices: Point[],
    currentPoint: Point,
    iterations: number,
    ctx: CanvasRenderingContext2D,
    palette: Palette,
    shouldAnimate: () => boolean,
  ): number {
    let i = 0;
    let prevIndex1 = -1;
    let prevIndex2 = -1;
    const pointsPerFrame = 500;

    const animate = () => {
      if (i < iterations && shouldAnimate()) {
        for (let j = 0; j < pointsPerFrame; j++) {
          if (i < iterations) {
            let currentIndex = Math.floor(Math.random() * vertices.length);

            if (prevIndex1 != -1 && prevIndex1 == prevIndex2) {
              currentIndex =
                Math.random() < 0.5
                  ? prevIndex1
                  : (prevIndex2 + 2) % vertices.length;
            }

            prevIndex2 = prevIndex1;
            prevIndex1 = currentIndex;

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
