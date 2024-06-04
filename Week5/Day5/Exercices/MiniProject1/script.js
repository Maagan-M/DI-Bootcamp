const colorPalette = document.getElementById("color-palette");
const pixelBoard = document.getElementById("pixel-board");
let chosenColor = "#000";
let isDrawing = false;

// Function to create the color palette
function createColorPalette() {
  const colors = [
    "#000",
    "#fff",
    "#f00",
    "#ff0",
    "#0f0",
    "#0ff",
    "#f0f",
    "#00f",
    "#ffa",
    "#a0f",
  ];

  colors.forEach((color) => {
    const colorItem = document.createElement("div");
    colorItem.classList.add("color-item");
    colorItem.style.backgroundColor = color;
    colorItem.addEventListener("click", () => setChosenColor(color));
    colorPalette.appendChild(colorItem);
  });
}

// Function to set the chosen color
function setChosenColor(color) {
  chosenColor = color;
}

// Function to create the pixel board
function createPixelBoard() {
  for (let i = 0; i < 30 * 20; i++) {
    const pixelItem = document.createElement("div");
    pixelItem.classList.add("pixel-item");
    pixelItem.addEventListener("mousedown", () => startDrawing(pixelItem));
    pixelItem.addEventListener("mouseover", () => draw(pixelItem));
    pixelItem.addEventListener("mouseup", () => stopDrawing());
    pixelBoard.appendChild(pixelItem);
  }
}

// Function to start drawing
function startDrawing(pixelItem) {
  isDrawing = true;
  pixelItem.classList.add("active");
  draw(pixelItem);
}

// Function to stop drawing
function stopDrawing() {
  isDrawing = false;
  const activePixel = document.querySelector(".pixel-item.active");
  if (activePixel) {
    activePixel.classList.remove("active");
  }
}

// Function to draw on the pixel board
function draw(pixelItem) {
  if (isDrawing) {
    pixelItem.style.backgroundColor = chosenColor;
  }
}

// Function to clear the pixel board
function clearPixelBoard() {
    const pixelItems = pixelBoard.querySelectorAll(".pixel-item");
    pixelItems.forEach((pixelItem) => {
      pixelItem.style.backgroundColor = "#ccc";
    });
}

const clearButton = document.getElementById("clear-button");
clearButton.addEventListener("click", clearPixelBoard);

createColorPalette();
createPixelBoard();
