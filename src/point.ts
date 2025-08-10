class Point {
  x: number;
  y: number;
  radius: number;
  colour: string;

  constructor(x: number, y: number, colour: string) {
    this.x = x;
    this.y = y;
    this.radius = 0.5;
    this.colour = colour;
  }

  draw(ctx: CanvasRenderingContext2D, color: string) {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fillStyle = color;
    ctx.fill();
    ctx.closePath();
  }
}

export default Point;
