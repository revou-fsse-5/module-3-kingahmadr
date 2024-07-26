const RANDOM_RECIPE_URL = "https://www.themealdb.com/api/json/v1/1/random.php";

// fetch data function
const fetchData = async (url) => {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  const data = await response.json();
  return data;
};

// function to show the recipe info with the deconstracted array
const showRecipeInfo = (recipeData) => {
  const { strMeal, strInstructions, strMealThumb } = recipeData.meals[0];
  console.log(`Title: ${strMeal}`);
  console.log(`Instructions: ${strInstructions}`);
  console.log(`Image: ${strMealThumb}`);
};

// Function when the random recipe button is clicked
const onRandomRecipe = (recipeData) => {
  const { strMeal, strInstructions, strMealThumb } = recipeData.meals[0];
  const title = document.querySelector(".recipe-title");
  const instructions = document.querySelector(".recipe-instructions");
  const recipeInstructionTitle = document.querySelector(
    ".recipe-instruction-title"
  );
  const recipeButton = document.getElementById("getRecipeBtn");
  const image = document.querySelector(".recipe-image");

  title.textContent = strMeal;
  instructions.textContent = strInstructions;
  image.style = "display: block";
  image.src = strMealThumb;
  image.alt = "Recipe Image";

  recipeInstructionTitle.style = "display: block";
  recipeButton.style.display = "none";
};

// Function to run the promise of fetched data
const displayFetchedData = () =>
  fetchData(RANDOM_RECIPE_URL)
    .then((data) => onRandomRecipe(data))
    .catch((error) => console.error("Error fetching recipe:", error));

const button = document.getElementById("getRecipeBtn");
button.addEventListener("click", displayFetchedData);
