import getRandomRecipe from "./functions-ts/getRandomRecipe";
import splitInstructions from "./functions-ts/splitInstructions";
import renderTable from "./functions-ts/renderTable";
import resetElement from "./functions-ts/resetElements";
import { fetchData } from "./functions-ts/fetchData";
import { RecipeDataModel } from "./functions-ts/recipeDataModel";

const API_URL = "https://www.themealdb.com/api/json/v1/1/random.php";

const displayFetchedData = async (): Promise<void> => {
  try {
    const recipe: RecipeDataModel = await fetchData(API_URL);
    getRandomRecipe(recipe);
    splitInstructions(recipe);
    renderTable(recipe);

    // Process and display the recipe data
  } catch (error) {
    console.error("Error fetching recipe:", error);
  }
};

const button = document.getElementById("getRecipeBtn") as HTMLButtonElement;

button?.addEventListener("click", displayFetchedData);

const resetButton = document.getElementById("resetButton") as HTMLButtonElement;
resetButton?.addEventListener("click", resetElement);
