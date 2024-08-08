import splitInstructions from "./splitInstructions";
import renderTable from "./renderTable";
import { RecipeDataModel } from "./recipeDataModel";

const onRandomRecipe = (recipeData: RecipeDataModel): RecipeDataModel => {
  if (recipeData.meals && recipeData.meals.length > 0) {
    let { strMeal, strMealThumb } = recipeData.meals[0];

    console.log(strMeal);
    const title = document.querySelector(".recipe-title") as HTMLElement | null;

    // const instructions = document.querySelector(".recipe-instructions");
    const recipeInstructionTitle = document.querySelector(
      ".recipe-instruction-title"
    ) as HTMLElement | null;
    const recipeButton = document.getElementById(
      "getRecipeBtn"
    ) as HTMLButtonElement | null;
    const image = document.querySelector(
      ".recipe-image"
    ) as HTMLImageElement | null;
    const resetButton = document.getElementById(
      "resetButton"
    ) as HTMLButtonElement | null;

    if (title) {
      title.textContent = strMeal;
    }

    // instructions.textContent = strInstructions;
    splitInstructions(recipeData);
    if (image) {
      image.style.display = "block";
      image.src = strMealThumb;
      image.alt = "Recipe Image";
    }

    renderTable(recipeData);
    if (recipeInstructionTitle) {
      recipeInstructionTitle.style.display = "block";
    }

    if (recipeButton) {
      recipeButton.style.display = "none";
    }
    if (resetButton) {
      resetButton.style.display = "block";
    }
  } else {
    console.error("No meals found in the recipe data.");
  }

  return recipeData;
};
export default onRandomRecipe;
