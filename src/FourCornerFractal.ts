import Point from "./Point";
import Palette from "./Palette";
import { FractalRule } from "./rules/FractalRule";

export class FourCornerFractal {
  protected vertices: Point[] = [];
  protected currentPoint: Point;
  private rule: FractalRule;
  private ctx: CanvasRenderingContext2D;
  private palette: Palette;
  private shouldAnimate: boolean = true;

  constructor(
    initialPoint: Point,
    rule: FractalRule,
    ctx: CanvasRenderingContext2D,
    palette: Palette,
  ) {
    this.currentPoint = initialPoint;
    this.rule = rule;
    this.ctx = ctx;
    this.palette = palette;
    this.defineVertices();
  }

  protected defineVertices(): void {
    const palette = new Palette();
    this.vertices = [
      new Point(0, 0, palette.getRandomColor()),
      new Point(0, 600, palette.getRandomColor()),
      new Point(800, 600, palette.getRandomColor()),
      new Point(800, 0, palette.getRandomColor()),
    ];
  }

  public setRule(rule: FractalRule): void {
    this.rule = rule;
  }

  public stopAnimation() {
    this.shouldAnimate = false;
  }

  public play(iterations: number): number {
    this.shouldAnimate = true;
    // The class delegates the play logic to the current rule object.
    return this.rule.play(
      this.vertices,
      this.currentPoint,
      iterations,
      this.ctx,
      this.palette,
      () => this.shouldAnimate,
    );
  }
}
