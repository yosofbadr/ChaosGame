import Palette from "../Palette";
import Point from "../Point";

export interface FractalRule {
  play(
    vertices: Point[],
    currentPoint: Point,
    iterations: number,
    ctx: CanvasRenderingContext2D,
    palette: Palette,
    shouldAnimate: () => boolean,
  ): number;
}
