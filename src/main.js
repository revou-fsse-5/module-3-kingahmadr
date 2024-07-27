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

const renderTable = (recipeData) => {
  const tableBody = document.getElementById("table-body");
  const tableContainer = document.getElementById("myTable");

  // Clear any existing rows in the table body
  tableBody.innerHTML = "";
  tableContainer.style.display = "table";

  // Loop through the data to create table rows
  for (let i = 1; i <= 20; i++) {
    const ingredient = recipeData.meals[0][`strIngredient${i}`];
    const measurement = recipeData.meals[0][`strMeasure${i}`];

    if (ingredient) {
      const row = document.createElement("tr");
      const ingredientCell = document.createElement("td");
      const measurementCell = document.createElement("td");

      ingredientCell.textContent = ingredient;
      measurementCell.textContent = measurement;

      row.appendChild(ingredientCell);
      row.appendChild(measurementCell);
      tableBody.appendChild(row);
    }
  }
};

const splitInstructions = (recipeData) => {
  let instructionData = recipeData.meals[0][`strInstructions`];
  const regex = /(?<=\.)\s+(?=[A-Z])/g;
  const instructionArray = instructionData.split(regex);
  const instructionsList = document.querySelector(".recipe-instructions");

  // Clear any existing instructions in the list
  instructionsList.innerHTML = "";

  instructionArray.forEach((instruction) => {
    const li = document.createElement("li");
    li.textContent = instruction.trim();
    instructionsList.appendChild(li);
  });
};

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

// Testing function
const showRecipeInfo = (recipeData) => {
  // const { strMeal, strInstructions, strMealThumb } = recipeData.meals[0];
  // const { strMeal, strInstructions, strMealThumb } = recipeData.meals[0];
  // console.log(`Title: ${strMeal}`);
  // console.log(`Instructions: ${strInstructions}`);
  // console.log(`Image: ${strMealThumb}`);
  for (let i = 1; i < 20; i++) {
    const ingredient = recipeData.meals[0][`strIngredient${i}`];
    // console.log(ingredient); // or perform any other operation with the ingredient

    const measurement = recipeData.meals[0][`strMeasure${i}`];
    // console.log(measurement);

    if (ingredient) {
      console.log(ingredient);
    }
    if (measurement) {
      console.log(measurement);
    }
  }
};

// Function when the random recipe button is clicked
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

// Function to run the promise of fetched data
const displayFetchedData = () =>
  fetchData(RANDOM_RECIPE_URL)
    .then((data) => {
      onRandomRecipe(data);
      // renderTable(data);
    })
    .catch((error) => console.error("Error fetching recipe:", error));

const button = document.getElementById("getRecipeBtn");
button.addEventListener("click", displayFetchedData);

const resetButton = document.getElementById("resetButton");
resetButton.addEventListener("click", resetElement);
