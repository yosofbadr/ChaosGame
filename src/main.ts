import Point from "./Point";
import Palette from "./Palette";
import { SierpinskiTriangle } from "./SierpinskiTriangle";
import { SierpinskiCarpet } from "./SierpinskiCarpet";
import { FourCornerFractal } from "./FourCornerFractal";
import { NoTwoPlacesAwayRule } from "./rules/NoTwoPlacesAwayRule";
import { NoNeighbourRepeatRule } from "./rules/NoNeighbourRepeatRule";
import { ChaosGame } from "./ChaosGame";
import { BarnsleyFern } from "./BarnsleyFern";

const canvas = document.getElementById("ChaosGameCanvas") as HTMLCanvasElement;
const ctx = canvas.getContext("2d")!;

canvas.width = 800;
canvas.height = 600;

const palette = new Palette();

const paletteSelectorContainer = document.getElementById(
  "palette-selector-container",
)!;

const fractalSelectorContainer = document.getElementById(
  "fractal-selector-container",
)!;

let chaosGame: ChaosGame | FourCornerFractal;
let animationFrameId: number | null = null;

function selectFractal(
  fractal: ChaosGame | FourCornerFractal,
  iterations: number,
) {
  if (chaosGame) {
    chaosGame.stopAnimation();
  }
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  chaosGame = fractal;
  animationFrameId = chaosGame.play(iterations);
}

function createPaletteSelector() {
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
      const selectedPalette = document.querySelector(
        ".palette-option.selected",
      );
      if (selectedPalette) {
        selectedPalette.classList.remove("selected");
      }
      paletteDiv.classList.add("selected");
    });

    paletteSelectorContainer.appendChild(paletteDiv);
  });
}

function createFractalSelector() {
  const fractalOptions = {
    "sierpinski-triangle": {
      fractal: () =>
        new SierpinskiTriangle(new Point(400, 100, "#000000"), ctx, palette),
      iterations: 5000000,
    },
    "sierpinski-carpet": {
      fractal: () =>
        new SierpinskiCarpet(new Point(400, 300, "#000000"), ctx, palette),
      iterations: 5000000,
    },
    "four-corner-fractal": {
      fractal: () =>
        new FourCornerFractal(
          new Point(400, 300, "#000000"),
          new NoTwoPlacesAwayRule(),
          ctx,
          palette,
        ),
      iterations: 5000000,
    },
    "vicsek-fractal": {
      fractal: () =>
        new FourCornerFractal(
          new Point(400, 300, "#000000"),
          new NoNeighbourRepeatRule(),
          ctx,
          palette,
        ),
      iterations: 5000000,
    },
    "barnsley-fern": {
      fractal: () => new BarnsleyFern(new Point(0, 0, "#000000"), ctx, palette),
      iterations: 5000000,
    },
  };

  Array.from(fractalSelectorContainer.children).forEach((button) => {
    button.addEventListener("click", () => {
      const fractalName = button.getAttribute("data-fractal")!;
      const selectedOption =
        fractalOptions[fractalName as keyof typeof fractalOptions];
      selectFractal(selectedOption.fractal(), selectedOption.iterations);
      const selectedButton = document.querySelector(".fractal-option.selected");
      if (selectedButton) {
        selectedButton.classList.remove("selected");
      }
      button.classList.add("selected");
    });
  });
}

function initialize() {
  createPaletteSelector();
  createFractalSelector();

  (paletteSelectorContainer.children[0] as HTMLElement).click();
  (fractalSelectorContainer.children[0] as HTMLElement).click();
}

initialize();

