const resetElement = () => {
  const resetbutton = document.getElementById("resetButton");
  const tableBody = document.getElementById("table-body");
  const tableContainer = document.getElementById("myTable");
  const recipeButton = document.getElementById("getRecipeBtn");
  const title = document.querySelector(".recipe-title");
  const instructions = document.querySelector(".recipe-instructions");
  const recipeInstructionTitle = document.querySelector(
    ".recipe-instruction-title"
  );
  const image = document.querySelector(".recipe-image");

  tableBody.innerHTML = "";
  title.innerHTML = "";
  instructions.innerHTML = "";
  recipeInstructionTitle.style.display = "none";
  image.style = "display: none";
  image.src = "";
  image.alt = "";

  tableContainer.style.display = "none";
  recipeButton.style.display = "inline-block";
  resetbutton.style.display = "none";
};
export default resetElement;
