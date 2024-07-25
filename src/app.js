const recipe = {
  title: "Spaghetti Carbonara",
  instructions: [
    "Cook spaghetti according to package instructions.",
    "In a separate pan, cook pancetta until crispy.",
    "In a bowl, whisk eggs and grated cheese.",
    "Combine spaghetti, pancetta, and egg mixture, stirring quickly.",
    "Serve immediately with additional cheese and black pepper.",
  ],

  image: "https://www.themealdb.com/images/media/meals/llcbn01574260722.jpg",
};

function onRandomRecipe() {
  //   e.preventDefault();
  const title = document.querySelector(".recipe-title");
  const instructions = document.querySelector(".recipe-instructions");
  const recipeInstructionTitle = document.querySelector(
    ".recipe-instruction-title"
  );
  const recipeButton = document.getElementById("getRecipeBtn");
  const image = document.querySelector(".recipe-image");

  const resetButton = document.getElementById("resetRecipeButton");
  title.textContent = recipe.title;

  recipeInstructionTitle.style = "display: block";
  recipeButton.style.display = "none";

  // Clear previous instructions if any
  instructions.innerHTML = "";

  // Create and append new list items

  recipe.instructions.map((instruction) => {
    const li = document.createElement("li");
    li.textContent = instruction;
    instructions.appendChild(li);
  });

  image.style = "display: block";
  image.src = recipe.image;
  image.alt = "Recipe Image";
  resetButton.textContent = "Reset Button";
  resetButton.style = "display: block";
}
function resetRecipe() {
  //   e.preventDefault();
  const title = document.querySelector(".recipe-title");
  const instructions = document.querySelector(".recipe-instructions");
  const image = document.querySelector(".recipe-image");
  const recipeButton = document.getElementById("getRecipeBtn");
  const recipeInstructionTitle = document.querySelector(
    ".recipe-instruction-title"
  );

  title.textContent = "";
  recipeInstructionTitle.style = "display: none";
  instructions.textContent = "";
  image.src = "";
  image.alt = "";
  image.style = "display: none";
  resetButton.style = "display: none";
  recipeButton.style.display = "inline-block";
}

const button = document.getElementById("getRecipeBtn");
button.addEventListener("click", onRandomRecipe);

const resetButton = document.getElementById("resetRecipeButton");
resetButton.addEventListener("click", resetRecipe);
