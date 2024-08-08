import splitInstructions from "./splitInstructions";
import renderTable from "./renderTable";
import { RecipeDataModel } from "./recipeDataModel";

const getRandomRecipe = (recipeData: RecipeDataModel): RecipeDataModel => {
  if (recipeData) {
    const { strMeal, strMealThumb } = recipeData.meals[0];
    const title = document.querySelector(".recipe-title") as HTMLElement;

    // const instructions = document.querySelector(".recipe-instructions");
    const recipeInstructionTitle = document.querySelector(
      ".recipe-instruction-title"
    ) as HTMLElement;
    const recipeButton = document.getElementById(
      "getRecipeBtn"
    ) as HTMLButtonElement;
    const image = document.querySelector(".recipe-image") as HTMLImageElement;
    const resetButton = document.getElementById(
      "resetButton"
    ) as HTMLButtonElement;

    title.textContent = strMeal;

    // instructions.textContent = strInstructions;
    splitInstructions(recipeData);

    image.style.display = "block";
    image.src = strMealThumb;
    image.alt = "Recipe Image";

    renderTable(recipeData);
    recipeInstructionTitle.style.display = "block";
    recipeButton.style.display = "none";
    resetButton.style.display = "block";
  } else {
    console.error("No meals found in the recipe data.");
  }

  return recipeData;
};
export default getRandomRecipe;
