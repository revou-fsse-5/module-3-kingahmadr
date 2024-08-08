import { RecipeDataModel, RecipeModel } from "./recipeDataModel";

const splitInstructions = (recipeData: RecipeDataModel): RecipeDataModel => {
  let instructionData: string = recipeData.meals[0][`strInstructions`];
  const regex: RegExp = /(?<=\.)\s+(?=[A-Z])/g;
  const instructionArray: string[] = instructionData.split(regex);
  const instructionsList = document.querySelector(
    ".recipe-instructions"
  ) as HTMLElement | null;

  // Clear any existing instructions in the list
  if (instructionsList) {
    instructionsList.innerHTML = "";

    instructionArray.forEach((instruction) => {
      const li = document.createElement("li");
      li.textContent = instruction.trim();
      instructionsList.appendChild(li);
    });
  }

  return recipeData;
};

export default splitInstructions;
