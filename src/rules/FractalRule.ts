import Point from "../Point";

export interface FractalRule {
  play(vertices: Point[], currentPoint: Point, iterations: number): Point[];
}
