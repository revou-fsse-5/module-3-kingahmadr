import { clearData } from "./fetchData";
const resetElement = () => {
  const resetbutton = document.getElementById(
    "resetButton"
  ) as HTMLButtonElement;
  const tableBody = document.getElementById("table-body") as HTMLElement;
  const tableContainer = document.getElementById("myTable") as HTMLTableElement;
  const recipeButton = document.getElementById(
    "getRecipeBtn"
  ) as HTMLButtonElement;
  const title = document.querySelector(".recipe-title") as HTMLElement;
  const instructions = document.querySelector(
    ".recipe-instructions"
  ) as HTMLElement;
  const recipeInstructionTitle = document.querySelector(
    ".recipe-instruction-title"
  ) as HTMLElement;
  const image = document.querySelector(".recipe-image") as HTMLImageElement;

  tableBody.innerHTML = "";
  title.innerHTML = "";
  instructions.innerHTML = "";
  recipeInstructionTitle.style.display = "none";
  image.style.display = "none";
  image.src = "";
  image.alt = "";

  tableContainer.style.display = "none";
  recipeButton.style.display = "inline-block";
  resetbutton.style.display = "none";

  clearData();
};
export default resetElement;
