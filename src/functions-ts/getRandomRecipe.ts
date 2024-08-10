import { RecipeDataModel } from "./recipeDataModel";

const getRandomRecipe = (recipeData: RecipeDataModel): void => {
  if (recipeData) {
    const { strMeal, strMealThumb } = recipeData.meals[0];

    const title: HTMLElement = document.querySelector(
      ".recipe-title"
    ) as HTMLElement;

    const recipeInstructionTitle: HTMLElement = document.querySelector(
      ".recipe-instruction-title"
    ) as HTMLElement;
    const recipeButton = document.getElementById(
      "getRecipeBtn"
    ) as HTMLButtonElement;
    const image: HTMLImageElement = document.querySelector(
      ".recipe-image"
    ) as HTMLImageElement;
    const resetButton: HTMLButtonElement = document.getElementById(
      "resetButton"
    ) as HTMLButtonElement;

    title.textContent = strMeal;

    image.style.display = "block";
    image.src = strMealThumb;
    image.alt = "Recipe Image";

    recipeInstructionTitle.style.display = "block";
    recipeButton.style.display = "none";
    resetButton.style.display = "block";
  } else {
    console.error("No meals found in the recipe data.");
  }
};
export default getRandomRecipe;
