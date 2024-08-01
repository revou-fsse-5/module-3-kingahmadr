import splitInstructions from "./splitInstructions";
import renderTable from "./renderTable";

const onRandomRecipe = (recipeData) => {
  const { strMeal, strMealThumb } = recipeData.meals[0];
  const title = document.querySelector(".recipe-title");
  // const instructions = document.querySelector(".recipe-instructions");
  const recipeInstructionTitle = document.querySelector(
    ".recipe-instruction-title"
  );
  const recipeButton = document.getElementById("getRecipeBtn");
  const image = document.querySelector(".recipe-image");
  const resetButton = document.getElementById("resetButton");

  title.textContent = strMeal;
  // instructions.textContent = strInstructions;
  splitInstructions(recipeData);
  image.style = "display: block";
  image.src = strMealThumb;
  image.alt = "Recipe Image";

  renderTable(recipeData);

  recipeInstructionTitle.style = "display: block";
  recipeButton.style.display = "none";
  resetButton.style.display = "block";
};
export default onRandomRecipe;
