import Point from "./point";
import Palette from "./palette";

const canvas = document.getElementById("ChaosGameCanvas") as HTMLCanvasElement;
const ctx = canvas.getContext("2d");

canvas.width = 800;
canvas.height = 600;

const palette = new Palette();

const paletteSelectorContainer = document.getElementById(
  "palette-selector-container",
);

palette.palettes.forEach((p, index) => {
  const paletteDiv = document.createElement("div");
  paletteDiv.classList.add("palette-option");
  paletteDiv.dataset.paletteIndex = index.toString();

  p.forEach((color) => {
    const colorSwatch = document.createElement("div");
    colorSwatch.classList.add("color-swatch");
    colorSwatch.style.backgroundColor = color;
    paletteDiv.appendChild(colorSwatch);
  });

  paletteDiv.addEventListener("click", () => {
    palette.setCurrentPalette(index);
  });

  paletteSelectorContainer?.appendChild(paletteDiv);
});

const vertices: [Point, string][] = [
  [
    new Point(canvas.width / 2, 50, palette.getRandomColor()),
    palette.getRandomColor(),
  ],
  [
    new Point(50, canvas.height - 50, palette.getRandomColor()),
    palette.getRandomColor(),
  ],
  [
    new Point(canvas.width - 50, canvas.height - 50, palette.getRandomColor()),
    palette.getRandomColor(),
  ],
];

let currentPoint = new Point(
  canvas.width / 2,
  canvas.height / 2,
  palette.getRandomColor(),
);

function getRandomVertex() {
  return vertices[Math.floor(Math.random() * vertices.length)];
}

const points: Point[] = [];

for (let i = 0; i < 100000; i++) {
  const randomVertex = getRandomVertex();
  currentPoint.x = (currentPoint.x + randomVertex[0].x) / 2;
  currentPoint.y = (currentPoint.y + randomVertex[0].y) / 2;
  points.push(new Point(currentPoint.x, currentPoint.y, randomVertex[1]));
}

function animate() {
  points.forEach((point: Point) => {
    point.draw(ctx!);
  });
  requestAnimationFrame(animate);
}

animate();
