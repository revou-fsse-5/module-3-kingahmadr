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
// End of testing function
export default showRecipeInfo;
