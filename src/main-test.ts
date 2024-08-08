import onRandomRecipe from "./functions-test/onRandomRecipe";
// import resetElement from "./functions-test/resetElements";
import { fetchData } from "./functions-test/fetchData";
import { RecipeDataModel } from "./functions-test/recipeDataModel";

const API_URL = "https://www.themealdb.com/api/json/v1/1/random.php";

const displayFetchedData = async (): Promise<void> => {
  try {
    const recipe: RecipeDataModel = await fetchData(API_URL);
    console.log(recipe);
    onRandomRecipe(recipe);
    // console.log(onRandomRecipe(recipe));
    // Process and display the recipe data
  } catch (error) {
    console.error("Error fetching recipe:", error);
  }
};

const button = document.getElementById("getRecipeBtn") as HTMLButtonElement;

button?.addEventListener("click", displayFetchedData);
// const button = document.getElementById("getRecipeBtn");
// button.addEventListener("click", displayFetchedData);

// const resetButton = document.getElementById("resetButton");
// resetButton.addEventListener("click", resetElement);
