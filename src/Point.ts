class Point {
  x: number;
  y: number;
  radius: number;
  colour: string;

  constructor(x: number, y: number, colour: string) {
    this.x = x;
    this.y = y;
    this.radius = 0.2;
    this.colour = colour;
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fillStyle = this.colour;
    ctx.fill();
    ctx.closePath();
  }
}

export default Point;
