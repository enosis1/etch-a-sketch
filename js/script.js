// Create a 16 x 16 grid

const grid = document.querySelector(".grid");
const btn = document.querySelector("button");
btn.addEventListener("click", makeGrid);

function makeGrid() {
  clearGrid();
  size = +prompt("How big should the grid be?");
  if (size > 2 && size < 100) {
    for (let i = 0; i < size; i++) {
      for (let j = 0; j < size; j++) {
        let cell = document.createElement("div");
        grid.appendChild(cell);
        cell.classList.toggle("cell");
        cell.style.width = `calc(100% / ${size} - ${2 * 1}px`;
        cell.style.height = `calc(100% / ${size} - ${2 * 1}px`;
        cell.addEventListener("mouseover", () => {
          let red = Math.floor(Math.random() * 256);
          let green = Math.floor(Math.random() * 256);
          let blue = Math.floor(Math.random() * 256);
          cell.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
        });
      }
    }
  }
}

function clearGrid() {
  const cells = document.querySelectorAll(".cell");
  console.log(cells);
  cells.forEach((cell) => {
    cell.remove();
  });
}
