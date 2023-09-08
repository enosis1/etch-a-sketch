// Create a 16 x 16 grid

const gridContainer = document.querySelector(".grid-container");

for (let i = 0; i < 16; i++) {
  for (let j = 0; j < 16; j++) {
    const grid = document.createElement("div");
    gridContainer.appendChild(grid);
    grid.style.cssText = "border: 1px solid black; height: 25px; width: 25px";  
    grid.classList.toggle('grid')
  }
}
