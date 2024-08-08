import { clearData } from "./fetchData";
const resetElement = (): void => {
  const resetbutton: HTMLButtonElement = document.getElementById(
    "resetButton"
  ) as HTMLButtonElement;
  const tableBody: HTMLElement = document.getElementById(
    "table-body"
  ) as HTMLElement;
  const tableContainer: HTMLTableElement = document.getElementById(
    "myTable"
  ) as HTMLTableElement;
  const recipeButton: HTMLButtonElement = document.getElementById(
    "getRecipeBtn"
  ) as HTMLButtonElement;
  const title: HTMLElement = document.querySelector(
    ".recipe-title"
  ) as HTMLElement;
  const instructions: HTMLElement = document.querySelector(
    ".recipe-instructions"
  ) as HTMLElement;
  const recipeInstructionTitle: HTMLElement = document.querySelector(
    ".recipe-instruction-title"
  ) as HTMLElement;
  const image: HTMLImageElement = document.querySelector(
    ".recipe-image"
  ) as HTMLImageElement;

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
