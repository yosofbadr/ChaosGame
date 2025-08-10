import Point from "./Point";
import Palette from "./Palette";
import { SierpinskiTriangle } from "./SierpinskiTriangle";
import { SierpinskiCarpet } from "./SierpinskiCarpet";
import { FourCornerFractal } from "./FourCornerFractal";
import { NoTwoPlacesAwayRule } from "./rules/NoTwoPlacesAwayRule";
import { NoNeighbourRepeatRule } from "./rules/NoNeighbourRepeatRule";

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

const sierpinskiTriangle = new SierpinskiTriangle(
  new Point(400, 300, "#000000"),
);

const sierpinskiTrianglePoints = sierpinskiTriangle.play(100000);

const sierpinskiCarpet = new SierpinskiCarpet(new Point(400, 300, "#000000"));

const sierpinskiCarpetPoints = sierpinskiCarpet.play(1000000);

const fourCornerFractal = new FourCornerFractal(
  new Point(400, 300, "#000000"),
  new NoTwoPlacesAwayRule(),
);

const fourCornerFractalPoints = fourCornerFractal.play(1000000);

const fourCornerFractal2 = new FourCornerFractal(
  new Point(400, 300, "#000000"),
  new NoNeighbourRepeatRule(),
);

const fourCornerFractalPoints2 = fourCornerFractal2.play(1000000);

function animate() {
  // sierpinskiTrianglePoints.forEach((point: Point) => {
  //   point.draw(ctx!);
  // });
  //

  // sierpinskiCarpetPoints.forEach((point: Point) => {
  //   point.draw(ctx!);
  // });

  // fourCornerFractalPoints.forEach((point: Point) => {
  //   point.draw(ctx!);
  // });

  fourCornerFractalPoints2.forEach((point: Point) => {
    point.draw(ctx!);
  });
  requestAnimationFrame(animate);
}

animate();
