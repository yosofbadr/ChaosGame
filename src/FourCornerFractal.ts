import Point from "./Point";
import Palette from "./Palette";
import { FractalRule } from "./rules/FractalRule";

export class FourCornerFractal {
  protected vertices: Point[] = [];
  protected currentPoint: Point;
  private rule: FractalRule;

  constructor(initialPoint: Point, rule: FractalRule) {
    this.currentPoint = initialPoint;
    this.rule = rule;
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

  public play(iterations: number): Point[] {
    // The class delegates the play logic to the current rule object.
    return this.rule.play(this.vertices, this.currentPoint, iterations);
  }
}
