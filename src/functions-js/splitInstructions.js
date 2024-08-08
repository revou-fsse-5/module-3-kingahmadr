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

export default splitInstructions;
