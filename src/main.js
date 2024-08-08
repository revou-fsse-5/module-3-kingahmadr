import onRandomRecipe from "./functions-js/onRandomRecipe";
import resetElement from "./functions-js/resetElements";
import fetchData from "./functions-js/fetchData";

const RANDOM_RECIPE_URL = "https://www.themealdb.com/api/json/v1/1/random.php";
const displayFetchedData = async () => {
  try {
    const data = await fetchData(RANDOM_RECIPE_URL);
    console.log(data);
    onRandomRecipe(data);
  } catch (error) {
    console.error("Error fetching recipe:", error);
  }
};

const button = document.getElementById("getRecipeBtn");
button.addEventListener("click", displayFetchedData);

const resetButton = document.getElementById("resetButton");
resetButton.addEventListener("click", resetElement);
